import {
  Palette,
  Code2,
  Search,
  PenTool,
  Wrench,
} from "lucide-react";


const services = [

  {
    id: "web-design",

    title: "Premium Website Design",

    shortTitle: "Web Design",

    description:
      "Luxury websites designed around strategy, user experience, performance, and business growth.",

    icon: Code2,

    route:
      "/services/web-design",

    features: [
      "Premium UI design",
      "Responsive development",
      "SEO foundations",
      "Performance optimization",
    ],

  },


  {
    id: "ui-ux",

    title: "UI / UX Design",

    shortTitle: "UI / UX",

    description:
      "Beautiful interfaces designed around your users and business goals.",

    icon: Palette,

    route:
      "/services/ui-ux",

    features: [
      "User research",
      "Wireframes",
      "Interactive prototypes",
      "Design systems",
    ],

  },


  {
    id: "branding",

    title: "Brand Identity",

    shortTitle: "Branding",

    description:
      "Strategic branding systems that create memorable businesses.",

    icon: PenTool,

    route:
      "/services/branding",

    features: [
      "Logo design",
      "Brand guidelines",
      "Visual identity",
      "Marketing assets",
    ],

  },


  {
    id: "seo",

    title: "SEO Optimization",

    shortTitle: "SEO",

    description:
      "Improve visibility and attract more customers online.",

    icon: Search,

    route:
      "/services/seo",

    features: [
      "Technical SEO",
      "Keyword strategy",
      "Performance optimization",
      "Growth tracking",
    ],

  },


  {
    id: "maintenance",

    title: "Website Maintenance",

    shortTitle: "Maintenance",

    description:
      "Keep your website secure, updated, and performing at its best.",

    icon: Wrench,

    route:
      "/services/maintenance",

    features: [
      "Updates",
      "Security monitoring",
      "Performance checks",
      "Technical support",
    ],

  },


];


export default services;