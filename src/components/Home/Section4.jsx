"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@heroui/react";
import { Avatar, AvatarImage, AvatarFallback } from "@heroui/react";
import { BookOpen, Star } from "lucide-react";
import courses from "../../data/data.json";

const instructors = [
  {
    name: "John Doe",
    role: "Senior Developer",
    image: "https://via.placeholder.com/150",
    courses: 10,
    rating: 4.8,
  },
  {
    name: "Jane Smith",
    role: "Lead Instructor",
    image: "https://via.placeholder.com/150",
    courses: 8,
    rating: 4.7,
  },
  {
    name: "Mike Johnson",
    role: "Software Engineer",
    image: "https://via.placeholder.com/150",
    courses: 12,
    rating: 4.9,
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    courses: 15,
    rating: 4.6,
  },
];

const Section4 = () => {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Top Instructors
              </h2>
              <p className="text-gray-600">
                Learn from the best in the industry
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((instructor, index) => {
                const courseInstructor = courses[index]?.instructor || instructor.name;

                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow border-gray-200">
                    <CardContent className="pt-6">
                      <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-orange-200">
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${courseInstructor}`}
                          alt={courseInstructor}
                        />
                        <AvatarFallback className="bg-orange-100 text-orange-700 text-2xl">
                          {courseInstructor.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {courseInstructor}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {instructor.role}
                      </p>
                      <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-orange-500" />
                          <span>{instructor.courses} courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                          <span>{instructor.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section4;
