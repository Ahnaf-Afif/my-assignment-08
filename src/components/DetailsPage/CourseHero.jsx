import { Star, Clock, Users, Award, Play } from "lucide-react";
import { Button, Badge } from "@heroui/react";

export default function CourseHero({ course, handleEnroll }) {
  return (
    <div className="bg-orange-500 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {course.title}
            </h1>

            <p className="text-xl mb-6">{course.description}</p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-white" />
                <span>{course.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{course.students} students</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{course.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>{course.level}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                alt={course.instructor}
                className="h-12 w-12 rounded-full border-2 border-white"
              />

              <div>
                <p className="text-sm">Instructor</p>
                <p className="font-semibold">{course.instructor}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleEnroll}
                size="lg"
                className="bg-white text-orange-600 text-lg px-8"
              >
                Enroll Now - {course.price}
              </Button>

              <Button
                size="lg"
                variant="bordered"
                className="border-white text-white text-lg px-8"
              >
                <Play className="h-5 w-5 mr-2" />
                Preview Course
              </Button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
