import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Biplab Roy",
  initials: "BR",
  url: "https://portfilo.wowdev.xyz",
  location: "barasat, WB",
  locationLink: "https://www.google.com/maps/place/barasat",
  description: "Web & DevOps Engineer passionate about automation, backend systems, and helping others level up. Currently building useful tools for companies and students.",
  summary: "In 2025, I started focusing on DevOps after gaining experience in full-stack development with React, React Native, and Node.js. I'm the creator of [Remind ME](https://github.com/the-remind-me/remind-me-v4-application), a college-focused Schedule tracker app. I've built and deployed scalable backend services using Docker and Express, hosted on AWS EC2. I'm currently learning infrastructure as code with Terraform and Learned CI/CD workflows using GitHub Actions and Jenkins. I enjoy solving problems that bridge development and operations, and I’m actively preparing for a full-time role in DevOps.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Docker",
    "Kubernetes",
    "Cloud",
    "AWS",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "contact@wowdev.xyz",
    tel: "+919733958199",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biplabroy-1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/biplabroy1",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/biplabroy_1",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "AZMTH TECHNOLOGIES LLP",
      href: "https://home.globaltfn.tech",
      location: "Remote",
      title: "DevOps & tech Lead",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQFRIgZiE3JuBw/company-logo_200_200/company-logo_200_200/0/1721229006140/the_future_network_ai_logo?e=1752105600&v=beta&t=hkEYBabU3CKU-Bbx1Ho23KWjlrqhWouYpTo9w3qX94I",
      start: "Feb 2024",
      end: "Present",
      description:
        "Worked on setting up Docker-based development environments and automated deployment pipelines. Assisted in configuring Nginx as a reverse proxy and improved internal logging infrastructure. Helped transition backend services to a containerized workflow with Docker Compose.",
    },
    {
      company: "CapitalFi",
      href: "https://capitalfi.org",
      location: "Remote",
      title: "Backend Devloper",
      logoUrl: "https://media.licdn.com/dms/image/v2/D560BAQEfcjOGeIJjDA/company-logo_200_200/B56ZZUoFd_GsAI-/0/1745176516949/capitalfi_logo?e=1752105600&v=beta&t=injB1KRq8P5OVuEqPii8edFlvDB76i0gfcW-hYbdWfM",
      start: "Dec 2024",
      end: "Mar 2025",
      description:
        "Contributed to the backend development of fintech modules using Node.js and MongoDB. Set up server environments on AWS EC2 and configured CI/CD workflows using GitHub Actions. Collaborated with the team to improve deployment consistency and reduce build downtime.",
    }
  ],

  education: [
    {
      school: "Brainware University",
      href: "https://www.brainwareuniversity.ac.in/",
      degree: "BCA",
      logoUrl: "https://www.brainwareuniversity.ac.in/images/bwu-logo.svg",
      start: "2023",
      end: "2026",
    },
    {
      school: "Nandanpur Adarsh Vidyapith",
      href: "#",
      degree: "Higher secondary education",
      logoUrl: "https://school.banglarshiksha.gov.in/sms/templates/uploads/ws/44176/316253.png",
      start: "2021",
      end: "2022",
    }
  ],
  projects: [
    {
      title: "Remind Me (College Scheduler App)",
      href: "https://github.com/the-remind-me/remind-me-v4-application",
      dates: "Sep 2024 - Nov 2024",
      active: true,
      description:
        "A full-featured React Native app for students to track their college classes, meals, and get daily reminders. Includes alarm integration, widget support, holiday skipping, and offline data sync using MMKV. Backend supports admin data entry and push updates.",
      technologies: [
        "React Native",
        "Node.js",
        "MongoDB",
        "Express",
        "MMKV",
        "Expo Notifications",
        "Android Widgets",
        "Docker",
      ],
      links: [
        {
          type: "App",
          href: "https://github.com/the-remind-me/remind-me-v4-application",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Admin Panel",
          href: "https://github.com/the-remind-me/remind-me-v4-adminpanel",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Home Page",
          href: "https://remindme.globaltfn.tech",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/remindme.png",
      video: "", // Add if demo exists
    },
    {
  title: "URL Shortener",
  href: "https://github.com/biplabroy-1/url-shortner",
  dates: "March 2024 - April 2024",
  active: true,
  description:
    "Built a customizable URL shortener with support for custom aliases, analytics tracking, and user-specific domain integration. Developed using Next.js API routes and MongoDB.",
  technologies: [
    "Next.js",
    "MongoDB",
    "Tailwind CSS",
    "clerk",
    "JWT",
    "Vercel",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/biplabroy-1/url-shortner",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "/url-shortner.png",
  video: "",
    },
    {
      title: "RAHI – Uber Clone (Backend)",
      href: "https://github.com/biplabroy-1/RAHI-backend",
      dates: "March 2024 - April 2024",
      active: true,
      description:
        "Developed the backend for an Uber-style ride-sharing app. Handles real-time driver-user coordination, ride bookings, and admin features. Built using scalable Express.js architecture and MongoDB.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/biplabroy-1/RAHI-backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/uber.jpg",
      video: "",
    },
    {
      title: "NextQnA – Community QnA Platform",
      href: "https://github.com/biplabroy-1/nextqna",
      dates: "January 2024 - February 2024",
      active: true,
      description:
        "A full-stack Q&A platform like Stack Overflow built using Next.js App Router and MongoDB. Features markdown-based editor, voting, search, and authentication.",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/biplabroy-1/nextqna",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nextqna.png",
      video: "",
    },
    {
      title: "Brainware Self-Service App",
      href: "https://github.com/biplabroy-1/Student-Self-Service-app",
      dates: "November 2023 - December 2023",
      active: true,
      description:
        "Unofficial mobile app for Brainware University students. Helps students track attendance, exam results, and fee status using scraping and local storage.",
      technologies: [
        "React Native",
        "Cheerio",
        "Node.js",
        "Express",
        "MMKV",
        "Web Scraping",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/biplabroy-1/Student-Self-Service-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/selfservice.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
