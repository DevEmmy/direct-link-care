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
        title: "Reablement and Hospital Discharge Support",
        description:
          "Short-term support following hospital discharge, illness or injury — helping people rebuild confidence, regain everyday skills and return to living as independently as possible.",
      },
    ],
  },
  {
    slug: "complex-care-tddi",
    title: "Complex Care & TDDI",
    tagline: "Specialist clinical care delivered safely in the comfort of your own home.",
    heroImage: "/hero/mobility-support.webp",
    intro:
      "Direct Link Care provides Treatment of Disease, Disorder or Injury (TDDI) services for children and adults with complex, long-term or life-limiting health conditions. Every care package is developed around the individual's clinical needs, daily routine and personal goals.",
    featuresTitle: "Our support includes",
    features: [
      "Tracheostomy care",
      "PEG and enteral feeding",
      "Stoma care",
      "Medication support",
      "Monitoring of health conditions",
      "Personal care and mobility support",
      "Support following illness, injury or hospital discharge",
      "Coordination with families and healthcare professionals",
    ],
  },
  {
    slug: "children-young-people",
    title: "Children & Young People's Care",
    tagline: "Individual support that helps every child feel safe, included and understood.",
    heroImage: "/hero/tablet-support.webp",
    intro:
      "We support children and young people with physical disabilities, learning disabilities, autism, ADHD, complex health conditions and behaviours that challenge. Every care plan is developed with the child or young person, their family and the professionals involved in their care.",
    featuresTitle: "How we can help",
    features: [
      "Personal care and daily routines",
      "Complex clinical care",
      "Communication and sensory support",
      "Positive behavioural support",
      "Social and community activities",
      "Support with developing independence",
      "Respite and assistance for families",
      "Working alongside schools and healthcare professionals",
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
    tagline: "Person-centred support for children and adults with additional or complex needs.",
    heroImage: "/hero/specialist-support.webp",
    intro:
      "We provide structured, compassionate support that reflects each person's communication needs, strengths, preferences and personal goals — for children, young people and adults alike.",
    tiersTitle: "Areas of specialism",
    tiers: [
      { title: "Autism Support", description: "Consistent, person-centred support shaped around the individual's communication, sensory and daily living needs." },
      { title: "ADHD Support", description: "Practical support with routines, organisation, communication, confidence and everyday independence." },
      { title: "Learning Disability Support", description: "Individual assistance with daily living, relationships, community participation and developing independence." },
      { title: "Mental Health Support", description: "Compassionate support that promotes emotional wellbeing, stability and recovery." },
      { title: "Epilepsy Support", description: "Care provided in accordance with the person's individual care plan and risk assessment." },
      { title: "Positive Behavioural Support", description: "Support that seeks to understand the reasons behind behaviours that challenge and improve the person's wellbeing and quality of life." },
    ],
  },
  {
    slug: "mother-baby-support",
    title: "Mother & Baby Support",
    tagline:
      "A safe and supportive environment where mothers can develop parenting skills, confidence and greater independence.",
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
