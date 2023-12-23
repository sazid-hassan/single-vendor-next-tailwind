import ProductCard from "./ProductCard";

const ProductSection = ({ title, data }) => {
  return (
    <div className=" my-4">
      <h3 className=" text-center font-semibold text-xl ">{title}</h3>

      <div className="flex justify-center gap-6 flex-wrap my-4">
        {data.map((d, i) => (
          <ProductCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
