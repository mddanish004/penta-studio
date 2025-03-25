import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonialsDemo";
import { ContactUs } from "./components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden space-y-8 sm:space-y-12">
      <FloatingNavDemo/>
      <div id="home" className="min-h-[90vh]">
        <BackgroundLinesDemo/>
      </div>
      <div id="services">
        <CardHoverEffectDemo/>
      </div>
      <div id="team">
        <AnimatedTestimonialsDemo/>
      </div>
      <div id="contact" className="px-4 sm:px-8">
        <ContactUs/>
      </div>
    </div>
  );
}
