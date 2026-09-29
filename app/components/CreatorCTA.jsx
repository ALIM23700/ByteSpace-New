import Link from "next/link";

const CreatorCTA = () => {
  return (
    <section
      className="relative flex min-h-[488px] items-center justify-center overflow-hidden bg-[#003BE2] bg-cover bg-center px-5 py-20 text-center text-white"
      style={{ backgroundImage: "url('/3d%20ornament.png')" }}
    >
      <div className="relative z-10 mx-auto max-w-[980px]">
        <h2 className="text-[40px] font-semibold leading-tight md:text-[44px]">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-12 max-w-[960px] text-[15px] leading-7 text-white/90">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <Link
          href="/creators"
          className="mt-12 inline-flex h-12 w-48 items-center justify-center rounded-full bg-[#D8F81C] text-[15px] font-medium text-black transition hover:brightness-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
};

export default CreatorCTA;