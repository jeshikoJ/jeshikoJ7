import { FadeIn } from './FadeIn';

const services = [
  {
    number: "01",
    name: "Full-Stack Development",
    description: "Designing and developing scalable web applications from end-to-end using Python, Django, React, and MongoDB."
  },
  {
    number: "02",
    name: "Cloud Infrastructure",
    description: "Deploying and managing applications on AWS with a focus on core services like EC2, S3, and infrastructure as code."
  },
  {
    number: "03",
    name: "DevOps Automation",
    description: "Building and maintaining CI/CD pipelines to streamline development workflows, reduce manual handling, and improve code quality."
  },
  {
    number: "04",
    name: "Intelligent Software",
    description: "Applying machine learning and data processing concepts to create data-driven solutions and intelligent prototypes."
  },
  {
    number: "05",
    name: "UI/UX Prototyping",
    description: "Designing clean, modern, and interactive interfaces with attention to layout, typography, and seamless user experiences."
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <FadeIn y={40} className="w-full flex justify-center mb-16 sm:mb-20 md:mb-28">
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none">
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn 
            key={service.number} 
            delay={i * 0.1}
            y={20}
            className="flex flex-col md:flex-row md:items-start border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 last:border-0"
          >
            <div className="text-[#0C0C0C] font-black text-[clamp(3rem,10vw,140px)] leading-none md:w-[35%] mb-4 md:mb-0">
              {service.number}
            </div>
            <div className="md:w-[65%] flex flex-col justify-center pt-2 md:pt-4">
              <h3 className="text-[#0C0C0C] font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] mb-3">
                {service.name}
              </h3>
              <p className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)] opacity-60">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
