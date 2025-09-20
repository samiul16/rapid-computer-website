// import React from "react";
// import CheckoutComponent from "@/components/Checkout";

// const CheckoutPage = () => <CheckoutComponent />;

// export default CheckoutPage;

import Breadcrumb from "@/components/common/Breadcrumb";
import CheckoutForm from "@/components/general/CheckoutForm";

export default function Checkout() {
  return (
    <main className="my-20 bg-slate-50">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Checkout",
            href: "/checkout",
            active: true,
          },
        ]}
      />
      <CheckoutForm />
    </main>
  );
}
