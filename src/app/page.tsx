import { AboutMe } from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Timeline } from "@/components/Timeline";
import { testimonials } from "@/data/index";
import { data } from "@/data/timelines";

export default function Home() {
  return (
    <main id="/">
      <div className="h-screen w-full relative flex flex-col items-center justify-center bg-background text-foreground bg-grid-default blueish">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
        <section>
          <Navbar />
          <Hero />
        </section>
      </div>

      <section className="py-40" id="about">
        <AboutMe testimonials={testimonials} />
      </section>

      <section id="experience">
        <div className="w-full">
          <Timeline data={data} />
        </div>
      </section>

      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
