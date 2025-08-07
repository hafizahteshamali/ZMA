import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const NavigationData = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Service",
    path: "", // ⛔ No route attached
    children: [
      {
        text: "AI Development",
        path: "/service/ai-development",
      },
      {
        text: "Web Development",
        path: "/service/web-development",
      },
      {
        text: "IT Solutions",
        path: "/service/it-solutions",
      },
      {
        text: "Graphic Designing",
        path: "/service/graphic-designing",
      },
    ],
  },
  {
    text: "About",
    path: "/about-us",
  },
  {
    text: "Case Studies",
    path: "/case-studies",
  },
  {
    text: "Team",
    path: "/team",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  {
    text: "Contact",
    path: "/contact",
  },
];

export const BannerData = {
  heading: "Future-Ready ZMA Solutions from Pakistan to Europe",
  para: "We develop AI, websites, and manage your full digital projects with cost-efficient talent and reliable delivery.",
  btnText: "Get a free consultation",
  imgUrl: "/assets/images/home/banner-img.png",
};

export const experienceData = [
  {
    vector: "/assets/images/home/exp-1.png",
    head: "Smarter Solutions, Powered by AI",
    pg: "Custom AI tools, document analyzers, chatbots & recommendation engines – tailored for real business needs. Fine-tuned and production-ready.",
    fade: "fade-up",
    delay: "500"
  },
  {
    vector: "/assets/images/home/exp-2.png",
    head: "Web Experiences Ready for the Future",
    pg: "From full-stack apps to e-commerce platforms – we build fast, responsive, and future-proof websites optimized for Web 4.0/5.0.",
    fade: "fade-up",
    delay: "1000"
  },
  {
    vector: "/assets/images/home/exp-3.png",
    head: "Scalable IT Teams, On-Demand",
    pg: "Hire dedicated developers, QA, or DevOps – hourly or monthly – aligned with European standards and tools you already use.",
    fade: "fade-up",
    delay: "1500"
  },
  {
    vector: "/assets/images/home/exp-4.png",
    head: "We Build. We Rescue. We Scale.",
    pg: "From idea to launch – or rescue mission – we take ownership of your tech project with PMF guidance, documentation, and scaling support.",
    fade: "fade-up",
    delay: "2000"
  },
  {
    vector: "/assets/images/home/exp-5.png",
    head: "Proven Results Across Europe",
    pg: "Explore how we built AI tools for law firms, scaled e-commerce backends, empowered education platforms, and rescued critical IT projects.",
    fade: "fade-up",
    delay: "2500"
  },
];

export const AboutHeadingData = {
  heading: "We Test Before You Rest",
  des: "Rigorous testing and QA mean your product launches without surprises. We break it so your users don’t.",
};

export const AboutContentData = {
  smHeading: "About Us",
  lgHeading: "Driven by Innovation. Defined by Delivery.",
  para: "ZMA is a modern IT company based in Pakistan with a European mindset. We build scalable, secure, and innovative tech solutions with a strong focus on Artificial Intelligence and Full Project Delivery.",
  btnText: "Learn More",
  imgUrl: "/assets/images/home/bubble.png",
};

export const SeviceContent = {
  lgHeading: "How Our Tech Brings Ideas to Life.",
  smHeading: "See How We Build Success",
  description:
    "From concept to launch, we combine intelligent design, advanced development, and dedicated teams to transform your vision into powerful, scalable digital solutions that drive real impact.",
  btnText: "Learn More",
  imgUrl: "/assets/images/home/service-img.png",
};

