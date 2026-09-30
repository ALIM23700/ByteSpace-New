"use client";

import React, { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="relative z-[100]">
      {/* DESKTOP (1024px+) : ager moto-i */}
      <div className="bg-[#003BE2] h-24 hidden lg:flex justify-around items-center">
        <img src="/mylogo.png" alt="Logo" className="h-12 w-48" />
        <div className="text-white flex gap-12">
          <Link href="/">Home</Link>
          <Link href="/cources">Cources</Link>
          <Link href="/creators">Creators</Link>
        </div>
        <div className="text-white flex gap-12">
          <Link href="/signin">Sign In</Link>
          <Link href="/joinus">Join Us</Link>
          <Link href="/cart">
            <ShoppingBag size={22} color="white" strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* MOBILE / TABLET (1024px er niche) */}
      <div className="bg-[#003BE2] h-24 flex items-center justify-between px-4 sm:px-8 lg:hidden">
        <Link href="/" onClick={close}>
          <img
            src="/mylogo.png"
            alt="Logo"
            className="h-10 w-auto max-w-[160px] object-contain sm:h-12 sm:max-w-[192px]"
          />
        </Link>

        <div className="flex items-center gap-5 text-white">
          <Link href="/cart" aria-label="Cart" onClick={close}>
            <ShoppingBag size={22} color="white" strokeWidth={2} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 right-0 top-24 bg-[#003BE2] px-4 pb-6 pt-2 text-white shadow-lg sm:px-8 lg:hidden">
          <nav className="flex flex-col divide-y divide-white/15">
            <Link href="/" onClick={close} className="py-3">Home</Link>
            <Link href="/cources" onClick={close} className="py-3">Cources</Link>
            <Link href="/creators" onClick={close} className="py-3">Creators</Link>
          </nav>

          <div className="mt-4 flex gap-3">
            <Link
              href="/signin"
              onClick={close}
              className="flex-1 rounded-2xl border border-white/40 py-3 text-center"
            >
              Sign In
            </Link>
            <Link
              href="/joinus"
              onClick={close}
              className="flex-1 rounded-2xl bg-[#D4FB20] py-3 text-center font-medium text-black"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;