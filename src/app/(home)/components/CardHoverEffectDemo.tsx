import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white shadow-lg text-center justify-center mb-6">
        Our Services
      </h2>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "UI/UX Design",
    description:
      "Create intuitive, beautiful interfaces that keep users engaged and deliver meaningful experiences.",
    
  },
  {
    title: "Web Development",
    description:
      "Build performant, scalable websites and applications using cutting-edge technologies and best practices.",
    
  },
  {
    title: "Brand Identity",
    description:
      "Develop a cohesive visual identity that communicates your brand's unique value and resonates with your audience.",

  },
  {
    title: "Mobile Apps",
    description:
      "Create native and cross-platform mobile applications that deliver exceptional user experiences"
  },
  {
    title: "Digital Strategy",
    description:
      "Develop date-driven strategies to help your business achieve its goals and maximize ROI",

  },
  {
    title: "Performance Optimization",
    description:
      "Enchance website speed and performance to improve search rankings and user experience",
    
  },
];

export default AnimatedTestimonials;
