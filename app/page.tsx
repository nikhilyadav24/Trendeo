import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrival from "./components/NewArrival";
import FlashSales from "./components/FlashSales";
import Features from "./components/Features";
import Banner from "./components/Banner";
import BestSellingProducts from "./components/BestSellingProducts";
import OurProducts from "./components/OurProducts";
import BrowserByCategory from "./components/BrowserByCategory";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <>
      <Header />
      <hr />
      <HeroSection />
      <BrowserByCategory />
      <FlashSales />
      <BestSellingProducts />
      <Banner />
      <OurProducts />
      <NewArrival />
      <Features />
      <Footer />
    </>
  );
}
