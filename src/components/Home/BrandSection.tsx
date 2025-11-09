import BrandTopProduct from "../common/BrandTopProduct";

const promoData = [
  {
    title: "Sony Headphone",
    subtitle: "Feel The Beats",
    imgSrc: "/global/headphone.png",
    bgColor: "bg-yellow-500",
    textColor: "blue-50",
    buttonColor: "#FACC15", // yellow-500
  },
  {
    title: "MacBook Pro M4",
    subtitle: "Feel the Ultimate Power",
    imgSrc: "/global/laptop2.png",
    bgColor: "bg-sky-400",
    textColor: "white",
    buttonColor: "#0EA5E9", // sky-400
  },
];

export default function BrandSection() {
  return (
    <section className=" py-20">
      <div className="max-w-8xl mx-auto px-4 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-10 justify-between ">
        {promoData.map((promo, idx) => (
          <BrandTopProduct key={idx} {...promo} />
        ))}
      </div>
    </section>
  );
}
