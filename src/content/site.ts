export const site = {
  name: "C.A.N",
  fullName: "C.A.N — Centre for Action on Neurodiversity",
  tagline: "Every child CAN thrive with the right support.",
  address: ["#23/3, 5th Cross", "Near Subramanya Temple", "Kumara Park, Bengaluru 560020"],
  email: "can@wadhwafoundation.com",
  phone: "", // TODO: confirm phone number with C.A.N
  whatsapp: "", // TODO: confirm WhatsApp number, if any
  hours: "Monday to Friday, 10:00 am to 6:30 pm",
  mapQuery: "Kumara Park, Bengaluru 560020",
  safeguardingLead: "", // TODO: named safeguarding lead
  safeguardingPhone: "", // TODO: reporting phone
  safeguardingEmail: "can@wadhwafoundation.com",
  social: {
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
  },
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; note?: string }[] };

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "Our story and team", href: "/about-us" },
      { label: "Our approach", href: "/our-approach", note: "The parent and child journey" },
      { label: "Meet my centre", href: "/meet-my-centre", note: "A walkthrough for children" },
      { label: "Safeguarding", href: "/safeguarding" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All services", href: "/services" },
      { label: "For schools", href: "/for-schools" },
      { label: "For professionals", href: "/for-professionals", note: "Refer a child" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events-community" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

export const values = [
  { title: "Neurodiversity affirming", body: "Different wiring is not a deficit. We start from how a child already thinks and learns." },
  { title: "Strengths based", body: "Every plan is built on what a child does well, not only on what is hard." },
  { title: "Dignity with agency", body: "Children have a say in their own goals. Their voice shapes the work." },
  { title: "Collaborative, non-judgemental acceptance", body: "Parents, teachers and professionals work as one team around the child." },
  { title: "Cutting-edge global expertise", body: "Internationally validated, evidence-based programs, adapted for India." },
  { title: "International standards, India focused", body: "Benchmarked to global practice and grounded in Indian classrooms and homes." },
];
