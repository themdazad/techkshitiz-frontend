export type Category =
  | "Coding & Technology"
  | "Hardware & Mechatronics"
  | "E-sports & Gaming"
  | "Engineering & Design"
  | "Brain Games & Quizzes"
  | "Creative & Showcase";

export interface EventItem {
  id: string;
  title: string;
  imgUrl: string;
  emoji: string;
  blurb: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  location: string;
  category: Category;
  tags: string[];
  rulebookLink: string;
  registerLink: string;
  rules?: string[];
  coordinators?: { name: string; phone: string }[];
}

const DEFAULT_RULEBOOK = "https://drive.google.com";
const DEFAULT_REGISTER = "https://forms.google.com/";

export const events: EventItem[] = [
  // 1. Coding & Technology
  {
    id: "hackathon",
    title: "Hackathon",
    imgUrl:"photo_2025-09-02_18-10-50_a24bbn.jpg",
    emoji: "💡",
    blurb: "Sprint to prototype innovative solutions.",
    level: "Intermediate",
    duration: "2 hrs (final) / multi-day",
    location: "Campus Lab",
    category: "Coding & Technology",
    tags: ["team", "innovation"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
    rules: [
      "Original code only",
      "Use provided APIs fairly",
      "Respect time limits",
    ],
    coordinators: [
      { name: "Kritika", phone: "+91 9000000001" },
      { name: "Ayushmaan", phone: "+91 9060717563" },
      { name: "Rahul", phone: "+91 9000000003" },
    ],
  },
  {
    id: "debugger",
    title: "Debugger",
    imgUrl:"6176910038715712719_121_e7jfwb.jpg",
    emoji: "🪲",
    blurb: "Fix buggy code under time pressure.",
    level: "Beginner",
    duration: "1 hr",
    location: "Lab",
    category: "Coding & Technology",
    tags: ["solo", "speed"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
    coordinators: [
      { name: "Ananya", phone: "+91 9000000004" },
      { name: "Rohan", phone: "+91 9000000005" },
      { name: "Neha", phone: "+91 9000000006" },
    ],
  },
  {
    id: "web-designing",
    title: "Web Designing",
    imgUrl:"webdesig_cmqxez.jpg",
    emoji: "⌨️",
    blurb: "Showcase your web designing skills",
    level: "Beginner",
    duration: "1hr",
    location: "Lab",
    category: "Coding & Technology",
    tags: ["solo", "speed"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "typing-master",
    title: "Typing Master",
    imgUrl:"typin_uxko2h.jpg",
    emoji: "⌨️",
    blurb: "Speed typing accuracy challenge.",
    level: "Beginner",
    duration: "30 min",
    location: "Lab",
    category: "Coding & Technology",
    tags: ["solo", "speed"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  

  // 2. Hardware & Mechatronics
  {
    id: "iot",
    title: "IoT Fusion",
    imgUrl:"IMG_20250902_173836_582_zrtqgq.jpg",
    emoji: "🔗",
    blurb: "Theme-based IoT build with live demo.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Lab 2",
    category: "Hardware & Mechatronics",
    tags: ["team", "hardware"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "rc-car-racing",
    title: "RC Car Racing",
    imgUrl:"rob_gqrlma.jpg",
    emoji: "🏎️",
    blurb: "Design, tune, and race RC vehicles.",
    level: "Intermediate",
    duration: "TBA",
    location: "Tracks",
    category: "Hardware & Mechatronics",
    tags: ["team", "race"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },

  // 3. E-sports & Gaming
  {
    id: "esports",
    title: "E-sports (BGMI, Free Fire)",
    imgUrl:"IMG_20250902_173841_703_krcmoh.jpg",
    emoji: "🎮",
    blurb: "Competitive mobile gaming showdown.",
    level: "Beginner",
    duration: "TBA",
    location: "Hall",
    category: "E-sports & Gaming",
    tags: ["team", "tournament"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "chess-master",
    title: "Chess Master",
    emoji: "♟️",
    imgUrl:"IMG_20250902_173836_250_ejrfiy.jpg",
    blurb: "Think ahead, checkmate.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Online",
    category: "E-sports & Gaming",
    tags: ["solo", "strategy"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },

  // 4. Engineering & Design
  {
    id: "bridge-designing",
    title: "Bridge Designing",
    imgUrl:"IMG_20250902_173836_496_mli8sg.jpg",
    emoji: "🌉",
    blurb: "Engineer stability with materials.",
    level: "Intermediate",
    duration: "1.5 hrs",
    location: "Workshop",
    category: "Engineering & Design",
    tags: ["team", "civil"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "autocad-designing",
    title: "AutoCAD Designing",
    imgUrl:"autoca_ma6cwp.jpg",
    emoji: "📐",
    blurb: "Precision drafting and modeling challenge.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Design Lab",
    category: "Engineering & Design",
    tags: ["solo", "cad"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "circuit-designing",
    title: "Circuit Designing",
    imgUrl:"6176910038715712713_121_it6k9o.jpg",
    emoji: "🔌",
    blurb: "Build reliable circuits.",
    level: "Intermediate",
    duration: "1.5 hrs",
    location: "Lab 1",
    category: "Engineering & Design",
    tags: ["team", "electronics"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "eco-bridge-circuit",
    title: "Eco Bridge/Circuit Designing",
    imgUrl:"ecocircui_whapnz.jpg",
    emoji: "🌿",
    blurb: "Sustainable design under constraints.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Workshop",
    category: "Engineering & Design",
    tags: ["team", "eco"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },

  // 5. Brain Games & Quizzes
  {
    id: "puzzle-escape-room",
    title: "Puzzle Escape Room",
    imgUrl:"IMG_20250902_173841_935_qni5lq.jpg",
    emoji: "🧩",
    blurb: "Decode, deduce, escape.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Block B",
    category: "Brain Games & Quizzes",
    tags: ["team", "puzzle"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "technical-quiz",
    title: "Technical Quiz",
    imgUrl:"IMG_20250902_173841_789_1_1_n0nbpl.jpg",
    emoji: "🧠",
    blurb: "Test your tech knowledge.",
    level: "Beginner",
    duration: "1 hr",
    location: "Auditorium",
    category: "Brain Games & Quizzes",
    tags: ["solo", "quiz"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "rubix-cube",
    title: "Rubix Cube Challange",
    imgUrl:"IMG_20250902_173841_789_1_1_n0nbpl.jpg",
    emoji: "🧠",
    blurb: "Test your tech knowledge.",
    level: "Beginner",
    duration: "1 hr",
    location: "Auditorium",
    category: "Brain Games & Quizzes",
    tags: ["solo", "quiz"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },

  // 6. Creative & Showcase
  {
    id: "videography",
    title: "Videography Competition",
    emoji: "🎥",
    imgUrl:"videogrpah_qkpnyo.jpg",
    blurb: "Capture, edit, and tell a story.",
    level: "Beginner",
    duration: "TBA",
    location: "Campus",
    category: "Creative & Showcase",
    tags: ["solo", "media"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    imgUrl:"graphic_tje1yz.jpg",
    emoji: "🎨",
    blurb: "Design with constraints.",
    level: "Beginner",
    duration: "1 hr",
    location: "Design Studio",
    category: "Creative & Showcase",
    tags: ["solo", "design"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "crafting-decoration",
    title: "Crafting & Decoration Stalls",
    imgUrl:"creaftstal_kzcmyc.jpg",
    emoji: "🧵",
    blurb: "Create and decorate with flair.",
    level: "Beginner",
    duration: "TBA",
    location: "Courtyard",
    category: "Creative & Showcase",
    tags: ["team", "craft"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
  {
    id: "technical-rangoli",
    title: "Technical Rangoli Competition",
    imgUrl:"aiml_vzyy7p.jpg",
    emoji: "🌺",
    blurb: "Colorful patterns with precision.",
    level: "Beginner",
    duration: "1.5 hrs",
    location: "Main Foyer",
    category: "Creative & Showcase",
    tags: ["team", "art"],
    rulebookLink: DEFAULT_RULEBOOK,
    registerLink: DEFAULT_REGISTER,
  },
];

export type DayKey = "Day 01" | "Day 02" | "Day 03";
export interface ScheduleItem {
  time: string;
  title: string;
  duration: string;
  location: string;
  note?: string;
}

export const schedule: Record<DayKey, ScheduleItem[]> = {
  "Day 01": [
    {
      title: "Rangoli Event",
      time: "To be Announced",
      duration: "TBA",
      location: "Auditorium",
    },
    {
      title: "Inauguration",
      time: "To be Announced",
      duration:"TBA",
      location: "Auditorium",
    },
    {
      title: "Technical Quiz",
      time: "To be Announced",
      duration:"TBA",
      location: "Auditorium",
      note: "Source lists 12:00am; assumed 12:00pm for daytime schedule",
    },
    {
      title: "Graphic Design",
      time: "To be Announced",
      duration:"TBA",
      location: "Lab 28",
    },
    {
      title: "Puzzle Escape Room",
      time: "To be Announced",
      duration: "TBA",
      location: "Block B",
    },
    {
      title: "Chess",
      time: "To be Announced",
      duration:"TBA",
      location: "Online",
    },
  ],
  "Day 02": [
    {
      title: "Hackathon problem share",
      time: "To be Announced",
      duration: "TBA",
      location: "Lab",
    },
    {
      title: "Crafting & Stall Decoration",
      time: "To be Announced",
      duration: "TBA",
      location: "Ground",
      note: "End time TBA",
    },
    {
      title: "Web Designing",
      time: "To be Announced",
      duration: "TBA",
      location: "Seminar Hall",
      note: "End time TBA",
    },
    {
      title: "Debugger",
      time: "To be Announced",
      duration:"TBA",
      location: "Lab",
    },
    {
      title: "IoT Fusion",
      time: "To be Announced",
      duration:"TBA",
      location: "Lab 2",
    },
    {
      title: "Bridge Design",
      time: "To be Announced",
      duration:"TBA",
      location: "Workshop",
    },
    {
      title: "Circuit Design",
      time: "To be Announced",
      duration:"TBA",
      location: "Lab 1",
    },
    {
      title: "E‑Sports",
      time: "To be Announced",
      duration: "TBA",
      location: "Hall",
      note: "End time TBA",
    },
  ],
  "Day 03": [
    {
      title: "Hackathon",
      time: "To be Announced",
      duration:"TBA",
      location: "Lab",
    },
    {
      title: "Videography",
      time: "To be Announced",
      duration:"TBA",
      location: "Auditorium",
    },
    {
      title: "Crosswords",
      time: "To be Announced",
     duration:"TBA",
      location: "Library",
    },
    {
      title: "Tech Flash",
      time: "To be Announced",
      duration:"TBA",
      location: "Hall A",
    },
    {
      title: "Rubix Cube",
      time: "To be Announced",
      duration:"TBA",
      location: "Hall B",
      note: "Provided says 30 min but 1 hr gap; duration conflict",
    },
    {
      title: "Extempore",
      time: "To be Announced",
      duration:"TBA",
      location: "Seminar Hall",
      note: "Provided says 30 min but 1 hr slot; duration conflict",
    },
    {
      title: "Prize Distribution",
      time: "To be Announced",
      duration: "TBA",
      location: "Auditorium",
    },
  ],
};
