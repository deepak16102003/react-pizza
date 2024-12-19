const footerStyle = {
  textAlign: "center",
};

const orderBtnStyle = {
  backgroundColor: "#edc84b",
  margin: "3rem 0",
  padding: "1rem 1.5rem",
  border: "none",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "#27272a",
  letterSpacing: "0.1rem",
};

function Footer() {
  return (
    <div style={footerStyle}>
      <p>
        we't Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
        similique?
      </p>
      <button style={orderBtnStyle}>Order Now</button>
    </div>
  );
}
export default Footer;
