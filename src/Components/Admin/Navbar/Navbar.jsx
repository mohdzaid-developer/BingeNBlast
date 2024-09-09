import "./Navbar.scss";

const Navbar = ({ title, image }) => {
  return (
    <section className="admin-navbar">
      <img src={image} alt="" />
      <h1>{title}</h1>
    </section>
  );
};

export default Navbar;
