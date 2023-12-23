import Banner from "@/components/Banner";
import ProductSection from "@/components/product-section/ProductSection";
import data from "@/dummyData/data";
import axios from "axios";

export async function getServerSideProps(context) {
  try {
    const dbProds = await axios.get("/products");

    const DbProds = dbProds.data || [];

    return {
      props: {
        DbProds,
      },
    };
  } catch (error) {
    return {
      props: {
        DbProds: [],
      },
    };
  }
}

export default function Home({ DbProds }) {
  return (
    <main className={`pt-4 dark:bg-gray-900 mx-[5%] `}>
      <Banner />

      <ProductSection title={"Dummy Products"} data={data} />
    </main>
  );
}
