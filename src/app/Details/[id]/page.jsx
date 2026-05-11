import React from "react";
import CourseDetails from "@/components/DetailsPage/CourseDetails";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <CourseDetails />
      <Footer />
    </div>
  );
};

export default page;
