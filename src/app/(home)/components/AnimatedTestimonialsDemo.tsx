import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {

    
  const testimonials = [
    {
      name: "Md Danish Ansari",
      designation: "Full Stack Developer",
      src: "/images/danish.png",
      xLink: "https://x.com/Md_Danish004",
      linkedinLink: "https://www.linkedin.com/in/mddanish004/"
    },
    {
      name: "Sayan Guha",
      designation: "Backend Developer",
      src: "/images/sayan.png",
      xLink: "#",
      linkedinLink: "https://www.linkedin.com/in/sayanguha004/"
    },
    {
        name: "Kushal Biswas",
        designation: "Backend Developer",
        src: "/images/kushal.png",
        xLink: "#",
        linkedinLink: "#"
      },
      {
        name: "Koustav Naskar",
        designation: "Frontend Developer",
        src: "/images/koustav.png",
        xLink: "#",
        linkedinLink: "#"
      },
      {
        name: "Bishal Begani",
        designation: "UI/UX Designer | AI/ML specialist",
        src: "/images/bishal.png",
        xLink: "#",
        linkedinLink: "#"
      },
  ];

  return (
    <div className="py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-white shadow-lg text-center justify-center mb-6">
        Our Team
      </h2>
      <div className="px-4 sm:px-0">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
}
