/* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import React, { useState } from "react";
// import PaymentMethods from "@/components/accounts/AccountsMethods";
// import OrderSummary from "@/components/common/OrderSummary";
// import { useRouter } from "next/navigation";

// const CheckoutPage = () => {
//   const [shipping, setShipping] = useState("express");
//   const [focusedInput, setFocusedInput] = useState<string | null>(null);

//   const router = useRouter();

//   const handleCheckout = () => {
//     router.push("/payment");
//   };

//   return (
//     <div className="">
//       {/* Main Content */}
//       <section className="max-w-[1600px] mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
//         {/* Left: Form */}
//         <div className="w-full flex flex-col md:col-span-2 gap-8">
//           {/* Title */}
//           <h2 className="text-neutral-900 text-lg font-bold">
//             Personal Information
//           </h2>

//           {/* Form */}
//           <div className="p-6 bg-sky-50/5 rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[2px] flex flex-col gap-8">
//             {/* Name */}
//             <div className="relative">
//               <input
//                 type="text"
//                 id="name"
//                 placeholder=" "
//                 onFocus={() => setFocusedInput("name")}
//                 onBlur={() => setFocusedInput(null)}
//                 className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                   focusedInput === "name" ? "rounded-2xl" : "rounded-full"
//                 }`}
//               />
//               <label
//                 htmlFor="name"
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//               >
//                 Name
//               </label>
//             </div>

//             {/* Email and Phone Number Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Email */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder=" "
//                   onFocus={() => setFocusedInput("email")}
//                   onBlur={() => setFocusedInput(null)}
//                   className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                     focusedInput === "email" ? "rounded-2xl" : "rounded-full"
//                   }`}
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//                 >
//                   Email
//                 </label>
//               </div>

//               {/* Mobile Number */}
//               <div className="relative">
//                 <input
//                   type="tel"
//                   id="mobile"
//                   placeholder=" "
//                   onFocus={() => setFocusedInput("mobile")}
//                   onBlur={() => setFocusedInput(null)}
//                   className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                     focusedInput === "mobile" ? "rounded-2xl" : "rounded-full"
//                   }`}
//                 />
//                 <label
//                   htmlFor="mobile"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//                 >
//                   Mobile Number
//                 </label>
//               </div>
//             </div>

//             {/* City, State, ZIP */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {/* City */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="city"
//                   placeholder=" "
//                   onFocus={() => setFocusedInput("city")}
//                   onBlur={() => setFocusedInput(null)}
//                   className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                     focusedInput === "city" ? "rounded-2xl" : "rounded-full"
//                   }`}
//                 />
//                 <label
//                   htmlFor="city"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//                 >
//                   City
//                 </label>
//               </div>

//               {/* State */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="state"
//                   placeholder=" "
//                   onFocus={() => setFocusedInput("state")}
//                   onBlur={() => setFocusedInput(null)}
//                   className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                     focusedInput === "state" ? "rounded-2xl" : "rounded-full"
//                   }`}
//                 />
//                 <label
//                   htmlFor="state"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//                 >
//                   State
//                 </label>
//               </div>

//               {/* ZIP */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="zip"
//                   placeholder=" "
//                   onFocus={() => setFocusedInput("zip")}
//                   onBlur={() => setFocusedInput(null)}
//                   className={`h-14 w-full px-4 pt-4 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
//                     focusedInput === "zip" ? "rounded-2xl" : "rounded-full"
//                   }`}
//                 />
//                 <label
//                   htmlFor="zip"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//                 >
//                   ZIP
//                 </label>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="relative">
//               <textarea
//                 id="description"
//                 placeholder=" "
//                 rows={4}
//                 onFocus={() => setFocusedInput("description")}
//                 onBlur={() => setFocusedInput(null)}
//                 className={`w-full px-4 pt-6 pb-3 bg-white border border-neutral-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 resize-none ${
//                   focusedInput === "description" ? "rounded-2xl" : "rounded-2xl"
//                 }`}
//               />
//               <label
//                 htmlFor="description"
//                 className="absolute left-4 top-4 text-sky-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
//               >
//                 Description
//               </label>
//             </div>

