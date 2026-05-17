import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Role {
  title: string;
  period?: string;
  bullets: string[];
}

interface ExperienceEntry {
  date: string;
  company: string;
  location: string;
  accent: string;
  roles: Role[];
}

const experiences: ExperienceEntry[] = [
  {
    date: 'Jun 2023 – Present',
    company: 'Quantum Business Advisory Pvt. Ltd.',
    location: 'Kolkata',
    accent: '#3B5DFF',
    roles: [
      {
        title: 'Senior Consultant',
        bullets: [
          'Collaborate with cross-functional business, finance, procurement, and technical teams to translate complex requirements into scalable Agentic AI and enterprise application solutions',
          'Lead AI-driven enterprise automation initiatives for invoice processing, SAP-integrated workflows, and multi-agent validation systems aligned to business and compliance goals',
          'Architect and optimize end-to-end business processes and system integrations across enterprise platforms such as SAP S/4HANA to improve operational efficiency',
          'Conduct business analysis, solution assessments, gap analysis, and process evaluations to identify automation opportunities',
          'Develop BRDs, FSDs, process flow diagrams, solution architecture notes, user manuals, and implementation guides',
          'Facilitate client workshops, solution demos, stakeholder meetings, and technical discussions to validate requirements',
          'Coordinate UAT, defect tracking, process validation, and post-implementation support',
          'Support pre-sales activities, effort estimation, POCs, client presentations, and governance',
        ],
      },
    ],
  },
  {
    date: 'Nov 2022 – May 2023',
    company: 'Navigators Software Pvt. Ltd.',
    location: 'Kolkata',
    accent: '#1CC389',
    roles: [
      {
        title: 'Project Manager',
        bullets: [
          'Organized internal resources and external vendors to deliver projects on schedule, within budget, and within scope',
          'Defined project goals, scope, and technical feasibility with relevant stakeholders',
          'Built detailed project plans to monitor progress, manage dependencies, and track delivery milestones',
          'Managed scope, schedule, and cost changes using structured verification and change control methods',
          'Applied project performance tracking, escalation management, stakeholder communication, and risk mitigation',
        ],
      },
    ],
  },
  {
    date: 'July 2021 – Oct 2022',
    company: 'ZINFI Technologies Inc.',
    location: 'Kolkata',
    accent: '#FA900E',
    roles: [
      {
        title: 'Professional Services Manager',
        bullets: [
          'Provided pre-sales support to the global sales team, including prospect engagement, free-trial coordination, and urgent issue resolution',
          'Worked closely with engineering and internal stakeholders to resolve customer-facing issues',
          'Led SaaS onboarding for new clients on the ZINFI platform and configured the UCM portal for deployment',
          'Prepared detailed project plans using internal project management processes and tools',
          'Translated client requirements into use-case documents and mock-ups for automation of channel management programs',
          'Conducted weekly and daily interlocks with clients and internal teams',
          'Coordinated transition of post-launch support to customer care teams',
        ],
      },
    ],
  },
  {
    date: 'July 2019 – July 2021',
    company: 'Capital Numbers Infotech Pvt. Ltd.',
    location: 'Kolkata',
    accent: '#7E43FF',
    roles: [
      {
        title: 'Project Manager',
        period: "Jul'19 – Oct'20",
        bullets: [
          'Delivered multiple work streams across technologies to agreed scope, timelines, budget, and quality standards',
          'Framed project phases covering design, development, and implementation',
          'Analyzed business requirements, prepared quotations and solution proposals',
          'Applied Agile (SCRUM) delivery practices for planning, execution, and reporting',
          'Directed and motivated staff while maintaining strong client relationships',
        ],
      },
      {
        title: 'Business Analyst',
        period: "Nov'20 – Jul'21",
        bullets: [
          'Conducted stakeholder discussions, requirement gathering, and scope definition',
          'Created detailed understanding documents with assumptions, notes, risks, and constraints',
          'Identified ready-made or bespoke technology solutions and recommended appropriate stacks',
          'Reviewed third-party integration needs, plugins, themes, and extensions',
          'Coordinated with engineering for effort estimation, resource planning, and delivery timelines',
          'Prepared presentations and supported proof-of-concept development',
        ],
      },
    ],
  },
  {
    date: 'Oct 2016 – June 2019',
    company: 'Rplanx Technology',
    location: 'Kolkata',
    accent: '#F85993',
    roles: [
      {
        title: 'Business Development Manager',
        period: "Oct'16 – Mar'18",
        bullets: [
          'Followed up on new business opportunities and coordinated client meetings and presentations',
          'Prepared proposals, quotations, RFPs, and RFQs with a focus on business fit and commercial clarity',
          'Demonstrated new product developments to prospects',
          'Developed team sales goals and monitored progress against targets',
          'Trained personnel and supported capability development',
        ],
      },
      {
        title: 'Project & Delivery Manager',
        period: "Apr'18 – Jun'19",
        bullets: [
          'Supported project planning and produced comprehensive documentation',
          'Monitored, measured, reviewed, and updated project processes',
          'Conducted project evaluations and follow-on action planning',
          'Produced project documentation and knowledge libraries',
          'Provided leadership to project teams by clarifying objectives, work allocation, and deadlines',
          'Managed budget support and resource planning',
        ],
      },
    ],
  },
  {
    date: 'Mar 2014 – Sep 2016',
    company: 'Infoway Technology Solutions Ltd.',
    location: 'Kolkata',
    accent: '#3B5DFF',
    roles: [
      {
        title: 'Project Consultant Engineer',
        period: "Jul'14 – Dec'14",
        bullets: [
          'Interpreted customer requirements and business objectives to guide technical delivery',
          'Advised on technology use for goal achievement and project execution',
          'Supported IT initiatives in coordination with internal technical staff',
        ],
      },
      {
        title: 'Sr. Technical Consultant',
        period: "Jan'15 – Dec'15",
        bullets: [
          'Advised customers on technology strategy to meet business goals and operational needs',
          'Managed IT initiatives in collaboration with internal technical teams',
          'Designed IT systems with the appropriate architecture and functionality',
          'Trained end users on new and existing systems',
          'Reviewed and tested existing systems to recommend improvements',
        ],
      },
      {
        title: 'Sr. Business Executive',
        period: "Jan'16 – Sep'16",
        bullets: [
          'Identified new sales leads by researching organizations, decision makers, and emerging market opportunities',
          'Contacted potential clients to build rapport and arrange meetings',
          'Prepared presentations, quotes, and proposals to support pitching',
          'Communicated product updates and maintained productive relationships with existing customers',
        ],
      },
    ],
  },
];

