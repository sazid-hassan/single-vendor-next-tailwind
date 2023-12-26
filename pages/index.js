import Banner from "@/components/Banner";
import ProductSection from "@/components/product-section/ProductSection";
import data from "@/dummyData/data";
import axios from "axios";
import { useEffect } from "react";

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
  console.log(DbProds);
  return (
    <main className={`pt-4 bg-white m-auto dark:bg-gray-900 px-[5%]`}>
      <Banner />

      <ProductSection title={"Dummy Products"} data={data} />
    </main>
  );
}
