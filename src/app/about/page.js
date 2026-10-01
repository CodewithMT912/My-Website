import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurStory from "@/components/about/OurStory";
import WhatWeDo from "@/components/about/WhatWeDo";
import OurApproach from "@/components/about/OurApproach";
import WhatDrivesUs from "@/components/about/WhatDrivesUs";
import WhyCodewithMT from "@/components/about/WhyCodewithMT";
import AboutCTA from "@/components/about/AboutCTA";

import Footer from "../../components/common/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <WhoWeAre />

      <OurStory />

      <WhatWeDo />

      <OurApproach />

      <WhatDrivesUs />

      <WhyCodewithMT />

      <AboutCTA />

      <Footer />
    </main>
  );
}