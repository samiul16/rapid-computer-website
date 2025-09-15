import Image from "next/image";

type BrandCardProps = {
  link?: string;
  name?: string;
  src?: string;
  children?: React.ReactNode;
};
const BrandCard: React.FC<BrandCardProps> = ({ name, src }) => {
  return (
    <div className="w-full h-14 px-16 py-4 bg-white rounded-[10px] shadow-[1px_3px_8px_0px_rgba(0,0,0,0.10)] flex justify-center items-center gap-2.5 cursor-pointer">
      <div className="w-full h-full flex justify-center items-center">
        <Image
          className="w-full h-full object-contain"
          src={src || "/global/Canon.png"}
          alt={name || "picture of brand"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default BrandCard;
