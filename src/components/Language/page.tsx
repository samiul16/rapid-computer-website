"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [locale, setLocale] = useState<string>("en");

  useEffect(() => {
    // Read locale from cookie if available
    const match = document.cookie.match(/MYNEXTAPP_LOCALE=(en|ar)/);
    if (match) setLocale(match[1]);
  }, []);

  const handleToggle = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    setLocale(newLocale);
    document.cookie = `MYNEXTAPP_LOCALE=${newLocale}; path=/;`;

    // Replace the locale in the current URL
    const newPath = pathname.replace(/^\/(en|ar)/, `/${newLocale}`);

    // Delay and then navigate + reload
    setTimeout(() => {
      router.push(newPath);
      window.location.reload();
    }, 500); // delay in ms (adjust as needed)
  };

  return (
    <button
      onClick={handleToggle}
      className="text-white bg-transparent px-2 rounded border border-transparent 
           hover:border-white shadow-lg transition duration-200 cursor-pointer"
    >
      {locale === "en" ? "عربي" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
