// import React from "react";
// import { TfiEmail } from "react-icons/tfi";
// import { MdOutlinePhoneInTalk } from "react-icons/md";
// import { SlLocationPin } from "react-icons/sl";

// // ---------------------- Floating Label Input ----------------------
// interface FloatingInputProps {
//   id: string;
//   type: string;
//   label: string;
//   required?: boolean;
//   rows?: number;
// }

// const FloatingInput = ({
//   id,
//   type,
//   label,
//   required,
//   rows,
// }: FloatingInputProps) => {
//   const isTextarea = type === "textarea";
//   const InputComponent = isTextarea ? "textarea" : "input";

//   return (
//     <div className="relative group">
//       <InputComponent
//         id={id}
//         type={isTextarea ? undefined : type}
//         rows={rows}
//         className="peer w-full px-4 pt-6 pb-2 bg-white rounded-xl border-2 border-gray-200 focus:border-blue-500 transition-all duration-300 text-gray-800 text-base font-medium placeholder-transparent outline-none resize-none hover:border-gray-300 focus:bg-white h-14"
//         placeholder={label}
//         {...(isTextarea && {
//           style: {
//             height: rows ? rows * 24 + 32 : "120px",
//             paddingTop: "24px",
//           },
//         })}
//       />
//       <label
//         htmlFor={id}
//         className="absolute left-4 top-4 text-gray-500 text-sm transition-all duration-300 pointer-events-none font-medium
//                    peer-placeholder-shown:text-base peer-placeholder-shown:top-4
//                    peer-focus:text-xs peer-focus:top-2 peer-focus:text-blue-600
//                    peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-gray-600"
//       >
//         {label} {required && <span className="text-sky-500">*</span>}
//       </label>
//     </div>
//   );
// };

// // ---------------------- Contact Form ----------------------
// const ContactForm = () => (
//   <div className="bg-gray-50 rounded-2xl p-8">
//     <div className="mb-8">
//       <h2 className="text-3xl font-bold text-gray-900 mb-2">GET IN TOUCH</h2>
//     </div>

//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <FloatingInput id="name" type="text" label="NAME" required />
//         <FloatingInput id="phone" type="tel" label="PHONE NUMBER" />
//       </div>

//       <FloatingInput id="email" type="email" label="EMAIL" required />

//       <FloatingInput
//         id="message"
//         type="textarea"
//         label="YOUR MESSAGE"
//         rows={4}
//       />

//       <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-full transition-colors duration-300 text-lg cursor-pointer">
//         SEND MESSAGE
//       </button>
//     </div>
//   </div>
// );

// // ---------------------- Contact Info Item ----------------------
// interface ContactInfoItemProps {
//   icon: React.ReactNode;
//   label: string;
//   value: string;
//   color: string;
// }

// const ContactInfoItem = ({
//   icon,
//   label,
//   value,
//   color,
// }: ContactInfoItemProps) => (
//   <div className="flex items-center gap-4 mb-6">
//     <div
//       className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white shadow-lg`}
//     >
//       {icon}
//     </div>
//     <div>
//       <h3 className="font-bold text-gray-900 text-lg mb-1">{label}</h3>
//       <p className="text-gray-600">{value}</p>
//     </div>
//   </div>
// );

// // ---------------------- Business Hours Item ----------------------
// interface BusinessHourProps {
//   day: string;
//   hours: string;
// }

// const BusinessHourItem = ({ day, hours }: BusinessHourProps) => (
//   <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
//     <span className="font-semibold text-gray-900 text-sm">{day}</span>
//     <span className="text-gray-600 text-sm">{hours}</span>
//   </div>
// );

// // ---------------------- Contact Information Section ----------------------
// const ContactInformation = () => (
//   <div className="space-y-8">
//     <div>
//       <h2 className="text-3xl font-bold text-gray-900 mb-8">
//         CONTACT INFORMATION
//       </h2>

//       <div className="space-y-2">
//         <ContactInfoItem
//           icon={<MdOutlinePhoneInTalk size={20} />}
//           label="PHONE"
//           value="773-365-1240"
//           color="bg-sky-500"
//         />

//         <ContactInfoItem
//           icon={<SlLocationPin size={20} />}
//           label="ADDRESS"
//           value="1425 N McLean Blvd, Elgin, IL"
//           color="bg-sky-500"
//         />

//         <ContactInfoItem
//           icon={<TfiEmail size={20} />}
//           label="EMAIL"
//           value="office@stopnotrans.com"
//           color="bg-sky-500"
//         />
//       </div>
//     </div>

//     <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
//       <h3 className="text-xl font-bold text-gray-900 mb-6">BUSINESS HOURS</h3>
//       <div className="space-y-1">
//         <BusinessHourItem day="MONDAY - FRIDAY" hours="9:00 am - 8:00 pm" />
//         <BusinessHourItem day="SATURDAY" hours="9:00 am - 6:00 pm" />
//         <BusinessHourItem day="SUNDAY" hours="9:00 am - 6:00 pm" />
//       </div>
//     </div>
//   </div>
// );

// // ---------------------- Main Page Component ----------------------
// const ContactPageSection = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 mb-6">CONTACT US</h1>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             If you have any questions, please feel free to get in touch with us
//             via phone, text, email, the form below, or even on social media!
//           </p>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           <ContactForm />
//           <ContactInformation />
//         </div>

//         {/* Map Section */}
//         <div className="bg-gray-50 rounded-2xl p-8">
//           <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.1234567890123!2d-88.3200000!3d42.0370000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAyJzEzLjIiTiA4OMKwMTknMTIuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
//               width="100%"
//               height="400"
//               loading="lazy"
//               allowFullScreen
//               className="w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPageSection;

import Remove from "@/components/remove";
import WorkSteps from "../WorkSteps";

const ContactPageSection = () => {
  return (
    <div>
      <Remove />
      <WorkSteps />
    </div>
  );
};

export default ContactPageSection;
