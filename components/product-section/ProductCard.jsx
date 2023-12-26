import Image from "next/image";
import { useState } from "react";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

const ProductCard = ({ data }) => {
  const [Favourite, setFavourite] = useState(false);

  return (
    <div className="mb-4 relative" onClick={() => setFavourite(!Favourite)}>
      <Image height={140} width={120} src={data.image} alt={data.title} />
      {!Favourite ? (
        <MdOutlineFavoriteBorder className=" absolute top-1 right-1 text-[#5768c2] rounded-lg p-0.5 cursor-pointer bg-white " />
      ) : (
        <MdFavorite className="absolute top-1 right-1 rounded-lg p-0.5 cursor-pointer bg-white text-[red]" />
      )}
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
