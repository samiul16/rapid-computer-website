import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log("Received manpower request");
    const body = await request.json();
    console.log("Received body:", body);

    const {
      clientName,
      nameOfProject,
      emailId,
      phoneNumber,
      designation,
      expectedStartDate,
      projectLocation,
      manpowerType,
      projectDuration,
    } = body;

    // Validate required fields
    if (
      !clientName ||
      !nameOfProject ||
      !emailId ||
      !phoneNumber ||
      !designation
    ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      );
    }

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
      to: "info@arcoeng.com", // Change to your email
      subject: `New Manpower Request: ${nameOfProject} - ${clientName}`,
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
              background-color: #7f1d1d;
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
              color: #7f1d1d;
              display: block;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
              word-wrap: break-word;
            }
            .project-title {
              background-color: #fef2f2;
              padding: 15px;
              border-left: 4px solid #7f1d1d;
              margin-bottom: 20px;
              font-size: 18px;
              font-weight: bold;
              color: #7f1d1d;
            }
            .info-box {
              background-color: #fef2f2;
              padding: 15px;
              border-left: 4px solid #7f1d1d;
              margin-top: 10px;
            }
            .highlight {
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
              <h1>New Manpower Request</h1>
              <p style="margin: 5px 0 0 0; font-size: 14px;">ARCO Engineering Limited - Man Power Application</p>
            </div>
            <div class="content">
              <div class="project-title">
                Project: ${nameOfProject}
              </div>

              <div class="field">
                <span class="label">Client Name:</span>
                <span class="value">${clientName}</span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${emailId}">${emailId}</a></span>
              </div>
              
              <div class="field">
                <span class="label">Phone Number:</span>
                <span class="value">${phoneNumber}</span>
              </div>
              
              <div class="field">
                <span class="label">Designation:</span>
                <span class="value">${designation}</span>
              </div>
              
              ${
                expectedStartDate
                  ? `
              <div class="field">
                <span class="label">Expected Start Date:</span>
                <span class="value">${expectedStartDate}</span>
              </div>
              `
                  : ""
              }
              
              ${
                projectLocation
                  ? `
              <div class="field">
                <span class="label">Project Location:</span>
                <span class="value">${projectLocation}</span>
              </div>
              `
                  : ""
              }
              
              ${
                manpowerType
                  ? `
              <div class="field">
                <span class="label">Type of Manpower Required:</span>
                <div class="info-box">
                  ${manpowerType}
                </div>
              </div>
              `
                  : ""
              }
              
              ${
                projectDuration
                  ? `
              <div class="field">
                <span class="label">Project Duration:</span>
                <span class="value">${projectDuration}</span>
              </div>
              `
                  : ""
              }

              <div class="highlight">
                <strong>📋 Request Type:</strong> Manpower Supply Application
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee; color: #666; font-size: 12px;">
                <p>This request was submitted through the Manpower Application Form on your website.</p>
                <p>Date: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Manpower Request

Project: ${nameOfProject}
Client Name: ${clientName}
Email: ${emailId}
Phone: ${phoneNumber}
Designation: ${designation}

${expectedStartDate ? `Expected Start Date: ${expectedStartDate}\n` : ""}
${projectLocation ? `Project Location: ${projectLocation}\n` : ""}
${manpowerType ? `Type of Manpower Required: ${manpowerType}\n` : ""}
${projectDuration ? `Project Duration: ${projectDuration}\n` : ""}

Request Type: Manpower Supply Application

---
Date: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Manpower request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting manpower request:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again later." },
      { status: 500 }
    );
  }
}
