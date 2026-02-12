import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <BrandCarousel />

      <FeaturedCategories />
      <WhyChooseUs />

      <CallToAction />
      <Footer />
    </div>
  );
}
