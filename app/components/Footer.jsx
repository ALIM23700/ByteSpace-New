import Link from "next/link";

const columns = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
  ],
  [
    { label: "Development", href: "/categories/development" },
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/affiliate" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const bottomLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

const Footer = () => {
  return (
    <footer className="bg-white px-5 pt-14 pb-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          
          <div className="max-w-[420px]">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D8F81C]">
                <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#0a0a1f]" />
              </span>
              <span className="text-[20px] font-bold text-[#0a0a1f]">
                ByteSpace
              </span>
            </Link>

            <p className="mt-4 text-[12px] text-gray-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <form className="mt-10 flex items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full max-w-[270px] rounded-full border border-gray-200 bg-white px-5 text-[13px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-gray-400"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-[#D8F81C] px-7 text-[14px] font-medium text-black transition hover:brightness-95"
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-[260px] text-[11px] leading-4 text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right: link columns */}
          <div className="grid grid-cols-2 gap-x-14 gap-y-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-5">
                {col.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-[12px] text-gray-700 transition hover:text-[#0b3fd6]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

       
        <div className="mt-16 flex flex-col gap-3 border-t border-gray-200 pt-5 text-[11px] text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            {bottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-[#0b3fd6]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;