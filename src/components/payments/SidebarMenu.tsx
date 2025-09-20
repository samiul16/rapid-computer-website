"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { ChevronRightIcon } from "lucide-react";

// Icons (you can replace these with your preferred icon library)
const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const CreditCardIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z"
    />
  </svg>
);

const ReturnIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
    />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

interface MenuItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  isExpandable?: boolean;
  badge?: number;
  children?: MenuItem[];
}

interface SidebarMenuProps {
  onMenuItemClick?: (itemId: string, item: MenuItem) => void;
  activeItem?: string;
  className?: string;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({
  onMenuItemClick,
  activeItem = "my-profile",
  className = "",
}) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "account",
  ]);
  const [selectedItem, setSelectedItem] = useState<string>(activeItem);

  const menuItems: MenuItem[] = [
    {
      id: "account",
      title: "Manage My Account",
      icon: <UserIcon />,
      isExpandable: true,
      children: [
        { id: "my-profile", title: "My Profile", icon: <UserIcon /> },
        { id: "address-book", title: "Address Book", icon: <LocationIcon /> },
        {
          id: "payment-options",
          title: "My Payment Options",
          icon: <CreditCardIcon />,
        },
      ],
    },
    {
      id: "orders",
      title: "My Orders",
      icon: <ShoppingBagIcon />,
      isExpandable: true,
      badge: 3,
      children: [
        {
          id: "my-returns",
          title: "My Returns",
          icon: <ReturnIcon />,
          badge: 1,
        },
        {
          id: "my-cancellations",
          title: "My Cancellations",
          icon: <ReturnIcon />,
        },
      ],
    },
    {
      id: "wishlist",
      title: "My WishList",
      icon: <HeartIcon />,
      badge: 12,
    },
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.isExpandable) {
      toggleSection(item.id);
    } else {
      setSelectedItem(item.id);
      onMenuItemClick?.(item.id, item);
    }
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isExpanded = expandedSections.includes(item.id);
    const isSelected = selectedItem === item.id;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <div key={item.id} className="w-full">
        <div
          onClick={() => handleItemClick(item)}
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-200 group
                     ${level === 0 ? "hover:bg-sky-50" : "hover:bg-sky-25"}
                     ${
                       isSelected
                         ? "bg-sky-100 text-sky-700 shadow-sm border-l-4 border-sky-400"
                         : "text-gray-700 hover:text-sky-600"
                     }
                     ${level > 0 ? "ml-6 pl-4" : ""}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`transition-colors duration-200 ${
                isSelected
                  ? "text-sky-600"
                  : "text-gray-500 group-hover:text-sky-500"
              }`}
            >
              {item.icon}
            </div>
            <span
              className={`font-medium transition-all duration-200 font-['Poppins']
                            ${level === 0 ? "text-base" : "text-sm"}
                            ${
                              isSelected
                                ? "font-semibold text-sky-700"
                                : "group-hover:text-sky-600"
                            }`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item.title}
            </span>
            {item.badge && (
              <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded-full min-w-[20px] text-center">
                {item.badge}
              </span>
            )}
          </div>

          {hasChildren && (
            <div
              className={`transition-transform duration-200 text-gray-400 group-hover:text-sky-500
                           ${isExpanded ? "rotate-90" : ""}`}
            >
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Render children with animation */}
        {hasChildren && (
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out
                         ${
                           isExpanded
                             ? "max-h-96 opacity-100"
                             : "max-h-0 opacity-0"
                         }`}
          >
            <div className="py-1">
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`min-w-64 w-full p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 flex flex-col gap-2 ${className}`}
    >
      <div className="flex flex-col gap-1">
        {menuItems.map((item) => renderMenuItem(item))}
      </div>
    </div>
  );
};

// Example usage component showing different layouts based on selected menu
const DashboardLayout: React.FC = () => {
  const [currentView, setCurrentView] = useState("my-profile");

  const handleMenuItemClick = (itemId: string, item: any) => {
    console.log("Menu item clicked:", itemId, item);
    setCurrentView(itemId);
  };

  const renderContent = () => {
    switch (currentView) {
      case "my-profile":
        return (
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              My Profile
            </h1>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case "address-book":
        return (
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              Address Book
            </h1>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold">Home Address</h3>
                <p className="text-gray-600">123 Main St, City, State 12345</p>
              </div>
            </div>
          </div>
        );
      case "payment-options":
        return (
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              Payment Options
            </h1>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">•••• •••• •••• 1234</h3>
                  <p className="text-gray-600">Expires 12/25</p>
                </div>
                <button className="text-sky-600 hover:text-sky-700">
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      case "wishlist":
        return (
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              My Wishlist
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-full h-32 bg-gray-200 rounded mb-3"></div>
                  <h3 className="font-semibold">Product {i + 1}</h3>
                  <p className="text-sky-600 font-bold">$99.99</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="p-8 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 font-['Poppins']">
              {currentView}
            </h1>
            <p className="text-gray-600">
              Content for {currentView} goes here...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex gap-8 p-8 bg-gray-50 min-h-screen">
      <SidebarMenu
        onMenuItemClick={handleMenuItemClick}
        activeItem={currentView}
      />
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};

export { SidebarMenu, DashboardLayout };
export default SidebarMenu;
