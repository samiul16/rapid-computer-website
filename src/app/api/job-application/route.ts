import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const experience = formData.get("experience") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const jobId = formData.get("jobId") as string;
    const cvFile = formData.get("cv") as File;

    // Validate required fields
    if (!fullName || !email || !phone || !experience || !jobTitle || !cvFile) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const cvBuffer = Buffer.from(await cvFile.arrayBuffer());

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "info@arco.com",
      subject: `New Job Application: ${jobTitle} - ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #0ea5e9;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              background-color: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .field {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #eee;
            }
            .label {
              font-weight: bold;
              color: #0ea5e9;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              word-wrap: break-word;
            }
            .job-title {
              background-color: #f0f9ff;
              padding: 15px;
              border-left: 4px solid #0ea5e9;
              margin-bottom: 20px;
              font-size: 18px;
              font-weight: bold;
              color: #0369a1;
            }
            .cover-letter {
              background-color: #f0f9ff;
              padding: 15px;
              border-left: 4px solid #0ea5e9;
              margin-top: 10px;
            }
            .attachment-note {
              background-color: #fef3c7;
              padding: 10px;
              border-left: 4px solid #f59e0b;
              margin-top: 20px;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Job Application Received</h1>
            </div>
            <div class="content">
              <div class="job-title">
                Position Applied: ${jobTitle} (Job ID: ${jobId})
              </div>

              <div class="field">
                <span class="label">Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone}</span>
              </div>
              
              <div class="field">
                <span class="label">Years of Experience:</span>
                <span class="value">${experience}</span>
              </div>
              
              ${
                coverLetter
                  ? `
              <div class="field">
                <span class="label">Cover Letter:</span>
                <div class="cover-letter">
                  ${coverLetter.replace(/\n/g, "<br>")}
                </div>
              </div>
              `
                  : ""
              }

              <div class="attachment-note">
                <strong>📎 CV/Resume Attached:</strong> ${cvFile.name} (${(
        cvFile.size /
        1024 /
        1024
      ).toFixed(2)} MB)
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 12px;">
                <p>This application was submitted through the career page on your website.</p>
                <p>Date: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Job Application

Position: ${jobTitle} (Job ID: ${jobId})
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Experience: ${experience}

${coverLetter ? `Cover Letter:\n${coverLetter}\n` : ""}

CV/Resume attached: ${cvFile.name}

---
Date: ${new Date().toLocaleString()}
      `,
      attachments: [
        {
          filename: cvFile.name,
          content: cvBuffer,
          contentType: cvFile.type,
        },
      ],
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting job application:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again later." },
      { status: 500 }
    );
  }
}
