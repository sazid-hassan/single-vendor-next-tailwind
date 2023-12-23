import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import axios from "axios";

export default function App({ Component, pageProps }) {
  axios.defaults.baseURL = "http://localhost:3100";

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
