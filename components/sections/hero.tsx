"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PARTNER_LOGOS } from "@/constants";
import { initHeroAnimation } from "@/animations/hero";

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sunRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = initHeroAnimation(".hero-container", ".hero-sun");
        return () => ctx.revert();
    }, []);

    return (
        <section className="relative w-full md:pt-12 pt-20 pb-10 px-4 flex justify-center">
            <div
                ref={containerRef}
                className="hero-container relative w-full max-w-[1440px] aspect-1440/950 min-h-[700px] md:rounded-[30px] rounded-[20px] overflow-hidden bg-[#101010] flex flex-col items-center justify-between py-16 px-8"
            >
                {/* Background Layers */}
                <div className="absolute inset-0 z-0 text-white">
                    {/* Grid/Lines Background */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/hero/lines-bg.svg"
                            alt="Grid background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Sun/Light Source */}
                    <div
                        ref={sunRef}
                        className="hero-sun absolute bottom-20 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-[200px] md:max-w-[800px] aspect-square"
                    >
                        <Image
                            src="/images/hero/sun.svg"
                            alt="Sun light"
                            fill
                            className="hidden md:block object-contain translate-y-1/2"
                        />
                        <Image
                            src="/images/hero/sun-mobile.svg"
                            alt="Sun light mobile"
                            fill
                            className="block md:hidden object-contain translate-y-1/2"
                        />
                    </div>

                    {/* Bottom Dunes/Waves */}
                    <div className="absolute md:bottom-0 -bottom-20 left-0 right-0 h-1/2">
                        <Image
                            src="/images/hero/bottom-dunes.png"
                            alt="Dunes background"
                            fill
                            className="hidden md:block object-cover object-bottom"
                        />
                        <Image
                            src="/images/hero/dunes-mobile.png"
                            alt="Dunes background mobile"
                            fill
                            className="block md:hidden object-contain object-bottom"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 w-full flex flex-col md:items-center items-start md:text-center text-left md:mt-12 mt-0">
                    <h1 className="text-[40px] md:text-[80px] font-normal leading-[1.1] tracking-tight text-[#E5E5E5] max-w-[1000px]">
                        Regulated <span className="text-[#3E7FFF] italic font-serif lowercase">and</span>{" "}
                        <span className="">Decentralized</span> Finance
                        <span className="text-[#3E7FFF]">.</span>
                    </h1>

                    <div className="flex flex-row md:items-center items-start gap-4 md:mt-[450px] mt-10">
                        <Link
                            href="#"
                            className="md:px-8 py-2 px-1.5 rounded-full bg-white text-black md:text-[16px] text-[10px] font-bold tracking-[0.2em] hover:bg-white/90 transition-all uppercase"
                        >
                            Mainnet Explorer
                        </Link>
                        <Link
                            href="#"
                            className="md:px-8 py-2 px-1.5 rounded-full bg-white text-black md:text-[16px] text-[10px] font-bold tracking-[0.2em] hover:bg-white/90 transition-all uppercase"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Partner Logos */}
                <div className="relative z-10 w-full flex flex-nowrap items-center justify-between gap-8 md:gap-4 px-4 mt-auto">
                    {PARTNER_LOGOS.map((logo) => (
                        <div key={logo.alt} className="relative shrink-0 h-6 w-32 transition-all">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;