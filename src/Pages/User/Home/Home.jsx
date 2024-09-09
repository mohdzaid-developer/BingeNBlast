// Components
import Hero from "./Components/Hero/Hero";
import CommonSections from "./Components/CommonSections/CommonSections";
import Contact from "./Components/Contact/Contact";
import Celebrations from "./Components/Celebrations/Celebrations";
import BookEvent from "./Components/BookEvent/BookEvent";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Celebrations />
      <CommonSections />
      <BookEvent /> 
      <Contact /> 
    </section>
  );
};

export default Home;
