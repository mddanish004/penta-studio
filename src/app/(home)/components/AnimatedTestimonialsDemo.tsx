import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {

    
  const testimonials = [
    {
      name: "Md Danish Ansari",
      designation: "Full Stack Developer",
      src: "/images/danish.png",
      xLink: "https://x.com/danish",
      linkedinLink: "https://linkedin.com/in/danish"
    },
    {
      name: "Sayan Guha",
      designation: "Backend Developer",
      src: "/images/sayan.png",
      xLink: "https://x.com/sayan",
      linkedinLink: "https://linkedin.com/in/sayan"
    },
    {
        name: "Kushal Biswas",
        designation: "Backend Developer",
        src: "/images/kushal.png",
        xLink: "https://x.com/danish",
        linkedinLink: "https://linkedin.com/in/danish"
      },
      {
        name: "Koustav Naskar",
        designation: "Frontend Developer",
        src: "/images/koustav.png",
        xLink: "https://x.com/danish",
        linkedinLink: "https://linkedin.com/in/danish"
      },
      {
        name: "Bishal Begani",
        designation: "UI/UX Designer | AI/ML specialist",
        src: "/images/bishal.png",
        xLink: "https://x.com/danish",
        linkedinLink: "https://linkedin.com/in/danish"
      },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white shadow-lg text-center justify-center">
        Our Team
      </h2>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
