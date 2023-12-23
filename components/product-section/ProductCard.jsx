import Image from "next/image";
import { MdOutlineFavoriteBorder } from "react-icons/md";

const ProductCard = ({ data }) => {
  console.log(data);
  return (
    <div className="mb-4 relative">
      <Image height={140} width={120} src={data.image} alt={data.title} />
      <MdOutlineFavoriteBorder className=" absolute top-1 right-1 text-[#5768c2] rounded-lg p-0.5 cursor-pointer bg-white " />
      <p>{data.title}</p>
      <div className="flex gap-1">
        {data.variantColors.map((color, index) => (
          <div
            key={index}
            className={" h-4 w-4 "}
            style={{ backgroundColor: `${color}` }}
          ></div>
        ))}
      </div>
      <p>৳ {data.price}</p>
    </div>
  );
};

export default ProductCard;
