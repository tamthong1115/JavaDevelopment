import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner"; 
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-white pb-12">
        <div className="container mx-auto py-4">
          <Header />
        </div>
        <div className="container mx-auto flex justify-center items-center">
        <Banner/>
        </div>
        <div className="container mx-auto">
          <Hero />
        </div>
      </div>
      <div className="container mx-auto flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
