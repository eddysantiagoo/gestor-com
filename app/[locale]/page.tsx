import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import FeaturedCategories from "./components/FeaturedCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import CallToAction from "./components/CallToAction";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
