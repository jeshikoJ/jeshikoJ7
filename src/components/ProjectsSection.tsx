import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

const projects = [
  {
    number: "01",
    category: "Client",
    name: "Nextlevel Studio",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f240",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6"
    }
  },
  {
    number: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfc",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19b",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835"
    }
  },
  {
    number: "03",
    category: "Client",
    name: "Solaris Digital",
    images: {
      col1_1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf",
      col1_2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb8",
      col2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef"
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 pb-32">
      <FadeIn y={40} className="w-full flex justify-center mb-16 sm:mb-20 md:mb-24">
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
          Project
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col gap-10 md:gap-16">
        {projects.map((project, index) => (
          <ProjectCard key={project.number} project={project} index={index} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index, totalCards }: { project: typeof projects[0], index: number, totalCards: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start']
  });

  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  // Each card scales down as the next one comes up
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div 
        ref={cardRef}
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-2xl origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-6 sm:gap-10">
            <span className="text-[#D7E2EA] font-black text-[clamp(3rem,8vw,100px)] leading-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-1 font-medium">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium text-xl sm:text-2xl md:text-3xl uppercase tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex flex-col sm:flex-row gap-4 h-full min-h-[300px]">
          {/* Left Column (40%) */}
          <div className="w-full sm:w-[40%] flex flex-col gap-4 h-full">
            <img 
              src={project.images.col1_1} 
              alt={`${project.name} preview 1`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,16vw,230px)]"
              loading="lazy"
            />
            <img 
              src={project.images.col1_2} 
              alt={`${project.name} preview 2`} 
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(160px,22vw,340px)] flex-1"
              loading="lazy"
            />
          </div>
          
          {/* Right Column (60%) */}
          <div className="w-full sm:w-[60%] h-full">
            <img 
              src={project.images.col2} 
              alt={`${project.name} main preview`} 
              className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] min-h-[300px] sm:min-h-0"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
