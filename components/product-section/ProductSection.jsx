import ProductCard from "./ProductCard";

const ProductSection = ({ data }) => {
  return (
    <div className=" my-4">
      <h3 className=" text-center font-semibold text-xl ">
        Product Type Title
      </h3>

      <div className="flex justify-center gap-6 flex-wrap my-4">
        {data.map((d, i) => (
          <ProductCard data={d} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
