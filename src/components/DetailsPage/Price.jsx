import { Button, Card } from "@heroui/react";

export default function PriceCard({ course, courseItems, handleEnroll }) {
  return (
    <Card className="sticky top-24 mb-8">
      <div className="p-6">
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-orange-600 mb-2">
            {course.price}
          </p>

          <p className="text-gray-600">One-time payment</p>
        </div>

        <Button
          onClick={handleEnroll}
          size="lg"
          className="w-full bg-orange-500 text-white mb-4"
        >
          Enroll Now
        </Button>

        <div className="border-t border-gray-200 my-4"></div>

        <h3 className="font-semibold text-gray-900 mb-3">
          This course includes:
        </h3>

        <div className="space-y-3">
          {courseItems.map(function (item, index) {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-3 text-gray-700"
              >
                <Icon className="h-5 w-5 text-orange-600" />
                <span className="text-sm">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
