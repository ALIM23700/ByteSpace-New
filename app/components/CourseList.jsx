import { Star } from "lucide-react";

const avatars = [
  "/Ellipse.png",
  "/Ellipse (1).png",
  "/Ellipse (2).png",
  "/Ellipse (3).png",
];

const courses = [
  {
    title: "Learn Figma from Basic",
    image: "/Frame.png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
  {
    title: "Build Digital Asset",
    image: "/Frame (1).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
  {
    title: "the Power of Big Data",
    image: "/Frame (2).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
  {
    title: "Balancing Productivity and Life",
    image: "/Frame (3).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
  {
    title: "Mastering Money Management",
    image: "/Frame (4).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
  {
    title: "From Idea to Startup Success",
    image: "/Frame (5).png",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    price: 25,
    extraStudents: "26+",
  },
];

const CourseList = () => {
  return (
    <div className="mx-auto grid max-w-[1150px] grid-cols-1 justify-items-center gap-x-8 gap-y-8 bg-white px-4 pb-12 sm:px-5 sm:gap-y-10 sm:pb-16 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.title}
          className="w-full max-w-[335px] rounded-3xl border border-gray-200 bg-white p-3.5"
        >
          {/* Image + info pills */}
          <div className="relative h-[175px] w-full overflow-hidden rounded-2xl bg-gray-200">
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* choto screen-e jayga na pele pill niche wrap hobe */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex flex-wrap items-center gap-1.5 sm:flex-nowrap sm:justify-between">
              {[
                `${course.lessons} Lessons`,
                course.duration,
                `${course.comments} Comments`,
              ].map((text) => (
                <span
                  key={text}
                  className="whitespace-nowrap rounded-full bg-white/60 px-2.5 py-1 text-[11px] text-gray-700 backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[12px]"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>

          {/* Title + rating */}
          <div className="mt-4 flex items-start justify-between gap-3 px-1">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[17px] font-semibold leading-tight text-[#0a0a1f] sm:text-[19px]">
                {course.title}
              </h3>
              <p className="mt-1 text-[12px] text-gray-500">
                by <span className="text-[#0b3fd6]">{course.author}</span>
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1 text-gray-500">
              <span className="text-[15px] sm:text-[17px]">{course.rating}</span>
              <Star size={18} className="fill-gray-300 text-gray-300" />
            </div>
          </div>

          {/* Level + students */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-3 px-1 sm:justify-start sm:gap-4">
            <span className="flex items-center gap-2 rounded-full bg-[#F3F3F4] px-3 py-2 text-[12px] text-gray-700 sm:px-4 sm:py-2.5 sm:text-[13px]">
              <span className="flex items-end gap-[2px]">
                <i className="block h-1.5 w-[3px] rounded bg-gray-500" />
                <i className="block h-2.5 w-[3px] rounded bg-gray-500" />
                <i className="block h-3.5 w-[3px] rounded bg-gray-300" />
              </span>
              {course.level}
            </span>

            <div className="flex items-center">
              {avatars.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Student ${i + 1}`}
                  className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0 sm:h-9 sm:w-9"
                  style={{ zIndex: 10 - i }}
                />
              ))}
              <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#D8F81C] text-[10px] font-semibold text-black sm:h-9 sm:w-9 sm:text-[11px]">
                {course.extraStudents}
              </span>
            </div>
          </div>

          {/* Price */}
          <p className="mt-5 px-1 pb-1">
            <span className="text-[20px] font-semibold text-[#0b3fd6] sm:text-[22px]">
              ${course.price}
            </span>
            <span className="text-[12px] text-gray-500">/lifetime</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;