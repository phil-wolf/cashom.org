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
  oneOnOne?: string;
  format: string;

  audience: string;
  intro: string;
  learn: string[];
  curriculum: { title: string; description?: string; items?: string[] }[];
  curriculumHeading?: string;
  curriculumSubheading?: string;
  outcomes: string[];
  seoTitle: string;
  seoDescription: string;
  ctaLabel: string;
}

export const courses: Course[] = [
  {
    slug: 'certified-server-of-cannabis',
    tier: 'Tier 1',
    status: 'The gateway — enrolling now',
    title: 'Certified Server of Cannabis',
    becomes: 'Certified Server of Cannabis',
    price: '$149',
    format: '2 live classes, 105 minutes each',
    schedule: {
      label: 'Fall 2026 dates (all 1:00-2:45 PM MT):',
      items: [
        'September 15th and 17th',
        'September 22nd and 24th',
        'October 13th and 20th',
        'November 3rd and 5th',
      ],
      note: '2027 calendar coming soon',
    },

    audience: 'Hospitality staff serving cannabis guests directly',
    intro:
      'The gateway certification of the CashoM pathway and the credential most professionals need. In two live classes you learn to explain the plant, match a guest to a product they will genuinely enjoy, and hold the room safely.',
    learn: [
      'The history of cannabis and the principle of reciprocity',
      'Flower, concentrates, edibles, and THC beverages with a hospitality lens',
      'How compound makeups shape the kind of high a guest has',
      'Introduction to holding space for people who are high and the flow of cannabis service',
      'Guest communication, with an introduction to the GUIDE method',
      'Recognizing over-consumption, harm reduction, and legal compliance',
    ],
    curriculum: [
      {
        title: 'Cannabis and Product Knowledge',
        items: [
          'History of cannabis',
          'The principle of reciprocity',
          'Flower, concentrates, edibles, and THC beverages with a hospitality lens',
          'Introduction to compound makeups and how they shape the high',
          'Compliance awareness in legal settings',
        ],
      },
      {
        title: 'Class Two — Holding the Room',
        items: [
          'Holding space for people who are high',
          'The flow of cannabis service',
          'Guest communication basics',
          'Introduction to the GUIDE method',
          'Reading intent and the dosing conversation',
          'Harm reduction: recognizing over-consumption and bringing a guest back to comfort',
        ],
      },
    ],
    outcomes: [
      'Serve cannabis guests with the same confidence a sommelier brings to a wine list',
      'Give responsible, accurate product guidance in any legal setting',
      'Handle over-consumption calmly and correctly',
      'Progress through the CashoM pathway',
    ],
    seoTitle: 'Certified Server of Cannabis — Certification | CashoM',
    seoDescription:
      'Become a Certified Server of Cannabis in two live classes. Learn product matching, the GUIDE method, compliance awareness, and harm reduction. $149.',
    ctaLabel: 'Apply now',
  },
  {
    slug: 'certified-steward-of-cannabis',
    tier: 'Tier 2',
    status: 'ENROLLING NOW',
    title: 'Certified Steward of Cannabis',
    becomes: 'Certified Steward of Cannabis',
    price: '$798',
    format: '6 live classes, 105 minutes each',
    oneOnOne: 'Two 30-minute one-on-one sessions to help you build your service',
    schedule: {
      label: 'Fall 2026 cohorts (all 1:00-2:45 PM MT):',
      items: [
        'Fall cohort: September 30, October 7, 14, 21, 28, November 4',
        'Winter cohort: November 10, 12, 17, 19, December 8, 10',
      ],
      note: '2027 calendar coming soon',
    },

    audience:
      'Professionals ready to guide guests, curate events, add cannabis to an existing service, or lead a retail team',
    intro:
      'For professionals who want to lead the experience rather than support it. Stewards curate events, guide groups, and begin building a coaching or hospitality practice of their own.',
    learn: [
      'Take guests through the full GUIDE method of guest communication',
      'Setting the vibe and holding space for people who are high',
      'Advanced terpene and cannabinoid knowledge',
      'Introduction to the Lens Framework — applying your high to your pursuits in life',
      'Beginner connoisseurship — assessing quality and presenting product',
      'Pacing, sequencing, and curating larger events',
      'Introduction to building a coaching or service business',
      'Two 30-minute one-on-one sessions to help you build your service',
    ],
    curriculum: [
      {
        title: 'Advanced Guest Communication and the GUIDE Method',
        description:
          'Move from introduction to fluency in the GUIDE method — the CashoM approach to guest communication — and make product recommendations that land.',
      },
      {
        title: 'Vibe Setting and Holding Space',
        description:
          'Setting the room before anyone consumes, the seven check-ins that come first, holding space in real time, and bringing a guest\'s experience to a close.',
      },
      {
        title: 'Advanced Terpenes and Cannabinoids',
        description:
          'Deeper chemistry and sensory training so your recommendations hold up in front of a discerning room.',
      },
      {
        title: 'The Lens Framework — Introduction',
        description:
          'How cannabis actually makes a person feel, why different bodies and minds respond differently, and an introduction to applying your high to your pursuits in life.',
      },
      {
        title: 'Beginner Connoisseurship',
        description:
          'Telling quality cannabis from the rest, and presenting product the way a professional does.',
      },
      {
        title: 'Building Your Practice',
        description:
          'Curating events — pacing, sequencing, room design, and dosing strategy. Then pricing, positioning, partnerships, and the first offers of a coaching or cannabis service business.',
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
    tier: 'Tier 3',
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
