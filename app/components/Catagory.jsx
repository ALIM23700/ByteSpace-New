"use client";

import { useState } from "react";

const mainCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

const moreCategories = [
  "Writing",
  "Business",
  "Fashion",
  "Gaming",
  "Languages",
  "Health & Fitness",
];

const Catagory=()=> {
  const [active, setActive] = useState("Featured");
  const [showMore, setShowMore] = useState(false);

  const categories = showMore
    ? [...mainCategories, ...moreCategories]
    : mainCategories;

  return (
    <section className="bg-white px-5 py-12 text-center">
      <h2 className="text-[40px] font-semibold leading-tight text-[#0a0a1f]">
        Discover Your Passion,
        <br />
        Build Your Skills
      </h2>

      <p className="mx-auto mt-5 max-w-[820px] text-[15px] leading-7 text-gray-400">
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology to
        the arts, and make a difference in your career and life.
      </p>

      <div className="mx-auto mt-10 flex max-w-[1000px] flex-wrap justify-center gap-x-3.5 gap-y-3.5">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-3 text-[14.5px] font-medium transition-colors ${
              active === cat
                ? "bg-[#D8F81C] text-black"
                : "bg-[#F3F3F4] text-[#2b2b33] hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setShowMore((v) => !v)}
          className="px-1 py-3 text-[14.5px] font-medium text-[#0b3fd6]"
        >
          {showMore ? "− Less" : "+ More"}
        </button>
      </div>
    </section>
  );
}
export default Catagory