export const tabs = [
  {
    number: "01",
    title: "We Understand Your Vision",
    description:
      "Before any code is written we focus on understanding your business model your market and the expectations of your users. Our approach is inspired by the consulting style of Central Europe especially Austria and Germany. We ask the right questions and structure the right plan because great digital solutions begin with clarity.",
  },
  {
    number: "02",
    title: "We Design Smart Solutions",
    description:
      "We develop digital products that are intuitive reliable and future proof. Our UX and system designs are based on European design logic and architecture principles ensuring compatibility with local laws usability standards and enterprise workflows. You will recognize the difference in how we think and how we structure.",
  },
  {
    number: "03",
    title: "We Build Scalable Systems",
    description:
      "Our engineering team builds robust secure and scalable systems that comply with European standards including GDPR performance audits and security reviews. From modular backend services to integration with ERP and CRM platforms we deliver the foundation for sustainable digital growth.",
  },
  {
    number: "04",
    title: "We Deploy Expert Teams",
    description:
      "Every project is executed by specialists who bring deep domain knowledge and professional delivery culture. We work with tools and practices commonly used in Austria and Germany including structured documentation testing processes and agile project boards that make progress visible and measurable.",
  },
  {
    number: "05",
    title: "We Deliver with Precision",
    description:
      "Quality assurance is not an afterthought.",
  },
];

export const FAQsHeadingData = {
  lgHeading: "Frequently Asked Questions",
  description:
    "Quick answers about our services, process, and how we work with clients around the world.",
  FAQsTabs: [
    {
      question: "What services do you offer?",
      answer:
        "We offer AI tools, web development, IT outsourcing, and full project delivery.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: false,
      fade: "flip-left",
      delay: "500"
    },
    {
      question: "How do we get started?",
      answer: "Book a call we’ll assess your needs and plan the next steps.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: false,
      fade: "flip-left",
      delay: "1000"
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we work with clients across Europe and other regions. Our remote-ready team is experienced in handling international projects with clear communication and reliable delivery.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: true,
      fade: "flip-left",
      delay: "1300"
    },
  ],
};

export const BringIdeasData = {
  imgUrl: "/assets/images/home/",
};

export const HelpSecData = {
  imgUrl: "/assets/images/home/help-section-img.png",
  heading: "We Build With Intelligence",
  subTitle: "See How We Help You!",
  description:
    "From AI tools to full product builds, our solutions are made to think, scale, and perform.",
  bulletPara: "Tick Points:",
  bullets: [
    "Custom AI & automation",
    "Full-stack development",
    "Global-ready delivery teams",
  ],
  btnText: "Contact now",
};

export const FooterData = {
  logo: "/assets/images/home/white-logo.png",
  para: "We build scalable digital products using AI, modern code, and expert teams.",
  btnText: "Contact",
  socialHead: "Social Media",
  socialIcons: [
    {
      icon: <FaFacebookF className="text-3xl text-white" />,
      link: "/",
    },
    {
      icon: <FaInstagram className="text-3xl text-white" />,
      link: "/",
    },
    {
      icon: <FaWhatsapp className="text-3xl text-white" />,
      link: "/",
    },
  ],
  bullets: [
    {
      subHead: "Home",
      links: [
        {
          text: "Case Studies",
          url: "/",
        },
        {
          text: "Team",
          url: "/",
        },
        {
          text: "Blog",
          url: "/",
        },
        {
          text: "Contact",
          url: "/",
        },
      ],
    },
    {
      subHead: "Our Services",
      links: [
        {
          text: "AI Development",
          url: "/",
        },
        {
          text: "Web Development",
          url: "/",
        },
        {
          text: "Graphic Designing",
          url: "/",
        },
        {
          text: "IT Outsourcing",
          url: "/",
        },
      ],
    },
    {
      subHead: "About Us",
      links: [
        {
          text: "Partners & Clients",
          url: "/",
        },
        {
          text: "Who We Are?",
          url: "/",
        },
        {
          text: "How We Work?",
          url: "/",
        },
        {
          text: "Our Mission",
          url: "/",
        },
      ],
    },
  ],
};


// Services Page

export const ServiceBannerData = {
  heading: "Your Full-Stack Partner for Scalable Web Solutions",
  img1: "/assets/images/service/banner-img1.jpg",
  img2: "/assets/images/service/banner-img2.jpg",
  img3: "/assets/images/service/banner-img3.png",
  buttons: [
    {
      text: "Velraa",
      caseStudyText: "Case Study",
      caseStudyUrl: "/service",
      visitText: "Visit",
      visitUrl: "/service"
    },
    {
      text: "Velraa",
      caseStudyText: "Case Study",
      caseStudyUrl: "/service",
      visitText: "Visit",
      visitUrl: "/service"
    },
    {
      text: "Velraa",
      caseStudyText: "Case Study",
      caseStudyUrl: "/service",
      visitText: "Visit",
      visitUrl: "/service"
    },
  ]
}

