"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BUILT_FOR_ITEMS = [
    {
        title: "Businesses",
        image: "/images/mission/1.svg",
        description: "Easily access financing, trade and automate via smart contracts, outsource costly processes.",
    },
    {
        title: "Institutions",
        image: "/images/mission/2.svg",
        description: "Access instant clearance and settlement, use automated compliance, and reduce the fragmentation of liquidity.",
    },
    {
        title: "Users",
        image: "/images/mission/3.svg",
        description: "Unprecedented access to diverse, institutional-level assets, directly from a wallet and retaining self-custody.",
    },
];

const BuiltForSection = () => {
    return (
        <section className="w-full py-20 overflow-hidden max-w-[1440px] mx-auto">
            {/* Ticker Bar */}
            <div className="border-t border-b border-black/10 py-3 mb-24 overflow-hidden flex whitespace-nowrap">
                <div className="animate-marquee flex items-center gap-10">
                    {[...Array(10)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">Built for Businesses</span>
                            <Image src="/images/mission/star.svg" alt="star" width={12} height={12} />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">Built for Institutions</span>
                            <Image src="/images/mission/star.svg" alt="star" width={12} height={12} />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">Built for Users</span>
                            <Image src="/images/mission/star.svg" alt="star" width={12} height={12} />
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 mb-20">
                    {BUILT_FOR_ITEMS.map((item) => (
                        <div key={item.title} className="flex flex-col items-start text-left">
                            <h3 className="text-[32px] md:text-[48px] font-normal text-black mb-8">{item.title}</h3>
                            <div className="relative w-full aspect-square max-w-[280px] mb-12">
                                <Image src={item.image} alt={item.title} fill className="object-contain" />
                            </div>
                            <p className="text-[14px] md:text-[16px] leading-[1.6] text-black/80 max-w-[320px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Use Cases Button */}
                <div className="flex justify-end mt-12">
                    <Link
                        href="#"
                        className="group flex items-center gap-3 bg-white px-8 py-3.5 rounded-full border border-black/5 shadow-sm hover:bg-gray-50 transition-all"
                    >
                        <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">Use Cases</span>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="group-hover:translate-x-1 transition-transform"
                        >
                            <path
                                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Link>
                </div>

                <div className="absolute -bottom-20 left-8 right-8 h-px bg-black/10"></div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default BuiltForSection;