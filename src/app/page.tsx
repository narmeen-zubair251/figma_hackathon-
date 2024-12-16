import AboutUs from "@/components/AboutUs";
import Category from "@/components/Category";
import Chefs from "@/components/Chefs";
import ChooseUs from "@/components/ChooseUs";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurMenu from "@/components/OurMenu";

import Image from "next/image";

export default function Home() {
  return (
    <div>
  
   <Hero/>
  <AboutUs/>
  <Category/>
  <ChooseUs/>
  <OurMenu/>
  <Chefs/>
  <Clients/>
  
  
    </div>
  );
}