export const clientsName = [
  "/assets/images/service/client.png",
  "/assets/images/service/client.png",
  "/assets/images/service/client.png",
  "/assets/images/service/client.png",
  "/assets/images/service/client.png"
]

export const CustomGlobalData = {
  heading: "Custom and global, the brief is simple.",
  text: "From frontend finesse to backend power we deliver full service web solutions.",
  bulletText: "BUILD . RUN . IMPROVE",
  imgUrl: "/assets/images/service/service-toos-img.png",
  services: [
    {
      img: "/assets/images/service/service-1.png",
      smHead: "Visualize What Works",
      description: "Our UI/UX wireframes connect every touchpoint — from websites and mobile apps to backend systems — into a unified, user-centered structure that ensures clarity, usability, and consistency at every stage of the customer journey, empowering your digital presence to scale with confidence.",
      btnText: "Learn more",
      btnLink: "/",
      borderr: true
    },
    {
      img: "/assets/images/service/service-2.png",
      smHead: "Custom & WordPress",
      description: "ZMA builds modern, high-performance websites tailored to your needs from fully custom-coded platforms to flexible, SEO-optimized WordPress solutions. With seamless design, fast load times, and scalable architecture, we make sure your online presence stands out and grows with you.",
      btnText: "Learn more",
      btnLink: "/",
      borderr: true
    },
    {
      img: "/assets/images/service/service-3.png",
      smHead: "Scroll. Animate. Impress.",
      description: "At ZMA, we create smooth, high-impact animations that bring your website to life — from subtle micro-interactions to full scroll-based storytelling. Whether for branding, product showcases, or immersive UX, our animations enhance engagement, improve retention, and make every scroll memorable.",
      btnText: "Learn more",
      btnLink: "/",
      borderr: false
    },
  ]
}


export const DesignGlobalData = {
  heading: "Custom and global, the brief is simple.",
  text: "From frontend finesse to backend power we deliver full service web solutions.",
  bulletText: "BUILD . RUN . IMPROVE",
  services: [
    {
      img: "/assets/images/service/design-card1.png",
      smHead: "Design & Launch",
      description: "Through initial concept workshops and UX/UI sessions, we create detailed wireframes and interactive prototypes, then run agile development sprints. With ongoing user testing, performance tuning, and rigorous QA, we refine every element to deliver a polished, production‑ready website that exceeds your goals and ensures an exceptional launch experience.",
      btnText: "Learn more",
      btnLink: "/",
      rightBorder: true,
      pl: true,
    },
    {
      img: "/assets/images/service/design-card2.png",
      smHead: "Maintain & Optimize",
      description: "Once your website is live, we proactively monitor uptime and performance, apply security patches and updates, and optimize server configurations for traffic spikes. We perform regular health checks, backups, and performance audits, and use analytics‑driven insights to implement iterative improvements—keeping your site fast, secure, and reliable as your business evolves.",
      btnText: "Learn more",
      btnLink: "/",
      rightBorder: false,
      pl: false,
    }
  ]
}

export const theriData = [
  {
    para1: "By far the best agency I’ve worked with.",
    str: "Their professionalism, creativity,",
    para2: "and communication have set a new standard for any future collaborations.",
    name: "Georgia Millar",
    designation: "Founder & CEO",
    image: "/assets/images/service/velra.png"
  },
  {
    para1: "“Professional, creative, and incredibly responsive",
    str: "they turned our vision into a powerful website.",
    para2: "The end result exceeded expectations.”",
    name: "Sarah M",
    designation: "Marketing Director",
    image: "/assets/images/service/sclera.png"
  },
]

// AI Development

