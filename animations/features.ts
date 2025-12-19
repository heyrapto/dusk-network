import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const initFeaturesAnimation = (
    triggerSelector: string,
    targetSelector: string
) => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
        gsap.to(targetSelector, {
            xPercent: -66.66, // Move through 3 views (0, -33.3, -66.6)
            ease: "none",
            scrollTrigger: {
                trigger: triggerSelector,
                pin: true,
                scrub: 1,
                // Calculate end based on 3 views
                end: () => "+=" + (document.querySelector(triggerSelector) as HTMLElement)?.offsetWidth * 2,
            },
        });
    });

    return ctx;
};
