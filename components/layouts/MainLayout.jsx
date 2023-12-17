import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screens bg-gray-50 flex flex-col ">
      <Header />
      <div className="container flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
