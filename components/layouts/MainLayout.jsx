import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screens bg-gray-50 flex flex-col ">
      <Header />
      <div className="w-[100%]">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
