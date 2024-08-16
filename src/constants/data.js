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

export const pricingData = [
  {
    type: 'Ez-TakeOff (Pay-Per-User)',
    name: 'All features in Pay-Per-User',
    description: 'For small teams needing essential scheduling & task and productivity management tools.',
    users: 'Up to 10 users',
    price: [
      {
        perUser: '$4 per user',
      },
      {
        monthly: '-',
      },
      {
        yearly: '-',
      },
    ],
    features: [
      {
        name: 'Schedule creation',
      },
      {
        name: 'Task management',
      },
      {
        name: '1 sub-manager',
      },
      {
        name: 'Employee availability selection',
      },
      {
        name: 'In-app communication',
      },
      {
        name: 'Shift-hours limit',
      },
      {
        name: 'Basic productivity tracking',
      },
      {
        name: 'Basic reporting',
      },
    ]
  },
  {
    type: 'Ez-Starter',
    name: 'All features in Ez-Starter',
    description: 'For small to medium-sized teams looking to grow and increase team productivity.',
    users: 'Up to 20 users',
    price: [
      {
        perUser: '$4 per user',
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
        name: 'Up to 2 sub-managers',
      },
      {
        name: 'Shift management',
      },
      {
        name: 'Enhanced task assignment',
      },
      {
        name: 'Limited performance management',
      },
      {
        name: 'Basic reporting',
      },
    ]
  },
  {
    type: 'Ez-Manager',
    name: 'All features in Ez-Starter',
    description: 'For medium-sized businesses needing advanced scheduling and next level productivity.',
    users: 'Up to 35 users',
    price: [
      {
        perUser: '$4 per user',
      },
      {
        monthly: '$80 monthly',
      },
      {
        yearly: '$966/year'
      },
    ],
    features: [
      {
        name: 'Up to 5 sub-managers',
      },
      {
        name: 'Advanced performance management',
      },
      {
        name: 'Advanced reporting',
      },
      {
        name: 'Historical trends and forecasting',
      },
      {
        name: 'Enhanced communication tools',
      },
    ]
  },
  {
    type: 'Ez-Pro',
    name: 'All features in Ez-Pro',
    description: 'For larger teams requiring comprehensive solutions.',
    users: 'Up to 55 users',
    price: [
      {
        perUser: '$4 per user',
      },
      {
        monthly: '$80 monthly',
      },
      {
        yearly: '$966/year'
      },
    ],
    features: [
      {
        name: 'Up to 10 sub-managers',
      },
      {
        name: 'Advanced productivity insights',
      },
      {
        name: 'Real-time performance tracking',
      },
      {
        name: 'Detailed compliance management',
      },
      {
        name: 'Custom reporting formats',
      },
    ]
  },
]