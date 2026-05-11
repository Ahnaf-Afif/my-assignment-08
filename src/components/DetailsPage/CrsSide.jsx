import PriceCard from "./Price";
import InstructorCard from "./Teacher";

export default function CourseSidebar({ course, courseItems, handleEnroll }) {
  return (
    <div className="lg:col-span-1">
      <PriceCard
        course={course}
        courseItems={courseItems}
        handleEnroll={handleEnroll}
      />

      <InstructorCard course={course} />
    </div>
  );
}
