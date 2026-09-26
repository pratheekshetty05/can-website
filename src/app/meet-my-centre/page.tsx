import type { Metadata } from "next";
import { Button, Card, Eyebrow, Heading, PageHero, Placeholder, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Meet my centre", description: "A social story to read with your child before their first visit to C.A.N." };

// Draft social story. Text and illustrative placeholder photos (AI-generated, no child faces) to be
// replaced with real photos of C.A.N's own spaces once supplied.
const story = [
  { text: "This is C.A.N. It is a place in Kumara Park where I go to learn new things and get help with things that feel hard.", image: "The front door of the centre", photo: "/images/centre-entrance.jpg" },
  { text: "When I arrive, I walk in through the door. Someone will say hello to me. I can say hello back, or wave, or just smile.", image: "Reception and welcome desk", photo: "/images/centre-reception-desk.jpg" },
  { text: "There is a waiting area with chairs and books. My parent can wait here, or in the parent pod, while I am in my session.", image: "The waiting area and parent pod", photo: "/images/centre-waiting-area.jpg" },
  { text: "I will work with a teacher or a therapist. They know my name and what I like. I can tell them if I need a break.", image: "A remedial learning room with a table and materials", photo: "/images/centre-learning-room.jpg" },
  { text: "Some rooms have swings, balls and soft things to climb. This is where I do occupational therapy. It can feel like play.", image: "The sensory and occupational therapy room", photo: "/images/centre-sensory-room.jpg" },
  { text: "If I feel too much, there is a quiet place where I can calm down. Nobody will be cross with me for needing it.", image: "The calm corner", photo: "/images/centre-calm-corner.jpg" },
  { text: "There is a washroom I can use whenever I need to. I can ask any grown-up to show me where it is.", image: "The washroom door", photo: "/images/centre-washroom-door.jpg" },
  { text: "When my session is finished, I say goodbye. I will come back again soon. Each time it will feel a little more familiar.", image: "The exit, looking out to the street", photo: "/images/centre-exit-street.jpg" },
];

export default function MeetMyCentrePage() {
  return (
    <>
      <PageHero eyebrow="Meet my centre" title="A story about my first visit to C.A.N" lead="Read this together before your child's first visit. Knowing what a place looks like and what will happen there can turn a big unknown into something small and manageable." />

      <Section>
        <Card tone="soft" className="max-w-3xl">
          <p className="text-sm">
            <span className="font-semibold">For parents:</span> a social story uses simple, first-person sentences and one idea per picture. Read it at a calm moment, more than once if it helps. The images below are illustrative placeholders (no real children shown); real photos of our own spaces will replace them once supplied.
          </p>
        </Card>
      </Section>

      <Section tone="soft">
        <ol className="grid gap-8 md:grid-cols-2">
          {story.map((s, i) => (
            <li key={s.image}>
              <Reveal delay={(i % 2) * 90} className="rounded-card bg-surface p-4">
                <Placeholder label={s.image} src={s.photo} />
                <p className="mt-4 text-lg leading-relaxed">
                  <span className="sr-only">Step {i + 1}. </span>
                  {s.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <Eyebrow>Next step</Eyebrow>
        <Heading>Come and see it for real.</Heading>
        <p className="mt-3 max-w-2xl">A short visit before the first session is always welcome. Your child can look around, meet one or two people, and leave whenever they are ready.</p>
        <Button href="/contact" variant="primary" className="mt-6">
          Book a visit
        </Button>
      </Section>
    </>
  );
}
