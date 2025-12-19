"use client";

import React from "react";
import Image from "next/image";

const INVESTORS = [
    "COSIMO X",
    "RR2 CAPITAL",
    "BLOCKWALL MANAGEMENT",
    "BITFINEX",
];

const InvestorsSection = () => {
    return (
        <section className="w-full bg-[#101010] py-48 px-4 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8">
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-24 block">
                    Investors
                </span>

                <div className="flex flex-wrap items-center gap-x-12 gap-y-8 md:gap-x-16 md:gap-y-12">
                    {INVESTORS.map((investor, index) => (
                        <React.Fragment key={investor}>
                            <h2 className="text-[40px] md:text-[80px] font-normal text-white leading-tight tracking-tight">
                                {investor}
                            </h2>
                            {index < INVESTORS.length - 1 && (
                                <div className="relative w-8 h-8 md:w-12 md:h-12 flex-shrink-0">
                                    <Image
                                        src="/images/mission/star.svg"
                                        alt="separator"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorsSection;