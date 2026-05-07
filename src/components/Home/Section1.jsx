"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@heroui/react";
import {
  Rocket,
  BookOpen,
  Clock,
  Target,
  Lightbulb,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";

const Section1 = () => {
  return (
    <div>
      <section className="relative bg-linear-to-br from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upgrade Your Skills Today
              <Rocket className="inline-block ml-3 h-10 w-10 md:h-14 md:w-14" />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Learn from Industry Experts and Transform Your Career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate("courses")}
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6"
              >
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
