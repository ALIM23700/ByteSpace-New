"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import Catagory from "../app/components/Catagory";
import CourseList from "../app/components/CourseList";
import LearningPaths from "../app/components/LearningPaths";
import CreatorCTA from "../app/components/CreatorCTA";
import Testimonials from "../app/components/Testimonials";
import Footer from "../app/components/Footer";

/*
  Apnar navbar-er height (px). Card-gulo ager code-e page-er top theke
  position kora chhilo, ekhon hero-r top theke hoy, tai ei ta minus kora hoyeche.
  Card-er upore/niche hole ei number ta ektu bodlan.
*/
const NAV_H = 137;

/* Desktop design (1440 x 888) ke screen width onujayi scale kore */
function ScaledCanvas({
  designWidth = 1440,
  designHeight = 888,
  children,
}: {
  designWidth?: number;
  designHeight?: number;
  children: React.ReactNode;
}) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / designWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [designWidth]);

  return (
    <div
      ref={outerRef}
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${designWidth} / ${designHeight}` }}
    >
      <div
        className="relative"
        style={{
          width: designWidth,
          height: designHeight,
          transform: `scale(${scale ?? 1})`,
          transformOrigin: "top left",
          opacity: scale === null ? 0 : 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="bg-[#003BE2] text-white overflow-hidden">
        {/* ============ DESKTOP / TABLET (768px+) : original design, scaled ============ */}
        <div className="hidden md:block">
          <ScaledCanvas designWidth={1440} designHeight={888}>
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
                  className="absolute z-40 w-[211px]"
                  style={{ left: 404, top: 639 - NAV_H }}
                />
                <img
                  src="/Auto%20Layout%20Vertical%20(4).png"
                  alt="Learning Progress card"
                  className="absolute z-40 w-[223px]"
                  style={{ left: 853, top: 651 - NAV_H }}
                />
                <img
                  src="/Auto%20Layout%20Vertical%20(5).png"
                  alt="Happy Students card"
                  className="absolute z-40 w-[254px]"
                  style={{ left: 329, top: 836 - NAV_H }}
                />
              </div>
            </div>
          </ScaledCanvas>
        </div>

        {/* ============ MOBILE (768px er niche) ============ */}
        <div className="md:hidden">
          <div className="px-4 pt-10 text-center">
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Get Access to Hundreds
              <br />
              Courses Available
            </h1>

            <p className="mx-auto mt-4 max-w-sm text-sm text-white/90">
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses
            </p>

            <form className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3">
              <div className="relative w-full">
                <Search
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  className="w-full rounded-2xl bg-white p-3 pl-10 text-gray-700 outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#D4FB20] p-3 font-medium text-black"
              >
                Search
              </button>
            </form>
          </div>

          <div className="relative mx-auto mt-10 h-[340px] w-full overflow-hidden sm:h-[420px]">
            <div className="pointer-events-none absolute bottom-0 left-1/2 w-[150%] max-w-none -translate-x-1/2">
              <Image
                src="/Ellipse 7.png"
                alt=""
                width={1200}
                height={1100}
                className="h-auto w-full"
              />
            </div>
            <div className="pointer-events-none absolute bottom-0 left-1/2 w-[80%] max-w-md -translate-x-1/2">
              <Image
                src="/Image.png"
                alt="Course illustration"
                width={800}
                height={1100}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <img src="/ok.png" alt="" className="w-full h-auto" />
      <Catagory />
      <CourseList />
      <LearningPaths />
      <img src="/Frame 15.png" alt="" className="w-full h-auto" />
      <CreatorCTA />
      <Testimonials />
      <Footer />
    </div>
  );
}