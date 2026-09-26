export type Resource = { title: string; description: string; audience: "Parents" | "Teachers" | "Everyone"; file?: string };

// Files pending from C.A.N. Slots follow the wireframe's suggested starter set.
export const resources: Resource[] = [
  { title: "Visual schedule template", description: "A printable daily and weekly schedule to bring predictability to mornings, homework and bedtime.", audience: "Parents" },
  { title: "Calm-down corner guide", description: "How to set up a small, safe space at home or in class where a child can regulate before re-joining.", audience: "Everyone" },
  { title: "IEP parent checklist", description: "What to ask, what to bring and what to expect at your child's Individualized Education Plan meeting.", audience: "Parents" },
  { title: "Screen-time and routine tips", description: "Practical, non-judgemental guidance on screens, sleep and routines for neurodivergent children.", audience: "Parents" },
  { title: "First-visit social story", description: "A printable version of Meet My Centre to read together before your child's first visit.", audience: "Parents" },
  { title: "Teacher inclusion tip-sheet", description: "One page of classroom accommodations that help every student, not only the ones with a diagnosis.", audience: "Teachers" },
];

export type EventItem = {
  title: string;
  date: string;
  time?: string;
  location: string;
  kind: "C.A.N event" | "C.A.N participating" | "Community event";
  online?: boolean;
  description: string;
  link?: string;
};

// Seed events pending from C.A.N (next 3 to 6). Calendar renders only when this list has entries.
export const events: EventItem[] = [];
