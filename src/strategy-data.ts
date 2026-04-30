import { ReactNode } from "react";

export type StrategySection = {
  id: string;
  title: string;
  content: string;
};

export const strategyData: StrategySection[] = [
  {
    id: "1",
    title: "1. Core Strategy",
    content: "**Primary Conversion Goal:** Book a Facility Tour (high-intent action).\n**Secondary Conversion Goal:** Inquiry Form Submission / Waiting List Join.\n\n**Value Proposition:** \"Early learning built on total peace of mind.\"\n*(Specific, outcome-driven: focuses on the dual needs of child development and parent reassurance).*\n\n**Key Differentiation Angles:**\n- Real-time parent communication (daily photo/activity updates).\n- Structured early STEM & Literacy curriculum (not just babysitting).\n- Hospital-grade hygiene and transparent safety protocols."
  },
  {
    id: "2",
    title: "2. Site Architecture (Sitemap)",
    content: "Clean hierarchy designed to minimize cognitive load:\n\n- **Home:** The conversion engine. Routes users by age group.\n- **About Us:** Values, staff criteria, and center history. *(Builds emotional trust)*.\n- **Programs (Dropdown):** \n  - Infants (6-18 months)\n  - Toddlers (18mo - 3yrs)\n  - Preschool (3-5 years)\n  *(Action: Book a tour specific to the age group)*\n- **Facilities & Safety:** Visual proof of hygiene, security cameras, and play areas.\n- **Curriculum & Approach:** What they actually do all day.\n- **Fees & Enrolment:** Transparent process, what's included (meals, nappies).\n- **Testimonials/Success Stories:** Real parents, real outcomes.\n- **Contact / Book a Tour:** Frictionless booking flow."
  },
  {
    id: "3",
    title: "3. Homepage Structure",
    content: "**1. Hero Section:** \n- Headline (Results-focused).\n- Subheadline.\n- Primary CTA (Book a Tour).\n- Visual: High-quality, candid photo of a happy child engaged with a smiling practitioner.\n\n**2. Trust Indicators (Immediate Bar):** \n- Logos of certifications, \"X Years in Operation\", \"Trusted by X Local Families\".\n\n**3. Problem → Solution Framing:** \n- Acknowledge the guilt/worry of working parents → show how the center acts as an extension of the family.\n\n**4. Programs Overview (Segmentation):** \n- 3 clear cards (Infant, Toddler, Preschool) allowing immediate self-selection.\n\n**5. Safety & Care Reassurance:** \n- 3 tangible pillars (e.g., Secure Entry, CPR-certified staff, Nutritious chef-prepared meals).\n\n**6. Structured Social Proof:** \n- Video testimonial or structured text (Situation → Experience → Outcome).\n\n**7. How to Enrol (3 Steps):** \n- 1. Book a Tour → 2. Meet the Team → 3. Secure Your Spot.\n\n**8. Strong Footer CTA:** \n- Don't make them scroll up to convert."
  },
  {
    id: "4",
    title: "4. Conversion System Design",
    content: "**Primary CTA Wording:** \"Book Your Private Tour\" or \"Check Availability\". (Avoid \"Learn More\" or \"Submit\").\n\n**Placement Strategy:**\n- Sticky header CTA (always visible).\n- End of every age group section.\n- After testimonials.\n\n**Lead Capture Methods:**\n- **Form Structure:** Progressive profiling. Step 1: Name & Child's Age. Step 2: Ideal Start Date & Contact Info. (Reduces friction).\n- **Tour Booking Flow:** Direct calendar integration (Calendly/Hubspot) so parents lock in a time immediately rather than waiting for an email back.\n\n**Trust Boosters at Decision Points:** \n- Micro-copy below the booking button: *\"Tours take 20 minutes. No commitment required.\"*"
  },
  {
    id: "5",
    title: "5. Messaging Framework",
    content: "**Emotional Drivers:** Peace of mind, zero guilt, joy of seeing their child thrive, safety.\n**Logical Drivers:** Teacher-to-child ratios, organic meals included, structured curriculum preparation for school.\n\n**Objection Handling:**\n- *Cost:* Highlight what's included (meals, nappies, incursions) to show value.\n- *Safety:* Prominent section on security protocols and staff vetting.\n- *Distance:* Clear maps, parking instructions (e.g., \"Easy drop-off zone\").\n\n**Tone:** Professional, warm, confident, reassuring. Not cartoonish or overly playful—parents want to trust professionals with their child's life."
  },
  {
    id: "6",
    title: "6. Program Page Structure (Template)",
    content: "Each age group page must contain:\n\n1. **Hero:** Age-specific photo + \"Setting the foundation for [Next Milestone]\".\n2. **Age Breakdown:** Clear exact age range.\n3. **Outcomes:** 3 core skills developed (e.g., Motor Skills, Socialization, Early Phonics).\n4. **A Day in the Life:** Simple timeline (Morning Circle → Outdoor Exploration → Rest Time).\n5. **Direct Parent Benefits:** E.g., Daily digital updates on feeds/naps so you never miss a moment.\n6. **CTA:** \"Book a Tour for the [Infant] Room\"."
  },
  {
    id: "7",
    title: "7. SEO Strategy",
    content: "**Core Keyword Clusters:**\n- Local Intent: \"[Suburb] day care\", \"childcare center near me\", \"preschool in [Suburb]\".\n- Niche Intent: \"extended hours day care [Local]\", \"early learning center [Local]\".\n\n**Page-Level Targeting:**\n- Homepage: Broad local childcare keywords.\n- Program Pages: Age-specific + local (e.g., \"infant care [Local]\").\n\n**Content/Blog Strategy (Top of Funnel):**\n- \"How to prepare your toddler for their first day of childcare.\"\n- \"What to look for in a local daycare center.\"\n- \"Easy lunchbox ideas for picky eaters.\" \n*(Demonstrates authority and captures parents in the research phase).*"
  },
  {
    id: "8",
    title: "8. UX/UI Guidelines",
    content: "**Layout Principles:** \n- Mobile-first approach (moms/dads are browsing on phones).\n- Large touch targets (min 44x44px).\n- Generous white space to prevent cognitive overload.\n\n**Visual Style Direction:**\n- **Colors:** Deep Indigo (Trust, Professionalism) paired with Warm Ochre/Mustard (Joy, Energy, Warmth) and soft off-white backgrounds. Avoid chaotic primary rainbows.\n- **Typography:** \n  - Headings: 'Outfit' or 'Plus Jakarta Sans' (Friendly, modern sans-serif, geometric but warm).\n  - Body: 'Inter' (Highly legible).\n- **Image Direction:** Real facility photos. Bright, natural lighting. Focus on interactions (teacher and child looking at a book) rather than looking at the camera.\n- **Navigation:** Sticky top nav. Burger menu on mobile with direct CTA priority."
  },
  {
    id: "9",
    title: "9. Performance & CRO Optimisation",
    content: "**Page Speed Priorities:** \n- Next-gen image formats (WebP).\n- Lazy load off-screen images and testimonial videos.\n- Under 2.5s LCP (Largest Contentful Paint) is crucial for impatient mobile users.\n\n**A/B Testing Ideas:**\n- *Test 1 (Headline):* Emotional (\"Give them the best start\") vs. Logical (\"Award-winning childcare in [Suburb]\").\n- *Test 2 (CTA):* \"Book a Tour\" vs. \"Check Availability\".\n\n**Analytics Tracking:**\n- Clicks on \"Book Tour\".\n- Scroll depth on Homepage (are they reaching the programs?).\n- Form field drop-off rates."
  },
  {
    id: "10",
    title: "10. Content Assets Needed",
    content: "**Visuals:**\n- Professional photo shoot: 5x interactions, 3x facility wides, 2x outdoor play, headshots of key staff.\n- (Optional) 60-second center walkthrough video for the homepage.\n\n**Social Proof:**\n- 3x strong written testimonials (Formula: Hesitation + Experience + Result).\n- Badges: National Quality Standard ratings, First Aid badges, Food Safety seals.\n\n**Operational Content:**\n- Typical daily menus.\n- Clear fee breakdown or inclusions list.\n- Parent handbook PDF (for later down the funnel)."
  },
  {
    id: "11",
    title: "11. Local Trust Strategy",
    content: "**Google Business Profile (Crucial):**\n- Exact NAP (Name, Address, Phone) match across the web.\n- Automated review request campaign for current happy parents.\n- Weekly Google Posts highlighting classroom activities.\n\n**Community Positioning:**\n- \"Proudly serving [Local Area] families since 2015.\"\n- Mention proximity to local commuting hubs or primary schools (e.g., \"Conveniently located 2 minutes from [Station]\")."
  },
  {
    id: "12",
    title: "12. Sample Copy (Critical Sections)",
    content: "**3 Headline Options (Hero):**\n1. *Outcome-Driven:* \"Where Early Learning Meets Total Peace of Mind.\"\n2. *Benefit-Driven:* \"A Joyful Start for Them. A Worry-Free Workday for You.\"\n3. *Direct/Local:* \"Exceptional Early Education & Care in the Heart of [Suburb].\"\n\n**3 CTA Variations:**\n1. \"Book Your Private Tour\" *(High end, exclusive)*\n2. \"Check Availability\" *(Creates scarcity, low friction)*\n3. \"Plan Your Visit\" *(Friendly, welcoming)*\n\n**Value Proposition Statement:**\n\"Busy Bees Day Care provides a safe, structured, and joyful learning environment for children aged 6 months to 5 years. With degree-qualified educators, real-time parent updates, and an emphasis on emotional resilience, we prepare your child for school—and make your workday worry-free.\"\n\n**Testimonial Example (Structured):**\n*\"I was incredibly anxious about leaving Leo (14mo) when I returned to work. The team at Busy Bees didn't just care for him; they cared for me. Receiving photo updates of him smiling on his first day changed everything. He's now 3 and his vocabulary is booming. I couldn't recommend them more highly.\"*\n— Sarah M., Mother of Leo"
  }
];
