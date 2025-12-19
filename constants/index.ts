export interface NavItem {
    label: string;
    href: string;
    icon?: boolean;
}

export interface NavLink {
    label: string;
    href: string;
    dropdownItems?: NavItem[];
}

export const NAV_LINKS: NavLink[] = [
    {
        label: "NETWORK",
        href: "#",
        dropdownItems: [
            { label: "WEB WALLET", href: "#", icon: true },
            { label: "EXPLORER", href: "#", icon: true },
            { label: "RUN A NODE", href: "#", icon: true },
            { label: "LEARN", href: "#", icon: true },
        ],
    },
    {
        label: "DEVELOPERS",
        href: "#",
    },
    {
        label: "COMMUNITY",
        href: "#",
    },
    {
        label: "ABOUT",
        href: "#",
        dropdownItems: [
            { label: "TEAM", href: "#" },
            { label: "STORY", href: "#" },
            { label: "CAREERS", href: "#" },
            { label: "NEWS", href: "#" },
        ],
    },
];

export const PARTNER_LOGOS = [
    { src: "/images/hero/coindesk.svg", alt: "Coindesk" },
    { src: "/images/hero/crypto-briefing.svg", alt: "Crypto Briefing" },
    { src: "/images/hero/venture-beat.svg", alt: "Venture Beat" },
    { src: "/images/hero/fd.svg", alt: "FD" },
    { src: "/images/hero/forbes.svg", alt: "Forbes" },
    { src: "/images/hero/tnw.svg", alt: "TNW" },
];
