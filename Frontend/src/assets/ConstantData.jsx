import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const NavigationData = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Service",
    path: "/service",
  },
  {
    text: "About",
    path: "/",
  },
  {
    text: "Case Studies",
    path: "/",
  },
  {
    text: "Team",
    path: "/",
  },
  {
    text: "Blog",
    path: "/",
  },
  {
    text: "Contact",
    path: "/",
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