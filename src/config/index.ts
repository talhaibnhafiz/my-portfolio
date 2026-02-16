import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Talha Ibn Hafiz — CS Enthusiast",
  author: "Talha Ibn Hafiz",
  description:
    "High School Student (Science) at Rajshahi Govt. City College, Rajshai, Bangladesh",
  lang: "en",
  siteLogo: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/talhaibnhafiz" },
    { text: "Github", href: "https://github.com/talhaibnhafiz" },
    { text: "Phone", href: "01628112832" },
  ],
  socialImage: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Talha Ibn Hafiz",
    specialty: "CS Enthuasiast",
    summary:
      "High School Student (Science) at Rajshahi Govt. City College, Rajshai, Bangladesh.",
    email: "talhaibnhafiz2007@email.com",
  },
  experience: [
    {
      company: "HSC",
      position: "GPA:0.00/0.00",
      startDate: "Aug 24",
      endDate: "July 26",
      summary: ["At Rajshahi Govt. City College"],
    },
    {
      company: "SSC",
      position: "GPA:5.00/5.00",
      startDate: "Jan 2016",
      endDate: "May 2024",
      summary: ["At Seroil Govt. High School"],
    }, // এখানে কমা এবং ব্র্যাকেট ঠিক করা হয়েছে
  ],
  projects: [
    {
      name: "Integrated Eco Factory",
      summary: "Developed an automated industrial system focused on reducing energy waste and monitoring environmental pollutants using Sensor Networks.Integrated real-time resource management through Wireless Communication platforms to ensure sustainable manufacturing processes.Designed a centralized control system to optimize factory operations and minimize carbon footprint.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Talha Ibn Hafiz, an Intermediate last year Student.
    `,
    image: "/7d1d28a3-b269-4562-9f32-356c52708d8c.jpg",
  },
};

// #5755ff
