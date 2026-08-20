export type ServiceTier = {
  title: string;
  description?: string;
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  intro: string;
  featuresTitle?: string;
  features?: string[];
  tiersTitle?: string;
  tiers?: ServiceTier[];
  process?: { step: string; description: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "domiciliary-care",
    title: "Domiciliary Care",
    tagline: "Personal care and support for people living independently in their own home.",
    heroImage: "/hero/domiciliary-care.webp",
    intro:
      "Domiciliary care provides personal care for people living in their own homes. Care packages are tailored to individual circumstances, with visits at various times of day or full 24-hour coverage available. Between visits, you're free to live independently, on your own terms.",
    featuresTitle: "What we help with",
    features: [
      "Morning routines — bathing, dressing and breakfast",
      "Medication reminders and pharmacy coordination",
      "Meal preparation and dining assistance",
      "Pension collection and shopping support",
      "Laundry, ironing and household cleaning",
      "Social activities — outings, day centres and community visits",
      "Evening care and bedtime assistance",
    ],
    tiersTitle: "Ways we deliver care",
    tiers: [
      {
        title: "Live-In Care",
        description:
          "24-hour live-in support — often the most reliable and cost-effective option for disabilities, dementia, Parkinson's or post-surgery recovery.",
      },
      {
        title: "Residential Care",
        description:
          "Long-term accommodation for adults who need more day-to-day support, with furnished rooms, meals and housekeeping included.",
      },
      {
        title: "Community Services",
        description:
          "Health professionals providing short or long-term support at home and in the community for acute or chronic needs.",
      },
      {
        title: "Hospital Step-Down Beds",
        description:
          "Transitional care for people discharged from hospital who need extra support before returning home independently.",
      },
    ],
  },
  {
    slug: "person-centred-care",
    title: "Person Centred Care",
    tagline: "Individualised support, planned around what matters to you.",
    heroImage: "/hero/person-centred-care.webp",
    intro:
      "We spend time listening to and understanding each person we support — their preferences, priorities and aspirations. From there we build a living plan, shaped together with the individual, their family and professionals, that adapts as needs evolve.",
    featuresTitle: "What your plan covers",
    features: [
      "The type and level of support you want",
      "Your personal priorities and values",
      "Your aspirations and learning goals",
      "Housing preferences",
      "Health and wellbeing approaches",
      "Leisure interests",
    ],
    process: [
      { step: "Listen", description: "We take time to understand your circumstances, history and what matters to you." },
      { step: "Identify", description: "Together we agree your priorities, needs and goals." },
      { step: "Plan", description: "We create a personalised plan with input from you, your family and professionals." },
      { step: "Support", description: "Your plan guides consistent, day-to-day support." },
      { step: "Review", description: "We revisit and update the plan as your circumstances change." },
    ],
  },
  {
    slug: "supported-living",
    title: "Supported Living",
    tagline: "Independent housing with exactly the right level of everyday support.",
    heroImage: "/hero/supported-living.webp",
    intro:
      "Supported living is our alternative to residential care — helping people maintain independence while receiving support that's tailored to them. Personalised plans cover personal care, financial management, and access to education, work and leisure, with support levels controlled by the person themselves.",
    tiersTitle: "Levels of support",
    tiers: [
      {
        title: "Shared Living",
        description: "Independent housing with communal spaces and peer interaction — a step-down recovery model.",
      },
      {
        title: "Low Needs",
        description: "Standalone flats with flexible support, sourced directly or through housing partners.",
      },
      {
        title: "Medium Needs",
        description: "2–4 bed shared accommodation with 4–12 daily support hours and on-call manager access.",
      },
      {
        title: "High Needs",
        description: "4–6 bed shared accommodation with round-the-clock sleep-in or waking night staff.",
      },
      {
        title: "Apartment Living",
        description: "Private modern units with optional communal spaces for social engagement.",
      },
    ],
  },
  {
    slug: "specialist-support",
    title: "Specialist Support Services",
    tagline: "Tailored support for autism, epilepsy, learning disabilities and mental health needs.",
    heroImage: "/hero/specialist-support.webp",
    intro:
      "We deliver person-centred support programmes in nurturing environments for adults 18 and over, with particular focus on young people aged 16–25 transitioning from the care system.",
    tiersTitle: "Areas of specialism",
    tiers: [
      { title: "Mental Health Support", description: "Dedicated care programmes for people managing their mental health." },
      { title: "Autism Care & Support", description: "Tailored support built around autistic individuals' needs." },
      { title: "Learning Disability Support", description: "Comprehensive, everyday assistance for people with learning disabilities." },
      { title: "Epilepsy Management", description: "Specialist support for people living with epilepsy." },
      { title: "Positive Behavioural Support", description: "Evidence-based behavioural intervention programmes." },
      { title: "Care Leavers (16–25)", description: "Transitional support for young people leaving the care system." },
    ],
  },
  {
    slug: "mother-baby-support",
    title: "Mother & Baby Support",
    tagline: "A supported, fully-equipped unit for young parents building an independent family life.",
    heroImage: "/hero/family-hug.webp",
    intro:
      "Our mother and baby support unit is for families referred by local authorities or charities who need help living independently in the community — typically after completing a parenting assessment. Places are available for up to four families at a time.",
    featuresTitle: "What's included",
    features: [
      "A fully furnished bedroom for each mother and baby",
      "Shared lounge, kitchen and baby bathing facilities",
      "All baby items provided — cot, Moses basket, bedding, high chair and toys",
      "24-hour staffing, including waking night staff",
      "A dedicated key worker for every family",
      "Support accessing health visitors, midwives and children's centres",
      "Help with Housing Benefit, Universal Credit and Child Benefit applications",
      "Accompaniment to appointments and professional meetings",
    ],
    tiersTitle: "What we report on, every quarter",
    tiers: [
      { title: "Housing", description: "Access to and maintenance of appropriate accommodation." },
      { title: "Child Development", description: "Progress against developmental and educational milestones." },
      { title: "Parenting & Life Skills", description: "Building confidence and everyday parenting skills." },
      { title: "Welfare & Benefits", description: "Support navigating entitlements and applications." },
      { title: "Support Networks", description: "Building connections beyond the placement." },
      { title: "Home & Family Checks", description: "Regular inventory and wellbeing checks." },
    ],
  },
  {
    slug: "semi-independent-living",
    title: "Semi Independent Living",
    tagline: "Structured support helping young people move toward independence.",
    heroImage: "/hero/companion-care.webp",
    intro:
      "Semi-independent living combines quality housing with structured support to help people progress toward independence — delivered across England with a \"think nationally, act locally\" approach. Support can lead to fully independent living, or continue as permanent accommodation with ongoing assistance.",
    featuresTitle: "Who it's for",
    features: [
      "Young people and homeless families",
      "Care leavers and children in care (16+)",
      "People with physical or learning disabilities",
      "People with mental health needs",
      "People facing addiction challenges",
      "Unaccompanied asylum-seeking children",
      "People experiencing family or relationship breakdown",
    ],
    tiersTitle: "The Young Person's Star — 8 areas of focus",
    tiers: [
      { title: "Accommodation" },
      { title: "Work & Learning" },
      { title: "People & Support" },
      { title: "Health" },
      { title: "How You Feel" },
      { title: "Choices & Behaviour" },
      { title: "Money & Rent" },
      { title: "Practice Life Skills" },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
