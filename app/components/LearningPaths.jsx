import {
  PencilRuler,
  Smartphone,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

const paths = [
  { title: "Design", icon: PencilRuler },
  { title: "Development", icon: Smartphone },
  { title: "IT & Software", icon: Laptop },
  { title: "Business", icon: Building2 },
  { title: "Marketing", icon: Megaphone },
  { title: "Photography", icon: Camera },
];

const LearningPaths = () => {
  return (
    <section className="bg-white px-5 py-14 text-center">
      <h2 className="text-[34px] font-semibold leading-tight text-[#0a0a1f]">
        Explore Diverse Learning Paths at Bytespace
      </h2>

      <p className="mx-auto mt-4 max-w-[830px] text-[15px] leading-7 text-gray-400">
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our carefully
        curated categories.
      </p>

      <div className="mx-auto mt-14 flex max-w-[1100px] flex-wrap justify-center gap-6">
        {paths.map(({ title, icon: Icon }) => (
          <div
            key={title}
            className="flex h-[150px] w-[150px] cursor-pointer flex-col items-center justify-center gap-4 rounded-[28px] border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D8F81C]">
              <Icon size={24} strokeWidth={2.2} className="text-[#0a0a1f]" />
            </span>
            <p className="text-[16px] text-[#0a0a1f]">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPaths;