import "./global.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const appStyle = {
  color: "#27272a",
  backgroundColor: "#f7f2e9",
  borderBottom: "1rem solid #edc84b",
};

function App() {
  return (
    <div style={appStyle}>
      <div
        style={{
          maxWidth: "70rem",
          margin: "0 auto",
          paddingTop: "4rem",
        }}
      >
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}

export default App;
