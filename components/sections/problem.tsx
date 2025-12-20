"use client";

import React from "react";
import Image from "next/image";

const PAIN_POINTS = [
    "Issuers only have access to fragmented liquidity",
    "Institutions must retain custody of users' assets to ensure legitimate and compliant service transactions",
    "Classic users cannot access and compose all services. Crypto users do not have access to asset-backed tokens",
];

const ProblemSection = () => {
    return (
        <section className="w-full py-24 px-4 overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-8 flex flex-col items-start">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-px bg-black"></div>
                    <span className="text-[11px] font-bold tracking-[0.2em] text-black uppercase">The Problem</span>
                </div>

                <h2 className="text-[40px] md:text-[80px] font-normal leading-[1.1] text-black mb-24">
                    <span className="text-[#3E7FFF]">Institution</span>-Centric <br />
                    Landscape
                </h2>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Illustration */}
                    <div className="relative w-full aspect-4/3 max-w-[500px]">
                        <Image
                            src="/images/problem-landscape.svg"
                            alt="Problem Landscape Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Points List */}
                    <div className="flex flex-col gap-10">
                        {PAIN_POINTS.map((point, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="mt-1.5 shrink-0">
                                    <Image
                                        src="/images/mission/star.svg"
                                        alt="star"
                                        width={16}
                                        height={16}
                                        className="opacity-60"
                                    />
                                </div>
                                <p className="text-[14px] md:text-[16px] leading-[1.6] text-black/80 max-w-[440px]">
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;