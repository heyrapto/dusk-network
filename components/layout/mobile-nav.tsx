"use client";

import React from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { NAV_LINKS } from "@/constants";

interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed inset-0 z-[100] bg-white transition-all duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex flex-col h-full p-8">
                <div className="flex justify-end">
                    <button onClick={onClose} className="p-2">
                        <IoClose className="text-3xl" />
                    </button>
                </div>

                <nav className="mt-12">
                    <ul className="flex flex-col gap-8">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-2xl font-bold tracking-widest text-black hover:text-blue-500 transition-colors uppercase"
                                    onClick={onClose}
                                >
                                    {link.label}
                                </Link>
                                {link.dropdownItems && (
                                    <ul className="mt-4 ml-4 flex flex-col gap-4">
                                        {link.dropdownItems.map((item) => (
                                            <li key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    className="text-lg font-medium text-gray-600 hover:text-blue-500 transition-colors"
                                                    onClick={onClose}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;