export const AiDevelopBannerData={
  heading: "ZMA AI studio.",
  subTitle: "We develop custom AI solutions for innovative companies.",
  link1Text: "our services",
  link1: "/service",
  link2Text: "contact us",
  link2: "/",
  heading2: "We're ZMA-Solutions. We develop custom Al solutions for innovative companies.",
  btn: "Get in touch"
}


// export const WhatWeDo1 = {
//   lgHeading: "What we do?",
//   servicesCards: [
//     {
//       imge: "/assets/images/ai-development/service-card1.png",
//       smHeading: "Chatbot Development",
//       para: "We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
//     },
//     {
//       imge: "/assets/images/ai-development/service-card2.png",
//       smHeading: "Content Creation",
//       para: "Our content creation solutions effortlessly generate high-quality, engaging content according to your brand's guidelines to captivate your audience."
//     },
//     {
//       imge: "/assets/images/ai-development/service-card1.png",
//       smHeading: "Chatbot Development",
//       para: "We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
//     },
//     {
//       imge: "/assets/images/ai-development/service-card1.png",
//       smHeading: "Chatbot Development",
//       para: "We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
//     },
//     {
//       imge: "/assets/images/ai-development/service-card1.png",
//       smHeading: "Chatbot Development",
//       para: "We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes."
//     },
//   ]
// }


// Graphic Designing Page

export const GraphicBannerData = {
  smText: "Creative",
  icon: "/assets/images/graphic-designing/start.svg",
  text: "We build systems that look as good as they work.",
  heading: "Designs that Work Like a System, Not Just a",
  highlight: "Canvas"
}

export const WebReviews1 = [
  {
    description: "Working with your team was seamless. You delivered our e-commerce site faster than expected and with better performance than we imagined.",
    profileImg: "/assets/images/service/review1-img1.jpg",
    name: "Sarah Klein",
    designation: "CEO at GreenCart"
  },
  {
    description: "The redesign completely changed how our users interact with the website. It's faster, cleaner, and mobile-friendly—exactly what we needed.",
    profileImg: "/assets/images/service/review1-img2.jpg",
    name: "David Meier",
    designation: "Marketing Head at EventBuzz"
  },
  {
    description: "From the first meeting to final deployment, your team communicated clearly and delivered everything exactly to our requirements.",
    profileImg: "/assets/images/service/review1-img3.jpg",
    name: "Ahmed Raza",
    designation: "Founder of TechNova"
  },
  {
    description: "We saw a 40% increase in conversions within a month after you launched our new landing pages. Thank you for the incredible work.",
    profileImg: "/assets/images/service/review1-img4.jpg",
    name: "Julia Weber",
    designation: "Digital Strategist at WellNest"
  },
]


export const WebReviews2 = [
  {
    description: "Their ability to understand our business needs and turn them into a custom web solution was impressive.",
    profileImg: "/assets/images/service/review2-img1.jpg",
    name: "Mohsin Ali",
    designation: "Operations Lead at FinEdge"
  },
  {
    description: "I appreciated how your team combined technical skill with design thinking. Our site is not justfunctional—it’s beautiful.",
    profileImg: "/assets/images/service/review2-img2.jpg",
    name: "Elena Fischer",
    designation: "Creative Director at Studio Bloom"
  },
  {
    description: "The backend system you built helped automate 70% of our manual tasks. This is a total game-changer.",
    profileImg: "/assets/images/service/review2-img3.jpg",
    name: "Thomas Berger",
    designation: "CTO at LogiLink"
  },
  {
    description: "Fast support, clear communication, and top-notch code—this team knows what they’re doing.",
    profileImg: "/assets/images/service/review2-img4.jpg",
    name: "Lena Ahmad",
    designation: "Co-Founder of EduTrail"
  }
]


export const FutureWorkData = {
  heading: "Access to the Future of Work",
  para: "Empowering your business with cutting-edge IT infrastructure, smart automation, and next-gen support so you’re always ready for what’s next.",
}

export const FeaturesData ={
  title: "Our Features",
  heading: "Power. Protection. Precision.",
  para: "Empower your business with cutting-edge IT services that combine high-performance systems, continuous security, and expert precision—built to scale with your growth."
}


