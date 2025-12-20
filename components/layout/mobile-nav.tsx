"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { HiArrowRight, HiArrowUpRight } from "react-icons/hi2";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { NAV_LINKS, NavLink } from "@/constants";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
    const [activeSubMenu, setActiveSubMenu] = useState<NavLink | null>(null);

    const handleClose = () => {
        setActiveSubMenu(null);
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 z-[100] bg-[#E2DFF9] transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <Link href="/" className="relative w-24 h-6" onClick={handleClose}>
                        <Image
                            src="/images/logo.svg"
                            alt="Dusk Logo"
                            fill
                            className="object-contain"
                        />
                    </Link>
                    <button onClick={handleClose} className="p-2">
                        <IoClose className="text-4xl" />
                    </button>
                </div>

                <div className="flex-1 px-6 pb-12 overflow-y-auto">
                    {activeSubMenu ? (
                        /* Submenu View */
                        <div className="mt-4 animate-in slide-in-from-right duration-300">
                            <button
                                onClick={() => setActiveSubMenu(null)}
                                className="flex items-center gap-2 text-[14px] font-medium text-black mb-12"
                            >
                                <HiOutlineArrowLeft /> Back
                            </button>

                            <h2 className="text-[12px] font-bold tracking-[0.2em] text-black/40 uppercase mb-8 ml-1">
                                {activeSubMenu.label}
                            </h2>

                            <ul className="flex flex-col gap-10">
                                {activeSubMenu.dropdownItems?.map((item) => (
                                    <li key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="text-[32px] font-medium text-black flex items-center justify-between group"
                                            onClick={handleClose}
                                        >
                                            {item.label}
                                            {item.icon && <HiArrowUpRight className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity" />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        /* Main Menu View */
                        <div className="animate-in slide-in-from-left duration-300">
                            {/* Search Bar */}
                            <div className="relative mt-4 mb-12">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full bg-white rounded-full py-4 pl-6 pr-12 text-[16px] font-normal focus:outline-none shadow-sm placeholder:text-gray-400"
                                />
                                <FiSearch className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-black" />
                            </div>

                            <nav>
                                <ul className="flex flex-col gap-10">
                                    {NAV_LINKS.map((link) => (
                                        <li key={link.label}>
                                            {link.dropdownItems ? (
                                                <button
                                                    onClick={() => setActiveSubMenu(link)}
                                                    className="w-full text-[32px] font-medium text-black flex items-center justify-between group"
                                                >
                                                    {link.label}
                                                    <HiArrowRight className="text-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                                                </button>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className="text-[32px] font-medium text-black flex items-center justify-between"
                                                    onClick={handleClose}
                                                >
                                                    {link.label}
                                                </Link>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )}
                </div>

                {/* Bottom Icon (optional, from screenshot) */}
                <div className="p-6 flex justify-end">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;

