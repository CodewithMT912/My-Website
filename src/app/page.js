import PageLoad from "../components/common/PageLoad";

import Hero from "../components/home/Hero";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import WhyUs from "../components/why-us/WhyUs";
import Expertise from "../components/expertise/Expertise";
import Process from "../components/process/Process";
import Industries from "../components/industries/Industries";
import Stats from "../components/stats/Stats";
import Testimonials from "../components/testimonials/Testimonials";
import FAQ from "../components/faq/FAQ";
import Contact from "../components/home/Contact";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <PageLoad>
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Expertise />
      <Process />
      <Industries />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </PageLoad>
  );
}