export const AIReviews1 = [
  {
    description: "We partnered with them for a custom AI chatbot, ‘and the results were impressive. It now handles 70% of our support queries without human intervention. A game-changer for our team!",
    profileImg: "/assets/images/ai-development/ai-review-1-1.jpg",
    name: "Isabella Meier",
    designation: "CX Lead, Talkify"
  },
  {
    description: "Their team developed a machine learning model that helped us detect fraudulent transactions in real-time. The accuracy has been phenomenal highly recommend them.",
    profileImg: "/assets/images/ai-development/ai-review-1-2.jpg",
    name: "Rahul Sharma",
    designation: "Product Manager, ByteCore"
  },
  {
    description: "We had a massive dataset we couldn’t interpret. Their AI solution gave us instant, actionable insights. Their approach was fast, focused, and result-oriented.",
    profileImg: "/assets/images/ai-development/ai-review-1-3.jpg",
    name: "Jonas Klein",
    designation: "Data Lead, Meditrack"
  },
  {
    description: "From the very first call, their understanding of AI implementation was solid. They helped us automate repetitive design tasks with ease.",
    profileImg: "/assets/images/ai-development/ai-review-1-4.jpg",
    name: "Felix Dubois",
    designation: "Innovation Manager, RetailSync"
  }
]

export const AIReviews2 = [
  {
    description: "The computer vision model they created for our quality control process reduced errors by over 80%. Excellent execution and delivery!",
    profileImg: "/assets/images/ai-development/ai-review-2-1.jpg",
    name: "Sara Khan",
    designation: "Head of Ops, AutoLens"
  },
  {
    description: "They transformed our static product listing into an intelligent recommendation system. User engagement increased drastically!",
    profileImg: "/assets/images/ai-development/ai-review-2-2.jpg",
    name: "Michael Tran",
    designation: "Growth Marketer, NewsCraft"
  },
  {
    description: "Our e-learning platform now offers personalized learning paths—all thanks to their AI integration. The UX is next level!",
    profileImg: "/assets/images/ai-development/ai-review-2-3.jpg",
    name: "Ayesha Noor",
    designation: "Support Systems Lead, LearnSpace"
  },
  {
    description: "They built a custom NLP model for our internal tools. It understands commands in natural language, which saved us hours of manual tasks.",
    profileImg: "/assets/images/ai-development/ai-review-2-4.jpg",
    name: "Emily Novak",
    designation: "Risk Analyst, FinWatch"
  }
]

export const GraphicReviews1 = [
  {
    description: "ZMA-Solutions completely transformed my boutique’s branding. Every design feels graceful and intentional. A perfect blend of creativity and professionalism.",
    profileImg: "/assets/images/graphic-designing/review-1-1.jpg",
    name: "Sarah Malik",
    designation: "Boutique Owner"
  },
  {
    description: "Every campaign graphic is flawless. They always deliver beyond expectations – and ahead of schedule.",
    profileImg: "/assets/images/graphic-designing/review-1-2.jpg",
    name: "Ethan Brooks",
    designation: "Tech Startup Co-founder"
  },
  {
    description: "From the logo to typography, everything felt so aligned. My brand identity came to life instantly. A truly game-changing experience.",
    profileImg: "/assets/images/graphic-designing/review-1-3.jpg",
    name: "Liam Carter",
    designation: "Startup Founder"
  },
  {
    description: "Their design language speaks volumes. It’s rare to find a team that understands both vision and detail so well",
    profileImg: "/assets/images/graphic-designing/review-1-4.jpg",
    name: "Nina Alvarez",
    designation: "Creative Director"
  }
]

