import { GraduationCap, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    institution:
      'Indian Institute of Engineering Science and Technology, Shibpur (Formerly Bengal Engineering and Science University)',
    degree: 'Grad · Batch of 2009 – 2013 · Shibpur',
    details:
      'Pursued Bachelor of Engineering in Computer Science and Technology with a CGPA of 6 and holds the degree for the year 2013.',
    accent: '#3B5DFF',
  },
  {
    institution: 'Bidhan Chandra Institution',
    degree: 'Higher Secondary School (WBCHSE) · Batch of 2007 – 2009 · Durgapur',
    details:
      'Completed High School with Science Subjects (Physics, Chemistry, and Mathematics) along with the Compulsory Subjects (English and Bengali) and the Additional Subject (Computer Science) with a percentage of marks obtained of 71 and holds the degree for the year 2009.',
    accent: '#1CC389',
  },
  {
    institution: "St. Xavier's School",
    degree: 'Secondary School (ICSE) · Batch of 1996 – 2007 · Durgapur',
    details:
      'Completed Secondary School with Compulsory Subjects (English, Bengali, History, Geography, Science, and Mathematics) along with the Additional Subject (Economics) with a percentage of marks obtained of 81 and holds the degree for the year 2007.',
    accent: '#FA900E',
  },
];

type Certification = {
  title: string;
  link?: string;
  accent: string;
};

const certifications: Certification[] = [
  {
    title: 'Google Analytics Individual Qualification',
    accent: '#7E43FF',
  },
  {
    title: 'Introduction to GitHub Copilot',
    accent: '#3B5DFF',
  },
  {
    title: 'Responsible AI with GitHub Copilot',
    accent: '#1CC389',
  },
  {
    title: 'Summarize and simplify information with Microsoft 365 Copilot',
    accent: '#FA900E',
  },
  {
    title: 'Edit and transform content with Microsoft 365 Copilot',
    accent: '#7E43FF',
  },
  {
    title: 'Describe cost management in Azure',
    accent: '#3B5DFF',
  },
  {
    title: 'Get started with speech in Azure',
    accent: '#1CC389',
  },
  {
    title: 'Get started with AI agent development on Azure',
    accent: '#FA900E',
  },
  {
    title: 'Describe cloud computing',
    accent: '#7E43FF',
  },
  {
    title: 'Introduction to generative AI concepts',
    accent: '#3B5DFF',
  },
  {
    title: 'Get started with Microsoft Copilot Studio',
    accent: '#1CC389',
  },
  {
    title: 'Plan and prepare to develop AI solutions on Azure',
    accent: '#FA900E',
  },
  {
    title: 'Describe the benefits of using cloud services',
    accent: '#7E43FF',
  },
  {
    title: 'Craft effective prompts for Microsoft 365 Copilot',
    accent: '#3B5DFF',
  },
  {
    title: 'Ask questions and analyze content with Microsoft 365 Copilot',
    accent: '#1CC389',
  },
  {
    title: 'Introduction to prompt engineering with GitHub Copilot',
    accent: '#FA900E',
  },
  {
    title: 'Introduction to AI concepts',
    accent: '#7E43FF',
  },
  {
    title: 'Use AI for everyday tasks',
    accent: '#3B5DFF',
  },
];

export default function EducationSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const titleRef = useScrollAnimation<HTMLHeadingElement>();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll<HTMLElement>('.education-animate-item');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('scroll-visible');
            }, i * 100);
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="bg-[#111111] py-24 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <p
          ref={headingRef}
          className="scroll-hidden font-grotesk text-base font-medium text-[#7F7F7F] tracking-[2px] uppercase text-center"
        >
          Education & Certifications
        </p>
        <h2
          ref={titleRef}
          className="scroll-hidden font-grotesk text-3xl sm:text-[44px] font-medium text-white text-center mt-3"
        >
          Building a Strong Foundation
        </h2>

        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap size={20} className="text-brand-blue" />
              <h3 className="font-grotesk text-xl font-medium text-white">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="education-animate-item scroll-hidden bg-[#1A1A1A] rounded-xl p-7"
                  style={{
                    borderLeft: `4px solid ${edu.accent}`,
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <p className="font-grotesk text-base font-medium text-white">
                    {edu.institution}
                  </p>
                  <p className="font-grotesk text-sm text-[#7F7F7F] mt-1">{edu.degree}</p>
                  <p className="font-grotesk text-[13px] text-[#7F7F7F] mt-2">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={20} className="text-brand-green" />
              <h3 className="font-grotesk text-xl font-medium text-white">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="education-animate-item scroll-hidden bg-[#1A1A1A] rounded-lg p-4 border border-white/[0.06]"
                  style={{
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      <Award size={16} style={{ color: cert.accent }} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-grotesk text-[13px] font-medium text-white leading-snug">
                        {cert.title}
                      </p>
                      {cert.link ? (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-grotesk text-[12px] text-brand-blue hover:underline mt-2 inline-block"
                        >
                          Certificate →
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
