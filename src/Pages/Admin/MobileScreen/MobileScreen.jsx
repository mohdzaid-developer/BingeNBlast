import Footer from "../../../Components/User/Footer/Footer";
import Navbar from "../../../Components/User/Navbar/Navbar";
import "./MobileScreen.scss";

const MobileScreen = () => {
  return (
    <>
      <Navbar />
      <section className="mobile-screen">
        <h1>Please use a desktop or laptop to access the admin panel!</h1>
      </section>
      <Footer />
    </>
  );
};

export default MobileScreen;
