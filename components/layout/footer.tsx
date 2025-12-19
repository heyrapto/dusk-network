"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
    {
        title: "NEWS",
        links: [
            { label: "NEWS", href: "#" },
            { label: "CAREERS", href: "#" },
            { label: "CONTACT", href: "#" },
            { label: "MEDIA KIT", href: "#" },
        ],
    },
    {
        title: "COMMUNITY",
        links: [
            { label: "DISCORD", href: "#" },
            { label: "TWITTER", href: "#" },
            { label: "FORUM", href: "#" },
        ],
    },
    {
        title: "SOCIAL",
        links: [
            { label: "LINKEDIN", href: "#" },
            { label: "YOUTUBE", href: "#" },
            { label: "REDDIT", href: "#" },
        ],
    },
];

const EXCHANGE_LOGOS = [
    { src: "/images/footer/binance.svg", alt: "Binance" },
    { src: "/images/footer/bitvavo.svg", alt: "Bitvavo" },
    { src: "/images/footer/bybit.svg", alt: "Bybit" },
    { src: "/images/footer/gate.svg", alt: "Gate" },
    { src: "/images/footer/kucoin.svg", alt: "Kucoin" },
];

const Footer = () => {
    return (
        <footer className="w-full bg-[#101010] px-4 pb-12">
            <div
                className="relative w-full max-w-[1440px] mx-auto bg-[#EBEBEB] rounded-[40px] overflow-hidden p-12 md:p-24 flex flex-col"
                style={{
                    backgroundImage: "url('/images/footer/footer-bg.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom 81px center",
                }}
            >
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between gap-20 relative z-10">
                    {/* Left: Headline */}
                    <div className="max-w-[500px]">
                        <h2 className="text-[40px] md:text-[64px] font-normal leading-[1.1] text-black">
                            Regulated <span className="text-[#3E7FFF] italic font-serif lowercase">and</span> <br />
                            Decentralized Finance
                        </h2>
                    </div>

                    {/* Right: Links and Exchanges */}
                    <div className="flex flex-col md:flex-row gap-20">
                        {/* Links Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                            {FOOTER_LINKS.map((group) => (
                                <div key={group.title} className="flex flex-col gap-6">
                                    {group.links.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            className="text-[11px] font-bold tracking-[0.2em] text-black/60 hover:text-black transition-colors uppercase"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Exchanges */}
                        <div className="flex flex-col gap-4">
                            {EXCHANGE_LOGOS.map((logo) => (
                                <div key={logo.alt} className="relative h-6 w-32 grayscale opacity-60 hover:opacity-100 transition-all">
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="mb-100 mt-24 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <p className="text-[14px] md:text-[16px] font-medium text-black">
                        Want to stay informed?
                    </p>
                    <div className="flex w-full max-w-[400px] items-center rounded-full bg-black/5 p-1 transition-all focus-within:ring-1 focus-within:ring-black/10">
                        <input
                            type="email"
                            placeholder="Email"
                            className="flex-1 bg-transparent px-6 py-2.5 text-[12px] outline-none placeholder:text-black/30 placeholder:uppercase placeholder:tracking-[0.2em] placeholder:font-bold"
                        />
                        <button className="rounded-full bg-white px-8 py-2.5 text-[10px] font-bold tracking-[0.2em] text-black transition-colors hover:bg-black/5 uppercase shadow-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-auto -mb-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-black/40 uppercase">
                        © 2025 Dusk. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-12">
                        <Link
                            href="#"
                            className="text-[10px] font-bold tracking-[0.2em] text-black/40 hover:text-black transition-colors uppercase"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-[10px] font-bold tracking-[0.2em] text-black/40 hover:text-black transition-colors uppercase"
                        >
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;