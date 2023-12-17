import Image from "next/image";

const ProductCard = ({ data }) => {
  return (
    <div className="mb-4">
      <Image height={140} width={120} src={data.image} alt={data.title} />
      <p>{data.title}</p>
    </div>
  );
};

export default ProductCard;
