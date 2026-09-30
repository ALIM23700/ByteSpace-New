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
    <footer className="bg-white px-4 pt-12 pb-8 sm:px-5 sm:pt-14">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col gap-10 sm:gap-12 lg:flex-row lg:justify-between">
          
          <div className="w-full lg:max-w-[420px]">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D8F81C]">
                <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-[#0a0a1f]" />
              </span>
              <span className="text-[20px] font-bold text-[#0a0a1f]">
                ByteSpace
              </span>
            </Link>

            <p className="mt-4 max-w-md text-[12px] text-gray-600">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

          
            <form className="mt-8 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full min-w-0 rounded-full border border-gray-200 bg-white px-5 text-[13px] text-gray-700 outline-none placeholder:text-gray-500 focus:border-gray-400 sm:max-w-[270px]"
              />
              <button
                type="submit"
                className="h-11 w-full shrink-0 rounded-full bg-[#D8F81C] px-7 text-[14px] font-medium text-black transition hover:brightness-95 sm:w-auto"
              >
                Search
              </button>
            </form>

            <p className="mt-5 max-w-[260px] text-[11px] leading-4 text-gray-600">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

        
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-x-10 lg:gap-x-14">
            {columns.map((col, i) => (
              <ul
                key={i}
                className={
                  i === columns.length - 1
                    ? 
                      "col-span-2 grid grid-cols-2 gap-x-8 gap-y-4 sm:col-span-1 sm:block sm:space-y-5"
                    : "space-y-4 sm:space-y-5"
                }
              >
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-gray-200 pt-5 text-[11px] text-gray-600 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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