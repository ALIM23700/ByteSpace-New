const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/sarah.png",
    text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/james2.png",
    text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/alex.png",
    text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-16"
      style={{
        backgroundImage:
          "radial-gradient(circle at 75% 20%, rgba(216,248,28,0.45), transparent 40%), radial-gradient(circle at 5% 90%, rgba(120,140,255,0.35), transparent 35%)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Heading + description */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <h2 className="text-[34px] font-semibold leading-tight text-[#0a0a1f] md:w-1/2">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="text-[14px] leading-6 text-gray-500 md:w-[45%]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 items-start gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="h-[46px] w-[46px] rounded-full object-cover"
              />
              <h3 className="mt-4 text-[16px] font-semibold text-[#0a0a1f]">
                {t.name}
              </h3>
              <p className="text-[13px] text-[#0b3fd6]">{t.role}</p>
              <p className="mt-4 text-[13px] leading-6 text-gray-600">
                &quot;{t.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;