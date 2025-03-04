import AnimatedSphere from "./components/AnimatedSphere";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/why-choose-us";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col items-center">
      <Header />
      <Hero />
      <AnimatedSphere />
      <Carousel />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default App;
