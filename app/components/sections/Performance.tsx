"use client";

import React, { useEffect, useRef } from "react";
import { Zap, TrendingUp, Gauge } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Animated Score Circle Component
const AnimatedScoreCircle = ({ score, label, isMobile = false }: { score: number; label: string; isMobile?: boolean }) => {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const size = isMobile ? 96 : 64;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;

    if (!circle || !text) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circle.closest("section"),
        start: "top 70%",
        once: true,
      },
    });

    // Reset to initial state
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
      stroke: "#ef4444",
    });
    gsap.set(text, { textContent: "0" });

    // Animate to green and fill
    tl.to(
      circle,
      {
        stroke: "#10b981",
        duration: 0.5,
      },
      0
    )
      .to(
        circle,
        {
          strokeDashoffset: circumference - (circumference * score) / 100,
          duration: 1.5,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        { current: 0 },
        {
          current: score,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: function () {
            text.textContent = Math.round(this.targets()[0].current).toString();
          },
        },
        0.2
      );
  }, [circumference, score]);

  return (
    <div className="text-center">
      <div className={`relative mx-auto mb-2`} style={{ width: `${size}px`, height: `${size}px` }}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="4"
          />
          <circle
            ref={circleRef}
            cx="50"
            cy="50"
            r="45"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
          />
          <text
            ref={textRef}
            x="50"
            y="55"
            textAnchor="middle"
            fill="currentColor"
            fontSize={isMobile ? "28" : "20"}
            fontWeight="bold"
            className="text-accent"
          >
            0
          </text>
        </svg>
      </div>
      <p className="text-xs font-medium text-muted-foreground">{label}</p>
    </div>
  );
};

// Large Animated Score Component
const LargeAnimatedScore = () => {
  const circleRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const circle = circleRef.current;
    const text = textRef.current;

    if (!circle || !text) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: circle.closest("section"),
        start: "center center",
        once: true,
      },
    });

    // Reset to initial state
    gsap.set(circle, {
      strokeDasharray: circumference,
      strokeDashoffset: circumference,
      stroke: "#ef4444",
    });
    gsap.set(text, { textContent: "0" });

    // Animate to green and fill
    tl.to(
      circle,
      {
        stroke: "#10b981",
        duration: 0.5,
      },
      0
    )
      .to(
        circle,
        {
          strokeDashoffset: circumference - (circumference * 100) / 100,
          duration: 1.5,
          ease: "power2.out",
        },
        0.2
      )
      .to(
        { current: 0 },
        {
          current: 100,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: function () {
            text.textContent = Math.round(this.targets()[0].current).toString();
          },
        },
        0.2
      );
  }, [circumference]);

  return (
    <div className="relative w-24 h-24 mx-auto mb-3">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="4"
        />
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <text
          ref={textRef}
          x="50"
          y="55"
          textAnchor="middle"
          fill="currentColor"
          fontSize="28"
          fontWeight="bold"
          className="text-accent"
        >
          0
        </text>
      </svg>
    </div>
  );
};

export default function Performance() {
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    {
      number: "100%",
      label: "Satisfaction Guaranteed",
    },
    {
      number: "100",
      label: "Page Speed Scores",
    },
    {
      number: "5/5",
      label: "Google Reviews",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Better load times means more traffic and more",
      description: "site conversions over time.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Faster websites can help improve SEO and",
      description: "your Google ads performance.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Our sites load instantly in under 1 second or",
      description: "less, which leads to a better user experience and conversions.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />

      <div className="container-cls relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 animate-slideInLeft">
            {/* Section Label */}
            <div>
              <span className="section-label">PERFORMANCE</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-4">
                WE BUILD <span className="gradient-text">BETTER</span> WEBSITES THAT PERFORM
              </h2>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {feature.title}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="btn-primary">GET STARTED TODAY</button>
            </div>
          </div>

          {/* Right - Screenshot/Mockup */}
          <div className="flex items-center justify-center animate-slideInRight">
            <div className="relative w-full max-w-md">
              {/* Page Speed Mockup Card */}
              <div className="bg-card-bg border border-card-border rounded-3xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-card-border">
                  <div className="flex gap-1">
                    <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      Mobile
                    </span>
                    <span className="text-xs px-2 py-1 rounded text-muted-foreground">
                      Desktop
                    </span>
                  </div>
                </div>

                {/* Scores Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Performance", score: 100 },
                    { label: "Accessibility", score: 100 },
                    { label: "Best Practices", score: 100 },
                    { label: "SEO", score: 100 },
                  ].map((item) => (
                    <AnimatedScoreCircle key={item.label} score={item.score} label={item.label} />
                  ))}
                </div>

                {/* Overall Score */}
                <div className="flex items-center justify-center mb-8 py-6 border-t border-card-border">
                  <div className="text-center">
                    <LargeAnimatedScore />
                    <p className="text-sm font-semibold">Performance</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-3 text-xs border-t border-card-border pt-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">First Contentful Paint</span>
                    <span className="font-semibold text-accent">1.0 s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Largest Contentful Paint</span>
                    <span className="font-semibold text-accent">1.3 s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Blocking Time</span>
                    <span className="font-semibold text-accent">10 ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumulative Layout Shift</span>
                    <span className="font-semibold text-accent">0.003</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Speed Index</span>
                    <span className="font-semibold text-accent">1.0 s</span>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
