"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Frontend Web Development",
    children:
      "I craft engaging, responsive, and user-friendly interfaces using modern frameworks like React.js and styling tools like Tailwind CSS. My goal is to ensure every design is intuitive, visually appealing, and optimized for all devices.",
  },
  {
    icon: SwatchIcon,
    title: "Backend Development",
    children:
      "From robust APIs to secure data management, I build reliable backend systems using Django, Spring Boot, and Laravel. I focus on scalability, security, and clean architecture to keep applications running smoothly.",
  },
  {
    icon: HashtagIcon,
    title: "System Integration",
    children:
      "I connect different platforms, services, and APIs into a seamless ecosystem. Whether it’s integrating payment gateways, third-party tools, or internal systems, I ensure they communicate efficiently and securely.",
  },
  {
    icon: EyeIcon,
    title: "DevOps & Deployment",
    children:
      "I automate workflows, manage CI/CD pipelines, and optimize server infrastructure to ensure smooth deployments. With a focus on performance and uptime, I bridge the gap between development and operations.",
  },
  {
    icon: FingerPrintIcon,
    title: "Cybersecurity",
    children:
      "I implement best-in-class security measures, from data encryption and access control to vulnerability scanning and penetration testing, safeguarding applications against modern threats.",
  },
  {
    icon: GlobeAltIcon,
    title: "Networking",
    children:
      "I design, configure, and troubleshoot network infrastructures to ensure seamless connectivity, high availability, and secure data transmission across systems and devices.",
  },
  {
    icon: DocumentTextIcon,
    title: "Linux Server Administration",
    children:
      "I manage and maintain Linux-based servers, handling setup, security hardening, performance optimization, and troubleshooting to ensure reliable and secure operations.",
  },
];


export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase">
          my skills
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4">
          What I do
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
        >
          I&apos;m not just a developer; I&apos;m a digital dreamweaver.
          Crafting immersive online experiences is not just a job but my
          calling. Discover below how I can help you.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
