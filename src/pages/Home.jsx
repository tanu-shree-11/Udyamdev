import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import Hero from "../sections/Hero";
import CapabilityStrip from "./home/CapabilityStrip";
import TechMarquee from "../components/TechMarquee";
import About from "../sections/About";
import ServicesContent from "../sections/Services";
import SolutionsPreview from "./home/SolutionsPreview";
import Work from "../sections/Portfolio";
import ProjectsStrip from "../components/ProjectsStrip";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import FAQ from "../sections/FAQ";
import ErrorBoundary from "../components/ErrorBoundary";

function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return (
    <MainLayout>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>

      <ErrorBoundary>
        <CapabilityStrip />
      </ErrorBoundary>

      <ErrorBoundary>
        <TechMarquee />
      </ErrorBoundary>

      <ErrorBoundary>
        <About />
      </ErrorBoundary>

      <ErrorBoundary>
        <ServicesContent />
      </ErrorBoundary>

      <ErrorBoundary>
        <SolutionsPreview />
      </ErrorBoundary>

      <ErrorBoundary>
        <Work />
      </ErrorBoundary>

      <ErrorBoundary>
        <ProjectsStrip />
      </ErrorBoundary>

      <ErrorBoundary>
        <Testimonials />
      </ErrorBoundary>

      <ErrorBoundary>
        <FAQ />
      </ErrorBoundary>

      <ErrorBoundary>
        <Contact />
      </ErrorBoundary>
    </MainLayout>
  );
}

export default Home;
