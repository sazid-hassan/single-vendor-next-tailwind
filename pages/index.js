import Banner from "@/components/Banner";
import ProductSection from "@/components/product-section/ProductSection";
import data from "@/dummyData/data";

export default function Home() {
  console.log(data);
  return (
    <main className={`pt-4 dark:bg-gray-900 mx-[5%] `}>
      <Banner />

      <ProductSection data={data} />
    </main>
  );
}
