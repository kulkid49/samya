import { GraduationCap, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const education = [
  {
    institution: 'Indian Institute of Engineering Science and Technology, Shibpur',
    degree: 'Bachelor of Engineering in Computer Science and Technology',
    details: '2009 – 2013 · CGPA: 6.0 · Degree: 2014',
    accent: '#3B5DFF',
  },
  {
    institution: 'Bidhan Chandra Institution, Durgapur',
    degree: 'Higher Secondary (WBCHSE) — Science (Physics, Chemistry, Mathematics, Computer Science)',
    details: '2007 – 2009 · 71%',
    accent: '#1CC389',
  },
  {
    institution: "St. Xavier's School, Durgapur",
    degree: 'Secondary (ICSE) — English, Bengali, History, Geography, Science, Mathematics, Economics',
    details: '1996 – 2007 · 81%',
    accent: '#FA900E',
  },
];

const certifications = [
  {
    title: 'Google Analytics Individual Qualification',
    link: 'https://drive.google.com/file/d/1IMscgU2kkVtBMcG1ZP8bvTiMlCgN9w4E/view?usp=sharing',
    accent: '#7E43FF',
  },
  {
    title: 'Advanced Google Analytics',
    link: 'https://drive.google.com/file/d/1PT141cM2RgciSa9qcW6XCpsaTMgA5XjZ/view?usp=sharing',
    accent: '#3B5DFF',
  },
  {
    title: 'Google Analytics for Beginners',
    link: 'https://drive.google.com/file/d/1LAk5f6AtfTCwKTOsy9rNfMykWkKxeRBE/view?usp=sharing',
    accent: '#1CC389',
  },
];

export default function EducationSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
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
                  className="scroll-hidden bg-[#1A1A1A] rounded-xl p-7"
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
            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="scroll-hidden bg-[#1A1A1A] rounded-xl p-7"
                  style={{
                    borderLeft: `4px solid ${cert.accent}`,
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  <p className="font-grotesk text-base font-medium text-white">
                    {cert.title}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-grotesk text-sm text-brand-blue hover:underline mt-2 inline-block"
                  >
                    View Certificate →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
