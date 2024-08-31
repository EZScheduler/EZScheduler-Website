import { Icons } from "../assets/icons/icons";

export const tabs = [
  {
    id: 1,
    name: "General",
  },
  {
    id: 2,
    name: "Features & Functionality",
  },
  {
    id: 3,
    name: "Demo & Pricing",
  },
];

export const socials = [
  {
    name: "linkedin",
    link: "https://www.linkedin.com/company/ez-scheduler-llc",
    icon: Icons.linkedin,
  },
  {
    name: "twitter",
    link: "https://x.com/ezschedulerxyz",
    icon: Icons.twitter,
  },
  {
    name: "facebook",
    link: "#",
    icon: Icons.facebook,
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/ezschedulerxyz/",
    icon: Icons.instagram,
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/@EZScheduler",
    icon: Icons.youtube,
  },
];

export const privacyPolicy = [
  {
    id: 'introduction',
    title: 'INTRODUCTION',
  },
  {
    id: 'summary',
    title: 'SUMMARY',
  },
  {
    id: 'collection',
    title: 'WHAT INFORMATION DO WE COLLECT?',
  },
  {
    id: 'process',
    title: 'HOW DO WE PROCESS YOUR INFORMATION?',
  },
  {
    id: 'legal',
    title: 'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?',
  },
  {
    id: 'share',
    title: 'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
  },
  {
    id: 'tracking',
    title: 'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
  },
  {
    id: 'transferred',
    title: 'IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?',
  },
  {
    id: 'keeping',
    title: 'HOW LONG DO WE KEEP YOUR INFORMATION?',
  },
  {
    id: 'safety',
    title: 'HOW DO WE KEEP YOUR INFORMATION SAFE?',
  },
  {
    id: 'minors',
    title: 'DO WE COLLECT INFORMATION FROM MINORS?',
  },
  {
    id: 'rights',
    title: 'WHAT ARE YOUR PRIVACY RIGHTS?',
  },
  {
    id: 'controls',
    title: 'CONTROLS FOR DO-NOT-TRACK FEATURES',
  },
  {
    id: 'specific',
    title: 'DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
  },
  {
    id: 'updates',
    title: 'DO WE MAKE UPDATES TO THIS NOTICE?',
  },
  {
    id: 'contact',
    title: 'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
  },
  {
    id: 'delete',
    title: 'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?',
  },
]

export const cookiePolicy = [
  {
    id: 'introduction',
    title: 'INTRODUCTION'
  },
  {
    id: 'definition',
    title: 'WHAT ARE COOKIES?'
  },
  {
    id: 'usage',
    title: 'WHY DO WE USE COOKIES?'
  },
  {
    id: 'control',
    title: 'HOW CAN I CONTROL COOKIES?'
  },
  {
    id: 'browser',
    title: 'HOW CAN I CONTROL COOKIES ON MY BROWSER?'
  },
  {
    id: 'tracking',
    title: 'WHAT ABOUT OTHER TRACKING TECHNOLOGIES, LIKE WEB BEACONS?'
  },
  {
    id: 'flash',
    title: 'DO YOU FLASH COOKIES OR LOCAL SHARED OBJECTS?'
  },
  {
    id: 'advertisement',
    title: 'DO YOU SERVE TARGETED ADVERTISING?'
  },
  {
    id: 'update',
    title: 'HOW OFTEN WILL YOU UPDATE THIS COOKIE POLICY?'
  },
  {
    id: 'information',
    title: 'WHERE CAN I GET FURTHER INFORMATION?'
  }
]

export const pricingData = [
  // {
  //   type: 'Ez-TakeOff (Pay-Per-User)',
  //   name: 'All features in Pay-Per-User',
  //   description: 'For small teams needing essential scheduling & task and productivity management tools.',
  //   users: 'Up to 10 users',
  //   price: [
  //     {
  //       perUser: '$4 per user',
  //     },
  //     {
  //       monthly: '-',
  //     },
  //     {
  //       yearly: '-',
  //     },
  //   ],
  //   features: [
  //     {
  //       name: 'Schedule creation',
  //     },
  //     {
  //       name: 'Task management',
  //     },
  //     {
  //       name: '1 sub-manager',
  //     },
  //     {
  //       name: 'Employee availability selection',
  //     },
  //     {
  //       name: 'In-app communication',
  //     },
  //     {
  //       name: 'Shift-hours limit',
  //     },
  //     {
  //       name: 'Basic productivity tracking',
  //     },
  //     {
  //       name: 'Basic reporting',
  //     },
  //   ]
  // },
  {
    type: 'Ez-Starter',
    name: 'All features in Ez-Starter',
    description: 'For small to medium-sized teams needing essential scheduling, task, and productivity management tools.',
    users: '0 - 10 Users',
    price: [
      {
        perUser: '$4 per user',
      },
      {
        monthly: '$39.99/Month',
      },
      {
        yearly: '$455/Year'
      },
    ],
    features: [
      {
        name: 'Create up to 3 different schedules',
      },
      {
        name: 'Employee available selection',
      },
      {
        name: 'In-app communication',
      },
      {
        name: 'Up to 2 sub-managers',
      },
      {
        name: 'Shift-hours limiit',
      },
      {
        name: 'Limited performance tracking',
      },
      {
        name: 'Basic reporting',
      }
    ]
  },
  {
    type: 'Ez-Manager',
    name: 'All features in Ez-Manager',
    description: 'For medium-sized and larger teams needing advanced scheduling and next level productivity, with flexibility to grow.',
    users: '10 - 500 Users',
    price: [
      {
        perUser: '$4 per user',
      },
      {
        monthly: 'Varies/Month',
      },
      {
        yearly: 'Varies/Year'
      },
    ],
    features: [
      {
        name: 'Multiple Schedules module',
      },
      {
        name: 'Up to 5 sub-managers',
      },
      {
        name: 'Advanced performance management & productivity tracking',
      },
      {
        name: 'Advanced productivity insights',
      },
      {
        name: 'Detailed compliance management',
      },
      {
        name: 'Custom reporting formats',
      }
    ]
  },
  {
    type: 'Ez-Enterprise',
    name: 'All features in Ez-Enterprise',
    description: 'For larger teams requiring comprehensive solutions.',
    users: '500+ Users',
    price: [
      {
        perUser: 'Custom pricing',
      },
      {
        monthly: '-',
      },
      {
        yearly: '-'
      },
    ],
    features: [
      {
        name: 'Unlimited sub-managers',
      },
      {
        name: 'Dedicated account manager',
      },
      {
        name: 'Custom integrations',
      },
      {
        name: 'Enterprise-grade security',
      },
      {
        name: 'Priority support',
      },
    ]
  },
]