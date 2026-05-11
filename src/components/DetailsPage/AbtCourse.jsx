import { CheckCircle } from "lucide-react";
import { Card } from "@heroui/react";

export default function AboutCourse({ course, learnItems }) {
  return (
    <Card className="mb-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          About This Course
        </h2>

        <p className="text-gray-700 mb-6">{course.description}</p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          What You'll Learn
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {learnItems.map(function (item, index) {
            return (
              <div key={index} className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                <span className="text-gray-700">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
