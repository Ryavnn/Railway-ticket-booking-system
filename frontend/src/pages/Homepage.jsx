import Navbar from "../components/Navbar";
import Banner1 from "../components/Banner1";
import PopularTours from "../components/PopularTours";
import Banner2 from "../components/Banner2";
import Banner3 from "../components/Banner3";
import FaQs from "../components/FaQs";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <>
      <Navbar />
      <Banner1 />
      <PopularTours />
      <Banner2 />
      <Banner3 />
      <FaQs />
      <Footer />
    </>
  );
}

export default Homepage;
