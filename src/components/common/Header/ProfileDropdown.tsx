"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, HelpCircle, ChevronDown } from "react-feather";
import ImageComponent from "@/helpers/ui/ImageComponent";
import { setDefaultData } from "@/redux/user/userSlice";
import { setDefaultCart } from "@/redux/cart/cartSlice";
import { size } from "lodash";
import toastAlert from "@/utils/toastConfig";
import { getDefaultAvatarText } from "@/utils/appHelpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { requestForLogout } from "@/helpers/restApiRequest";
import { useLocale, useTranslations } from "next-intl";
import { UserIcon } from "lucide-react";

const ProfileDropdown: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const dropdownRef = useRef(null);
  const toastId = useRef<string | number | null>(null);
  const t = useTranslations("profile");
  const locale = useLocale();
  const lang = locale === "ar" ? "ar" : "en";

  const { user } = useAppSelector((state) => state.user);
  const { email, photo, fullname } = user || {};

  const defaultUsername = getDefaultAvatarText(fullname, email, "");
  const [hasMounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await requestForLogout({ user: user?.userId });
      if (size(response)) {
        dispatch(setDefaultData());
        dispatch(setDefaultCart());
        router.push("/");
      }
    } catch (err) {
      const { response } = err;
      toastAlert("error", response?.data?.message, "top-right", toastId, {
        autoClose: 4000,
      });
    }
  };

  useEffect(() => setIsClient(true), []);
  useEffect(() => setMounted(true), []);
  if (!isClient) return null;

  return (
    <div
      className="relative transition-all duration-200 ease-out"
      ref={dropdownRef}
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center rounded-full overflow-hidden"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <ImageComponent
          alt="user profile"
          className="w-9 h-9 p-0.5 rounded-full border-1 border-[#ecbf4c] bg-white"
          src={photo}
          defaultImageClasses="w-9 h-9"
          defaultImageName={defaultUsername}
        />
        <ChevronDown className="w-4 h-4 text-brand ms-1" />
      </button>

      {hasMounted && isOpen && (
        <div className="absolute right-0 mt-8 w-56 rounded-md shadow-lg bg-white ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            <div className="px-4 py-3 border-b border-gray-200">
              <p className="text-14 font-semibold text-border-dark">
                {fullname}
              </p>
              <p className="text-12 text-border-dark truncate">{email}</p>
            </div>

            {user?.userId ? (
              <>
                <Link
                  href="/tracking"
                  className="flex items-center px-4 py-2 text-sm text-border-dark"
                >
                  <HelpCircle className="mr-3 h-4 w-4 text-brand" />
                  {t("myOrders")}
                </Link>
                <Link
                  href="/accounts"
                  className="flex items-center px-4 py-2 text-sm text-border-dark"
                >
                  <UserIcon className="mr-3 h-4 w-4 text-brand" />
                  {t("accounts")}
                </Link>
              </>
            ) : (
              <Link
                href="/help"
                className="flex items-center px-4 py-2 text-sm text-border-dark"
              >
                <HelpCircle className="mr-3 h-4 w-4 text-brand" />
                {t("help")}
              </Link>
            )}

            <div className="border-t border-gray-200"></div>

            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 text-sm text-brand hover:bg-gray-200"
            >
              <LogOut className="mr-3 h-4 w-4" />
              {t("logout")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
