/*
 * ============================================
 *  PROFILE CONTENT DATA
 *  Edit this file to update your website content.
 * ============================================
 */

const PROFILE = {
  // ── Personal Info ──────────────────────────
  name: "Oge Ndukuba, MBCS",
  firstName: "Oge",
  lastName: "Ndukuba",
  title: "Information Security & IT Professional",
  tagline: "Systems Security Certified Practitioner (SSCP) | Cybersecurity Analyst (CySA) | CompTIA Security+ | Certificate in Information Security Management Principles (CISMP) | ISO/IEC 27001:2022 Lead Auditor | Certified in Cybersecurity (CC)",
  location: "Liverpool, England, United Kingdom",
  email: "ndukubaprosperoge@gmail.com",
  phone: "07783375062",
  website: "https://sudo-compliance.github.io",

  // ── Social Links ───────────────────────────
  social: {
    linkedin: "https://linkedin.com/in/ndukubaoge",
    github: "https://github.com/sudo-compliance",
  },

  // ── About / Professional Summary ───────────
  about: {
    summary: `Started out just fascinated by how systems work. That curiosity eventually turned into a career in Information Security and technical IT Service Management. I kept getting pulled into the messy technical stuff where things break, risks show up and teams need a clear answer fast.\n\nNow I bridge the gap between technical requirements and business reality, covering everything from security, incident response and data protection to agile service delivery. Whether I'm working with engineers, operations, leadership or end users, I focus on translating strict regulations into practical actions and delivering value.`,
    highlights: [
      "MBCS — Member of BCS, The Chartered Institute for IT",
      "SSCP, CySA+, Security+, CISMP, ISO 27001 Lead Auditor certified",
      "SIEM-led incident triage with 15-30 min Mean Time to Detect",
      "Reduced repeat incidents by 30-40% through root cause analysis",
      "Built first IT asset risk function and assessment framework from scratch",
    ],
    // Path to your professional headshot (place in /assets folder)
    photo: "assets/headshot.jpg",
  },

  // ── Skills & Expertise ─────────────────────
  skills: [
    {
      category: "Security Operations",
      icon: "layout",
      items: [
        { name: "Incident Detection & Response", level: 90 },
        { name: "SIEM Monitoring (Datadog, Splunk)", level: 88 },
        { name: "Vulnerability Assessment", level: 82 },
        { name: "Threat Intelligence", level: 78 },
        { name: "Security Awareness Training", level: 85 },
      ],
    },
    {
      category: "Governance & Compliance",
      icon: "server",
      items: [
        { name: "ISO/IEC 27001", level: 92 },
        { name: "PCI DSS", level: 88 },
        { name: "NIST CSF", level: 82 },
        { name: "Risk Management & Registers", level: 90 },
        { name: "Data Protection / UK GDPR", level: 85 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "cloud",
      items: [
        { name: "Microsoft 365 / Azure Security", level: 88 },
        { name: "Nessus / OpenVAS / Nmap", level: 80 },
        { name: "Wireshark", level: 75 },
        { name: "ServiceNow / Jira / Confluence", level: 85 },
        { name: "AWS (EC2, S3)", level: 72 },
      ],
    },
    {
      category: "Leadership & Delivery",
      icon: "users",
      items: [
        { name: "C-Suite Engagement", level: 90 },
        { name: "Stakeholder Communication", level: 88 },
        { name: "Agile Methodologies", level: 85 },
        { name: "Team Leadership", level: 87 },
        { name: "IT Service Management", level: 90 },
      ],
    },
  ],

  // ── Experience Timeline ────────────────────
  experience: [
    {
      role: "Service & Implementation Analyst",
      company: "Conferma",
      period: "Nov 2023 - Present",
      location: "Manchester, UK · Hybrid",
      description: `Secure implementation and service assurance in a PCI DSS and ISO 27001 controlled environment. SIEM-led incident triage achieving 15-30 min Mean Time to Detect. 100% adherence to ISO 27001 Annex A security baselines. Reduced repeat incidents by 10-20% through structured root cause analysis with engineering and product teams.`,
      tags: ["PCI DSS", "ISO 27001", "Datadog SIEM", "Incident Response"],
    },
    {
      role: "Information Technology Risk Officer",
      company: "Business Field Consulting",
      period: "Jul 2023 - Nov 2023",
      location: "Greater London, UK · Remote",
      description: `Established the organization's first IT asset risk function. Built asset-based risk assessment workflows mapped to ISO 27001 Annex A and NIST CSF controls. Completed 10-20 asset-led risk assessments and facilitated RACI workshops, reducing accountability ambiguity by 30%.`,
      tags: ["Risk Management", "ISO 27001", "NIST CSF", "Asset Governance"],
    },
    {
      role: "Information Technology Team Lead",
      company: "Brandeon Creative",
      period: "Jan 2018 - Jul 2023",
      location: "Abuja, Nigeria · Hybrid",
      description: `Led IT service delivery and project rollouts. Implemented ITIL-aligned problem management reducing mean time to resolve by 45%. Reduced repeat incidents by 30-40% through preventative controls and process improvements. Managed stakeholder communication across business groups.`,
      tags: ["ITIL", "IT Service Management", "Team Leadership", "Infrastructure"],
    },
  ],

  // ── Volunteering ───────────────────────────
  volunteering: [
    {
      role: "Marketing & Communications Officer, Merseyside Branch",
      organization: "BCS, The Chartered Institute for IT",
      period: "Oct 2025 - Present",
      category: "Science and Technology",
    },
    {
      role: "BHF Action Team",
      organization: "British Heart Foundation",
      period: "Jul 2025 - Present",
      category: "Disaster and Humanitarian Relief",
    },
  ],

  // ── Honors & Awards ────────────────────────
  honors: [
    {
      title: "Most Outstanding Alumnus",
      issuer: "National Association of Mass Communication Students",
      year: "Jun 2025",
    },
    {
      title: "Executive Member",
      issuer: "Jet-Age Nation Builders",
      year: "Mar 2023",
    },
  ],

  // ── Projects / Portfolio ───────────────────
  projects: [
    {
      title: "Secure Service Delivery Framework",
      description: "A structured implementation and transition framework for secure SaaS client onboarding, controlled service transition and audit-ready evidence aligned to ISO/IEC 27001 and ITIL 4.",
      tags: ["ISO 27001", "ITIL 4", "SaaS Security"],
      link: "https://github.com/sudo-compliance/grc-lab",
      featured: true,
    },
    {
      title: "Third-Party Risk Management Framework",
      description: "A practical, risk-based framework for assessing third-party vendors with scoring matrix to standardise due diligence and support integration decisions in secure SaaS ecosystems.",
      tags: ["TPRM", "ISO 27001", "Risk Assessment"],
      link: "https://github.com/sudo-compliance/grc-lab",
      featured: true,
    },
    {
      title: "PCI DSS 4.0 in Microsoft 365/Azure",
      description: "Step-by-step implementation of sensitivity labels, auto-labelling and DLP policies mapped to PCI DSS 4.0 requirements within Microsoft 365 and Azure environments.",
      tags: ["PCI DSS 4.0", "Microsoft 365", "DLP"],
      link: "https://github.com/sudo-compliance/grc-lab",
      featured: false,
    },
    {
      title: "Wazuh vs Microsoft Sentinel",
      description: "Side-by-side study comparing detection accuracy, analyst workload and cost of Wazuh and Microsoft Sentinel SIEM platforms for SMEs.",
      tags: ["SIEM", "Wazuh", "Sentinel"],
      link: "https://github.com/sudo-compliance/grc-lab",
      featured: false,
    },
  ],

  // ── Education & Certifications ─────────────
  education: [
    {
      degree: "MSc, Enterprise Cybersecurity (in progress)",
      institution: "OPIT - Open Institute of Technology",
      period: "Sep 2025 - Present",
      details: "Coursework: Security Governance, Risk Management, Legal Aspects & Compliance, Network Security, Intrusion Detection, Cryptography, Vulnerability Management.",
    },
    {
      degree: "BSc, Mass Communication",
      institution: "Chukwuemeka Odumegwu Ojukwu University",
      period: "Sep 2011 - Aug 2015",
      details: "Most Outstanding Alumnus award recipient. Communications background enabling clear translation of technical and non-technical requirements into practical, actionable insight.",
    },
  ],

  certifications: [
    {
      name: "ISO 27001 Lead Auditor",
      issuer: "ISO/IEC",
      year: "",
    },
    {
      name: "Systems Security Certified Practitioner (SSCP)",
      issuer: "ISC2",
      year: "",
    },
    {
      name: "Cybersecurity Analyst (CySA+)",
      issuer: "CompTIA",
      year: "",
    },
    {
      name: "Security+",
      issuer: "CompTIA",
      year: "",
    },
    {
      name: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      year: "",
    },
    {
      name: "Certificate in Information Security Management Principles (CISMP)",
      issuer: "BCS",
      year: "",
    },
    {
      name: "Security, Compliance & Identity Fundamentals (SC-900)",
      issuer: "Microsoft",
      year: "",
    },
    {
      name: "CISM (In Progress)",
      issuer: "ISACA",
      year: "",
    },
  ],
};
