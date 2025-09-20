import React from "react";
import SidebarMenu from "@/components/accounts/SidebarMenu";
// import ProfileForm from "../components/payment/ProfileForm";
import AccountsMethods from "@/components/accounts/AccountsMethods";
import Breadcrumb from "@/components/common/Breadcrumb";
import AccountsForm from "@/components/accounts/AccountsForm";

const AccountsPage = () => {
  return (
    <section className="w-full py-16 px-4">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Accounts", href: "/accounts", active: true },
        ]}
      />

      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 font-sans">
        <div className="flex flex-col gap-6">
          <SidebarMenu />
          <AccountsMethods />
        </div>

        <div className="flex flex-col gap-6 md:col-span-2">
          {/* <ProfileForm /> */}
          <AccountsForm />
        </div>
      </div>
    </section>
  );
};

export default AccountsPage;
