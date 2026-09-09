import React from "react";
import Animated from "../components/Animated";

const About = () => {
  return (
    <section id="about" className="px-auto mt-44">
      <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto">
        {/* Left Content: Image */}
        <Animated scale={0.8} y={0}>
          <img
            src="/assets/about.png"
            alt="Dish"
            className="max-w-137 w-full h-full object-cover rounded-3xl"
          />
        </Animated>

        {/* Right Content: Text Details */}
        <div>
          <Animated scale={0.8} y={0} className="flex items-center gap-2">
            <img src="/assets/iconL.png" alt="icon Left" />
            <span className="font-medium uppercase">Crafted with Passion</span>
            <img src="/assets/iconR.png" alt="icon Right" />
          </Animated>

          <Animated>
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              Experience the Art of Culinary Excellence
            </h2>
          </Animated>

          <Animated delay={0.2}>
            <p className="mt-4.5 text-zinc-600 max-w-sm">
              Discover a world of flavors where every dish is a masterpiece of
              culinary artistry.
            </p>
          </Animated>

          <Animated className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
            <img
              src="/assets/about.png"
              alt="Bistro Royal Location Preview"
              className="size-15 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
              <p className="font-medium">Bistro Royal, NY</p>
              <a href="#">View on Map</a>
            </div>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;
