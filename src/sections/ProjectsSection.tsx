import { Cpu, Activity, Printer, ShoppingCart, Cloud, Layers } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const projects = [
  {
    gradient: 'linear-gradient(135deg, #3B5DFF 0%, #1CC389 100%)',
    icon: <Cpu size={48} />,
    badge: 'Agentic AI',
    badgeColor: '#3B5DFF',
    title: 'Agentic AI Enterprise Invoice Automation Platform',
    description: 'Designed and managed enterprise-grade Agentic AI workflows integrated with SAP S/4HANA to automate finance and procurement validations, streamline approval flows, and reduce manual intervention through multi-agent validation and business-rule orchestration.',
    tags: 'SAP S/4HANA · AI Workflow · Multi-Agent',
  },
  {
    gradient: 'linear-gradient(135deg, #1CC389 0%, #FA900E 100%)',
    icon: <Activity size={48} />,
    badge: 'IoT Platform',
    badgeColor: '#1CC389',
    title: 'IoT-Integrated Fitbit Competitive Social Platform',
    description: 'Led business analysis and product solutioning for a peer-to-peer fitness competition platform with Fitbit API integration, real-time activity synchronization, gamification, leaderboards, achievement systems, and competitive analytics across web and mobile.',
    tags: 'Fitbit API · Gamification · Mobile App',
  },
  {
    gradient: 'linear-gradient(135deg, #FA900E 0%, #7E43FF 100%)',
    icon: <Printer size={48} />,
    badge: 'Enterprise App',
    badgeColor: '#FA900E',
    title: 'Food Ordering & Interactive Printer Integration Platform',
    description: 'Managed the development and implementation of a restaurant and food ordering ecosystem with interactive printer workflows, automated order routing, real-time operational coordination, and efficient restaurant workflow management.',
    tags: 'POS · Printer Integration · Mobile Ordering',
  },
  {
    gradient: 'linear-gradient(135deg, #7E43FF 0%, #F85993 100%)',
    icon: <ShoppingCart size={48} />,
    badge: 'Ecommerce',
    badgeColor: '#7E43FF',
    title: 'Enterprise Ecommerce & Marketplace Platforms',
    description: 'Delivered scalable ecommerce and marketplace ecosystems for web and mobile platforms, coordinating payment gateway integration, CRM workflows, inventory systems, and customer engagement modules across agile release cycles.',
    tags: 'Payment Gateway · CRM · Inventory',
  },
  {
    gradient: 'linear-gradient(135deg, #F85993 0%, #3B5DFF 100%)',
    icon: <Cloud size={48} />,
    badge: 'SaaS',
    badgeColor: '#F85993',
    title: 'SaaS Channel Partner Automation Platform',
    description: 'Led SaaS onboarding and implementation projects for enterprise partner management platforms, automating channel and partner workflows, improving customer onboarding, and streamlining portal adoption across delivery and support functions.',
    tags: 'SaaS · Partner Management · Portal',
  },
  {
    gradient: 'linear-gradient(135deg, #3B5DFF 0%, #7E43FF 50%, #1CC389 100%)',
    icon: <Layers size={48} />,
    badge: 'Portfolio',
    badgeColor: '#3B5DFF',
    title: 'Enterprise Digital Transformation Portfolio',
    description: 'Cross-cutting portfolio spanning AI-driven enterprise solutions, product strategy, platform onboarding, and delivery governance with a focus on operational efficiency and measurable business value across multiple industries.',
    tags: 'Digital Transformation · Product Strategy · Governance',
  },
];

export default function ProjectsSection() {
  const headingRef = useScrollAnimation<HTMLParagraphElement>();
  const titleRef = useScrollAnimation<HTMLHeadingElement>();

  return (
    <section id="projects" className="bg-black py-24 px-6 lg:px-8">
      <div className="max-w-container mx-auto">
        <p
          ref={headingRef}
          className="scroll-hidden font-grotesk text-base font-medium text-[#7F7F7F] tracking-[2px] uppercase text-center"
        >
          Key Projects
        </p>
        <h2
          ref={titleRef}
          className="scroll-hidden font-grotesk text-3xl sm:text-[44px] font-medium text-white text-center mt-3"
        >
          Projects That Define My Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
