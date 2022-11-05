import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Porto from "./components/porto/Porto";
import Footer from "./components/footer/Footer";
import FixedContact from "./components/fixed-contact/FixedContact";
import About from "./components/about/About";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Porto />
      <About />
      <Footer />
      <FixedContact />
    </>
  );
}

export default App;
