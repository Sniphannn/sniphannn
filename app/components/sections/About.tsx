"use client";

import React from "react";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slideInLeft opacity-0" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden glow">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Developer"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>

              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-card-bg border border-card-border rounded-2xl p-6 shadow-xl">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted">Years Experience</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slideInRight opacity-0" style={{ animationDelay: "0.3s" }}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Passionate About Creating{" "}
              <span className="gradient-text">Digital Excellence</span>
            </h2>

            <div className="space-y-4 text-muted mb-8">
              <p>
                Hi! I&apos;m a full-stack developer with a passion for building
                beautiful, performant web applications. With over 5 years of
                experience, I&apos;ve helped businesses of all sizes establish their
                online presence and achieve their digital goals.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user
                experiences that not only look great but also drive results. My
                approach combines technical expertise with a deep understanding of
                business needs.
              </p>
              <p>
                When I&apos;m not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and tutorials.
              </p>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Technologies I Work With</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-card-bg border border-card-border text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Let&apos;s Work Together
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
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Download CV
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" x2="12" y1="15" y2="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
