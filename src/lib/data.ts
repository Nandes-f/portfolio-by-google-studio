import type { LucideIcon } from 'lucide-react';
import { Smartphone, Code, Database, Cloud, Network, CreditCard, Brain, Bot, MapPin, Briefcase, GraduationCap, Award, Tv } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export const portfolioData = {
  name: "Kian Arnold",
  title: "Mobile Application Developer",
  location: "Toronto, Canada",
  summary: "Mobile Developer with 6 years of experience building high-performance applications for iOS and Android using Flutter, React Native, Swift, and Kotlin. Skilled in API integration, Firebase, AWS, Google Cloud, SQLite, and Realm. Passionate about intuitive, scalable, and secure mobile experiences.",
  defaultSummaryForAI: "Mobile Developer with 6 years of experience building high-performance applications for iOS and Android using Flutter, React Native, Swift, and Kotlin. Skilled in API integration, Firebase, AWS, Google Cloud, SQLite, and Realm. Passionate about intuitive, scalable, and secure mobile experiences.",
  skills: {
    frameworksLanguages: [
      { name: "Flutter", icon: Smartphone },
      { name: "React Native", icon: Smartphone },
      { name: "SwiftUI", icon: Code },
      { name: "Kotlin", icon: Code },
      { name: "Dart", icon: Code },
      { name: "Swift", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "TypeScript", icon: Code },
    ] as Skill[],
    toolsServices: [
      { name: "Firebase", icon: Database },
      { name: "GraphQL", icon: Network },
      { name: "RESTful APIs", icon: Network },
      { name: "AWS Amplify", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
      { name: "SQLite", icon: Database },
      { name: "Realm", icon: Database },
      { name: "Alamofire", icon: Network },
      { name: "Retrofit", icon: Network },
    ] as Skill[],
    uiArchitecture: [
      { name: "Provider/Redux", icon: Brain },
      { name: "MVVM", icon: Code },
      { name: "UIKit", icon: Tv },
      { name: "Android Jetpack", icon: Code },
    ] as Skill[],
    paymentNotifications: [
      { name: "Apple Pay", icon: CreditCard },
      { name: "Google Pay", icon: CreditCard },
      { name: "Stripe", icon: CreditCard },
      { name: "Push Notifications", icon: Smartphone },
    ] as Skill[],
  },
  experience: [
    {
      role: "Mobile Developer",
      company: "Netpeak",
      duration: "Apr 2023 – Apr 2024",
      location: "Ada, USA",
      description: [
        "Built cross-platform Flutter and React Native apps with real-time data syncing via Firebase & Google Maps.",
        "Optimized performance using Provider/Redux and implemented push notifications & payment gateways.",
        "Managed local storage with SQLite & Realm; led Agile sprints with UI/UX teams.",
      ],
    },
    {
      role: "iOS Developer",
      company: "SaltStack For DevOps",
      duration: "Jul 2021 – Mar 2023",
      location: "Lehi, USA",
      description: [
        "Developed Swift/SwiftUI apps, improving engagement by 15% via Firebase & GraphQL integration.",
        "Transitioned codebase from Objective-C to Swift, reducing bugs by 25%.",
      ],
    },
    {
      role: "Android Developer",
      company: "Juvo",
      duration: "Nov 2019 – Jun 2021",
      location: "San Francisco, USA",
      description: [
        "Reduced crash rates by 30% with robust error handling; delivered 15 Kotlin apps in a year.",
        "Enhanced retention by 15% and decreased load times by 30% through performance profiling.",
      ],
    },
    {
      role: "Android Developer",
      company: "Codevidhya",
      duration: "Sep 2017 – Dec 2018",
      location: "Roy, USA",
      description: [
        "Built responsive Java/Kotlin apps with MVVM and Room DB; integrated REST APIs & Firebase.",
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: "Flutter HealthTracker",
      description: "Flutter + Firebase app with offline caching, real-time chat, and custom charts.",
      technologies: ["Flutter", "Firebase", "Offline Caching", "Real-time Chat"],
      imageUrl: "https://picsum.photos/400/300?image=101",
      imageHint: "health app interface",
    },
    {
      name: "ARKit ML Demo",
      description: "iOS ARKit & CoreML prototype with scalable Node.js/AWS backend for 200% concurrent user growth.",
      technologies: ["iOS", "ARKit", "CoreML", "Node.js", "AWS"],
      imageUrl: "https://picsum.photos/400/300?image=102",
      imageHint: "augmented reality mobile",
    },
    {
      name: "GeoNav App",
      description: "React Native app with Google Maps API, push notifications, and offline route caching.",
      technologies: ["React Native", "Google Maps API", "Push Notifications", "Offline Caching"],
      imageUrl: "https://picsum.photos/400/300?image=103",
      imageHint: "navigation app screen",
    },
  ] as Project[],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of Toronto",
      duration: "2013 – 2017",
    },
  ] as Education[],
  certifications: [
    { name: "Software Engineer", issuer: "HackerRank" },
    { name: "Frontend (React)", issuer: "HackerRank" },
    { name: "JavaScript", issuer: "HackerRank" },
  ] as Certification[],
  navLinks: [
    { href: "#hero", label: "About", icon: Bot },
    { href: "#skills", label: "Skills", icon: Brain },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: Smartphone },
    { href: "#education", label: "Education", icon: GraduationCap },
    { href: "#ai-summary", label: "AI Summary", icon: Bot },
  ],
};
