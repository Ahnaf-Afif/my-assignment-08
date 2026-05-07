import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Section1 from "@/components/Home/Section1";
import Section2 from "@/components/Home/Section2";
import Section3 from "@/components/Home/Section3";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}
