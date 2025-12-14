import React from "react";
import Tooltip from "../components/Tooltip";
import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";
import Header from "../components/Header";

const accordionData = [
  {
    title: "Our Beginnings",
    content:
      "ByteForge Components was founded in 2018 by a group of computer enthusiasts who wanted to make high-quality PC hardware accessible to everyone.",
  },
  {
    title: "What We Offer",
    content:
      "We specialize in GPUs, CPUs, motherboards, storage solutions, and custom-built PCs for gamers, developers, and professionals.",
  },
  {
    title: "Why Choose Us",
    content:
      "Our store focuses on performance, reliability, and expert support, ensuring customers get the right components for their needs.",
  },
];

const carouselData = [
  {
    image: "/images/gpu.jpg",
    title: "Graphics Cards",
    description: "High-performance GPUs for gaming & AI workloads",
  },
  {
    image: "/images/cpu.jpg",
    title: "Processors",
    description: "Latest-gen CPUs from top manufacturers",
  },
  {
    image: "/images/motherboard.jpg",
    title: "Motherboards",
    description: "Reliable boards for every build type",
  },
  {
    image: "/images/ram.jpg",
    title: "Memory (RAM)",
    description: "Fast, efficient memory for multitasking",
  },
  {
    image: "/images/storage.jpg",
    title: "Storage",
    description: "SSD & NVMe solutions for speed and capacity",
  },
  {
    image: "/images/custompc.jpg",
    title: "Custom PC Builds",
    description: "Tailored systems built to your requirements",
  },
];

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-emerald-200 overflow-x-hidden">
      <Header
        backgroundPic="background1.jpg"
        fontFamily="'Inter', sans-serif"
      />

      <main className="flex-grow p-4 sm:p-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 items-start w-full">

          <div className="w-full md:w-1/3 min-w-0">
            <Tooltip content={<h3 className="text-sm font-semibold text-emerald-300">Featured Build</h3>}>
              <div className="w-full max-h-[320px] overflow-hidden rounded-xl border border-emerald-700/40 shadow-xl">
                <img
                  src="/images/custompc.jpg"
                  alt="Featured PC Build"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Tooltip>
          </div>

          <div className="w-full md:w-2/3 min-w-0 flex flex-col gap-8">

            <section className="bg-neutral-900 p-5 rounded-xl border border-emerald-700/40">
              <h2 className="text-xl font-semibold mb-5 text-emerald-400 tracking-wide">
                FAQ
              </h2>

              {accordionData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </section>

            <section className="bg-neutral-900 p-5 rounded-xl border border-emerald-700/40 overflow-hidden">
              <h2 className="text-xl font-semibold mb-5 text-emerald-400 tracking-wide">
                Featured Components
              </h2>

              <div className="w-full overflow-hidden">
                <Carousel items={carouselData} />
              </div>
            </section>

          </div>
        </div>
      </main>

     
    </div>
  );
}

export default About;