//             {/* Shipping */}
//             <div className="flex flex-col gap-6">
//               <h3 className="text-neutral-900 text-lg font-bold">
//                 Shipping Details
//               </h3>

//               <div className="flex flex-col md:flex-row gap-4">
//                 {/* Free Shipping */}
//                 <label className="flex-1 flex justify-between items-center p-6 bg-white rounded-full border border-gray-300 cursor-pointer hover:border-[#26ADDF] transition-colors">
//                   <div className="flex gap-4 items-center">
//                     <input
//                       type="radio"
//                       name="shipping"
//                       value="free"
//                       checked={shipping === "free"}
//                       onChange={() => setShipping("free")}
//                       className="hidden"
//                     />
//                     <div
//                       className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors ${
//                         shipping === "free"
//                           ? "border-[#26ADDF]"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       {shipping === "free" && (
//                         <div className="w-3 h-3 rounded-full bg-[#26ADDF]" />
//                       )}
//                     </div>

//                     <div>
//                       <p className="text-zinc-600 text-lg font-medium">
//                         Free Shipping
//                       </p>
//                       <p className="text-zinc-600 text-sm font-medium">
//                         7-20 Days
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-zinc-600 text-lg font-medium">
//                     AED 0
//                   </span>
//                 </label>

//                 {/* Express Shipping */}
//                 <label className="flex-1 flex justify-between items-center p-6 bg-white rounded-full border cursor-pointer hover:border-[#26ADDF] border-gray-300 transition-colors">
//                   <div className="flex gap-4 items-center">
//                     <input
//                       type="radio"
//                       name="shipping"
//                       value="express"
//                       checked={shipping === "express"}
//                       onChange={() => setShipping("express")}
//                       className="hidden"
//                     />
//                     <div
//                       className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors ${
//                         shipping === "express"
//                           ? "border-[#26ADDF]"
//                           : "border-gray-300"
//                       }`}
//                     >
//                       {shipping === "express" && (
//                         <div className="w-3 h-3 rounded-full bg-[#26ADDF]" />
//                       )}
//                     </div>

//                     <div>
//                       <p className="text-zinc-600 text-lg font-medium">
//                         Express Shipping
//                       </p>
//                       <p className="text-zinc-600 text-sm font-medium">
//                         1-3 Days
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-zinc-600 text-lg font-medium">
//                     AED 50
//                   </span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right: Order Summary */}
//         <aside className="space-y-14 mt-16">
//           <OrderSummary
//             subtotal={2500}
//             shippingFee={shipping === "express" ? 50 : 0}
//             onCheckout={handleCheckout}
//           />

//           {/* Payment */}
//           <PaymentMethods />
//         </aside>
//       </section>
//     </div>
//   );
// };

// export default CheckoutPage;

"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import OrderSummary from "@/components/common/OrderSummary";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CreditCard, DollarSign } from "react-feather";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axiosInstance from "@/utils/axiosInstance";
import toastAlert from "@/utils/toastConfig";
import { getOrdersData, requestForCheckout } from "@/helpers/restApiRequest";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { setDefaultCart } from "@/redux/cart/cartSlice";
import { getCurrentLocation } from "@/helpers/getCurrentLocation";

type PaymentMethod = {
  id: number;
  name: string;
  description: string | null;
  active: number;
  created_at: string | null;
  updated_at: string | null;
  website_active: number;
};

