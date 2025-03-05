import AnimatedSphere from "./components/AnimatedSphere";
import Carousel from "./components/Carousel";
import ExplorePlans from "./components/explore-plane";
import FAQSection from "./components/faq-section";
import Footer from "./components/footer";
import GetStarted from "./components/get-started";
import Header from "./components/header";
import Hero from "./components/Hero";
import TestimonialsCarousel from "./components/testimonial";
import WhyChooseUs from "./components/why-choose-us";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col items-center">
      <Header />
      <Hero />
      <AnimatedSphere />
      <Carousel />
      <WhyChooseUs />
      <ExplorePlans />
      <FAQSection />
      <TestimonialsCarousel />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
