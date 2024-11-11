"use client";
import React, { useState, useEffect } from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroContent = [
    {
      welcome: "Welcome to T Wilson Builders",
      title: "Quality Building Solutions for Your Dream Home",
    },
    {
      welcome: "Expert Building Services",
      title: "Crafting Beautiful Spaces That Last a Lifetime",
    },
    {
      welcome: "Renovation Specialists",
      title: "Transform Your Space with Our Expertise",
    },
  ];

  const socialLinks = [
    { name: "Facebook", Icon: Facebook, url: "#" },
    { name: "YouTube", Icon: Youtube, url: "#" },
    { name: "Instagram", Icon: Instagram, url: "#" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header - Logo and Menu aligned */}
      <header className="relative z-20 px-8 pt-8 flex justify-between items-center">
        <a href="/" className="inline-block">
          <img
            src="/assets/images/logo.png"
            alt="T Wilson Builders"
            className="h-40 w-auto"
          />
        </a>
      </header>

      {/* Social Media Icons */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-20">
        {socialLinks.map(({ name, Icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center
              text-white hover:text-white hover:border-white/40 transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Main Content with Animation */}
      <div className="relative z-10 container mx-auto px-8 pt-20">
        <div className="max-w-4xl">
          {/* Welcome Text */}
          <p className="text-orange text-lg uppercase tracking-[0.3em] mb-8 transition-all duration-500 ease-in-out transform">
            {heroContent[currentSlide].welcome}
          </p>

          {/* Main Title */}
          <h1 className="text-white text-7xl font-bold leading-[1.2] mb-12 transition-all duration-500 ease-in-out transform">
            {heroContent[currentSlide].title.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block mr-[0.3em]" // Add space between words
                style={{
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Call to Action Buttons */}
          <div className="flex gap-8 mb-16">
            {" "}
            {/* Increased gap and bottom margin */}
            <a
              href="tel:+64123456789"
              className="px-10 py-4 bg-orange text-white text-lg font-semibold rounded-md hover:bg-orange/90 transition-colors duration-300"
            >
              Call Us
            </a>
            <a
              href="/quote"
              className="px-10 py-4 bg-transparent text-white text-lg font-semibold rounded-md border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-3">
            {" "}
            {/* Increased gap between indicators */}
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-orange w-8" // Made indicator wider when active
                    : "bg-white/20 hover:bg-white/30" // Added hover effect
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;