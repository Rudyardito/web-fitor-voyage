import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Porto from "./components/porto/Porto";
import Footer from "./components/footer/Footer";
import FixedContact from "./components/fixed-contact/FixedContact";
import About from "./components/about/About";
import Carousel from "./components/porto/carousel/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <Porto />
      <About />
      <Footer />
      <FixedContact />
      <div>
        <div className="p-10">
          <div className="flex justify-center items-center gap-2 ">
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
