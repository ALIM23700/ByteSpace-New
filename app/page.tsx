
import Image from "next/image";
import { Search } from "lucide-react";
import Catagory from '../app/components/Catagory'
import CourseList from "../app/components/CourseList";
import LearningPaths from "../app/components/LearningPaths";
import CreatorCTA from "../app/components/CreatorCTA";
import Testimonials from "../app/components/Testimonials";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="bg-[#003BE2] h-222 text-white overflow-hidden">
      <div className="text-center pt-12">
        <h1 className="text-6xl">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-5">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses
        </p>

       
        <div className="flex justify-center relative z-50">
          <form className="mt-12 flex items-center">
            <div className="relative">
              <Search
                size={18}
                className="text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="bg-white text-gray-700 p-3 pl-10 rounded-2xl outline-none w-[350px]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#D4FB20] text-black p-3 rounded-2xl ml-5"
            >
              Search
            </button>
          </form>
        </div>

        
        <div className="relative z-20 pointer-events-none">
          <Image
            src="/3d ornament.png"
            alt="3D ornament"
            width={2400}
            height={500}
            className="relative bottom-62 w-[2400px]"
          />
        </div>

       
        <div className="relative z-10 pointer-events-none">
          <Image
            src="/Ellipse 7.png"
            alt="Ellipse"
            width={1200}
            height={1100}
            className="relative bottom-180 left-39"
          />
        </div>

       
        <div className="relative z-30 pointer-events-none">
          <Image
            src="/Image.png"
            alt="Course illustration"
            width={800}
            height={1100}
            className="relative bottom-322 left-100"
          />
        </div>
             <img
  src="/Auto%20Layout%20Vertical%20(3).png"
  alt="UI/UX Design card"
  className="absolute left-[404px] top-[639px] z-40 w-[211px]"
/>
<img
  src="/Auto%20Layout%20Vertical%20(4).png"
  alt="Learning Progress card"
  className="absolute left-[853px] top-[651px] z-40 w-[223px]"
/>
<img
  src="/Auto%20Layout%20Vertical%20(5).png"
  alt="Happy Students card"
  className="absolute left-[329px] top-[836px] z-40 w-[254px]"
/>
        
      </div>
     
    </div>
     <img src="ok.png" className="w-full"></img>
    <Catagory></Catagory>
    <CourseList></CourseList>
    <LearningPaths></LearningPaths>
    <img src="Frame 15.png" className="w-full"></img>
    <CreatorCTA></CreatorCTA>
    <Testimonials></Testimonials>
    <Footer></Footer>
    </div>
  );
}

