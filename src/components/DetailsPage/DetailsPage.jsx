"use client";

import { Clock, Users, Award, BookOpen, TrendingUp } from "lucide-react";

import { useParams, useRouter } from "next/navigation";
import coursesData from "@/data/data.json";

import CourseHero from "./CourseHero";
import AbtCourse from "./AbtCourse";
import CrsCurr from "./CrsCurr";
import CrsSide from "./CrsSide";
import { toast } from "react-toastify";

export default function CourseDetails() {
  const router = useRouter();
  const params = useParams();

  const courseId = Number(params.id);

  const course = coursesData.find(function (item) {
    return item.id === courseId;
  });

  function handleEnroll() {
    toast("Successfully enrolled in the course!");
  }

  const learnItems = [
    "Master the fundamentals",
    "Build real-world projects",
    "Industry best practices",
    "Hands-on experience",
    "Certificate of completion",
    "Lifetime access to content",
  ];

  const courseItems = [
    {
      icon: Clock,
      text: course.duration + " of video content",
    },
    {
      icon: BookOpen,
      text: (course.curriculum ? course.curriculum.length : 0) + " lectures",
    },
    {
      icon: Award,
      text: "Certificate of completion",
    },
    {
      icon: Users,
      text: "Access to community",
    },
    {
      icon: TrendingUp,
      text: "Lifetime access",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseHero course={course} handleEnroll={handleEnroll} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AbtCourse course={course} learnItems={learnItems} />

            <CrsCurr course={course} />
          </div>

          <CrsSide
            course={course}
            courseItems={courseItems}
            handleEnroll={handleEnroll}
          />
        </div>
      </div>
    </div>
  );
}
