export interface ProductFAQ {
  q: string;
  a: string;
}

export interface ProductDetail {
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  galleryImages: string[];
  features: { title: string; body: string }[];
  specs: string[];
  faqs: ProductFAQ[];
  relatedSlugs: string[];
}

export const productDetails: ProductDetail[] = [
  {
    slug: "impact-windows",
    name: "Impact Windows",
    headline: "Hurricane-Ready Windows. 24/7.",
    description:
      "Impact windows replace your existing windows with laminated, impact-rated glass sealed in heavy-duty aluminum frames. Once installed, they protect your home year-round with zero setup — no shutters to deploy, no boards to hang.",
    metaTitle: "Impact Windows South Florida | Orlando T Group Inc.",
    metaDescription:
      "Hurricane impact windows installed by Orlando T Group in South Florida. 5 styles, licensed & insured since 2006. Free in-home estimate — call (954) 625-5318.",
    heroImage: "/images/impact-windows.png",
    galleryImages: [
      "/images/impact-windows-2.jpg",
      "/images/impact-windows-3.jpg",
    ],
    features: [
      {
        title: "Always-On Protection",
        body: "No shutters to deploy before a storm. Impact windows provide full hurricane resistance 24/7 — even when you're away from home.",
      },
      {
        title: "5 Window Styles",
        body: "Fixed, single-hung, casement, horizontal roller, and arch. Every opening in your home is covered with the right style for the job.",
      },
      {
        title: "UV & Noise Reduction",
        body: "Laminated glass blocks up to 99% of UV radiation and significantly reduces outside noise — making your home more comfortable year-round.",
      },
      {
        title: "Intruder Deterrent",
        body: "The same laminated glass that stops hurricane debris resists forced entry. Impact windows are a proven deterrent against break-ins.",
      },
      {
        title: "Energy Savings",
        body: "Impact glass reduces solar heat gain, cutting the load on your AC and lowering monthly energy bills — especially in South Florida summers.",
      },
      {
        title: "Insurance Discounts",
        body: "Many South Florida homeowners see meaningful reductions in wind insurance premiums after replacing windows with impact-rated products.",
      },
    ],
    specs: [
      "Miami-Dade NOA certified",
      "Florida Building Code compliant",
      "Laminated impact-resistant glass",
      "Heavy-duty marine-grade aluminum frames",
      "Available in clear, tinted, and low-E glass",
      "Manufacturers: ES Windows, CGI, PGT, Lawson",
    ],
    faqs: [
      {
        q: "Do I still need shutters if I have impact windows?",
        a: "No. Impact windows are a complete, permanent replacement for hurricane shutters. They provide full protection without any deployment required before a storm.",
      },
      {
        q: "How long does installation take?",
        a: "A typical residential installation takes 1–3 days depending on the number of openings. Our crews handle everything including permits and final inspection.",
      },
      {
        q: "Are impact windows energy efficient?",
        a: "Yes. Low-E glass options significantly reduce solar heat gain, which lowers AC usage. Many homeowners see measurable reductions in their monthly energy bills.",
      },
      {
        q: "Will impact windows reduce my insurance premium?",
        a: "In most cases, yes. Florida insurers offer wind mitigation credits for homes with impact-rated openings. We can provide the documentation your insurer requires.",
      },
      {
        q: "What maintenance do impact windows need?",
        a: "Very little. Clean the glass as you would any window. Lubricate tracks and hinges annually. Our free 3-year maintenance program covers annual tune-ups at no charge.",
      },
    ],
    relatedSlugs: ["impact-doors", "accordion-shutters", "rolldown-shutters"],
  },
  {
    slug: "impact-doors",
    name: "Impact Doors",
    headline: "20+ Styles. Zero Compromise on Protection.",
    description:
      "Impact doors combine hurricane-rated laminated glass and reinforced frames with real design flexibility. Whether you're replacing a front entry, a sliding glass door, or a set of French doors, we have a style that fits your home.",
    metaTitle: "Impact Doors South Florida | Orlando T Group Inc.",
    metaDescription:
      "Hurricane impact doors installed in South Florida. 20+ styles including French, sliding glass, and solid entry. Free estimate — call (954) 625-5318.",
    heroImage: "/images/impact-doors.png",
    galleryImages: [
      "/images/impact-doors-2.jpg",
      "/images/impact-doors-3.jpg",
    ],
    features: [
      {
        title: "20+ Door Styles",
        body: "From single entry and French doors to wide sliding glass panels — we carry impact-rated options for every opening in your home.",
      },
      {
        title: "Hinged or Sliding",
        body: "Traditional hinged doors and space-saving sliding configurations are both available in full impact-rated options.",
      },
      {
        title: "Intruder Protection",
        body: "Multi-point locking systems and laminated glass make impact doors one of the most effective deterrents against forced entry.",
      },
      {
        title: "Permanent Hurricane Defense",
        body: "Like impact windows, impact doors require no storm prep. Your home stays protected 365 days a year without any action on your part.",
      },
      {
        title: "Curb Appeal",
        body: "Modern impact door designs enhance the exterior of your home. Choose from a wide range of finishes, glass options, and frame colors.",
      },
      {
        title: "Energy Performance",
        body: "Impact glass and thermally broken frames reduce heat transfer, keeping your interior cooler and your energy costs lower.",
      },
    ],
    specs: [
      "Miami-Dade NOA certified",
      "Multi-point locking hardware",
      "Laminated impact-resistant glass",
      "Heavy-duty aluminum and PVC frame options",
      "Available in single, double, and sliding configurations",
      "Manufacturers: ES Windows, CGI, PGT",
    ],
    faqs: [
      {
        q: "What types of impact doors do you install?",
        a: "We install all door types including single entry doors, French doors, sliding glass doors, pivot doors, and more — all in impact-rated versions.",
      },
      {
        q: "Can I get an impact door that matches my home's style?",
        a: "Yes. We carry 20+ styles with various glass patterns, frame colors, and hardware finishes. Our team will help you find the right fit during your consultation.",
      },
      {
        q: "Do impact doors require permits in South Florida?",
        a: "Yes, and we handle all permitting for you — including city and HOA approvals. You don't have to manage any paperwork.",
      },
      {
        q: "How do impact doors compare to hurricane shutters for doors?",
        a: "Impact doors provide permanent, always-on protection with no setup required. Shutters must be deployed before a storm, which isn't possible if you're away from home.",
      },
      {
        q: "Are impact sliding glass doors as strong as hinged impact doors?",
        a: "Yes. Our sliding glass doors carry the same Miami-Dade NOA certifications as our hinged doors and are rated to withstand hurricane-force winds.",
      },
    ],
    relatedSlugs: ["impact-windows", "impact-garage-doors", "patio-enclosures"],
  },
  {
    slug: "patio-enclosures",
    name: "Patio Enclosures",
    headline: "Turn Your Patio Into Living Space.",
    description:
      "Patio enclosures let you reclaim your outdoor space — converting an open patio or balcony into a comfortable, weather-protected room. Our hurricane-rated enclosure systems use impact glass panels that can be opened for fresh air or locked down for storm protection.",
    metaTitle: "Patio Enclosures South Florida | Orlando T Group Inc.",
    metaDescription:
      "Hurricane-rated patio enclosures installed in South Florida. Extend your living space with impact-rated glass panels. Free estimate — call (954) 625-5318.",
    heroImage: "/images/patio-enclosures.png",
    galleryImages: [
      "/images/patio-enclosures-2.jpg",
      "/images/patio-enclosures-3.jpg",
    ],
    features: [
      {
        title: "Extend Your Living Space",
        body: "Convert an unused patio, balcony, or lanai into a year-round room. Gain square footage without a full home addition.",
      },
      {
        title: "Hurricane-Rated Materials",
        body: "Our enclosure panels use impact-rated glass and aluminum framing that meets Florida Building Code for wind-borne debris protection.",
      },
      {
        title: "Sliding Panel Systems",
        body: "Open the panels for fresh air on nice days, close them for storm protection or air-conditioned comfort. Fully flexible.",
      },
      {
        title: "Custom-Built to Fit",
        body: "Every enclosure is measured and fabricated to your exact space. No standard sizes — your enclosure fits your patio precisely.",
      },
      {
        title: "Blocks UV & Insects",
        body: "Keep the South Florida sun and bugs out while still enjoying your outdoor view. UV-blocking glass options available.",
      },
      {
        title: "Increases Home Value",
        body: "An enclosed patio adds livable square footage to your home, which translates to real value increases in South Florida's real estate market.",
      },
    ],
    specs: [
      "Florida Building Code compliant",
      "Impact-rated glass panels",
      "Marine-grade aluminum frame system",
      "Sliding or folding panel configurations",
      "Custom sizing for any patio footprint",
      "Screen and glass panel hybrid options",
    ],
    faqs: [
      {
        q: "Will a patio enclosure withstand a hurricane?",
        a: "Our enclosures use impact-rated glass and reinforced aluminum framing. They're engineered to meet Florida Building Code for hurricane protection when panels are closed.",
      },
      {
        q: "Can I open the enclosure panels for fresh air?",
        a: "Yes. Our sliding and folding panel systems fully open so you can enjoy the outdoors on nice days and lock down before a storm.",
      },
      {
        q: "Does adding a patio enclosure require permits?",
        a: "Yes. We manage all permits and HOA approvals as part of our full-service installation.",
      },
      {
        q: "How long does installation take?",
        a: "Most patio enclosures are installed in 2–4 days. Timeline depends on the size and complexity of the space.",
      },
      {
        q: "Can I add air conditioning to an enclosed patio?",
        a: "Yes. Once enclosed with our impact glass system, the space is weather-tight and can support a mini-split or extension of your existing HVAC system.",
      },
    ],
    relatedSlugs: ["impact-windows", "retractable-awnings", "blinds"],
  },
  {
    slug: "rolldown-shutters",
    name: "Rolldown Shutters",
    headline: "Storm Protection in Seconds.",
    description:
      "Rolldown shutters sit permanently above your windows and doors in a compact housing. When a storm approaches, deploy them in seconds with a hand crank or motorized control. No storage, no hauling panels — just reliable protection when you need it.",
    metaTitle: "Rolldown Hurricane Shutters South Florida | Orlando T Group Inc.",
    metaDescription:
      "Rolldown hurricane shutters installed in South Florida. Motorized & manual options. 2nd most affordable protection. Free estimate — (954) 625-5318.",
    heroImage: "/images/rolldown-shutters.png",
    galleryImages: [
      "/images/rolldown-shutters-2.jpg",
      "/images/rolldown-shutters-3.jpg",
    ],
    features: [
      {
        title: "Deploy in Seconds",
        body: "Rolldown shutters drop from their permanent housing above the window with a simple crank or button press — full protection in under a minute.",
      },
      {
        title: "Motorized Option",
        body: "Add a motorized drive and deploy or retract every shutter in your home with a single button. Works even during a power outage with battery backup.",
      },
      {
        title: "Permanently Installed",
        body: "The housing sits above each window or door at all times. No storage space needed, no heavy panels to retrieve from the garage.",
      },
      {
        title: "2nd Most Affordable",
        body: "Rolldown shutters offer an excellent balance of price and performance — more affordable than impact windows with fast, easy deployment.",
      },
      {
        title: "Full Coverage",
        body: "Rolldown shutters can protect any opening: windows, doors, garage openings, and large commercial storefronts.",
      },
      {
        title: "Privacy & Security",
        body: "When deployed, rolldown shutters provide complete privacy and a solid barrier against break-ins in addition to hurricane protection.",
      },
    ],
    specs: [
      "Miami-Dade NOA certified",
      "Heavy-duty aluminum slats",
      "Manual crank or motorized with battery backup",
      "Compact hood housing above each opening",
      "Available in multiple colors",
      "Manufacturers: South Evolution",
    ],
    faqs: [
      {
        q: "What's the difference between rolldown and accordion shutters?",
        a: "Rolldown shutters deploy vertically from a housing above the window. Accordion shutters fold out from the sides. Rolldowns deploy slightly faster; accordion shutters are generally less expensive.",
      },
      {
        q: "Can I get motorized rolldown shutters?",
        a: "Yes. We install both manual crank and motorized rolldown systems. Motorized options include battery backup so they work during power outages.",
      },
      {
        q: "Will rolldown shutters work on large openings?",
        a: "Yes. Rolldown shutters are available for wide windows, double doors, garage openings, and large commercial facades.",
      },
      {
        q: "Do rolldown shutters protect against break-ins?",
        a: "Yes. When deployed, the heavy-duty aluminum slats make forced entry extremely difficult — adding a layer of security beyond hurricane protection.",
      },
      {
        q: "How visible is the housing above the window?",
        a: "The compact aluminum housing is low-profile and can be painted to match your home's exterior. Most homeowners find it unobtrusive.",
      },
    ],
    relatedSlugs: ["accordion-shutters", "impact-windows", "impact-doors"],
  },
  {
    slug: "accordion-shutters",
    name: "Accordion Shutters",
    headline: "Most Affordable. Storm-Ready in Minutes.",
    description:
      "Accordion shutters fold flat against the sides of your windows when not in use. Before a storm, unfold and lock them across your opening in minutes — no tools, no ladders, no heavy panels. The most cost-effective way to fully protect every opening in your home.",
    metaTitle: "Accordion Hurricane Shutters South Florida | Orlando T Group Inc.",
    metaDescription:
      "Accordion hurricane shutters — the most affordable option for South Florida homes. Deploy in minutes. Free estimate from Orlando T Group — (954) 625-5318.",
    heroImage: "/images/accordion-shutters.png",
    galleryImages: [
      "/images/accordion-shutters-2.jpg",
      "/images/accordion-shutters-3.jpg",
    ],
    features: [
      {
        title: "Most Affordable Option",
        body: "Accordion shutters offer the lowest cost per opening of any hurricane protection product — making whole-home protection accessible for any budget.",
      },
      {
        title: "Deploy in Minutes",
        body: "Pull the panels across and lock them. No tools. No ladders. No heavy lifting. One person can secure an entire home quickly.",
      },
      {
        title: "Inside or Outside Operation",
        body: "Our accordion shutters can be opened and locked from both inside and outside your home — giving you flexibility when storm preparation time is short.",
      },
      {
        title: "Custom-Built to Fit",
        body: "Each shutter is fabricated to the exact dimensions of your window or door. They sit flush against the frame with no gaps when closed.",
      },
      {
        title: "Heavy-Duty Aluminum",
        body: "Manufactured from heavy-gauge, marine-grade aluminum alloy that resists corrosion in South Florida's salt-air coastal environment.",
      },
      {
        title: "Always Ready",
        body: "Because the shutters stay mounted beside your windows year-round, they're always in place when you need them — no retrieval from storage.",
      },
    ],
    specs: [
      "Miami-Dade NOA certified",
      "Heavy-gauge marine-grade aluminum",
      "Rust-proof and corrosion-resistant",
      "Multiple color options",
      "Custom-fabricated to each opening",
      "Manufacturers: South Evolution",
    ],
    faqs: [
      {
        q: "How quickly can I deploy accordion shutters before a storm?",
        a: "An experienced homeowner can secure all windows and doors in 15–30 minutes depending on the number of openings. One person can do it alone.",
      },
      {
        q: "Can accordion shutters be opened from inside?",
        a: "Yes. Our accordion shutters are designed to lock and unlock from both inside and outside, so you can seal up even after you've gone inside.",
      },
      {
        q: "Are accordion shutters strong enough for a major hurricane?",
        a: "Yes. Our accordion shutters carry Miami-Dade NOA certification and are tested to withstand the large missile impact standard — the toughest in the US.",
      },
      {
        q: "Do accordion shutters require maintenance?",
        a: "Minimal. Lubricate the track annually and rinse with fresh water to remove salt buildup. Our free 3-year maintenance program includes annual tune-ups.",
      },
      {
        q: "Can I use accordion shutters on sliding glass doors?",
        a: "Yes. Accordion shutter systems are available for any opening type — including wide sliding glass doors, French doors, and garage entries.",
      },
    ],
    relatedSlugs: ["rolldown-shutters", "impact-windows", "impact-doors"],
  },
  {
    slug: "blinds",
    name: "Blinds & Solar Shades",
    headline: "Block UV. Cut Energy Costs.",
    description:
      "Our Bandalux solar shades and custom blinds reduce heat gain through your windows, cut UV exposure, and lower your monthly energy bills — without sacrificing your view or natural light. Designed for South Florida's intense sun.",
    metaTitle: "Custom Blinds & Solar Shades South Florida | Orlando T Group Inc.",
    metaDescription:
      "Custom Bandalux blinds and solar shades installed in South Florida. Block UV, reduce energy costs, and protect your interiors. Call (954) 625-5318.",
    heroImage: "/images/blinds.png",
    galleryImages: ["/images/blinds-2.jpg", "/images/blinds-3.jpg"],
    features: [
      {
        title: "Block UV Rays",
        body: "South Florida's intense sun fades furniture, floors, and artwork. Our solar shades block up to 99% of UV radiation while maintaining your view.",
      },
      {
        title: "Cut Energy Costs",
        body: "By reducing solar heat gain through your windows, our shades lower the load on your AC — translating to real savings on your monthly energy bills.",
      },
      {
        title: "Boost AC Efficiency",
        body: "Cooler interiors mean your AC runs less. In South Florida's climate, properly installed solar shades can make a measurable difference in comfort and cost.",
      },
      {
        title: "Bandalux Quality",
        body: "We install Bandalux solar protection systems — an international leader in high-performance window coverings used in residential and commercial projects worldwide.",
      },
      {
        title: "Preserve Natural Light",
        body: "Unlike blackout blinds, solar shades reduce heat and glare while keeping your space bright and maintaining your view to the outside.",
      },
      {
        title: "Custom Sizing",
        body: "Every blind and shade is cut and fabricated to the exact dimensions of your windows. Perfect fit, clean lines, and professional installation.",
      },
    ],
    specs: [
      "Bandalux solar protection systems",
      "UV protection up to 99%",
      "Manual or motorized operation",
      "Wide range of openness factors (1%–10%)",
      "Multiple fabric colors and textures",
      "Custom sizing for all window types",
    ],
    faqs: [
      {
        q: "What's the difference between solar shades and regular blinds?",
        a: "Solar shades are designed specifically to reduce solar heat gain and UV transmission while preserving your view. Regular blinds primarily provide privacy and light blocking.",
      },
      {
        q: "Can solar shades be motorized?",
        a: "Yes. Motorized options allow you to raise and lower your shades with a remote or app, making it easy to adjust throughout the day.",
      },
      {
        q: "Will solar shades help with my AC bills?",
        a: "Yes. By reducing solar heat gain, solar shades lower the heat load in your home — which directly reduces how hard your AC has to work.",
      },
      {
        q: "Can I still see outside with solar shades down?",
        a: "Yes. Solar shades are designed to reduce glare and UV while still allowing outward visibility. The degree of visibility depends on the openness factor you choose.",
      },
      {
        q: "Do you install blinds for commercial properties?",
        a: "Yes. We install Bandalux solar protection systems in both residential and commercial properties across South Florida.",
      },
    ],
    relatedSlugs: ["patio-enclosures", "retractable-awnings", "impact-windows"],
  },
  {
    slug: "retractable-awnings",
    name: "Retractable Awnings",
    headline: "Solar Protection. Deployed in Seconds.",
    description:
      "Retractable awnings extend over your patio, deck, or door in seconds with motorized convenience. Block the South Florida sun, stay cooler outdoors, and retract fully when not needed — or before a storm. Durable, weather-resistant, and custom-made to fit your space.",
    metaTitle: "Retractable Awnings South Florida | Orlando T Group Inc.",
    metaDescription:
      "Motorized retractable awnings installed in South Florida. Solar protection for patios, decks, and doors. Free estimate from Orlando T Group — (954) 625-5318.",
    heroImage: "/images/retractable-awnings.png",
    galleryImages: [
      "/images/retractable-awnings-2.jpg",
      "/images/retractable-awnings-3.jpg",
    ],
    features: [
      {
        title: "Solar Protection On Demand",
        body: "Extend your awning to block intense South Florida sun and retract it when you want full sky. Full control over light, heat, and outdoor comfort.",
      },
      {
        title: "Motorized Operation",
        body: "Our awnings include motorized mechanisms so you can extend or retract with a button press or remote — no cranking required.",
      },
      {
        title: "Installed Anywhere",
        body: "Retractable awnings mount to walls, soffits, and fascias. Ideal for patios, decks, pool areas, windows, and sliding glass door entries.",
      },
      {
        title: "Cooler Outdoor Spaces",
        body: "A quality awning can reduce the surface temperature of your patio by up to 20°F — making outdoor living comfortable even in summer.",
      },
      {
        title: "Protects Interior",
        body: "By blocking direct sun on your windows and doors, awnings reduce the UV and heat that would otherwise enter your home.",
      },
      {
        title: "Durable Construction",
        body: "Marine-grade aluminum arms and weather-resistant acrylic canvas stand up to South Florida's climate — including salt air, humidity, and UV exposure.",
      },
    ],
    specs: [
      "Motorized with remote control",
      "Marine-grade aluminum frame",
      "Weather-resistant acrylic canvas",
      "Custom sizing for any span",
      "Multiple fabric colors and patterns",
      "Optional wind sensor for automatic retraction",
    ],
    faqs: [
      {
        q: "Can retractable awnings withstand Florida weather?",
        a: "Our awnings are built with marine-grade aluminum and UV-resistant fabric. They're designed for coastal climates. Retract before high winds or tropical weather.",
      },
      {
        q: "How are retractable awnings powered?",
        a: "Our motorized awnings run on standard 110V power. We handle all electrical connections during installation. Optional battery backup is available.",
      },
      {
        q: "What size awning do I need?",
        a: "We custom-fabricate each awning to your space. During your free consultation, we'll measure your area and recommend the right projection and width.",
      },
      {
        q: "Can I add a wind sensor?",
        a: "Yes. An optional wind sensor automatically retracts the awning when wind speeds exceed a set threshold — protecting the awning during unexpected gusts.",
      },
      {
        q: "How do I clean a retractable awning?",
        a: "Brush off loose debris and rinse with mild soap and water. Allow to dry fully before retracting. Our maintenance program includes awning inspection annually.",
      },
    ],
    relatedSlugs: ["blinds", "patio-enclosures", "impact-windows"],
  },
  {
    slug: "impact-garage-doors",
    name: "Impact Garage Doors",
    headline: "Protect Your Garage. Protect Your Home.",
    description:
      "Your garage door is the largest opening in your home — and one of the most vulnerable in a hurricane. Our impact garage doors are engineered to withstand hurricane-force winds and debris, while offering custom designs that enhance your home's curb appeal.",
    metaTitle: "Impact Garage Doors South Florida | Orlando T Group Inc.",
    metaDescription:
      "Hurricane-rated impact garage doors installed in South Florida. Custom designs, licensed installation. Free estimate from Orlando T Group — (954) 625-5318.",
    heroImage: "/images/impact-garage-doors.png",
    galleryImages: [
      "/images/impact-garage-doors-2.jpg",
      "/images/impact-garage-doors-3.jpg",
    ],
    features: [
      {
        title: "Hurricane-Rated Construction",
        body: "Our impact garage doors are engineered to withstand Category 5 hurricane winds and large missile debris — protecting the largest opening in your home.",
      },
      {
        title: "Custom Designs",
        body: "Choose from a wide range of panel styles, window inserts, and finishes to match your home's architecture. Impact protection doesn't mean sacrificing aesthetics.",
      },
      {
        title: "Protects Your Vehicles",
        body: "A failed garage door in a hurricane lets in wind, rain, and debris — damaging vehicles and everything else inside. Impact doors eliminate that risk.",
      },
      {
        title: "Intruder Deterrent",
        body: "Impact garage doors feature reinforced construction and secure locking mechanisms that make forced entry through the garage extremely difficult.",
      },
      {
        title: "Structural Protection",
        body: "Garage door failure in a hurricane can lead to roof loss and catastrophic structural damage. An impact door keeps the envelope of your home sealed.",
      },
      {
        title: "Insurance Benefits",
        body: "Installing an impact-rated garage door typically qualifies for wind mitigation credits on your homeowner's insurance — reducing annual premiums.",
      },
    ],
    specs: [
      "Miami-Dade NOA certified",
      "Rated for Category 5 hurricane winds",
      "Heavy-gauge steel or aluminum construction",
      "Custom panel styles and window configurations",
      "Insulated options available",
      "Compatible with existing garage door openers",
    ],
    faqs: [
      {
        q: "Why is the garage door so important in a hurricane?",
        a: "The garage door is the largest single opening in most homes. If it fails in a hurricane, the sudden pressure change can lift the roof. An impact-rated door prevents this.",
      },
      {
        q: "Can I keep my existing garage door opener?",
        a: "In most cases, yes. Our impact garage doors are designed to be compatible with standard opener systems. We'll confirm compatibility during your consultation.",
      },
      {
        q: "Do impact garage doors come in different styles?",
        a: "Yes. We offer a wide range of panel designs, window inserts, raised panel and flat panel options, and finishes to match any home exterior.",
      },
      {
        q: "How long does installation take?",
        a: "Most garage door replacements are completed in a single day. We handle all permits, removal of the old door, and final inspection.",
      },
      {
        q: "Will a new impact garage door lower my insurance?",
        a: "Yes, in most cases. Florida insurers provide wind mitigation credits for impact-rated garage doors. We provide the documentation needed for your insurer.",
      },
    ],
    relatedSlugs: ["impact-windows", "impact-doors", "rolldown-shutters"],
  },
];

export function getProductDetail(slug: string): ProductDetail | undefined {
  return productDetails.find((p) => p.slug === slug);
}
