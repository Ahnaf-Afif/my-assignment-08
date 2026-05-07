import Section1 from "@/components/AllCourses/Section1";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/AllCourses/Section2";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Section1></Section1>
      <Section2></Section2>
      <Footer></Footer>
    </div>
  );
};

export default page;
