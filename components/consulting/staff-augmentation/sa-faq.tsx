import { ServiceFaq } from "@/components/services";

export const SA_FAQS = [
  {
    q: "What is staff augmentation and how does it work?",
    a: "Staff augmentation lets you add external talent to your existing team without the overhead of direct hires. You define the role and requirements; we provide vetted specialists, from software developers to UX/UI designers, DevOps engineers, and project managers, who embed in your team. You manage them like any other team member.",
  },
  {
    q: "What's the difference between staff augmentation, dedicated teams, and outsourcing?",
    a: "Staff augmentation adds individual engineers to your team and you manage them directly. Dedicated teams are self-managing pods embedded in your org, coordinating with your leads and driving delivery with their own tech PM. Full outsourcing means we own the project end to end, from planning through deployment.",
  },
  {
    q: "How fast can you onboard engineers to my team?",
    a: "We typically stand up teams in 2 weeks, fast enough to fit tight project timelines. For larger engagements we ramp incrementally, adding engineers in stages. From there they integrate into your codebase, workflows, and sprint cadence. Compare that to traditional hiring, where recruiting and onboarding one engineer typically takes three to six months.",
  },
  {
    q: "What technologies and programming languages do your engineers work with?",
    a: "We cover a wide stack including React, JavaScript/TypeScript, Python, .NET/C#, Java, Go, PHP, Ruby on Rails, AWS, and Azure, plus niche and legacy systems. We match engineers to your exact stack and project requirements rather than offering a fixed roster.",
  },
  {
    q: "How much do staff augmentation services cost?",
    a: "It depends on your stack, team size, and project scope. Our senior engineers deliver meaningful cost efficiency compared to equivalent US hires, while saving you the overhead of recruiting, benefits, office space, and taxes. We're happy to walk through pricing on a call.",
  },
  {
    q: "Do engineers integrate with our existing tools and workflows?",
    a: "Yes. They work in whatever your team already uses, whether that's Jira, Linear, GitHub, GitLab, Slack, or Teams. They operate inside your existing toolchain, repos, CI/CD pipelines, and cloud infrastructure from the start. No new tools to adopt and no separate reporting layer.",
  },
] as const;

export function SaFaq() {
  return (
    <ServiceFaq
      label="Good to know"
      title="What tech leaders ask about our staff augmentation services"
      items={[...SA_FAQS]}
    />
  );
}
