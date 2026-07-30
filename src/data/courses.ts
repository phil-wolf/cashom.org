export const APPLY_URL = 'https://forms.gle/1ph4uKp1EtsLsiyr5';

export interface Course {
  slug: string;
  tier: string;
  status: string;
  comingSoon?: boolean;
  title: string;
  becomes: string;
  price: string;
  format: string;
  audience: string;
  intro: string;
  learn: string[];
  curriculum: { title: string; description: string }[];
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
  ctaLabel: string;
}

export const courses: Course[] = [
  {
    slug: 'cannabis-lounge-attendant',
    tier: 'Tier 1',
    status: 'Coming soon',
    comingSoon: true,
    title: 'Cannabis Lounge Attendant Certification',
    becomes: 'Lounge Attendant Certified',
    price: '$39',
    format: 'Self-paced · online',
    audience: 'Lounge workers with no hosting or guidance responsibilities',
    intro:
      'An optional starting point for anyone working the floor of a consumption lounge. Learn the product basics, service standards, and safety habits that keep a room running well — before you ever step into a guiding role.',
    learn: [
      'Consumable basics across product formats',
      'Responsible service fundamentals',
      'Cleanliness and basic safety protocols',
    ],
    curriculum: [
      {
        title: 'Product Formats 101',
        description:
          'Flower, pre-rolls, concentrates, edibles, and THC beverages — what each one is, how it is consumed, and how onset and duration differ.',
      },
      {
        title: 'Responsible Service Fundamentals',
        description:
          'Checking identification, understanding local rules, pacing guests, and knowing when to stop service.',
      },
      {
        title: 'Cleanliness, Equipment, and Safety',
        description:
          'Glass and device hygiene, ventilation and air quality, spill and ash handling, and basic incident response.',
      },
      {
        title: 'Working the Room',
        description:
          'Reading the floor, escalating to a certified server, and supporting the guest experience without giving guidance you are not certified to give.',
      },
    ],
    outcomes: [
      'Confidently support a consumption lounge floor from day one',
      'Speak accurately about product formats without overstepping',
      'Recognize when a guest needs a certified server or steward',
      'Carry a credential that shows employers you take service seriously',
    ],
    seoTitle: 'Cannabis Lounge Attendant Certification — CashoM',
    seoDescription:
      'Entry-level cannabis lounge attendant certification covering product formats, responsible service, cleanliness, and safety. Coming soon from CashoM.',
    ctaLabel: 'Join the waitlist',
  },
  {
    slug: 'certified-server-of-cannabis',
    tier: 'Tier 2',
    status: 'The gateway — enrolling now',
    title: 'Certified Server of Cannabis',
    becomes: 'Certified Server of Cannabis',
    price: '$149',
    format: '3 classes · 75 minutes each · 2–3 weeks',
    audience: 'Hospitality staff serving cannabis guests directly',
    intro:
      'The gateway certification of the CashoM pathway and the credential most professionals need. In three live classes you learn to explain the plant, match a guest to a product they will genuinely enjoy, and hold the room safely.',
    learn: [
      'Explaining the plant to a curious guest',
      'Basic safety, cleanliness, and legal/compliance awareness',
      "Matching a guest to a product they'll enjoy, across flower, concentrates, edibles, and THC beverages",
      'Guest communication, with an introduction to the GUIDE method',
      'Recognizing over-consumption and basic harm-reduction',
    ],
    curriculum: [
      {
        title: 'Class One — The Plant and the Guest',
        description:
          'Cannabis fundamentals you can explain in plain language: cannabinoids, terpenes, the entourage effect, and why two guests react differently to the same product.',
      },
      {
        title: 'Class Two — Product Matching and Service',
        description:
          'Reading intent, dosing conversations, and matching across flower, concentrates, edibles, and THC beverages. Introduction to the GUIDE method of guest communication.',
      },
      {
        title: 'Class Three — Safety, Compliance, and Recovery',
        description:
          'Cleanliness and compliance awareness, spotting over-consumption early, and harm-reduction techniques for bringing a guest back to comfort.',
      },
    ],
    outcomes: [
      'Serve cannabis guests with the same confidence a sommelier brings to a wine list',
      'Give responsible, accurate product guidance in any legal setting',
      'Handle over-consumption calmly and correctly',
      'Unlock the Steward and CashoM tiers of the pathway',
    ],
    seoTitle: 'Certified Server of Cannabis — Certification | CashoM',
    seoDescription:
      'Become a Certified Server of Cannabis in three live classes. Learn product matching, the GUIDE method, compliance awareness, and harm reduction. $149.',
    ctaLabel: 'Apply now',
  },
  {
    slug: 'certified-steward-of-cannabis',
    tier: 'Tier 3',
    status: 'Enrollment opening soon',
    title: 'Certified Steward of Cannabis',
    becomes: 'Certified Steward of Cannabis',
    price: '$798',
    format: '8 classes · 75 minutes each',
    audience: 'Professionals ready to guide guests, curate events, and build a coaching practice',
    intro:
      'For professionals who want to lead the experience rather than support it. Stewards curate events, guide groups, and begin building a coaching or hospitality practice of their own.',
    learn: [
      'Full application of the GUIDE method',
      'Introduction to the Lens Framework',
      'Pacing, sequencing, and curating larger events',
      'Advanced terpene and cannabinoid knowledge',
      'Deeper harm-reduction and addiction awareness',
      'Introduction to building a coaching or service business',
    ],
    curriculum: [
      {
        title: 'The GUIDE Method in Full',
        description:
          'Move from introduction to fluency — leading a guest through intention, selection, consumption, and integration.',
      },
      {
        title: 'The Lens Framework — Introduction',
        description:
          'The CashoM approach to applying a cannabis experience to a pursuit: creativity, movement, connection, or rest.',
      },
      {
        title: 'Advanced Terpenes and Cannabinoids',
        description:
          'Deeper chemistry and sensory training so your recommendations hold up in front of a discerning room.',
      },
      {
        title: 'Curating Events',
        description:
          'Pacing, sequencing, room design, and dosing strategy for dinners, retreats, and larger gatherings.',
      },
      {
        title: 'Harm Reduction and Addiction Awareness',
        description:
          'Recognizing dependency patterns, holding difficult conversations, and knowing your limits as a practitioner.',
      },
      {
        title: 'Building Your Practice',
        description:
          'Pricing, positioning, partnerships, and the first offers of a coaching or cannabis service business.',
      },
    ],
    outcomes: [
      'Design and lead your own cannabis experiences and events',
      'Guide guests through the full GUIDE method with confidence',
      'Launch a coaching or hospitality service under the CashoM seal',
      'Qualify for optional specialty certifications as they release',
    ],
    seoTitle: 'Certified Steward of Cannabis — Advanced Certification | CashoM',
    seoDescription:
      'Eight-class advanced certification for cannabis professionals: the GUIDE method, Lens Framework, event curation, harm reduction, and building a practice.',
    ctaLabel: 'Apply now',
  },
  {
    slug: 'cashom-level-1',
    tier: 'Tier 4',
    status: 'Cohort-based · in-person retreat',
    title: 'CashoM',
    becomes: 'CashoM — Level 1',
    price: '$12,000',
    format: '12-month program · weekly sessions · monthly workshops · live retreat',
    audience: 'A dedicated few pursuing full mastery and stewardship of the experience itself',
    intro:
      'The full mastery path. A twelve-month cohort with weekly training, monthly workshops, private coaching with Philip Wolf, and an in-person retreat — for the few who intend to shape cannabis hospitality itself.',
    learn: [
      '12-month structured curriculum',
      'Weekly training sessions and monthly group workshops',
      'Private coaching sessions with Philip Wolf',
      'Full application of the Lens Framework: "Apply your high to your pursuits in life"',
      'An exclusive in-person retreat experience',
    ],
    curriculum: [
      {
        title: 'Foundations Revisited',
        description:
          'Rebuild your fundamentals at the depth mastery requires — history, plant medicine, culture, and reciprocity.',
      },
      {
        title: 'The Lens Framework in Full',
        description:
          'A full year of practice applying your high to your pursuits, and teaching others to do the same.',
      },
      {
        title: 'Weekly Training and Monthly Workshops',
        description:
          'Live cohort sessions, peer practice, and facilitated workshops that turn theory into repeatable craft.',
      },
      {
        title: 'Private Coaching with Philip Wolf',
        description:
          'One-on-one sessions to build your specific vision — a lounge, an event company, a coaching practice, or a brand.',
      },
      {
        title: 'The Retreat',
        description:
          'An exclusive in-person experience where the cohort practices, teaches, and is assessed together.',
      },
    ],
    outcomes: [
      'Earn the CashoM — Level 1 credential',
      'Build and launch a signature cannabis hospitality offering',
      'Work directly with Philip Wolf for a full year',
      'Join a small alumni network shaping the field',
    ],
    seoTitle: 'CashoM Level 1 — 12-Month Cannabis Mastery Program',
    seoDescription:
      'A 12-month cohort program with weekly training, monthly workshops, private coaching with Philip Wolf, and an in-person retreat. Earn CashoM — Level 1.',
    ctaLabel: 'Apply now',
  },
];

export const getCourse = (slug?: string) => courses.find((c) => c.slug === slug);
