import React from "react";

const ProfileForm = () => {
  const InputField = ({
    label,
    placeholder,
    type = "text",
  }: {
    label: string;
    placeholder: string;
    type?: string;
  }) => (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-black font-bold">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>
  );

  return (
    <div className="w-full flex-1 p-6 bg-sky-400/5 rounded-xl shadow-lg backdrop-blur-xl flex flex-col gap-6">
      <div className="w-full text-sky-400 font-bold text-xl">Edit Your Profile</div>

     <div className="flex gap-6 w-full justify-between">
        <InputField label="First Name" placeholder="Md" />
        <InputField label="Last Name" placeholder="Rimel" />
      </div>

      <div className="flex gap-6 w-full justify-between">
        <InputField label="Email" placeholder="rimel1111@gmail.com" type="email" />
        <InputField label="Address" placeholder="Kingston, 5236, United States" />
      </div>

      <div className="flex flex-col gap-4">
        <InputField label="Current Password" placeholder="Current Password" type="password" />
        <InputField label="New Password" placeholder="New Password" type="password" />
        <InputField label="Confirm New Password" placeholder="Confirm New Password" type="password" />
      </div>

      <div className="flex gap-10 mt-4">
        <button className="text-black font-medium cursor-pointer">Cancel</button>
        <button className="px-12 py-4 bg-sky-400 rounded-full text-white font-bold flex justify-center items-center cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
