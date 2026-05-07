"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@heroui/react";
import { Target, Clock, Lightbulb, BookOpen } from "lucide-react";

const learningTips = [
  {
    title: "Set Clear Goals",
    description: "Define what you want to achieve before starting a course.",
    icon: Target,
  },
  {
    title: "Manage Your Time",
    description: "Create a consistent study schedule and stick to it.",
    icon: Clock,
  },
  {
    title: "Practice Regularly",
    description: "Apply what you learn through hands-on projects.",
    icon: Lightbulb,
  },
  {
    title: "Take Notes",
    description: "Document key concepts to reinforce your learning.",
    icon: BookOpen,
  },
];

const Section3 = () => {
  return (
    <div>
      <section className="py-16 bg-linear-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Learning Tips
              </h2>
              <p className="text-gray-600">
                Master your learning journey with these proven strategies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow border-orange-200 bg-white">
                    <CardContent className="pt-6">
                      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <tip.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2 text-gray-900">
                        {tip.title}
                      </h3>
                      <p className="text-sm text-gray-600">{tip.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section3;
