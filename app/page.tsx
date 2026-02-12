import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <BrandCarousel />

      <FeaturedCategories />
      <WhyChooseUs />

      <CallToAction />
    </div>
  );
}
