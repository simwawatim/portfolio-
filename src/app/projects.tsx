"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

const PROJECTS = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/134/134914.png",
    title: "Real-Time Chat Application",
    desc: "A WhatsApp-style chat platform built with Django, React, Next.js, and Tailwind CSS. Features include real-time messaging, group chats, file sharing, and secure authentication.",
    detailUrl: "https://chat-application-sqxs.vercel.app/",
    githubUrl: "https://github.com/simwawatim/chat-application",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4712/4712106.png",
    title: "AI-Powered Chat Assistant",
    desc: "An intelligent chat app integrating AI models for automated responses, sentiment analysis, and personalized conversation flows. Built with Django, React, and Tailwind CSS.",
    detailUrl: "https://tim-chat-ai-frontend-nextjs.vercel.app/",
    githubUrl: "https://github.com/simwawatim/tim-chat-ai-frontend-nextjs",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4290/4290854.png",
    title: "E-commerce Platform",
    desc: "A full-featured online store with product management, shopping cart, payment gateway integration, and order tracking. Developed using Django, Next.js, and Tailwind CSS.",
    detailUrl: "https://ecom-two-ashen.vercel.app/customer/dashboard",
    githubUrl: "https://github.com/simwawatim/erp-commerce-next-js-tsx",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/3176/3176369.png",
    title: "ERP Management System",
    desc: "A comprehensive ERP solution for managing inventory, sales, HR, and finance modules. Built with Django REST Framework, React, and Tailwind CSS for efficiency and scalability.",
    detailUrl: "https://ecom-two-ashen.vercel.app/login",
    githubUrl: "https://github.com/simwawatim/erp-commerce-next-js-tsx",
  },
];


export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
