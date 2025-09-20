import React from "react";

const SidebarMenu = () => {
  return (
    <div className="min-w-64 w-full p-4 bg-sky-400/5 rounded-xl outline outline-1 outline-black/20 backdrop-blur-md flex flex-col gap-6 hover:bg-sky-100 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="text-black font-bold text-base">Manage My Account</div>
        <div className="flex flex-col gap-2">
          <div className="text-sky-400 font-bold">My Profile</div>
          <div className="text-black opacity-50">Address Book</div>
          <div className="text-black opacity-50">My Payment Options</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-black font-bold">My Orders</div>
        <div className="flex flex-col gap-2">
          <div className="text-black opacity-50">My Returns</div>
          <div className="text-black opacity-50">My Cancellations</div>
        </div>
      </div>
      <div className="text-black font-bold">My WishList</div>
    </div>
  );
};

export default SidebarMenu;
