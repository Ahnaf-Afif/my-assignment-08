"use client";

import { Star, Clock, Users, TrendingUp } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
import { Card as CardUI, CardContent } from "@heroui/react";
import { Button } from "@heroui/react";
import { Badge } from "@heroui/react";
import Link from "next/link";

export function Card({ course, onViewDetails }) {
  return (
    <CardUI className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-gray-200">
      <div className="relative overflow-hidden h-48">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-8">
          <Badge className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-2">
            {course.category}
          </Badge>
        </div>
        <div className="absolute top-3 left-20">
          <Badge
            variant="secondary "
            className="bg-white/90 text-gray-900 py-1 px-2"
          >
            {course.level}
          </Badge>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3">by {course.instructor}</p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
            <span className="font-medium text-gray-900">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          {course.students && (
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{course.students.toLocaleString()}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          {course.price && (
            <span className="font-bold text-lg text-orange-600">
              {course.price}
            </span>
          )}
          <Button
            // onClick={() => onViewDetails(course.id)}
            className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 ml-auto"
          >
            <Link href={`/Details/${course.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </CardUI>
  );
}
