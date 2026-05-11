import { BookOpen, Play } from "lucide-react";
import { Card } from "@heroui/react";

export default function CourseCurriculum({ course }) {
  return (
    <Card>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-orange-600" />
          Course Curriculum
        </h2>

        <div className="space-y-3">
          {course.curriculum &&
            course.curriculum.map(function (item, index) {
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item}</p>
                  </div>

                  <Play className="h-5 w-5 text-orange-600" />
                </div>
              );
            })}
        </div>
      </div>
    </Card>
  );
}
