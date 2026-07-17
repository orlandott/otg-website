import generatedPostsJson from "./generated-posts.json";

export interface BlogSection {
  type: "paragraph" | "h2" | "h3" | "list" | "callout";
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  /** ISO date (YYYY-MM-DD). Present on automation-generated posts; used for sitemap/RSS. */
  publishedAt?: string;
  sections: BlogSection[];
}

// Weekly automation appends posts to generated-posts.json (validated against the
// BlogPost shape before commit); the JSON import is untyped, hence the cast.
const generatedPosts = generatedPostsJson as unknown as BlogPost[];

const handAuthoredPosts: BlogPost[] = [
  {
    slug: "impact-windows-vs-shutters",
    category: "Buying Guide",
    date: "March 2025",
    title: "Impact Windows vs. Hurricane Shutters: Which Is Right for Your Home?",
    excerpt:
      "Both impact windows and hurricane shutters protect your home, but they work differently and suit different homeowners. Here's how to choose the right solution based on your budget, lifestyle, and property.",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        text: "When it comes to protecting your South Florida home from hurricanes, you have two primary options: impact windows or hurricane shutters. Both are effective, both meet Florida Building Code requirements, and both can save you money on wind insurance. But they're not interchangeable — and choosing the wrong one for your situation can cost you time, money, and peace of mind.",
      },
      {
        type: "h2",
        text: "How Impact Windows Work",
      },
      {
        type: "paragraph",
        text: "Impact windows use laminated safety glass — two or more panes bonded together with an interlayer of polyvinyl butyral (PVB) or ethylene-vinyl acetate (EVA). When struck by hurricane debris, the glass may crack but it stays in the frame. That's the key: the window doesn't fail catastrophically. Wind, rain, and pressure can't breach your home.",
      },
      {
        type: "paragraph",
        text: "Because they're always in place, impact windows require zero preparation before a storm. You close your windows and go about your day — or evacuate, knowing your home is sealed. They also block UV rays, reduce noise, and improve energy efficiency year-round.",
      },
      {
        type: "h2",
        text: "How Hurricane Shutters Work",
      },
      {
        type: "paragraph",
        text: "Hurricane shutters are external covers that you deploy over windows and doors before a storm hits. The most common types in South Florida are accordion shutters (which fold out from the sides of the opening), rolldown shutters (which descend from a housing above the window), and panel shutters (solid sections you attach manually).",
      },
      {
        type: "paragraph",
        text: "Shutters protect your existing windows — they don't replace them. Your standard windows stay in place; the shutter takes the hit. This makes shutters a lower upfront cost per opening, since you're not replacing the window itself.",
      },
      {
        type: "h2",
        text: "Side-by-Side: The Key Differences",
      },
      {
        type: "list",
        items: [
          "Cost: Impact windows cost more upfront ($400–$1,200+ per window installed) but require no labor to deploy. Shutters are less per opening but have installation costs.",
          "Convenience: Impact windows need zero prep. Shutters — even motorized accordion or rolldown systems — require deployment, which takes time.",
          "Aesthetics: Impact windows look like standard windows year-round. Shutters change the look of your home when deployed.",
          "Insurance: Both qualify for wind mitigation discounts in Florida. Impact windows typically earn a larger discount because they protect 24/7.",
          "Energy efficiency: Impact windows improve insulation and lower cooling costs. Shutters don't affect energy efficiency when stored.",
          "Noise reduction: Impact windows significantly reduce outside noise — especially valuable near busy roads or airports. Shutters provide no acoustic benefit.",
        ],
      },
      {
        type: "h2",
        text: "When Impact Windows Make More Sense",
      },
      {
        type: "paragraph",
        text: "Impact windows are the right call if you value convenience above all else, want to improve your home's everyday comfort and appearance, and are willing to invest more upfront for a product that works passively. They're especially popular in homes where the occupants travel frequently or might not be home when a storm develops.",
      },
      {
        type: "list",
        items: [
          "You travel or spend time away from home during hurricane season",
          "You want to avoid the physical labor of deploying shutters",
          "Noise reduction or UV protection matters to you",
          "You're remodeling and want to upgrade the look of your windows",
          "You want maximum insurance discount on your wind premium",
        ],
      },
      {
        type: "h2",
        text: "When Shutters Make More Sense",
      },
      {
        type: "paragraph",
        text: "Shutters are a smart choice when budget is the primary driver and your existing windows are in good condition. They're also the right answer for very large openings — like wide garage doors or oversized sliders — where impact-rated glass becomes extremely expensive.",
      },
      {
        type: "list",
        items: [
          "Budget constraints make replacing all windows impractical",
          "You have large openings that would be very expensive to impact-rate",
          "Your existing windows are newer and in good condition",
          "You don't mind the pre-storm deployment process",
          "You want hurricane protection with the lowest upfront investment",
        ],
      },
      {
        type: "h2",
        text: "Can You Use Both?",
      },
      {
        type: "paragraph",
        text: "Absolutely — and many South Florida homeowners do. A common approach is to install impact windows on the upper floors (where deployment is difficult and dangerous) and accordion shutters on the ground floor (where they're easier to deploy and the cost difference is significant). This layered approach gives you the best of both worlds.",
      },
      {
        type: "callout",
        text: "Not sure which is right for your home? Our team offers free in-home consultations — we'll assess your openings, budget, and lifestyle and recommend the solution that makes the most sense for you. Call 954-625-5318 or fill out our contact form.",
      },
    ],
  },
  {
    slug: "accordion-shutters-guide",
    category: "Product Guide",
    date: "February 2025",
    title: "Everything You Need to Know About Accordion Shutters",
    excerpt:
      "Accordion shutters are the most popular hurricane protection choice in South Florida for good reason. We break down how they work, what they cost, and why so many homeowners choose them over other shutter types.",
    readTime: "4 min read",
    sections: [
      {
        type: "paragraph",
        text: "Walk through any neighborhood in Broward or Miami-Dade County and you'll see them everywhere: accordion shutters folded neatly beside windows, ready to deploy at a moment's notice. They're the single most popular form of hurricane protection in South Florida — and for good reason.",
      },
      {
        type: "h2",
        text: "How Accordion Shutters Work",
      },
      {
        type: "paragraph",
        text: "Accordion shutters are mounted permanently to the sides of your windows and doors using a track system that's anchored into the wall. When a storm approaches, you simply pull the panels across the opening and lock them in place at the center. No tools needed. No panels to haul from the garage. No ladders required.",
      },
      {
        type: "paragraph",
        text: "The shutters fold up like an accordion when open — hence the name — and sit flat against the wall beside your windows. From a distance, they're barely noticeable. Many HOAs that restrict hurricane protection products make exceptions for accordion shutters because they're so unobtrusive when retracted.",
      },
      {
        type: "h2",
        text: "Why South Florida Homeowners Love Them",
      },
      {
        type: "list",
        items: [
          "No pre-storm preparation hassle — close them in minutes, not hours",
          "No storage space needed — they live permanently beside your windows",
          "Extremely durable — commercial-grade aluminum that lasts decades",
          "Insurable — qualify for significant wind mitigation discounts",
          "HOA-friendly — most HOAs accept accordion shutters",
          "No rental or seasonal storage costs unlike panel shutters",
          "Can be motorized for even greater convenience",
        ],
      },
      {
        type: "h2",
        text: "What Accordion Shutters Protect Against",
      },
      {
        type: "paragraph",
        text: "Accordion shutters are tested and rated to protect against wind-borne debris — the real threat during a hurricane. Flying debris traveling at 100+ mph can shatter standard glass and breach your home's envelope, allowing catastrophic pressure changes that can blow off a roof. A properly installed accordion shutter absorbs that impact.",
      },
      {
        type: "paragraph",
        text: "Beyond debris, accordion shutters also protect against rain infiltration around seals, reduce wind-driven rain intrusion, and can deter opportunistic break-ins during and after storms when structures are vulnerable. The same locks that keep a Category 4 storm out also keep intruders out.",
      },
      {
        type: "h2",
        text: "What Accordion Shutters Cost",
      },
      {
        type: "paragraph",
        text: "Installed costs for accordion shutters in South Florida typically range from $25 to $45 per square foot, depending on the size and configuration of the opening, the material and finish, and the complexity of the installation. A standard 3×5-foot window runs $375–$675. Larger openings like sliding glass doors will cost more.",
      },
      {
        type: "paragraph",
        text: "The upfront investment is real, but so is the return. Many homeowners see wind insurance discounts of 25–40% after installing accordion shutters on all openings, and that savings compounds every year you own the home.",
      },
      {
        type: "h2",
        text: "Permits and the Installation Process",
      },
      {
        type: "paragraph",
        text: "Installing accordion shutters requires a permit from your local municipality — this is non-negotiable under Florida law. The permit ensures that the shutters are installed using methods that match the product's Miami-Dade County Notice of Acceptance (NOA) certification. At Orlando T Group, we handle all permitting — city and HOA — as part of every installation.",
      },
      {
        type: "h2",
        text: "Accordion vs. Rolldown vs. Panel Shutters",
      },
      {
        type: "paragraph",
        text: "Accordion shutters are the easiest to deploy and the most space-efficient. Rolldown shutters offer a cleaner, more architectural look and can be motorized easily, but cost more per opening. Panel shutters (corrugated aluminum or steel sections) are the cheapest upfront option but require significant storage space and physical labor to install before a storm — making them unpopular with most homeowners who want true peace of mind.",
      },
      {
        type: "callout",
        text: "Ready to protect every opening in your home? We offer free in-home assessments and will walk you through accordion shutter options sized and priced for your specific property. Call 954-625-5318 to get started.",
      },
    ],
  },
  {
    slug: "insurance-savings-impact-windows",
    category: "Home Insurance",
    date: "January 2025",
    title: "How Impact Windows Can Lower Your Homeowner's Insurance Premium",
    excerpt:
      "Installing impact-rated windows and doors can qualify you for significant wind insurance discounts in Florida. Learn how the savings work and what documentation your insurer needs.",
    readTime: "4 min read",
    sections: [
      {
        type: "paragraph",
        text: "Florida homeowner's insurance is expensive — and getting more so every year. In high-risk coastal counties like Broward, Palm Beach, and Miami-Dade, wind insurance can represent the majority of your annual premium. Impact windows and doors are one of the most effective tools you have for reducing that cost.",
      },
      {
        type: "h2",
        text: "Why Insurers Give Discounts for Impact Products",
      },
      {
        type: "paragraph",
        text: "Insurance companies price risk. A home with impact-rated windows and doors is statistically less likely to suffer catastrophic damage during a hurricane — because the primary way storms destroy homes is by breaching the building envelope through broken windows, failed doors, and garage door failures. Once the envelope fails, internal pressure can lift a roof entirely.",
      },
      {
        type: "paragraph",
        text: "Impact products eliminate this risk factor. That reduced risk translates directly into lower expected claims, which is why Florida law requires insurers to offer credits to homes with wind mitigation features including impact-rated openings.",
      },
      {
        type: "h2",
        text: "How Much Can You Save?",
      },
      {
        type: "paragraph",
        text: "Savings vary by insurer, policy structure, and the specific features of your home, but wind mitigation credits for impact-rated openings typically range from 10% to 45% on the wind portion of your premium. In South Florida, where wind coverage can be $3,000–$8,000 per year, that translates to hundreds — sometimes thousands — of dollars annually.",
      },
      {
        type: "paragraph",
        text: "The specific discount depends on what percentage of your home's openings are impact-rated. If all openings (windows, doors, garage doors) are impact-rated, you qualify for the maximum credit. Partial protection earns a partial credit.",
      },
      {
        type: "h2",
        text: "The Wind Mitigation Inspection",
      },
      {
        type: "paragraph",
        text: "To receive the credit, you need a wind mitigation inspection from a licensed inspector. They complete Florida's OIR-B1-1802 form (the Uniform Mitigation Verification Inspection Form), which documents the wind-resistance features of your home — including your roof shape, roof covering, roof deck attachment, and opening protection.",
      },
      {
        type: "paragraph",
        text: "The inspection typically costs $75–$150 and takes about an hour. You submit the completed form to your insurance company, and they apply the credits to your policy at renewal or mid-term. The inspection is valid for 5 years.",
      },
      {
        type: "h2",
        text: "What Documentation Your Insurer Needs",
      },
      {
        type: "list",
        items: [
          "Completed OIR-B1-1802 wind mitigation inspection form from a licensed inspector",
          "Product Notice of Acceptance (NOA) numbers for your impact windows and doors",
          "Copy of the installation permit and final inspection approval",
          "Product specifications showing impact and design pressure ratings",
          "Photos of installed products (often taken by the inspector)",
        ],
      },
      {
        type: "h2",
        text: "When to Notify Your Insurer",
      },
      {
        type: "paragraph",
        text: "You can request a wind mitigation inspection and submit credits to your insurer at any time — you don't need to wait for renewal. Most insurers will apply the discount to your current policy on a pro-rated basis, meaning you could start seeing savings within weeks of your installation being complete and permitted.",
      },
      {
        type: "paragraph",
        text: "If you're shopping for a new homeowner's policy, disclose your impact-rated openings upfront during the quoting process. Some insurers specialize in wind-mitigated homes and offer more competitive rates than standard carriers.",
      },
      {
        type: "callout",
        text: "At Orlando T Group, we provide all necessary product documentation — including NOA numbers, design pressure specs, and permit records — to support your wind mitigation inspection. We've helped hundreds of South Florida homeowners reduce their insurance costs.",
      },
    ],
  },
  {
    slug: "hurricane-prep-checklist",
    category: "Hurricane Season",
    date: "December 2024",
    title: "South Florida Hurricane Prep Checklist: Protect Your Home Before the Season",
    excerpt:
      "Hurricane season starts June 1st. Don't wait until a storm is in the forecast. This practical checklist covers everything you need to do to make sure your home is ready — from windows and doors to backup power.",
    readTime: "6 min read",
    sections: [
      {
        type: "paragraph",
        text: "Every year, South Florida homeowners make the same mistake: they wait until a storm is named and tracking toward the coast before they start thinking about preparation. By then, it's too late. Contractors are booked, lumber is sold out, and the stress is avoidable.",
      },
      {
        type: "paragraph",
        text: "The best hurricane preparation happens in May — before the June 1st season start — when you have time to address real vulnerabilities without panic. Here's a practical checklist to work through.",
      },
      {
        type: "h2",
        text: "Before Hurricane Season Starts (April–May)",
      },
      {
        type: "h3",
        text: "Inspect Your Hurricane Protection Products",
      },
      {
        type: "list",
        items: [
          "Test every accordion or rolldown shutter — open and close each one fully, listening for binding or stiff mechanisms",
          "Lubricate shutter tracks with a dry lubricant (avoid oil-based products that attract dust)",
          "Check that all shutter locks engage properly and hold the shutter closed firmly",
          "Inspect impact window and door frames for cracked seals, gaps, or damaged weatherstripping",
          "Replace any cracked or loose weatherstripping around doors before season",
          "Verify that hurricane garage doors close and latch correctly",
        ],
      },
      {
        type: "h3",
        text: "Check Your Insurance",
      },
      {
        type: "list",
        items: [
          "Review your policy and confirm your coverage limits and deductibles",
          "Verify your hurricane deductible — in Florida, it's typically a percentage of insured value (1–5%), not a flat dollar amount",
          "Update your home inventory and photograph the interior of every room",
          "Store copies of your policy documents in the cloud or off-site",
          "If you installed new impact products this year, schedule a wind mitigation inspection to capture savings",
        ],
      },
      {
        type: "h2",
        text: "Windows, Doors, and Openings",
      },
      {
        type: "paragraph",
        text: "If you don't have impact windows or hurricane shutters on all openings, addressing this should be your top priority — not just for this season, but permanently. Standard glass offers no protection against Category 1+ hurricane debris, and once a window fails, the structural integrity of your entire home is at risk.",
      },
      {
        type: "list",
        items: [
          "Identify any openings not covered by impact windows or hurricane shutters",
          "Prioritize large openings (sliding glass doors, French doors, picture windows) — these are highest risk",
          "Do NOT use plywood as a long-term solution — it is labor-intensive, only marginally effective, and not code-approved for permanent installation",
          "Contact a licensed contractor now (not in September) to schedule installations before season",
        ],
      },
      {
        type: "h2",
        text: "Garage Doors",
      },
      {
        type: "paragraph",
        text: "The garage door is the largest and often most vulnerable opening in your home. Standard garage doors are not rated for hurricane winds. A failed garage door during a storm creates catastrophic internal pressure that can lift your roof off the structure.",
      },
      {
        type: "list",
        items: [
          "Verify your garage door's wind rating — look for a label on the door or contact the manufacturer",
          "If your door is not hurricane-rated, consider replacement before season starts",
          "At minimum, install a vertical bracing kit if your door is not rated",
          "Ensure the auto-release cord and manual operation work properly in case of power outage",
        ],
      },
      {
        type: "h2",
        text: "Outdoor Areas",
      },
      {
        type: "list",
        items: [
          "Identify all outdoor furniture, potted plants, decorations, and equipment that must be brought inside before a storm",
          "Plan where you'll store them — garage, interior rooms, or shed",
          "Trim overhanging tree branches that could strike the house in high winds",
          "Clear gutters and downspouts so heavy rain drains properly",
          "Secure or remove lightweight structures like pergolas, shade sails, and screen rooms if they're not rated",
        ],
      },
      {
        type: "h2",
        text: "Backup Power",
      },
      {
        type: "list",
        items: [
          "Test your generator and run it under load to verify it works",
          "Confirm you have a transfer switch or interlock kit — never connect a generator to your home's wiring without one",
          "Stock at least 10 gallons of stabilized fuel (use Sta-Bil to extend shelf life)",
          "Charge all power banks, backup batteries, and portable chargers",
          "Verify your motorized shutters have a manual override in case of power loss",
        ],
      },
      {
        type: "h2",
        text: "Emergency Supplies",
      },
      {
        type: "list",
        items: [
          "7-day supply of water: 1 gallon per person per day, plus additional for pets",
          "Non-perishable food and a manual can opener",
          "Prescription medications — fill all prescriptions before season",
          "First aid kit, flashlights, and extra batteries",
          "Cash in small bills (ATMs may be down after a storm)",
          "Copies of critical documents: insurance policies, IDs, prescriptions, deed/lease",
          "A battery-powered or hand-crank NOAA weather radio",
        ],
      },
      {
        type: "callout",
        text: "The best hurricane season prep is having the right permanent protection installed before June 1st. If you don't yet have impact windows, shutters, or hurricane-rated doors on all openings, call us today at 954-625-5318 to schedule an assessment. Don't wait for the forecast.",
      },
    ],
  },
  {
    slug: "retractable-awnings-benefits",
    category: "Product Guide",
    date: "November 2024",
    title: "5 Reasons to Add a Retractable Awning to Your South Florida Home",
    excerpt:
      "A motorized retractable awning does more than provide shade. It can cut cooling costs, protect outdoor furniture, expand your usable living space, and add real curb appeal. Here's what to know before buying.",
    readTime: "3 min read",
    sections: [
      {
        type: "paragraph",
        text: "If you live in South Florida, you know how brutal the afternoon sun can be from May through October. A retractable awning doesn't just make your patio more comfortable — it changes how you use your home, inside and out. Here are five reasons South Florida homeowners are adding them.",
      },
      {
        type: "h2",
        text: "1. Cut Your Cooling Costs",
      },
      {
        type: "paragraph",
        text: "A significant portion of your home's cooling load comes from solar heat gain through windows and glass doors. When afternoon sun hits a west- or south-facing window directly, the interior temperature rises fast and your AC works harder to compensate.",
      },
      {
        type: "paragraph",
        text: "A properly sized retractable awning shades your windows and walls before the sun hits them, reducing the heat load on your home's interior. Studies from the American Society of Interior Designers show exterior shading can reduce solar heat gain by up to 65% on south-facing exposures and up to 77% on west-facing exposures. In South Florida's climate, that translates to real, measurable savings on your FPL bill.",
      },
      {
        type: "h2",
        text: "2. Protect Your Outdoor Furniture from UV Damage",
      },
      {
        type: "paragraph",
        text: "Quality outdoor furniture represents a meaningful investment. UV radiation bleaches fabrics, cracks plastic and vinyl, and oxidizes metal finishes — often within a single season of direct Florida sun. High-quality awning fabrics like Sunbrella are solution-dyed acrylic rated to block 98%+ of UV radiation, extending the life of your furniture dramatically.",
      },
      {
        type: "paragraph",
        text: "The same UV protection that preserves your furniture also makes sitting outside genuinely comfortable in the afternoon — something most South Florida patios simply aren't during peak hours.",
      },
      {
        type: "h2",
        text: "3. Expand Your Usable Living Space",
      },
      {
        type: "paragraph",
        text: "A covered, shaded patio effectively becomes an additional room — one you can use year-round in South Florida's mild winters and extended fall and spring seasons. Outdoor dining, a home office setup, a reading area, or space for guests: a retractable awning makes all of it practical by keeping the space comfortable and protected from light rain.",
      },
      {
        type: "paragraph",
        text: "Because the awning retracts, you're not committed to a covered space permanently. On beautiful winter days when you want full sun, you simply retract it.",
      },
      {
        type: "h2",
        text: "4. Add Curb Appeal and Home Value",
      },
      {
        type: "paragraph",
        text: "A well-chosen retractable awning enhances the exterior of your home. Available in dozens of fabric patterns and colors, motorized awnings with cassette housings look clean and architectural — very different from the flimsy aluminum awnings of the past. In South Florida's competitive real estate market, outdoor living features add measurable value, and a quality retractable awning signals a well-maintained property.",
      },
      {
        type: "h2",
        text: "5. Total Convenience with Motorized Controls",
      },
      {
        type: "paragraph",
        text: "Modern retractable awnings are fully motorized with remote controls, wall switches, and smartphone integration. Better systems include built-in wind and sun sensors that automatically retract the awning when wind speeds exceed a set threshold — protecting the awning during afternoon thunderstorms without you needing to be home.",
      },
      {
        type: "paragraph",
        text: "This is particularly important in South Florida, where afternoon pop-up storms can develop quickly. An awning with an automatic wind sensor protects itself without any action on your part.",
      },
      {
        type: "h2",
        text: "What to Look for Before Buying",
      },
      {
        type: "list",
        items: [
          "Fabric quality: Look for solution-dyed acrylic (Sunbrella is the industry standard) with a UV and water-resistance rating",
          "Motor quality: Somfy motors are the industry benchmark — quiet, reliable, and compatible with smart home systems",
          "Wind rating: Confirm the awning's maximum wind speed rating and consider whether a wind sensor is included",
          "Cassette housing: A full cassette encloses the fabric when retracted, protecting it from Florida's intense UV exposure and rain",
          "Warranty: Quality awnings come with 5+ year warranties on fabric and frame; Bandalux offers industry-leading coverage",
          "Installation: Awnings must be mounted into solid structural blocking — verify your contractor anchors into framing, not just stucco",
        ],
      },
      {
        type: "callout",
        text: "Orlando T Group installs Bandalux retractable awnings — one of the world's leading manufacturers of solar protection systems. We handle everything from the free in-home measurement to the final installation and HOA documentation. Call 954-625-5318 or fill out our contact form.",
      },
    ],
  },
  {
    slug: "florida-building-code-impact-products",
    category: "Regulations",
    date: "October 2024",
    title: "Florida Building Code & Impact Products: What Homeowners Need to Know",
    excerpt:
      "Florida has some of the strictest building codes in the country when it comes to wind-resistant construction. Understanding what's required — and what that means for permits — can save you time and money on your next project.",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        text: "If you've shopped for hurricane protection in South Florida, you've probably heard terms like 'Miami-Dade approved,' 'NOA certified,' or 'Florida Product Approval.' These aren't just marketing terms — they're legal requirements that determine what products can be installed in your home. Here's what you need to know.",
      },
      {
        type: "h2",
        text: "Why Florida's Building Code Is Different",
      },
      {
        type: "paragraph",
        text: "Hurricane Andrew hit South Florida in August 1992 with catastrophic results — not just because of the storm's intensity, but because thousands of homes built to the then-current code failed far worse than they should have. In the aftermath, Florida overhauled its building code to be among the strictest in the country for wind-resistant construction.",
      },
      {
        type: "paragraph",
        text: "Today, the Florida Building Code requires impact-rated or shutter-protected openings in the wind-borne debris region, which covers all of South Florida within one mile of the coast and areas with design wind speeds above 130 mph. This means that when you replace a window or door in most of Broward, Miami-Dade, or Palm Beach County, the replacement must be code-compliant — not just similar to what was there before.",
      },
      {
        type: "h2",
        text: "What the Code Requires for Impact Products",
      },
      {
        type: "paragraph",
        text: "For a window or door to be code-approved in Florida's wind-borne debris region, it must be tested and certified to resist specific performance criteria:",
      },
      {
        type: "list",
        items: [
          "Large missile impact test: The product must withstand the impact of a 9-pound 2×4 traveling at 50 feet per second",
          "Cyclic wind pressure test: After the impact, the product must survive 9,000 cycles of positive and negative wind pressure without failure",
          "Design pressure rating: Each product is rated for a specific maximum wind load (measured in pounds per square foot), and installation must match the product to your home's design wind speed",
          "Water infiltration resistance: Products must pass water infiltration testing to prevent rain intrusion under design wind pressure",
        ],
      },
      {
        type: "h2",
        text: "Miami-Dade NOA: The Gold Standard",
      },
      {
        type: "paragraph",
        text: "Miami-Dade County requires an additional layer of certification called a Notice of Acceptance (NOA). This is the most rigorous product approval standard in the United States — products tested for NOA approval must survive conditions that exceed the Florida Building Code minimums. When a product carries a Miami-Dade NOA, it means it has been independently tested and verified to perform under the most extreme South Florida storm conditions.",
      },
      {
        type: "paragraph",
        text: "All products installed by Orlando T Group carry Miami-Dade NOA certifications. This is the only standard we accept — because it's the only standard that gives you genuine confidence your home is protected.",
      },
      {
        type: "h2",
        text: "What This Means for Permits",
      },
      {
        type: "paragraph",
        text: "Every window and door replacement in Florida — including impact windows and doors — requires a building permit. This is not optional. The permit process exists to ensure that the product being installed is appropriate for your home's design wind speed, that the installation method matches the product's NOA specifications, and that a licensed inspector verifies the work before it's enclosed.",
      },
      {
        type: "paragraph",
        text: "Skipping permits is risky. Unpermitted work can void your homeowner's insurance, create problems when selling the home, and — most critically — leave you with products installed in ways that may not actually protect you in a storm. At Orlando T Group, we pull all required permits before any work begins.",
      },
      {
        type: "h2",
        text: "How to Verify a Product Is Code-Compliant",
      },
      {
        type: "list",
        items: [
          "Ask for the Florida Product Approval (FPA) number — you can verify it at floridabuilding.org",
          "For Miami-Dade and Broward County installations, confirm the product has a current Miami-Dade NOA",
          "Verify that the product's design pressure rating matches or exceeds your home's location requirements",
          "Check that the NOA or FPA approval covers the specific size and configuration being installed",
        ],
      },
      {
        type: "h2",
        text: "Why Contractor Licensing Matters",
      },
      {
        type: "paragraph",
        text: "In Florida, impact window and door installation must be performed by a licensed contractor — specifically, someone holding a Florida Class A or Class B Aluminum Contractor license or a General Contractor license. Licensing ensures the contractor has demonstrated knowledge of Florida's building code, impact product installation requirements, and proper permitting procedures.",
      },
      {
        type: "paragraph",
        text: "Beware of any contractor who offers to skip the permit or installs products without pulling one. Not only is it illegal — it exposes you to significant financial and legal risk as the homeowner.",
      },
      {
        type: "callout",
        text: "Orlando T Group is fully licensed and insured in Florida. We handle all permits and inspections, and every product we install carries the appropriate Florida Building Code approvals and Miami-Dade NOA certifications. Questions? Call 954-625-5318.",
      },
    ],
  },
  {
    slug: "patio-enclosure-guide",
    category: "Product Guide",
    date: "September 2024",
    title: "How to Choose the Right Patio Enclosure for Your Florida Home",
    excerpt:
      "A patio enclosure can transform an underused outdoor space into a year-round living area. From screen rooms to glass-enclosed lanais, here's everything you need to know about the options available.",
    readTime: "4 min read",
    sections: [
      {
        type: "paragraph",
        text: "South Florida's weather is extraordinary — but that doesn't mean your patio is comfortable to use year-round without some protection. Intense afternoon sun, unpredictable rain, and no shortage of bugs make an uncovered lanai frustrating to use during large parts of the year. A patio enclosure changes that, turning an underused slab into genuinely livable space.",
      },
      {
        type: "h2",
        text: "Types of Patio Enclosures",
      },
      {
        type: "h3",
        text: "Screen Rooms",
      },
      {
        type: "paragraph",
        text: "A screened enclosure uses an aluminum frame with screen panels to create a bug-free, ventilated outdoor living area. This is the most common type in South Florida — you see them on nearly every home built in the 1980s through 2000s. Screen rooms provide excellent bug protection and partial shade while keeping the space open and airy.",
      },
      {
        type: "paragraph",
        text: "Screen rooms are the most affordable enclosure option and are straightforward to permit and install. The tradeoff is they don't provide weather protection during rain, and they offer limited cooling compared to a fully enclosed space. For homeowners who want an outdoor feel with bug control, they're ideal.",
      },
      {
        type: "h3",
        text: "Glass-Enclosed Lanais",
      },
      {
        type: "paragraph",
        text: "A glass enclosure replaces screen panels with tempered or impact-rated glass, creating a fully enclosed room. This space can be climate-controlled — add a mini-split AC and you have a four-season room usable every day of the year, regardless of weather.",
      },
      {
        type: "paragraph",
        text: "Glass enclosures are the most versatile option and add the most square footage value to your home. Because the space is enclosed and conditioned, it can be used as a home office, dining room, workout space, or additional living area. The additional construction and permitting complexity makes them more expensive, but the long-term utility is substantial.",
      },
      {
        type: "h3",
        text: "Aluminum and Panel Systems",
      },
      {
        type: "paragraph",
        text: "A hybrid approach uses solid aluminum panels on the lower portion of the enclosure walls with screen or glass panels above. This provides privacy, keeps wind-driven rain from entering at ground level, and gives the structure a more finished, architectural appearance. It's a popular upgrade from basic screen rooms for homeowners who want a more polished look.",
      },
      {
        type: "h2",
        text: "What Each Type Costs",
      },
      {
        type: "paragraph",
        text: "Screened enclosures typically cost $8,000–$25,000 installed, depending on the size of the space and the height of the enclosure. Glass-enclosed lanais run significantly higher — $20,000–$60,000 or more depending on the scope, glazing type, and whether HVAC is added. Hybrid aluminum-and-screen systems fall in between, at $12,000–$35,000.",
      },
      {
        type: "paragraph",
        text: "These are significant investments, but the return is meaningful — both in daily usability and in home value. In South Florida's real estate market, enclosed outdoor living space is highly valued by buyers.",
      },
      {
        type: "h2",
        text: "HOA and Permit Considerations in South Florida",
      },
      {
        type: "paragraph",
        text: "Any patio enclosure in Florida requires a building permit — without exception. For homes in HOA-governed communities, you'll also need architectural review committee (ARC) approval before work begins. HOAs often have specific requirements about enclosure height, roofline visibility, screen color, and material finishes.",
      },
      {
        type: "paragraph",
        text: "At Orlando T Group, we handle both the city permit application and the HOA documentation as part of every enclosure installation. We've worked through the approval process with dozens of South Florida HOAs and know how to present your project for the fastest possible approval.",
      },
      {
        type: "h2",
        text: "How to Choose the Right Enclosure",
      },
      {
        type: "list",
        items: [
          "Budget: Screen rooms offer the best value per square foot; glass enclosures maximize utility but at higher cost",
          "Intended use: Casual outdoor space → screen room; home office or year-round living area → glass enclosure",
          "Existing structure: The condition of your existing slab and home's exterior affects what's feasible and at what cost",
          "HOA restrictions: Check your HOA's architectural guidelines before settling on a design — some communities limit height or material options",
          "Roofline: An attached enclosure must integrate properly with your home's existing roof structure; a detached pergola or gazebo may have fewer restrictions",
        ],
      },
      {
        type: "callout",
        text: "Not sure which enclosure type is right for your home and HOA? Our team visits your property, assesses the existing structure, and explains every option with real pricing. Call 954-625-5318 for a free consultation.",
      },
    ],
  },
  {
    slug: "garage-door-hurricane-rating",
    category: "Buying Guide",
    date: "August 2024",
    title: "Why Your Garage Door Is Your Home's Biggest Hurricane Vulnerability",
    excerpt:
      "Most homeowners focus on windows and doors when planning hurricane protection — but the garage door is often the weakest point. An impact-rated garage door can prevent catastrophic structural failure during a storm.",
    readTime: "4 min read",
    sections: [
      {
        type: "paragraph",
        text: "Walk through any neighborhood in South Florida after a major hurricane and you'll notice a pattern in the most severely damaged homes: failed garage doors. Not just damaged — fully blown in, with the entire door and track system collapsed into the garage. And in many of those cases, the structural damage doesn't stop there.",
      },
      {
        type: "h2",
        text: "Why Garage Doors Are the Weakest Link",
      },
      {
        type: "paragraph",
        text: "A standard single-car garage door measures roughly 9×7 feet. A double car door is 16×7 or 18×7 feet — 112 to 126 square feet of surface area, all on a single plane facing directly into the storm. That's the largest uninterrupted opening in most homes, and it acts like a sail in high winds.",
      },
      {
        type: "paragraph",
        text: "Standard garage doors are not designed to withstand hurricane-force winds. They flex, rack in their tracks, and ultimately fail — often not from a direct debris strike, but from the sustained wind pressure differential that builds up against that large flat surface. Even winds below Category 1 hurricane strength (74 mph) can fail a standard residential garage door.",
      },
      {
        type: "h2",
        text: "What Happens When a Garage Door Fails",
      },
      {
        type: "paragraph",
        text: "This is where the real danger lies. When a garage door fails and the garage is breached, positive air pressure floods the interior. If the rest of your home's openings are intact — impact windows and doors holding — the pressure has nowhere to go. It pushes up against the ceiling, transfers into the attic, and creates tremendous uplift pressure on the roof structure. This is how a Category 1 hurricane with 80 mph winds can lift an entire roof off a home that should have survived.",
      },
      {
        type: "paragraph",
        text: "The garage door is the link in the chain most likely to break — and when it does, it compromises everything else. This is why Florida Building Code specifically requires impact-rated or shutter-protected garage doors in the wind-borne debris region, just like windows and entry doors.",
      },
      {
        type: "h2",
        text: "What to Look for in a Hurricane-Rated Garage Door",
      },
      {
        type: "list",
        items: [
          "Wind load rating: Look for a door rated to at least 130 mph design wind speed — higher if you're in a coastal location",
          "Impact rating: In the wind-borne debris region, the door must also be rated for large missile impact (the 2×4 test)",
          "Miami-Dade NOA: The toughest certification standard — confirms the door has passed both impact and cyclic pressure testing",
          "Florida Product Approval number: Verify the door is approved for installation in your county",
          "Reinforced construction: Horizontal bracing ribs, reinforced bottom sections, and steel or aluminum construction — not thin panels",
          "Proper hardware: Wind-rated tracks, heavy-duty rollers, and reinforced hinges rated to match the door's wind load",
        ],
      },
      {
        type: "h2",
        text: "What About Bracing Your Existing Door?",
      },
      {
        type: "paragraph",
        text: "If you're not ready to replace your garage door, a vertical column bracing kit can provide temporary protection during an approaching storm. These kits consist of steel vertical braces that you insert into floor pockets and secure to the door panels, significantly improving the door's ability to withstand lateral wind pressure.",
      },
      {
        type: "paragraph",
        text: "Bracing kits are a reasonable short-term measure — but they require installation before each storm (about 30–45 minutes per door panel), they don't provide impact protection, and they're not a long-term substitute for a properly rated door. Think of bracing as a bridge solution while you plan a permanent upgrade.",
      },
      {
        type: "h2",
        text: "The Cost of Upgrading",
      },
      {
        type: "paragraph",
        text: "A hurricane-rated single-car garage door typically costs $1,200–$2,500 installed; a double car door runs $2,000–$4,500 depending on material, insulation, and design. That's a significant investment — but compare it to the cost of a damaged garage, interior water intrusion, or a failed roof, and the math is clear.",
      },
      {
        type: "paragraph",
        text: "Additionally, upgrading to a hurricane-rated garage door qualifies as an opening protection upgrade for your wind mitigation inspection, contributing to lower wind insurance premiums alongside your impact windows and doors.",
      },
      {
        type: "callout",
        text: "If you're not sure whether your garage door is hurricane-rated, our team can assess it during a free in-home consultation. We install impact-rated garage doors across South Florida — all fully permitted and backed by manufacturer warranties. Call 954-625-5318.",
      },
    ],
  },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function getPostDate(post: BlogPost): Date {
  if (post.publishedAt) return new Date(post.publishedAt);
  const [month, year] = post.date.split(" ");
  const monthIndex = MONTHS.indexOf(month);
  return new Date(Number(year), monthIndex === -1 ? 0 : monthIndex, 1);
}

export const blogPosts: BlogPost[] = [...generatedPosts, ...handAuthoredPosts].sort(
  (a, b) => getPostDate(b).getTime() - getPostDate(a).getTime()
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
