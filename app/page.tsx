import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Image from "next/image";
import Testimonial from "@/components/Testimonial";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
  <main className="">
    <Hero />
    <Feature />
    <Packages />
    <Testimonial />
    <GetApp />
  </main>
  );
}
