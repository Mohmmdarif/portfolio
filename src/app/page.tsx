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
      <div
        className="h-screen w-full bg-white relative flex flex-col items-center justify-center"
        style={{
          backgroundImage: `
                 linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
               `,
          backgroundSize: "150px 150px",
        }}
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white bg-opacity-80"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        ></div>
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
