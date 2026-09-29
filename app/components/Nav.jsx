import React from 'react'
import { ShoppingBag, Search } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
        <div className="bg-[#003BE2] h-24 flex justify-around items-center">
                <img src="mylogo.png" className='h-12 w-48'></img>
                <div className="text-white flex gap-12">
                  <Link href="/">Home</Link>
                  <Link href="/cources">Cources</Link>
                  <Link href="/creators">Creators</Link>
                </div>
                <div className="text-white flex gap-12">
                  <Link href="/signin">Sign In</Link>
                  <Link href="/joinus">Join Us</Link>
                  <Link href="/cart"><ShoppingBag size={22} color="white" strokeWidth={2} /></Link>
                </div>
      </div>
    </div>
  )
}

export default Nav