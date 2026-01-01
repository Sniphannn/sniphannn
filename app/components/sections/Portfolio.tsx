"use client";

import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Analytics dashboard with real-time data visualization and user management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "Chart.js"],
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "Web Development",
    description: "Modern restaurant website with online ordering and reservation system.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    tags: ["Next.js", "Sanity CMS", "Framer Motion"],
    link: "#",
  },
  {
    id: 4,
    title: "Healthcare App",
    category: "Mobile App",
    description: "Telemedicine platform connecting patients with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Real Estate Platform",
    category: "Web Development",
    description: "Property listing platform with advanced search and virtual tours.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "Mapbox"],
    link: "#",
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "UI/UX Design",
    description: "Creative portfolio showcasing photography and design work.",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?w=800&q=80",
    tags: ["React", "GSAP", "Three.js"],
    link: "#",
  },
];

const categories = ["All", "Web Development", "UI/UX Design", "Mobile App"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="container-cls mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Take a look at some of my recent projects. Each one was crafted with
            attention to detail and a focus on delivering real business value.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "gradient-bg text-white"
                  : "bg-secondary text-muted hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              className="group block rounded-2xl overflow-hidden bg-card-bg border border-card-border card-hover animate-fadeInUp opacity-0"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* View Button */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-white text-sm font-medium">View Project</span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
