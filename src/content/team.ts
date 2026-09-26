export type TeamMember = {
  name: string;
  role: string;
  quote?: string;
  short: string;
  bio: string[];
  interests?: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Parul Mathur",
    role: "Centre Director | Special Educator | Inclusion Specialist",
    short:
      "22+ years in special education. RCI-certified, multilingual special educator and co-founder of The Teachers Collective. Reliance Foundation Teacher Award, CENTA TPO 2022.",
    bio: [
      "With over 22 years of experience in special education, Parul Mathur has built her career on a simple conviction: every child can learn, grow, and thrive when given the right support and opportunities. Her journey began with a Bachelor's degree in Home Science, followed by a Master's in Human Development with a specialization in Child Psychology and a double Master's in Physiological and Neurological Disabilities from the Spastic Society, Mumbai.",
      "She is an RCI (Rehabilitation Council of India) certified, multilingual Special Educator and co-founded The Teachers Collective, committed to making learning accessible, meaningful, and inclusive for every child. Her work spans learning disabilities, ADHD, cerebral palsy, Down's syndrome, and intellectual disabilities, from training special educators at Disha in Jaipur to leading SEN initiatives in a mainstream CBSE school in Bengaluru.",
      "Her contributions to inclusive education earned her the Reliance Foundation Teacher Award for outstanding performance in the CENTA Professional Olympiad (TPO), 2022.",
    ],
    interests: "She loves to paint, travel and strong filter coffee. Exploring and learning are a constant in her life.",
  },
  {
    name: "Sangitha Krishnamurthi",
    role: "Centre Director | Special Educator | Inclusion Specialist",
    quote: "If it hasn't worked, we haven't tried everything!",
    short:
      "Former CPA turned special educator. Diploma in Autism (KPAMRC), UDL Level 1 (CAST), TBRI Practitioner, CENTA Primary SEN topper 2022. Co-founder of The Teachers Collective.",
    bio: [
      "Sangitha has an MS in Accounting from American University, Washington DC and was a Certified Public Accountant (CPA) before entering the social sector with Dream A Dream, heading the finance department from 2007 to 2010. She earned her Diploma in Autism from KPAMRC, Bangalore in 2013 and has since worked full and part-time with several schools. Other certifications include UDL Level 1 accreditation from CAST, Search and Teach, and TBRI Practitioner. She is a CENTA Primary SEN stream topper in 2022.",
      "She has developed strong competencies in mindfulness, tech-enabled teaching-learning, gamification and kid-lit. She teaches the ADHD module at several SEN courses and is the co-founder of The Teachers Collective, a response to meet the needs of teachers with diverse learners in their classrooms.",
      "At CAN, Sangitha aims at a fun, hopeful and happy space where students thrive, parents smile and professionals learn and grow.",
    ],
    interests:
      "She loves textiles and fibre arts and can be seen creating with her hands through crochet, knitting, weaving and spinning. She has fostered many puppies.",
  },
  {
    name: "Suchitra Chengappa",
    role: "Operations and Outreach Director",
    quote: "Less worry, more wonder",
    short:
      "Psychology graduate, B.Ed and Montessori-trained educator who moved into disability inclusion with Specialisterne Enable India and Incluzza, building inclusive workplaces.",
    bio: [
      "Suchitra holds a degree in Psychology from Women's Christian College, Chennai, a Bachelor's degree in Education and completed her Primary Montessori course at IMTC, Bangalore. She began her career as an educator, teaching for four years.",
      "She transitioned to the disability inclusion sector with Specialisterne Enable India Solutions, managing client relationships and business development focused on meaningful employment for neurodivergent individuals. At Incluzza Pvt. Ltd., she partnered with organizations across industries on awareness, inclusive hiring, workplace accessibility and broader disability inclusion.",
      "At CAN, Suchitra looks forward to being part of a team that looks at every child's progress as their own.",
    ],
    interests: "On weekends you will find her with family and friends, playing squash, or holed away with a novel or Netflix.",
  },
  {
    name: "Pushpa Vijaya Prasad G",
    role: "Parent Engagement Coach",
    quote: "Transforming lives through compassion and care",
    short:
      "Former Principal and Academic Advisor. ICF Certified Professional Coach and certified Mindfulness Practitioner. Helps parents become effective support for their children.",
    bio: [
      "Guided by a commitment to personal and organisational growth, Pushpa focuses on facilitating meaningful transformation for students, teachers, parents, and school leaders alike. She holds a Bachelor of Science and a Bachelor of Education, alongside a Master's in English Literature, and is an International Coaching Federation Certified Professional Coach and a certified Mindfulness Practitioner.",
      "With decades of leadership in education, Pushpa has served as a Principal and Academic Advisor across multiple schools, and as a Teacher, Mentor, and Educational Consultant creating inclusive environments. As a Life Coach she partners with executives, senior leaders, parents, and young adults to navigate challenges and realise their potential.",
      "At CAN she helps parents become effective support for their children, oversees educators' methodologies, monitors student progress and supports outreach.",
    ],
    interests: "She enjoys listening to music, watching nature and reading.",
  },
  {
    name: "Deepshikha Varma",
    role: "Consultant – Special Educator",
    quote: "Once you are fearless, life is limitless.",
    short:
      "RCI Registered Special Educator with 13+ years across early childhood and inclusive settings. Focus on early identification, play-based learning and parent guidance.",
    bio: [
      "Deepshikha Varma is an RCI Registered Special Educator with a Diploma in Early Childhood Special Education and over 13 years of experience working with children and families across early childhood and inclusive educational settings. She has a Master's degree in Psychology and a B.Sc. in Medical Sciences, along with professional qualifications in counselling, life skills and emotional intelligence.",
      "She is particularly interested in early identification, developmental support, individualised learning approaches and parent guidance, using play, creative activities, movement and hands-on experiences to help children engage with concepts in ways that are meaningful to them.",
      "At CAN, Deepshikha hopes to contribute to a warm, inclusive and collaborative environment where children are supported for who they are, parents feel heard and empowered, and professionals come together to help every child reach their potential.",
    ],
    photo: "/team/deepshikha-varma.jpeg",
  },
  {
    name: "Karan Kyanam",
    role: "Special Educator | Tech Integration Specialist",
    quote: "Neurodiversity isn't a bug to be fixed, it's an evolutionary feature to harness.",
    short:
      "A decade building digital products, then special education. Certified in Specific Learning Difficulties (Brindavan Psychoeducation Trust). Lived experience of neurodivergence.",
    bio: [
      "Karan spent a decade building digital products before leaving corporate life to solve problems in education instead. He holds a Master's in Engineering Management from Northeastern University. Teaching started small, and somewhere in it he saw parts of himself in his students, leading him to train at the Brindavan Psychoeducation Trust, certified in Specific Learning Difficulties in an Inclusive Environment.",
      "His lived experience with neurodivergence informs his work at the intersection of SEN and tech, building systems that empower students.",
      "At CAN, he wants to turn what he's learning from students and colleagues into tech products with real, measurable impact, alongside special education sessions with students.",
    ],
    interests:
      "An avid reader, wannabe writer and lifelong tinkerer, currently chasing atmospheric electronic music fused with Carnatic tradition while learning classical piano.",
  },
  {
    name: "Champaka Lakshman",
    role: "Outreach and Engagement Expert",
    quote: "How you do anything is how you do everything",
    short:
      "B.Tech graduate, trained Montessorian and child and adolescent counsellor. A decade in technology, then talent acquisition. Builds C.A.N's partnerships and reach.",
    bio: [
      "A B.Tech graduate from Bangalore University, trained Montessorian and child and adolescent counsellor (Specialized Professional Certificate), Champaka worked for a decade in technology before moving into talent acquisition. Counselling came naturally as an army wife, connecting with many defence families on varied topics. An amateur author and Master of Ceremonies, she continually finds new ways to communicate.",
      "At CAN she manages and builds strategic partnerships and works on expanding the Centre's reach and impact to create a happier ecosystem for children, parents and institutions.",
    ],
    interests: "She collects jewellery and handlooms, loves brass and wood handicrafts, and paints.",
  },
  {
    name: "Neha Rastogi",
    role: "OT Mentor and Consultant",
    quote: "Unlocking potential and building independence through the power of play.",
    short:
      "Pediatric Occupational Therapist with 14+ years. Master's in Paediatric OT (Manipal), sensory integration training (USC). Founder of Bridge Pediatric Therapy Center.",
    bio: [
      "Neha is a Pediatric Occupational Therapist with over 14 years of experience supporting children of all abilities to build confidence, strength, and independence. She holds a Master's degree in Occupational Therapy in Pediatrics from Manipal University and has advanced training in sensory integration from USC, therapeutic listening, handwriting intervention, feeding therapy, and play-based approaches.",
      "As the founder of Bridge Pediatric Therapy Center, Neha has supported thousands of children and families across schools, clinics, and home-based settings. Her child-centred, neurodiversity-affirming approach focuses on purposeful play, individualised therapy, and practical strategies for families.",
      "At CAN, Neha brings her clinical experience and passion for play to help children unlock their potential and participate more fully in everyday life.",
    ],
    interests: "Outside of work, she enjoys time with her family, reading, and travelling.",
  },
];