function ExperienceCard({ entry, index }: { entry: ExperienceEntry; index: number }) {
  const ref = useScrollAnimation<HTMLDivElement>();
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`scroll-hidden grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-start relative`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Date/Company - left on desktop for even, right for odd */}
      <div className={`${isLeft ? 'lg:text-right lg:pr-4' : 'lg:order-3 lg:pl-4'} order-2`}>
        <p className="font-grotesk text-sm text-[#7F7F7F]">{entry.date}</p>
        <p className="font-grotesk text-base font-medium text-white mt-1">{entry.company}</p>
        <p className="font-grotesk text-sm text-[#7F7F7F]">{entry.location}</p>
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:flex flex-col items-center order-2">
        <div
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ backgroundColor: entry.accent }}
        />
      </div>

      {/* Role card */}
      <div className={`${isLeft ? 'lg:order-3' : 'lg:order-1'} order-1`}>
        <div
          className="bg-[#1A1A1A] rounded-xl p-6 lg:p-8"
          style={{ borderLeft: `4px solid ${entry.accent}` }}
        >
          {entry.roles.map((role, ri) => (
            <div key={ri} className={ri > 0 ? 'mt-6 pt-6 border-t border-white/10' : ''}>
              <h4 className="font-grotesk text-lg font-medium text-white">{role.title}</h4>
              {role.period && (
                <p className="font-grotesk text-sm text-[#7F7F7F] mt-1">{role.period}</p>
              )}
              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ backgroundColor: entry.accent }}
                    />
                    <span className="font-grotesk text-sm text-[#7F7F7F] leading-relaxed">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="experience" className="bg-[#111111] py-24 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <p
          ref={headingRef}
          className="scroll-hidden font-grotesk text-base font-medium text-[#7F7F7F] tracking-[2px] uppercase text-center"
        >
          Professional Experience
        </p>
        <h2
          ref={titleRef}
          className="scroll-hidden font-grotesk text-3xl sm:text-[44px] font-medium text-white text-center mt-3"
        >
          A Decade of Impact
        </h2>

        <div className="relative mt-16 space-y-12 lg:space-y-16">
          {/* Timeline line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, #3B5DFF, #1CC389, #FA900E, #7E43FF)',
            }}
          />

          {experiences.map((entry, i) => (
            <ExperienceCard key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
