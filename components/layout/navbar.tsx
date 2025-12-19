"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { NAV_LINKS } from "@/constants";
import MobileNav from "./mobile-nav";

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-center w-full px-4 pt-6 z-50 relative">
                <div className="flex items-center justify-between w-full max-w-[1440px] h-16 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group/nav ring-1 ring-white/20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/logo.svg"
                            alt="Dusk Logo"
                            width={120}
                            height={29}
                            className="h-7 w-auto"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex items-center gap-10">
                        {NAV_LINKS.map((link) => (
                            <li
                                key={link.label}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="text-[11px] font-bold text-black/70 hover:text-black transition-colors tracking-[0.2em] uppercase"
                                >
                                    {link.label}
                                </Link>

                                {/* Dropdown */}
                                {link.dropdownItems && activeDropdown === link.label && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 min-w-[240px] flex flex-col gap-5">
                                            {link.dropdownItems.map((item) => (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    className="flex items-center justify-between text-[11px] font-bold text-black hover:text-[#3E7FFF] transition-colors tracking-widest uppercase"
                                                >
                                                    {item.label}
                                                    {item.icon && (
                                                        <HiOutlineArrowUpRight className="text-lg opacity-40" />
                                                    )}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white rounded-full py-2 pl-6 pr-10 w-48 text-[11px] font-medium focus:outline-none focus:ring-1 focus:ring-blue-400/30 transition-all border border-gray-200/50 shadow-sm placeholder:text-gray-400 placeholder:uppercase placeholder:tracking-widest"
                            />
                            <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-black p-2 bg-white/20 rounded-full"
                        onClick={() => setIsMobileNavOpen(true)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </nav>

            <MobileNav
                isOpen={isMobileNavOpen}
                onClose={() => setIsMobileNavOpen(false)}
            />
        </>
    );
};

export default Navbar;