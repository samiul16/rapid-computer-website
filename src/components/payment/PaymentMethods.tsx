import React from "react";

const PaymentMethods = () => {
  const methods = ["Cash on Delivery", "Bank Transfer", "Online Payment"];

  return (
    <div className="min-w-64 w-full p-6 bg-[#20B8FB0D] rounded-xl outline outline-1 outline-black/20 flex flex-col gap-6">
      <div className="text-neutral-900 font-bold text-lg">Payment Methods</div>
      <div className="flex flex-col gap-4">
        {methods.map((method) => (
          <div key={method} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full border border-[#26ADDF] bg-[#26ADDF]"></div>
            <div className="text-neutral-900 font-medium">{method}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethods;
