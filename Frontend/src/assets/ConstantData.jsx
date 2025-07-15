import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const NavigationData = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Service",
    path: "/",
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
  },
  {
    vector: "/assets/images/home/exp-2.png",
    head: "Web Experiences Ready for the Future",
    pg: "From full-stack apps to e-commerce platforms – we build fast, responsive, and future-proof websites optimized for Web 4.0/5.0.",
  },
  {
    vector: "/assets/images/home/exp-3.png",
    head: "Scalable IT Teams, On-Demand",
    pg: "Hire dedicated developers, QA, or DevOps – hourly or monthly – aligned with European standards and tools you already use.",
  },
  {
    vector: "/assets/images/home/exp-4.png",
    head: "We Build. We Rescue. We Scale.",
    pg: "From idea to launch – or rescue mission – we take ownership of your tech project with PMF guidance, documentation, and scaling support.",
  },
  {
    vector: "/assets/images/home/exp-5.png",
    head: "Proven Results Across Europe",
    pg: "Explore how we built AI tools for law firms, scaled e-commerce backends, empowered education platforms, and rescued critical IT projects.",
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
      "Every great product starts with understanding your goals, your users, your market. We listen first, then plan.",
  },
  {
    number: "02",
    title: "We Design Smart Solutions",
    description:
      "Every great product starts with understanding your goals, your users, your market. We listen first, then plan.",
  },
  {
    number: "03",
    title: "We Build Scalable Systems",
    description:
      "Every great product starts with understanding your goals, your users, your market. We listen first, then plan.",
  },
  {
    number: "04",
    title: "We Deploy Expert Teams",
    description:
      "Every great product starts with understanding your goals, your users, your market. We listen first, then plan.",
  },
  {
    number: "05",
    title: "We Deliver with Precision",
    description:
      "Every great product starts with understanding your goals, your users, your market. We listen first, then plan.",
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
      fade: "fade-right",
    },
    {
      question: "How do we get started?",
      answer: "Book a call we’ll assess your needs and plan the next steps.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: false,
      fade: "fade-left",
    },
    {
      question: "Do you work internationally?",
      answer:
        "Yes, we work with clients across Europe and other regions. Our remote-ready team is experienced in handling international projects with clear communication and reliable delivery.",
      imgUrl: "/assets/images/home/faqs-img.png",
      isLarge: true,
      fade: "fade-up",
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
