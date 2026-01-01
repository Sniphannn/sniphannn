"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    content:
      "Working with this developer was an absolute pleasure. They delivered our e-commerce platform on time and exceeded all expectations. Our sales have increased by 40% since launch!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, Design Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    content:
      "The attention to detail and technical expertise is remarkable. They transformed our outdated website into a modern, high-performing platform that our clients love.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    content:
      "I've worked with many developers, but this one stands out. Their communication is excellent, and they truly understand business needs. Highly recommend!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    content:
      "From concept to launch, they guided us through every step. The final product was exactly what we envisioned, and the ongoing support has been fantastic.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Don&apos;t just take my word for it. Here&apos;s what some of my clients have
            to say about working together.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-card-bg border border-card-border rounded-3xl p-8 md:p-12 text-center">
            {/* Quote Icon */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full gradient-bg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
            </div>

            {/* Content */}
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              &ldquo;{testimonials[activeIndex].content}&rdquo;
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#fbbf24"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-14 h-14 rounded-full object-cover border-2 border-primary"
              />
              <div className="text-left">
                <div className="font-semibold">{testimonials[activeIndex].name}</div>
                <div className="text-sm text-muted">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-card-border transition-colors flex items-center justify-center"
              aria-label="Previous testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 gradient-bg"
                      : "bg-muted-foreground hover:bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-secondary hover:bg-card-border transition-colors flex items-center justify-center"
              aria-label="Next testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-card-border">
          {[
            { number: "100%", label: "Satisfaction Guaranteed" },
            { number: "100", label: "Page Speed Score" },
            { number: "5/5", label: "Average Rating" },
            { number: "24/7", label: "Support Available" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                {item.number}
              </div>
              <div className="text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
