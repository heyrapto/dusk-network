"use client";

import React from "react";

const MissionSection = () => {
    return (
        <section className="w-full py-32 px-4 relative">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center relative">
                {/* Top Border */}
                <div className="absolute top-0 left-8 right-8 h-px bg-black/10"></div>

                <div className="max-w-[850px] text-center">
                    <p className="text-[24px] md:text-[36px] leading-[1.4] text-black font-normal">
                        Our mission is to unlock economic inclusion by bringing{" "}
                        <span className="text-[#3E7FFF]">institution-level assets</span> to anyone's wallet.
                        Dusk has the only <span className="text-[#3E7FFF]">privacy-first</span> technology to
                        bring classic finance and real-world assets on-chain.
                    </p>
                </div>

                {/* Bottom Border */}
                <div className="absolute bottom-[-128px] left-8 right-8 h-px bg-black/10"></div>
            </div>
        </section>
    );
};

export default MissionSection;