import { Star } from "lucide-react";
import { Card } from "@heroui/react";

export default function InstructorCard({ course }) {
  return (
    <Card>
      <div className="p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Instructor</h3>

        <div className="flex items-start gap-4">
          <img
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
            alt={course.instructor}
            className="h-16 w-16 rounded-full border-2 border-orange-200"
          />

          <div>
            <p className="font-semibold text-gray-900">{course.instructor}</p>

            <p className="text-sm text-gray-600 mb-2">
              {course.category} Expert
            </p>

            <div className="flex items-center gap-1 text-sm text-gray-700">
              <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
              <span>{course.rating}</span>
              <span className="text-gray-500">instructor rating</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
