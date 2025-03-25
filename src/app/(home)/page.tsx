import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { CardHoverEffectDemo } from "./components/CardHoverEffectDemo";
import { AnimatedTestimonialsDemo } from "./components/AnimatedTestimonialsDemo";
import { ContactUs } from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <FloatingNavDemo/>
      <div id="home">
        <BackgroundLinesDemo/>
      </div>
      <div id="services">
        <CardHoverEffectDemo/>
      </div>
      <br />
      <div id="team">
        <AnimatedTestimonialsDemo/>
      </div>
      <div id="contact">
        <ContactUs/>
      </div>
    </div>
  );
}
