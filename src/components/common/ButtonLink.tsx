import Link from "next/link";

interface ButtonLinkProps {
  link: string;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ link, children }) => {
  return (
    <Link
      href={link || "/products"}
      className="px-8 py-3 rounded-full border border-[#20B8FB] text-[#20B8FB] font-bold hover:bg-[#20B8FB] hover:text-white transition"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