type OrderType = {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

const CheckoutPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const { checkoutCartItem } = useAppSelector((state) => state.cart);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState<number | null>(null);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [isLoadingPaymentMethods, setIsLoadingPaymentMethods] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Order Types State
  const [orderTypes, setOrderTypes] = useState<OrderType[]>([]);
  const [isLoadingOrderTypes, setIsLoadingOrderTypes] = useState(false);
  const [selectedOrderType, setSelectedOrderType] = useState<string>("");

  // Cart management functions
  const getCartFromStorage = () => {
    try {
      const cartData = localStorage.getItem("cart");
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error("Error getting cart from storage:", error);
      return [];
    }
  };

  const clearCart = () => {
    try {
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const totalAmount = useMemo(() => {
    const items = Array.isArray(checkoutCartItem) ? checkoutCartItem : [];
    return items.reduce(
      (sum: number, item: any) =>
        sum + (item?.final_price ?? 0) * (item?.quantity ?? 0),
      0
    );
  }, [checkoutCartItem]);

  const [formData, setFormData] = useState({
    payment_method: null as number | null,
    delivery_method: "home_delivery",
    delivery_address: "",
    total_amount: totalAmount,
    name: "",
    email: "",
    phone: "",
    latitude: "",
    longitude: "",
    order_type: "",
  });

  // Fetch order types
  const fetchOrderTypes = async () => {
    setIsLoadingOrderTypes(true);
    try {
      const response = await axiosInstance.get("/api/customer/order-types");
      const types = response.data || [];
      const filteredTypes = types.filter((type: any) => type.name !== "Dining");
      setOrderTypes(filteredTypes);

      if (types.length > 0) {
        const defaultType = types[0];
        setSelectedOrderType(defaultType.id.toString());
        setFormData((prev) => ({
          ...prev,
          order_type: defaultType.id.toString(),
        }));
      }
    } catch (error) {
      console.error("Error fetching order types:", error);
      toastAlert("error", "Failed to load order types", "top-right");
    } finally {
      setIsLoadingOrderTypes(false);
    }
  };

  // Fetch user profile
  const fetchUserProfile = useCallback(async () => {
    if (!user?.userId) return;

    setIsLoadingProfile(true);
    try {
      const response = await axiosInstance.post("/api/customer/user-profile");
      const profile = response?.data;

      if (profile) {
        const fullName =
          profile?.full_name ||
          `${profile?.first_name || ""} ${profile?.last_name || ""}`.trim();

        setFormData((prev) => ({
          ...prev,
          name: fullName || "",
          email: profile?.email || "",
          phone: profile?.phone || "",
        }));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toastAlert("error", "Failed to load user profile", "top-right");
    } finally {
      setIsLoadingProfile(false);
    }
  }, [user?.userId]);

  // Fetch payment methods
  const fetchPaymentMethods = async () => {
    setIsLoadingPaymentMethods(true);
    try {
      const response = await axiosInstance.get("/api/customer/payment-method");
      const allMethods = response.data || [];

      const filteredMethods = allMethods.filter((method: PaymentMethod) => {
        return (
          method.website_active === 1 &&
          (method.name.toLowerCase() === "credit card" ||
            method.name.toLowerCase() === "cash on delivery")
        );
      });

      setPaymentMethods(filteredMethods);

      if (filteredMethods.length > 0) {
        const defaultMethod = filteredMethods[0];
        setPaymentMethod(defaultMethod.id);
        setFormData((prev) => ({
          ...prev,
          payment_method: defaultMethod.id,
        }));
      }
    } catch (error) {
      console.error("Error fetching payment methods:", error);
      toastAlert("error", "Failed to load payment methods", "top-right");
    } finally {
      setIsLoadingPaymentMethods(false);
    }
  };

  // Fetch delivery addresses
  const fetchAddresses = useCallback(async () => {
    if (!user?.userId) return;

    setIsLoadingAddresses(true);
    try {
      const response = await axiosInstance.post(
        "/api/customer/delivery-address",
        {
          customer_id: user?.userId?.toString(),
        }
      );

      const addressList = Array.isArray(response?.data)
        ? response.data
        : response?.data?.addresses || [];

      const activeAddress = addressList.find((addr: any) => addr?.status === 1);
      if (activeAddress) {
        setFormData((prev) => ({
          ...prev,
          delivery_address: activeAddress?.address || "",
          latitude: activeAddress?.latitude || "",
          longitude: activeAddress?.longitude || "",
        }));
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    } finally {
      setIsLoadingAddresses(false);
    }
  }, [user?.userId]);

  useEffect(() => {
    fetchOrderTypes();

    if (user?.userId) {
      fetchUserProfile();
      fetchPaymentMethods();
      fetchAddresses();
    }
  }, [user?.userId, fetchUserProfile, fetchAddresses]);

  const handleInputChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentChange = (methodId: number) => {
    setPaymentMethod(methodId);
    setFormData((prev) => ({
      ...prev,
      payment_method: methodId,
    }));
  };

  const handleOrderTypeChange = (typeId: string) => {
    setSelectedOrderType(typeId);
    setFormData((prev) => ({
      ...prev,
      order_type: typeId,
    }));
  };

  const isDeliveryOrderType = () => {
    const selectedType = orderTypes.find(
      (type) => type.id.toString() === selectedOrderType
    );
    return selectedType?.name.toLowerCase() === "delivery";
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!user?.userId) {
      toastAlert("error", "Please login to place order", "top-right");
      router.replace("/login");
      return;
    }

    if (!formData.order_type) {
      toastAlert("error", "Please select an order type", "top-right");
      return;
    }

    if (!formData.name) {
      toastAlert("error", "Please enter your name", "top-right");
      return;
    }

    if (!formData.phone) {
      toastAlert("error", "Please enter phone number", "top-right");
      return;
    }

    if (!isValidPhoneNumber(formData.phone)) {
      toastAlert("error", "Please enter valid phone number", "top-right");
      return;
    }

    if (isDeliveryOrderType() && !formData.delivery_address) {
      toastAlert("error", "Please enter delivery address", "top-right");
      return;
    }

    if (!formData.payment_method) {
      toastAlert("error", "Please select a payment method", "top-right");
      return;
    }

    await proceedWithOrder();
  };

  const proceedWithOrder = async () => {
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const cartData = getCartFromStorage();

      if (!cartData || cartData.length === 0) {
        toastAlert("error", "Your cart is empty", "top-right");
        setIsSubmitting(false);
        return;
      }

      const calculatedTotal = cartData.reduce(
        (sum: number, item: any) =>
          sum +
          (item?.product?.final_price || item?.product?.price || 0) *
            (item?.quantity || 0),
        0
      );

      const cartItems = cartData.map((item: any) => ({
        item_id: item?.product?.id,
        quantity: item?.quantity || 0,
        price: item?.product?.final_price || item?.product?.price || 0,
        final_price: item?.product?.final_price || item?.product?.price || 0,
        total_amount:
          (item?.product?.final_price || item?.product?.price || 0) *
          (item?.quantity || 0),
      }));

      let latitude = "";
      let longitude = "";

      if (isDeliveryOrderType()) {
        try {
          toastAlert("info", "Getting your location...", "top-right");
          const position = await getCurrentLocation();
          latitude = position.lat.toString();
          longitude = position.lon.toString();

          setFormData((prev) => ({
            ...prev,
            latitude,
            longitude,
          }));
        } catch (locationError) {
          console.error("Error getting location:", locationError);
          toastAlert(
            "error",
            "Please enable location access to place order",
            "top-right"
          );
          setIsSubmitting(false);
          return;
        }
      }

      const dataToSend = {
        payment_method: formData.payment_method?.toString() || "",
        delivery_method: formData.delivery_method,
        delivery_address: formData.delivery_address,
        total_amount: calculatedTotal,
        latitude,
        longitude,
        cart_items: cartItems,
        order_total: calculatedTotal,
        order_type: formData.order_type,
      };

      const response = await requestForCheckout(dataToSend);

      if (response?.data?.message === "Order placed successfully") {
        toastAlert("success", "Order placed successfully!", "top-right");

        clearCart();
        dispatch(setDefaultCart());

        const selectedMethod = paymentMethods.find(
          (m) => m.id === formData.payment_method
        );
        const isCardPayment = selectedMethod?.name
          .toLowerCase()
          .includes("card");

        if (isCardPayment) {
          await new Promise((resolve) => setTimeout(resolve, 2000));

          const ordersResponse = await getOrdersData();
          const orders = ordersResponse?.data?.orders || [];

          if (orders.length > 0) {
            const latestOrderId = orders[0]?.id;
            router.push(
              `https://rapiderp.excellency-catering-restaurant-sweets.com/api/customer/new-payment/${latestOrderId}`
            );
          } else {
            console.error("No orders found");
            toastAlert("error", "Unable to process payment", "top-right");
          }
        } else {
          router.push("/tracking");
        }
      }
    } catch (error: any) {
      const { response } = error || {};

      if (response?.data?.message === "Unauthenticated.") {
        router.replace("/login");
        return;
      }

      toastAlert(
        "error",
        response?.data?.message || "An error occurred",
        "top-right"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getPaymentIcon = (methodName: string) => {
    if (methodName.toLowerCase().includes("card")) {
      return CreditCard;
    }
    return DollarSign;
  };

  const getPaymentColor = (methodName: string) => {
    if (methodName.toLowerCase().includes("card")) {
      return {
        selected: "border-red-300 bg-red-300 text-white",
        unselected: "border-gray-300 bg-white",
        iconSelected: "text-white",
        iconUnselected: "text-gray-600",
      };
    }
    return {
      selected: "border-green-500 bg-green-500 text-white",
      unselected: "border-gray-300 bg-white",
      iconSelected: "text-white",
      iconUnselected: "text-gray-600",
    };
  };

  return (
    <div className="">
      <section className="max-w-8xl mx-auto px-4 lg:px-28 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left: Form */}
        <form className="lg:col-span-2 space-y-8" onSubmit={handleSubmit}>
          {/* Order Type Selection */}
          <div>
            <h2 className="text-sky-500 text-xl font-bold mb-4">Order Type</h2>
            <p className="text-sm text-gray-600 mb-4">
              Select how you want to receive your order
            </p>

            {isLoadingOrderTypes ? (
              <div className="text-center py-4">
                <p className="text-gray-500">Loading order types...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {orderTypes.map((type) => {
                  const isSelected = selectedOrderType === type.id.toString();

                  return (
                    <div
                      key={type.id}
                      onClick={() =>
                        !isSubmitting &&
                        handleOrderTypeChange(type.id.toString())
                      }
                      className={`p-4 border rounded-2xl flex flex-col items-start gap-3 transition-all cursor-pointer ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-md"
                      } ${
                        isSelected
                          ? "border-sky-500 bg-sky-50 shadow-md"
                          : "border-gray-300 hover:border-sky-500"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <input
                          type="radio"
                          name="order_type"
                          value={type.id.toString()}
                          checked={isSelected}
                          onChange={() =>
                            handleOrderTypeChange(type.id.toString())
                          }
                          className="w-4 h-4 text-sky-500 focus:ring-sky-500 cursor-pointer"
                          disabled={isSubmitting}
                        />
                        {isSelected && (
                          <svg
                            className="w-5 h-5 text-sky-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <span
                          className={`text-base font-semibold ${
                            isSelected ? "text-sky-500" : "text-gray-900"
                          } block mb-1`}
                        >
                          {type.name}
                        </span>
                        <p className="text-sm text-gray-600">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Personal Information */}
          <div className="p-6 bg-gray-50 rounded-2xl shadow-[2px_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-[2px] flex flex-col gap-8">
            <h2 className="text-sky-500 text-xl font-bold">
              Personal Information
            </h2>

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder=" "
                value={formData.name}
                onChange={(e) => handleInputChange(e.target.value, "name")}
                onFocus={() => setFocusedInput("name")}
                onBlur={() => setFocusedInput(null)}
                disabled={isLoadingProfile || isSubmitting}
                className={`h-14 w-full px-4 pt-4 bg-white border border-sky-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 ${
                  focusedInput === "name" ? "rounded-2xl" : "rounded-full"
                } ${isLoadingProfile || isSubmitting ? "bg-gray-50" : ""}`}
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Name <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Email and Phone Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  value={formData.email}
                  disabled
                  className="h-14 w-full px-4 pt-4 bg-gray-100 border border-sky-200 rounded-full cursor-not-allowed peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email
                </label>
              </div>

              {/* Mobile Number */}
              <div className="relative">
                <PhoneInput
                  international
                  defaultCountry="AE"
                  placeholder=" "
                  value={formData.phone}
                  onChange={(value) => handleInputChange(value || "", "phone")}
                  disabled={isLoadingProfile || isSubmitting}
                  className={`h-14 w-full px-4 pt-4 bg-white border border-sky-200 focus:outline-none focus:border-sky-500 transition-all duration-200 ${
                    focusedInput === "mobile" ? "rounded-2xl" : "rounded-full"
                  }`}
                />
                <label className="absolute left-4 top-2 text-gray-500 text-xs font-medium pointer-events-none">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* Delivery Address - Only show if order type is "Delivery" */}
            {isDeliveryOrderType() && (
              <div className="relative">
                <textarea
                  id="address"
                  placeholder=" "
                  rows={4}
                  value={formData.delivery_address}
                  onChange={(e) =>
                    handleInputChange(e.target.value, "delivery_address")
                  }
                  onFocus={() => setFocusedInput("address")}
                  onBlur={() => setFocusedInput(null)}
                  disabled={isLoadingAddresses || isSubmitting}
                  className="w-full px-4 pt-6 pb-3 bg-white rounded-2xl border border-sky-200 focus:outline-none focus:border-sky-500 peer transition-all duration-200 resize-none"
                />
                <label
                  htmlFor="address"
                  className="absolute left-4 top-4 text-gray-500 text-base font-medium pointer-events-none transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Delivery Address <span className="text-red-500">*</span>
                </label>
              </div>
            )}
          </div>

          {/* Payment Options */}
          <div>
            <h2 className="text-neutral-900 text-xl font-bold mb-4">
              Payment Method
            </h2>

            {isLoadingPaymentMethods ? (
              <div className="text-center py-4">
                <p className="text-gray-500">Loading payment methods...</p>
              </div>
            ) : (
              <div className="space-y-4">
                {paymentMethods.map((method) => {
                  const Icon = getPaymentIcon(method.name);
                  const colors = getPaymentColor(method.name);
                  const isSelected = paymentMethod === method.id;

                  return (
                    <div
                      key={method.id}
                      onClick={() =>
                        !isSubmitting && handlePaymentChange(method.id)
                      }
                      className={`p-4 border rounded-2xl flex items-center gap-3 transition-all cursor-pointer ${
                        isSubmitting
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:shadow-md"
                      } ${isSelected ? colors.selected : colors.unselected}`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected
                            ? colors.iconSelected
                            : colors.iconUnselected
                        }`}
                      />
                      <div className="flex-1">
                        <span className="text-lg font-medium">
                          {method.name}
                        </span>
                        {method.description && (
                          <p
                            className={`text-sm mt-1 ${
                              isSelected ? "text-white/80" : "text-gray-500"
                            }`}
                            dangerouslySetInnerHTML={{
                              __html: method.description,
                            }}
                          />
                        )}
                      </div>
                      {isSelected && (
                        <svg
                          className="w-5 h-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Terms and Submit */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms-checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="mt-0.5 w-4 h-4 text-sky-500 bg-gray-100 border-gray-300 rounded focus:ring-sky-500 focus:ring-2 cursor-pointer"
                disabled={isSubmitting}
              />
              <label
                htmlFor="terms-checkbox"
                className="text-sm text-gray-600 cursor-pointer"
              >
                I agree to the{" "}
                <a href="#" className="text-sky-500 hover:text-opacity-80">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-sky-500 hover:text-opacity-80">
                  Privacy Policy
                </a>
              </label>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4">
              <Link
                href="/"
                className={`bg-white border border-gray-300 hover:bg-gray-50 text-black py-3 px-8 rounded-full transition duration-200 text-center font-medium flex items-center justify-center ${
                  isSubmitting ? "pointer-events-none opacity-50" : ""
                }`}
              >
                Back to Shopping
              </Link>
              <button
                type="submit"
                disabled={!termsAccepted || isSubmitting}
                className={`w-84 py-4 px-12 rounded-full text-lg font-semibold transition duration-200 ${
                  termsAccepted && !isSubmitting
                    ? "bg-sky-500 hover:bg-sky-600 cursor-pointer text-white shadow-lg"
                    : "bg-gray-400 cursor-not-allowed text-gray-600"
                }`}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </button>
            </div>
          </div>
        </form>

        {/* Right: Order Summary */}
        <aside className="space-y-14 mt-16">
          <OrderSummary
            subtotal={totalAmount}
            shippingFee={0}
            onCheckout={() => {}}
          />

          {/* Payment Methods Summary */}
          {/* <PaymentMethods /> */}
        </aside>
      </section>
    </div>
  );
};

export default CheckoutPage;
