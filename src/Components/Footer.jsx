import "../Cssfiels/Footer.css";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ color: "white" }}
    >{`developed by © Mohamed Adel ${year}`}</footer>
  );
};

export default Footer;
