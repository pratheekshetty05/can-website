export type Service = {
  slug: string;
  name: string;
  audience: string;
  summary: string;
  involves: string[];
  format: string;
};

export const services: Service[] = [
  {
    slug: "assessments",
    name: "Assessments and diagnostics",
    audience: "Children of all school ages, with or without a diagnosis",
    summary: "Psycho-educational, occupational therapy and special education assessments that help us understand a child and set the right goals.",
    involves: ["Psycho-educational assessment", "Occupational therapy assessment", "Special education assessment", "Written report shared with the family"],
    format: "In-centre, by appointment",
  },
  {
    slug: "remedial",
    name: "Remedial education",
    audience: "Students with dyslexia, specific learning difficulties, ADHD and learning gaps",
    summary: "One-on-one and small-group interventions that build the skills behind school work: reading, comprehension, writing, spelling and executive functioning.",
    involves: ["Reading, phonics and literacy interventions", "Numeracy remediation", "Writing and comprehension support", "Executive functioning and study skills", "Assistive technology support"],
    format: "One-on-one or groups of 4 to 6; minimum one term (3 months)",
  },
  {
    slug: "therapies",
    name: "Clinical and therapeutic sessions",
    audience: "Children needing speech, occupational, behavioural or emotional support",
    summary: "Speech and language therapy, occupational therapy, behavioural support, counselling and play, art and music therapy, integrated with education.",
    involves: ["Speech and language therapy, including AAC", "Occupational therapy and sensory integration", "Positive behaviour support and emotional regulation", "Counselling, play, art and music therapy", "Cognitive training"],
    format: "In-centre, delivered with MoU-backed expert partners",
  },
  {
    slug: "early-intervention",
    name: "Early intervention",
    audience: "Young children in the early years",
    summary: "Proven programs for young students that help reduce wiring difficulties early, when support has the greatest effect.",
    involves: ["Early identification", "Developmental support", "Play-based, activity-based learning", "Parent guidance"],
    format: "In-centre, individual and small group",
  },
  {
    slug: "parents",
    name: "Parent coaching and counselling",
    audience: "Parents and families",
    summary: "Experienced parent coaches help you interpret professional inputs, set up home support and navigate milestones, so the special need is not the only focus of family life.",
    involves: ["Intake that values parental intuition", "Parent coaching and review meetings", "Situational counselling: school choices, behaviour, adolescence", "Parent pod at the centre", "Parent support groups (planned)"],
    format: "Alongside your child's sessions",
  },
  {
    slug: "homeschool",
    name: "Homeschool and NIOS support",
    audience: "Homeschoolers and NIOS students",
    summary: "Small-group support working towards specific skills and subjects, plus bridge courses and exam preparation.",
    involves: ["Subject and skill groups", "Bridge courses", "NIOS course support", "Exam preparation support"],
    format: "Small groups, in-centre",
  },
];

export const schoolOfferings = [
  {
    name: "Teacher training for inclusive classrooms",
    body: "Foundational modules for all teachers: understanding learning disabilities, classroom accommodations, differentiated instruction, Universal Design for Learning, social-emotional learning and behaviour management. At your school or at our centre.",
  },
  {
    name: "SEN professional development",
    body: "Domain-specific training for special educators in specific learning disability, ADHD, autism spectrum disorder and intellectual disability, including continuing education through RCI-recognised CRE programs.",
  },
  {
    name: "Inclusion audits and consulting",
    body: "Accessibility assessment, inclusion readiness evaluation, policy recommendations, school-wide inclusion policy and support for accommodations filing with boards of education.",
  },
  {
    name: "Whole-school SEN systems",
    body: "Resource room design and setup, staffing support, monitoring systems, learning materials, and mentoring for coordinators and middle management leading teams of inclusive teachers.",
  },
  {
    name: "Collaboration on children we support",
    body: "With written parental consent, we partner with your teachers and SEN staff on IEP goals for children attending our centre, so support is consistent across home, school and centre.",
  },
  {
    name: "Workshops and campaigns",
    body: "Autism awareness, ADHD in classrooms, trauma-informed teaching, managing exam stress, positive discipline, mental health awareness and school campaigns such as anti-bullying.",
  },
];
