import {
    mobile,
    backend,
    creator,
    linkedin,
    profile,
    gmail,
    web,
    python,
    sql,
    c_plus_plus,
    css,
    reactjs,
    tailwind,
    html,
    nodejs,
    kkr,
    miotech,
    netflix, 
    food,
    dashboard,
    date,
    duffl,
    hai,
    threejs,
    sagemount,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "Work",
      title: "Experience",
    },
  ];
  
  const hero = [
    {
      title: "Gmail",
      icon: gmail
    },
    {
      title: "Linkedin",
      icon: linkedin
    },
    {
      title: "Profile",
      icon: profile
    }
  ];

  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: c_plus_plus,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "HTML",
      icon: html,
    }
  ];
  
  const experiences = [
    {
      title: "Technical Product Management Intern",
      company_name: "Duffl",
      icon: duffl,
      iconBg: "#FFFFFF",
      date: "March 2023 - Present",
      points: [
        "Designed relational database for efficient data storage and retrieval, applying advanced data structures and algorithms",
        "Analyzed data for A/B testing, resulting in a 30% increase in click-through rate for ‘Referral function’",
        "Conducted user interviews to gather feedback and identify pain points for SaaS product improvement",
        "Collaborated with cross-functional teams to prioritize and roadmap short and long-term product development goals"
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Stanford Center for Human-Centered Artificial Intelligence",
      icon: hai,
      iconBg: "#FFFFFF",
      date: "Nov 2022 - Present",
      points: [
        "Designed Python data analysis software for the HAI Global AI Vibrancy tool, enabling accurate assessment of AI risk",
        "Data analysis on corporate adoption of generative AI for the 2023 AI Index, working with Google and Open Philanthropy"
      ],
    },
    {
      title: "Private Equity Analyst",
      company_name: "Bregal Sagemount",
      icon: sagemount,
      iconBg: "#FFFFFF",
      date: "Jun 2023 - Sept 2023",
      points: [
        "Applied data analysis techniques on a live-deal transaction in the aviation industry to inform investment decision-making", 
        "Collaborated with partners to conduct sectoral research on Cybersecurity and Data Governance, supporting SaaS sourcing "
      ],
    },
    {
      title: "Technology Investing Analyst",
      company_name: "KKR – In collaboration with the Stanford Pre-Business Association",
      icon: kkr,
      iconBg: "#FFFFFF",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Conducted an extensive market analysis of the Data Governance software industry",
        "Focused on industry trends, TAM, exits, early-stage prospects, and LBO targets",
      ],
    },
    {
      title: "Product Strategy & Design Intern",
      company_name: "MioTech",
      icon: miotech,
      iconBg: "#FFFFFF",
      date: "June 2022 - September 2022",
      points: [
        "Developed product roadmap for ESGhub, a new SaaS product, prioritizing features for different user types",
        "Formulated three-tiered pricing proposal for ESGhub using competitor price benchmarking and market sentiment",
        "Revamped ESGhub's user interface by simplifying the user flow, leading to an intuitive and user-friendly experience",
        "Negotiated MOU with external providers, resulting in a 40% reduction in event costs, equivalent to $15K"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "iMessage Texts Sentiment Analysis",
      description:
        "See who are your best friends (and your worse enemies) via NLP sentiment analysis on your text messages, visualized through animated graphics on a Plotly Dashboard",
      tags: [
        {
          name: "plotly dash",
          color: "blue-text-gradient",
        },
        {
          name: "sentiment analysis",
          color: "green-text-gradient",
        },
        {
          name: "python",
          color: "red-text-gradient",
        },
        {
          name: "html",
          color: "red-text-gradient",
        },
        {
          name: "css",
          color: "red-text-gradient",
        }
      ],
      image: dashboard,
      source_code_link: "https://github.com/vaniachow/iMessage_Text_Analysis",
    },
    {
      name: "Netflix Movie Predictor",
      description:
        "Unleash the predictive power of machine learning to accurately guess if viewers will love 'Love Actually' based on their taste in 30 other films from the Netflix dataset!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "naive bayes",
          color: "green-text-gradient",
        }
      ],
      image: netflix,
      source_code_link: "https://github.com/vaniachow/netflix-logistic-regression",
    },
    {
      name: "Date Night Generator",
      description:
        "Spice up your love life with the Date Night Planner: a Python app  to whisk you away on an exciting adventure, combining your preferences for activities, food, and dessert into the perfect romantic rendezvous!",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        }
      ],
      image: date,
      source_code_link: "https://github.com/vaniachow/date-idea-generator",
    },
    {
      name: "Delivery Time Predictor",
      description:
        "Hungry? Estimate how long it'll take before your food arrives using a LSTM Model",
      tags: [
        {
          name: "machine learning",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/vaniachow/food_delivery",
    },
  ];
  
  export { services, hero, technologies, experiences, testimonials, projects };