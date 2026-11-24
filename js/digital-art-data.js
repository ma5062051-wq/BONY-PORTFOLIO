/* ════════════════════════════════════════════════════════════════
   BONY — Digital Art Data Catalog
   Reusable data structure for all Digital Art projects and standalones.
   Ordered with requested featured projects first:
   1. GOMAR AND HOSEA
   2. lucifer kid
   3. PRISONER
   4. PRISONER LILITH
   5. BROKEN GIRL
   6. war
   Followed by remaining projects in original relative order:
   7. ANUBIS
   8. CAIRO STORIES
   9. CRYING LILITH
   10. LONELINESS
   11. pharoh girl
   12. sun's childs
   13. حدود الحرية
   14. CHARACTERS
   15. DAVID IN EGY (Standalone)
   16. EGYPTION TOKTOK (Standalone)
   ════════════════════════════════════════════════════════════════ */

const DIGITAL_ART_PROJECTS = [
  // 1. GOMAR AND HOSEA
  {
    id: 1,
    title: "GOMAR AND HOSEA",
    slug: "gomar-and-hosea",
    folder: "GOMAR AND HOSEA",
    isStandalone: false,
    finalImage: "assets/images/digital-art/GOMAR AND HOSEA/01d122ba-a1ac-4b81-9a85-bc34e29e5f0e.jfif",
    intermediateImage: "assets/images/digital-art/GOMAR AND HOSEA/74cd1c91-b157-4386-9fa7-1132145adc42.jfif",
    sketchImage: "assets/images/digital-art/GOMAR AND HOSEA/0654e41e-3c79-4050-bea8-0bc38854f4b2.jfif",
    descriptionEn: `Gomer... did she truly deserve for Hosea to do all this for her?!

Inspired by the story of Gomer and Hosea.

The best love story.

New digital art painting.`,
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Painting",
    theme: "Biblical Narrative"
  },

  // 2. lucifer kid
  {
    id: 2,
    title: "lucifer kid",
    slug: "lucifer-kid",
    folder: "lucifer kid",
    isStandalone: false,
    finalImage: "assets/images/digital-art/lucifer kid/baby 2.jpg",
    intermediateImage: null,
    sketchImage: "assets/images/digital-art/lucifer kid/baby.jpg",
    descriptionEn: `We are born with angelic wings and demonic horns, carrying within us Gabriel’s peace and Lucifer’s fire.

We live caught in their eternal struggle, until we find ourselves at a crossroads.

Either Lucifer defeats Gabriel and his flames consume you, or Gabriel wins his holy war and you live meekly.

Or choose a crueler choice: keep them both alive within you, forever clashing, arguing, and competing inside your mind, inside your heart, through every side of your body... until you finally burn out.`,
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Painting",
    theme: "Dual Nature & Identity"
  },

  // 3. PRISONER
  {
    id: 3,
    title: "PRISONER",
    slug: "prisoner",
    folder: "PRISONER",
    isStandalone: false,
    finalImage: "assets/images/digital-art/PRISONER/mm.jpg",
    intermediateImage: null,
    sketchImage: "assets/images/digital-art/PRISONER/Untitled-100000.jpg",
    descriptionEn: "Our mistakes really deserve all these restrictions?!",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Illustration",
    theme: "Confinement & Humanity"
  },

  // 4. PRISONER LILITH
  {
    id: 4,
    title: "PRISONER LILITH",
    slug: "prisoner-lilith",
    folder: "PRISONER LILITH",
    isStandalone: false,
    finalImage: "assets/images/digital-art/PRISONER LILITH/55 (4).jpg",
    intermediateImage: "assets/images/digital-art/PRISONER LILITH/55 (3).jpg",
    sketchImage: "assets/images/digital-art/PRISONER LILITH/55 (1).jpg",
    descriptionEn: "Don't come near. It's a girl straight out of hell, tempting as sin and suffering like little angels.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Painting",
    theme: "Mythology & Caged Spirit"
  },

  // 5. BROKEN GIRL
  {
    id: 5,
    title: "BROKEN GIRL",
    slug: "broken-girl",
    folder: "BROKEN GIRL",
    isStandalone: false,
    finalImage: "assets/images/digital-art/BROKEN GIRL/ارت copy.jpg",
    intermediateImage: "assets/images/digital-art/BROKEN GIRL/ابت.jpg",
    sketchImage: "assets/images/digital-art/BROKEN GIRL/رررر.jpg",
    descriptionEn: "We lose some things that never return.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Illustration",
    theme: "Emotional & Mental State"
  },

  // 6. war
  {
    id: 6,
    title: "war",
    slug: "war",
    folder: "war",
    isStandalone: false,
    finalImage: "assets/images/digital-art/war/bita.jpg",
    intermediateImage: "assets/images/digital-art/war/bbb.jpg",
    sketchImage: "assets/images/digital-art/war/bitta.jpg",
    descriptionIntro: "Inspired by Michelangelo's Pietà sculpture.",
    descriptionEn: "How do you create a war criminal?!",
    descriptionAr: `كيف تصنع مجرم حرب ؟!

تؤلمني كل مشاهد الحررب ..💔

دماء الاطفال واعين الأمهات الباكية..تؤلمني آهات النساء وانتحابات الفتيات اللواتي فقدن رجالهم وأبائهم ..

أن تكون مجرم حرب يعني الا تبكيك كل هذه المشاهد .. أن ترتكب المذابح و الانتقامات و أن تمارس قوتك علي بعض الأبرياء`,
    hasDescription: true,
    isBilingual: true,
    medium: "Digital Painting",
    theme: "Anti-War & Human Tragedy"
  },

  // 7. ANUBIS
  {
    id: 7,
    title: "ANUBIS",
    slug: "anubis",
    folder: "ANUBIS",
    isStandalone: false,
    finalImage: "assets/images/digital-art/ANUBIS/anu FINAL.jpg",
    intermediateImage: "assets/images/digital-art/ANUBIS/anu step.jpg",
    sketchImage: "assets/images/digital-art/ANUBIS/anu.jpg",
    descriptionEn: `I am Anubis, the god of mummification and the guardian of the tombs, the supervisor of judgment before the court of the great gods.

Not a single person escapes from my clutches, and no grave is dug up in my presence.

I am the god of the dead, Hammy, the avenger of the mummified gods, the ruler of the underworld.

Whoever wants evil in Egypt, I will bring him men from hell.

Digital painting for Anubis.`,
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Painting",
    theme: "Egyptian Mythology"
  },

  // 8. CAIRO STORIES
  {
    id: 8,
    title: "CAIRO STORIES",
    slug: "cairo-stories",
    folder: "CAIRO STORIES",
    isStandalone: false,
    finalImage: "assets/images/digital-art/CAIRO STORIES/caiiro.jpg",
    intermediateImage: "assets/images/digital-art/CAIRO STORIES/cairo-0133344dfgbhgfds.jpg",
    sketchImage: "assets/images/digital-art/CAIRO STORIES/مريم أشرف 2 (ب).jpg",
    descriptionEn: null,
    descriptionAr: "شوارع وحواديت من القاهرة زمان",
    hasDescription: true,
    medium: "Digital Illustration & Folkloric Art",
    theme: "Egyptian Heritage & Streets"
  },

  // 9. CRYING LILITH
  {
    id: 9,
    title: "CRYING LILITH",
    slug: "crying-lilith",
    folder: "CRYING LILITH",
    isStandalone: false,
    finalImage: "assets/images/digital-art/CRYING LILITH/lilith COLOR.jpg",
    intermediateImage: null,
    sketchImage: "assets/images/digital-art/CRYING LILITH/lilith.jpg",
    descriptionEn: "Inspired by the legend of Lilith, a demoness believed to tempt men and prey on young children. In some versions of the myth, her story is associated with her inability to bear children.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Art",
    theme: "Mythology & Legend"
  },

  // 10. LONELINESS
  {
    id: 10,
    title: "LONELINESS",
    slug: "loneliness",
    folder: "LONELINESS",
    isStandalone: false,
    finalImage: "assets/images/digital-art/LONELINESS/سسس.jpg",
    intermediateImage: "assets/images/digital-art/LONELINESS/ss copy.jpg",
    sketchImage: "assets/images/digital-art/LONELINESS/ss.jpg",
    descriptionEn: "We lose some things that never return.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Illustration",
    theme: "Solitude & Reflection"
  },

  // 11. pharoh girl
  {
    id: 11,
    title: "pharoh girl",
    slug: "pharoh-girl",
    folder: "pharoh girl",
    isStandalone: false,
    finalImage: "assets/images/digital-art/pharoh girl/pharonic degsin.jpg",
    intermediateImage: "assets/images/digital-art/pharoh girl/pharonic degsin purple.jpg",
    sketchImage: "assets/images/digital-art/pharoh girl/مريم أشرف 1 (ب).jpg",
    additionalImages: ["assets/images/digital-art/pharoh girl/1.jpg"],
    descriptionEn: null,
    descriptionAr: null,
    hasDescription: false,
    medium: "Pop Art & Pharaonic Design",
    theme: "Ancient Egypt in Pop Art"
  },

  // 12. sun's childs
  {
    id: 12,
    title: "sun's childs",
    slug: "suns-childs",
    folder: "sun's childs",
    isStandalone: false,
    finalImage: "assets/images/digital-art/sun's childs/moftah c.jpg",
    intermediateImage: "assets/images/digital-art/sun's childs/BABA MAGED c.jpg",
    sketchImage: "assets/images/digital-art/sun's childs/moftah t.jpg",
    characterSet: [
      { name: "Moftah", color: "assets/images/digital-art/sun's childs/moftah c.jpg", trace: "assets/images/digital-art/sun's childs/moftah t.jpg" },
      { name: "Baba Maged", color: "assets/images/digital-art/sun's childs/BABA MAGED c.jpg", trace: "assets/images/digital-art/sun's childs/BABA MAGED t.jpg" },
      { name: "Welaa", color: "assets/images/digital-art/sun's childs/welaa c.jpg", trace: "assets/images/digital-art/sun's childs/welaa t.jpg" }
    ],
    descriptionEn: null,
    descriptionAr: null,
    hasDescription: false,
    medium: "Character Illustration Series",
    theme: "Egyptian Portraits"
  },

  // 13. حدود الحرية
  {
    id: 13,
    title: "حدود الحرية",
    slug: "hudud-al-hurriya",
    folder: "حدود الحرية",
    isStandalone: false,
    finalImage: "assets/images/digital-art/حدود الحرية/كوفر.jpg",
    intermediateImage: "assets/images/digital-art/حدود الحرية/1 (5).jpg",
    sketchImage: "assets/images/digital-art/حدود الحرية/1 (6).jpg",
    bookSpreads: [
      "assets/images/digital-art/حدود الحرية/كوفر.jpg",
      "assets/images/digital-art/حدود الحرية/1 (5).jpg",
      "assets/images/digital-art/حدود الحرية/1 (1).jpg",
      "assets/images/digital-art/حدود الحرية/1 (6).jpg"
    ],
    descriptionEn: "A children's tracing book published by Tanween Publishing. I illustrated all of its pages and handled the complete layout and design.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Children's Book Illustration & Layout",
    theme: "Published Work • Tanween Publishing"
  },

  // 14. CHARACTERS
  {
    id: 14,
    title: "CHARACTERS",
    slug: "characters",
    folder: "CHARACTERS",
    isStandalone: false,
    finalImage: "assets/images/digital-art/CHARACTERS/1-01.jpg",
    intermediateImage: null,
    sketchImage: "assets/images/digital-art/CHARACTERS/2-01.jpg",
    descriptionEn: "Experiments in Children's Character Design.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Character Studies & Ink Drawings",
    theme: "Cartoon Studies (25 Designs)",
    allCharacterImages: [
      "assets/images/digital-art/CHARACTERS/1-01.jpg",
      "assets/images/digital-art/CHARACTERS/2-01.jpg",
      "assets/images/digital-art/CHARACTERS/3-01.jpg",
      "assets/images/digital-art/CHARACTERS/4-01.jpg",
      "assets/images/digital-art/CHARACTERS/5-01.jpg",
      "assets/images/digital-art/CHARACTERS/6-01.jpg",
      "assets/images/digital-art/CHARACTERS/7-01.jpg",
      "assets/images/digital-art/CHARACTERS/8-01.jpg",
      "assets/images/digital-art/CHARACTERS/9-01.jpg",
      "assets/images/digital-art/CHARACTERS/10-01.jpg",
      "assets/images/digital-art/CHARACTERS/11-01.jpg",
      "assets/images/digital-art/CHARACTERS/12-01.jpg",
      "assets/images/digital-art/CHARACTERS/13-01.jpg",
      "assets/images/digital-art/CHARACTERS/14-01.jpg",
      "assets/images/digital-art/CHARACTERS/15-01.jpg",
      "assets/images/digital-art/CHARACTERS/16-01.jpg",
      "assets/images/digital-art/CHARACTERS/17-01.jpg",
      "assets/images/digital-art/CHARACTERS/18-01.jpg",
      "assets/images/digital-art/CHARACTERS/19-01.jpg",
      "assets/images/digital-art/CHARACTERS/20-01.jpg",
      "assets/images/digital-art/CHARACTERS/21-01.jpg",
      "assets/images/digital-art/CHARACTERS/22-01.jpg",
      "assets/images/digital-art/CHARACTERS/23-01.jpg",
      "assets/images/digital-art/CHARACTERS/24-01.jpg",
      "assets/images/digital-art/CHARACTERS/25-01.jpg"
    ]
  },

  // 15. DAVID IN EGY (Standalone)
  {
    id: 15,
    title: "DAVID IN EGY",
    slug: "david-in-egy",
    folder: null,
    isStandalone: true,
    finalImage: "assets/images/digital-art/DAVID IN EGY.jpg",
    intermediateImage: null,
    sketchImage: null,
    descriptionEn: "David statue in Egypt.\nCubism art.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Cubism Pop Art",
    tag: "Cubism art"
  },

  // 16. EGYPTION TOKTOK (Standalone)
  {
    id: 16,
    title: "EGYPTION TOKTOK",
    slug: "egyption-toktok",
    folder: null,
    isStandalone: true,
    finalImage: "assets/images/digital-art/EGYPTION TOKTOK.jpg",
    intermediateImage: null,
    sketchImage: null,
    descriptionEn: "Egypt streets with worldwide paintings.\nDigital painting.",
    descriptionAr: null,
    hasDescription: true,
    medium: "Digital Painting",
    tag: "Digital painting"
  }
];

// Helper to find a project by slug
function getProjectBySlug(slug) {
  return DIGITAL_ART_PROJECTS.find(p => p.slug === slug);
}