export const GraphicReviews2 = [
  {
    description: "User interface design is on point. My app now looks and feels ten times more polished.",
    profileImg: "/assets/images/graphic-designing/review-2-1.jpg",
    name: "Noah Kim",
    designation: "App Developer"
  },
  {
    description: "Packaging, product visuals, banners everything feels premium and cohesive. Excellent creative direction.",
    profileImg: "/assets/images/graphic-designing/review-2-2.jpg",
    name: "Chloe Dubois",
    designation: "Social Media Consultant"
  },
  {
    description: "Every visual element they touched from menus to signage now feels modern and memorable.",
    profileImg: "/assets/images/graphic-designing/review-2-3.jpg",
    name: "Bilal Khan",
    designation: "Restaurant Owner"
  },
  {
    description: "Packaging, product visuals, banners everything feels premium and cohesive. Excellent creative direction.",
    profileImg: "/assets/images/graphic-designing/review-2-4.jpg",
    name: "Farhan Qureshi",
    designation: "E-commerce Brand Owner"
  }
]


export const ITSolutionReviews1 = [
  {
    description: "ZMA-Solutions delivered a secure and scalable IT infrastructure for our growing needs. Their support has been exceptional.",
    profileImg: "/assets/images/it-solutions/review-1-1.jpg",
    name: "Emily Chen",
    designation: "CEO, FinTech Solutions"
  },
  {
    description: "Their real-time system monitoring helped us catch issues before they became problems. Reliable and proactive.",
    profileImg: "/assets/images/it-solutions/review-1-2.jpg",
    name: "James O’Connor",
    designation: "Operations Manager, HealthTrack"
  },
  {
    description: "From cloud migration to 24/7 support, their service is top-notch. Our downtime dropped to nearly zero.",
    profileImg: "/assets/images/it-solutions/review-1-3.jpg",
    name: "Carlos Mendes",
    designation: "Co-Founder, EduWave"
  },
  {
    description: "ZMA-Solutions’ technical support is fast, clear, and always helpful. We never feel left in the dark.",
    profileImg: "/assets/images/it-solutions/review-1-4.jpg",
    name: "Yuki Nakamura",
    designation: "IT Lead, RetailConnect"
  }
]

export const ITSolutionReviews2 = [
  {
    description: "They brought structure and security to our scattered data systems. Now everything just works.",
    profileImg: "/assets/images/it-solutions/review-2-1.jpg",
    name: "Anastasia Petrova",
    designation: "CTO, Eventrix"
  },
  {
    description: "They simplified our complex IT setup and made everything user-friendly. Incredible transformation.",
    profileImg: "/assets/images/it-solutions/review-2-2.jpg",
    name: "David Smith",
    designation: "Managing Director, MedGear"
  },
  {
    description: "Their data management approach keeps us compliant and confident. Truly professional service.",
    profileImg: "/assets/images/it-solutions/review-2-3.jpg",
    name: "Fatima El Amrani",
    designation: "Digital Project Manager"
  },
  {
    description: "Their monitoring dashboard gives us peace of mind. Smooth systems, better performance.",
    profileImg: "/assets/images/it-solutions/review-2-4.jpg",
    name: "Jonas Bergström",
    designation: "Co-Founder, WorkNest"
  }
]


// About Page
export const TailoredSectionData = {
  img: "/assets/images/about/tailored-img.jpg",
  heading: "Tailored Solutions",
  description: "At ZMA, our remote-first team brings together world-class web development, AI innovation, graphic design, and IT services—united by integrity, respect, and a passion for excellence. We meet regularly in person to collaborate, iterate, and ensure every solution exceeds expectations. Failure is not an option—only growth through bold execution.",
  btnText: "Learn more"
}

export const TrustedWorldWideData = {
  head: "Trusted Worldwide",
  NumberList: [
    {
      num: "500+",
      text: "Digital Elements Processed",
      linkText: "View all",
      textLink: "/about-us"
    },
    {
      num: "25+",
      text: "Time Zones Covered",
      linkText: "View all",
      textLink: "/about-us"
    },
    {
      num: "86%+",
      text: "Automation Achieved",
      linkText: "View all",
      textLink: "/about-us"
    },
  ],
  lgText: "We help businesses reduce manual workload, enhance visibility, and accelerate growth across Web Development, AI Services, Graphic Design, and IT Solutions.",
  serviceText: "Our Services",
  serviceLink: "/about-us",
  image: "/assets/images/about/trust-sec-img.jpg"
}