export const APPLY_URL = 'https://forms.gle/1ph4uKp1EtsLsiyr5';

export interface PaymentOption {
  label: string;
  value: string;
}

export interface ScheduleBlock {
  label: string;
  items: string[];
  note?: string;
}


export interface Course {
  slug: string;
  tier: string;
  status: string;
  comingSoon?: boolean;
  title: string;
  becomes: string;
  price: string;
  foundingLabel?: string;
  standardPriceNote?: string;
  paymentOptions?: PaymentOption[];
  paymentNote?: string;
  schedule?: ScheduleBlock;
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
    format: '2 live classes, 105 minutes each',
    schedule: {
      label: 'Fall 2026 dates (all 1:00-2:45 PM MT):',
      items: ['September 15 & 22', 'October 13 & 20', 'November 3 & 5'],
      note: '2027 calendar coming soon',
    },

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
    format: '6 live classes, 105 minutes each',
    schedule: {
      label: 'Fall 2026 cohorts (all 1:00-2:45 PM MT):',
      items: [
        'Fall cohort: September 30, October 7, 14, 21, 28, November 4',
        'Winter cohort: November 10, 12, 17, 19, December 8, 10',
      ],
      note: '2027 calendar coming soon',
    },

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
    status: 'COHORT-BASED · TWELVE SEATS · APPLICATIONS OPEN',
    title: 'CashoM',
    becomes: 'CashoM — Level 1',
    price: '$9,500',
    foundingLabel: 'Founding Cohort',
    standardPriceNote: 'Standard tuition from Cohort Two: $15,000',
    paymentOptions: [
      { label: 'Pay in full', value: '$8,900 at acceptance' },
      { label: 'Two payments', value: '$4,900 × 2 (acceptance, month 6)' },
      { label: 'Monthly', value: '$1,800 deposit + 8 × $1,050' },
    ],
    paymentNote:
      'All payments complete by month 8. Existing Certified Steward of Cannabis holders receive full credit for prior tuition.',
    format: '12-month apprenticeship · January 2027 – January 2028 · Boulder, CO retreat',
    audience:
      'For practitioners already working with cannabis and consumers who have gone as far as they can on their own.',
    intro:
      '<strong>People don\'t know how to identify what type of high they will have. A CashoM does.</strong><br /><br />Learn how to reach specific states of your high and apply them to your pursuits — the lens that serves writing poetry is not the lens that serves athletic flow. That precision is the gold.<br /><br />Then learn to guide it for others.<br /><br /><strong>We call this the Lens Framework, and it\'s the heart of becoming a CashoM.</strong>',
    learn: [
      'Advanced connoisseurship and the CashoM tasting protocol',
      'The Lens Framework in full — reaching specific states on purpose',
      'Building and running your own guided practice with real guests',
      'Specialization in your domain — culinary, movement, wellness, coaching, retail, or events',
      'The retreat — four days together in Boulder, March 18–21, 2027',
      'A year of direct work with Philip Wolf',
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
      'Earn the CashoM designation',
      'Design and run a signature offering, tested with real guests',
      '26 live sessions and 12 private coaching calls with Philip Wolf over the year',
      'The option to return and teach the next cohort',
      'Licensing to run Cultivating Spirits branded experiences',
      'Join a small alumni network shaping the field',
    ],
    seoTitle: 'CashoM Level 1 — 12-Month Cannabis Apprenticeship',
    seoDescription:
      'A 12-month cannabis apprenticeship with 12 seats, private coaching with Philip Wolf, and a Boulder retreat. Founding Cohort: $9,500.',
    ctaLabel: 'Apply now',
  },
];

export const getCourse = (slug?: string) => courses.find((c) => c.slug === slug);
