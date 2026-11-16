export const en = {
  meta: {
    title: "Pavel Šťastný Portfolio",
    description:
      "Pavel Šťastný, front-end & AI engineer. I help teams build AI into their products and ship faster with AI-assisted workflows.",
  },
  hero: {
    role: "Front-end & AI engineer",
    imageAlt: "Pavel Šťastný image",
    tagline:
      "I develop with AI and help others work more efficiently or bring AI into their products.",
    cta: "Email me",
    secondaryCta: "What I offer",
  },
  nav: {
    label: "Sections",
    about: "About",
    consulting: "AI consulting",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  sections: {
    about: "ABOUT ME",
    techStack: "My tech stack",
    workExperience: "WORK EXPERIENCE",
    soloProjects: "SOLO PROJECTS",
    aiProjects: "AI PROJECTS",
    aiConsulting: "AI ENGINEERING & CONSULTING",
  },
  consulting: {
    intro:
      "I help teams build AI into their products and ship faster with AI-assisted workflows. I work with AI every day, so I know what is production-ready and what is just a demo.",
    services: [
      {
        title: "Agents & automation",
        description:
          "Custom agents, skills and MCP servers that automate repetitive work and connect AI to your internal tools.",
      },
      {
        title: "AI-accelerated development",
        description:
          "Setting up AI coding workflows for your team: tooling, conventions, reviews and onboarding.",
      },
      {
        title: "AI audit & strategy",
        description:
          "Finding where AI actually pays off, and where it does not. Includes cost, risk and data-privacy considerations.",
      },
    ],
    caseStudiesTitle: "Selected work",
    problem: "Problem",
    approach: "Approach",
    result: "Result",
    caseStudies: [
      {
        title: "AI workflows for a front-end team",
        problem:
          "A product team maintaining a large React codebase lost time on repetitive tasks, inconsistent code style and slow reviews.",
        approach:
          "Built custom AI skills and agents encoding the team's conventions, plus shared prompts and guidelines for linting, refactoring and code review.",
        result:
          "Faster delivery of routine work, more consistent code and quicker onboarding.",
      },
      {
        title: "AI-assisted website delivery",
        problem:
          "A small business needed a professional website quickly and with no hosting costs.",
        approach:
          "Directed AI tools for design and implementation, reviewed every output and deployed on Cloudflare Pages.",
        result:
          "A production website delivered within a single day with zero hosting cost.",
      },
    ],
    ctaTitle: "Have an AI project or idea?",
    ctaText:
      "Tell me briefly what you are trying to achieve. I will get back to you with next steps.",
    ctaButton: "Email me",
    emailSubject: "AI consulting inquiry",
  },
  skillCards: [
    {
      title: "React Enthusiast",
      description:
        "I'm passionate Front-end developer, mainly focused on developing React/Typescript applications.",
    },
    {
      title: "Quality oriented",
      description:
        "My main goal is to create a great user experience and make the apps accessible, efficient, and user-friendly.",
    },
    {
      title: "Professional",
      description:
        "I write clean, readable, and maintainable code that adheres to the best industry standards.",
    },
    {
      title: "AI-powered",
      description:
        "I use AI to the fullest in my daily work and can integrate it into your products and systems, from smart features to automated workflows.",
    },
  ],
  techStack: {
    main: "Main stack",
    ai: "AI & agents",
    workedWith: "Worked with",
    other: "Other interests and tools",
  },
  experience: [
    {
      title: "Front-end developer, YunexTraffic s.r.o.",
      date: "05/2022 – present",
      description:
        "Developing web apps and React components as part of the FE/UX team using React, Typescript etc. Lead UI library development, and boost code quality in legacy projects through linting, refactoring, and code reviews, all while improving overall user experience with performance in mind. I use AI daily for coding, build custom skills and custom agents, and help the team speed up development with them.",
    },
    {
      title: "Web Developer, Papirfly",
      date: "07/2021 – 04/2022",
      description:
        "Develop web applications and websites for clients using JavaScript/TypeScript, Angular, CSS (SASS) etc. As the sole front-end developer, I built a single-page application (SPA) using vanilla JavaScript, class-based components, SCSS styles, and REST API integration.",
    },
    {
      title: "Software tester, TwinSoft s.r.o",
      date: "11/2017 – 07/2021",
      description:
        "Part-time job at college. Manual and automated testing of a web application, including SQL database interaction. Enhanced the app's UX through valuable feedback.",
    },
  ],
  projects: {
    introHandwritten:
      "Projects written by hand, without AI. Some are practice projects, others are fully functional, and together they show part of my journey.",
    introAi:
      "Projects built with the help of AI tools, or generated almost entirely by them. I guide the direction, review the result and ship it. It is a great way to deliver a working website in a very short time.",
    imageAlt: "Image of application:",
    technologies: "Technologies:",
    sourceCode: "Source code",
    openDemo: "Open demo",
    svelteOpinionLabel: "My opinion on SVELTE: ",
    items: {
      bang: {
        content:
          "This is a calculator for score in board game BANG!. Bang! is a Wild West-themed social deduction card game designed by Emiliano Sciarra and released in 2002. The scoring system is taken from the Official tournament system. At the end of each game, each player gains an amount of points based on the results of the game. It is not important who eliminated a specific player.",
      },
      cestaky: {
        content:
          "Web application in which you can calculate travel costs based on the data you enter, such as starting position and finishing position, price per km, etc. The application is created using react and firebase. MapBox directions API is used to calculate the distance. MapBox geocoding API is used to get the addresses.",
      },
      svelte: {
        content:
          "An application created in September 2021 when I started exploring the Svelte framework. Since I wanted to try working with Svelte, I created this small project. It is a simple client-only app, where I wanted to try new technology.",
        opinion:
          "I found working with Svelte very enjoyable, and IMO, it's an excellent technology. I especially appreciate the quick setup and the overall simplicity of the framework. The technical documentation and example tutorials are also outstanding. Compared to React or Angular, Svelte feels much more lightweight. To start a project, you just need to download a template, and you're ready to go. Deployment is also straightforward because Svelte builds a clean JS file that is deployed together with an HTML and CSS file. Simple. Combined with gh-pages, it's a very fast way to develop and deploy your own smaller projects.",
      },
      drums: {
        content:
          "This project was created as a spin-off from the Drum Machine project on freeCodeCamp. In the Beat Maker, you can compose music (beats) and loop them. In the Drum Machine, you can play virtual drums. The applications offer various settings: speed, volume, drum kit, pitch, and appearance. In the Beat Maker, you can export and import settings to share your compositions. Created in December 2021.",
      },
      pomodoro: {
        content:
          "A Pomodoro timer that helps you track your work and break times. In the timer, you can set intervals, and the timer will notify you with a sound when it’s time to take a break or get back to work. I integrated the Unsplash API to display a different random photo with each load. Additionally, motivational quotes appear to encourage you during work intervals. Sound signals are also a nice addition.",
      },
      pedikura: {
        content:
          "A presentation website for a mobile pedicure service, built with the help of AI and ready within a single day. It is deployed on Cloudflare Pages, so there are no costs for the domain or web hosting.",
        tech: "AI-assisted development, Cloudflare Pages",
      },
    },
  },
  footer: {
    links: "Links",
    aboutPage: "About this page",
    aboutPageText:
      "Page is made with ♥ Astro ♥. Even if my favourite tech stack is React/Typescript, I have chosen raw speed over my DX. That is why this page uses only mix of tailwind, scss and good old vanilla javascript. Page started as hand crafted portfolio, now I am doing updates and improvements with AI.",
    rights: "All Rights Reserved.",
  },
  randomizer: {
    tooltip: "Randomize base color",
    title: "Randomize color",
  },
  languageSwitcher: {
    label: "Language",
  },
};

export type Dictionary = typeof en;
