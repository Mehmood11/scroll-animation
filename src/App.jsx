import Carousel from "./components/Carousel";
import ExplorePlans from "./components/explore-plane";
import FAQSection from "./components/faq-section";
import Features from "./components/features";
import Footer from "./components/footer";
import GetStarted from "./components/get-started";
import Header from "./components/header";
import Hero from "./components/hero";
import TestimonialsCarousel from "./components/testimonial";
import WhyChooseUs from "./components/why-choose-us";
import MainSphere from "./components/main-sphere";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative flex flex-col items-center">
      <Header />
      <Hero />
      <MainSphere />
      <Carousel />
      <Features />
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
