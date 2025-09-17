export type Category =
  | "Coding & Technology"
  | "Hardware & Mechatronics"
  | "E-sports & Gaming"
  | "Engineering & Design"
  | "Brain Games & Quizzes"
  | "Creative & Showcase";
// testing
export interface EventItem {
  id: string;
  title: string;
  imgUrl: string;
  emoji: string;
  blura: string;
  blurb: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  location: string;
  teamSize: string;
  prize: string;
  registration: string;
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
    imgUrl: "photo_2025-09-02_18-10-50_a24bbn.jpg",
    emoji: "💡",
    blura: "Sprint to prototype innovative solutions.",
    blurb:
      "The Hackathon event at Techkshitiz is an exciting offline competition where teams or individuals solve real-world problems through programming. It emphasizes creativity, collaboration, and efficient problem-solving, giving tech enthusiasts a chance to showcase their skills and learn from peers.",
    level: "Intermediate",
    duration: "24 hrs",
    location: "Campus Lab",
    teamSize: "2-4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "₹99",
    category: "Coding & Technology",
    tags: ["team", "innovation"],
    rulebookLink:
      "https://docs.google.com/document/d/1YS-udtEH7kOrWoehvBaU7P-guIDqIJxzd16gjor5kHQ/edit?usp=sharing",
    registerLink: "https://forms.gle/594YQ4Bs9e8Kg6QU9",
    rules: [
      "Evaluation of projects will be done in college campus only so you need to reach the venue",
      "Prizes and physical certificate  will be awarded to all members of the first three winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    coordinators: [
      { name: "Ayushmaan Shandilya", phone: "+91 8969352535" },
      { name: "Prayag Sagar", phone: "+91 9256762259" },
    ],
  },
  {
    id: "debugger",
    title: "Debugger",
    imgUrl: "6176910038715712719_121_e7jfwb.jpg",
    emoji: "🪲",
    blura: "Fix buggy code under time pressure.",
    blurb:
      "This event is designed to challenge problem-solving abilities by having participants identify and fix errors in code efficiently during the event.",
    level: "Beginner",
    duration: "1 hr",
    location: "Lab",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Coding & Technology",
    tags: ["single", "speed"],
    rules: [
      "Prizes and physical certificate will be provided only to the participant securing the first position. ",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1f3NRZznSats1l3JpPEcpWt5ZTa-Y-QcotMEi6ueVTaw/edit?usp=sharing",
    registerLink: "https://forms.gle/NqUWBsutAbssfd1UA",
    coordinators: [
      { name: "Adeel Ala", phone: "+91 8873469135" },
      { name: "Chanchal Kumar`", phone: "+91 8298574177" },
      { name: "Sandeep Kumar", phone: "+91 7633092729" },
      { name: "Deepak Kumar Prasad", phone: "+91 9507438716" },
    ],
  },
  {
    id: "web-designing",
    title: "Web Designing",
    imgUrl: "webdesig_cmqxez.jpg",
    emoji: "⌨️",
    blura: "Showcase your web designing skills.",
    blurb:
      "The web designing competition is a highlight of the annual technical festival, providing an exciting platform for students to demonstrate their creativity, technical acumen, and ability to solve real-world digital challenges through website development.",
    level: "Beginner",
    duration: "12 hrs",
    location: "Lab",
    teamSize: "1-3",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "₹99",
    category: "Coding & Technology",
    tags: ["solo", "speed"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1gkLkyMqdhZ3VgUUVG_QYdpjtasBLZImGDA0NKaCufdc/edit?usp=sharing",
    registerLink: "https://forms.gle/ZMx6zkd5NKXhQPMp6",
    coordinators: [
      { name: "Ayushmaan Shandilya", phone: "+91 8969352535" },
      { name: "Rohit Kumar Yadav", phone: "+91 9973967871" },
      { name: "Kumari Rishidhi", phone: "............" },
    ],
  },
  {
    id: "typing-master",
    title: "Typing Master",
    imgUrl: "typin_uxko2h.jpg",
    emoji: "⌨️",
    blura: "Speed typing accuracy challenge.",
    blurb:
      ".Participants will be given a set amount of time to type a provided text on computers supplied by the event organizers. The competition evaluates how fast and correctly each participant can type.",
    level: "Beginner",
    duration: "1 hr",
    location: "Lab",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Coding & Technology",
    tags: ["solo", "speed"],
    rules: [
      "Prizes and physical certificate will be provided only to the participant securing the first position. ",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1QAxf09-9IRrscTrORK5HZ5N1btmgxyR3tG5l7AKjBGM/edit?usp=sharing",
    registerLink: "https://forms.gle/34Y8j8P9ppBuEYJF6",
    coordinators: [
      { name: "Deepak Kumar Prasad", phone: "+91 9507438716" },
      { name: "Pratik Kumar", phone: "+91 9123250583" },
      { name: "Sandeep Kumar", phone: "+91 7633092729" },
    ],
  },

  // 2. Hardware & Mechatronics
  {
    id: "iot",
    title: "IoT Fusion",
    imgUrl: "IMG_20250902_173836_582_zrtqgq.jpg",
    emoji: "🔗",
    blura: "Theme-based IoT build with live demo.",
    blurb:
      "The IoT Fusion event at Techkshitiz is a dynamic competition focused on Internet of Things technology. It challenges participants to creatively solve real-world problems using IoT solutions, encouraging innovation, collaboration, and technical skills. The event offers a great platform for tech enthusiasts to showcase and enhance their IoT expertise in an engaging environment.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Lab 2",
    teamSize: "1-4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Hardware & Mechatronics",
    tags: ["team", "hardware"],
    rules: [
      "Evaluation of projects will be done in college campus only so you need to reach the venue",
      "Prizes and physical certificate  will be awarded to all members of the first three winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1vUT_KpIa7lGxGi1bBlUl1vt_NELkeu1TVI8CzSGZscE/edit?usp=sharing",
    registerLink: "https://forms.gle/yk7uxiF2Jm6yU7Zd9",
    coordinators: [
      { name: "Rajesh Kumar Baitha", phone: "+91 8873039882" },
      { name: "Ashish Kumar", phone: "+91 7700812113" },
      { name: "Aaditi Kumari", phone: "............" },
    ],
  },
  {
    id: "rc-car-racing",
    title: "RC Car Racing",
    imgUrl: "rob_gqrlma.jpg",
    emoji: "🏎️",
    blura: "Design, tune, and race RC vehicles.",
    blurb:
      "As part of TechKshitiz, the RC Car Racing competition tests participants' skills in building, controlling, and racing remote-controlled cars on a challenging track. This event combines technical knowledge with driving precision, where racers navigate obstacles, sharp turns, and jumps to achieve the fastest lap times.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Tracks",
    teamSize: "2",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "99",
    category: "Hardware & Mechatronics",
    tags: ["team", "race"],
    rules: [
      "Evaluation of projects will be done in college campus only so you need to reach the venue",
      "Prizes and physical certificate  will be awarded to all members of the first three winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1zO1h5-ZlwyU91fyJL5b4cxzZOV5NYzGMiHQ8t_6XfY8/edit?usp=sharing",
    registerLink: "https://forms.gle/LdQQ7y9Cuxt6YvAi9",
    coordinators: [
      { name: "Rajnish Kumar", phone: "+91 9142778727" },
      { name: "Priyanshu Kumar", phone: "+91 9771945740" },
      { name: "Prayag Sagar", phone: "+91 9256762259" },
    ],
  },

  // 3. E-sports & Gaming
  {
    id: "esports",
    title: "E-sports (BGMI, Free Fire)",
    imgUrl: "IMG_20250902_173841_703_krcmoh.jpg",
    emoji: "🎮",
    blura: "Competitive mobile gaming showdown.",
    blurb:
      "The E-sports event at Techkshitiz is a competitive gaming segment featuring popular games like FreeFire and BGMI. It is part of the annual technical fest organized by the Technical Club of Government Engineering College, Siwan, offering an exciting platform for gamers to showcase their skills and compete in a vibrant tech festival environment.",
    level: "Beginner",
    duration: "1.5 hrs",
    location: "Hall",
    category: "E-sports & Gaming",
    teamSize: "4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "₹99",
    tags: ["team", "tournament"],
    rules: [
      "Evaluation of projects will be done in college campus only so you need to reach the venue",
      "Prizes and physical certificate  will be awarded to all members of the first three winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1AEyMxJK9cX7jLULgXPd6uwshUdAGXmadrV9qiQlceNM/edit?usp=sharing",
    registerLink: "https://forms.gle/Wt35Fb7Zy3ZiCUsX6",
    coordinators: [
      { name: "Danish Hamraj", phone: "+91 8969352535" },
      { name: "Rajnish Kumar", phone: "+91 8825107885" },
      { name: "Pratik Kumar", phone: "+91 9123250583" },
      { name: "Rajeev Sharma", phone: "+91 9304477244" },
      { name: "Priyanshu Raj", phone: "+91 6207795220" },
      { name: "Ayush Kumar", phone: "+91 9304005082" },
    ],
  },

  // 4. Engineering & Design
  {
    id: "bridge-designing",
    title: "Bridge Designing",
    imgUrl: "IMG_20250902_173836_496_mli8sg.jpg",
    emoji: "🌉",
    blura: "Engineer stability with materials.",
    blurb:
      "The Bridge Design event at Techkshitiz is a competition where participants showcase their structural engineering skills by designing and building bridges that can withstand weight. This event empowers tech enthusiasts through hands-on workshops and competitions",
    level: "Intermediate",
    duration: "3 hrs",
    location: "Lab",
    teamSize: "3",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Engineering & Design",
    tags: ["team", "civil"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/17Lj1TLR_bOQ0syeR4HbEnKoCSzrZLx4t5vE545fn6lM/edit?usp=sharing",
    registerLink: "https://forms.gle/dTiZpFT57DdeRGLh8",
    coordinators: [
      { name: "Aman Kumar", phone: "+91 9065261735" },
      { name: "Sachin Kumar", phone: "+91 7654569443" },
      { name: "Sumansh Kumar", phone: "+91 7970556012" },
      { name: "Aman Anurag", phone: "+91 9117242725" },
    ],
  },
  {
    id: "autocad-designing",
    title: "AutoCAD Designing",
    imgUrl: "autoca_ma6cwp.jpg",
    emoji: "📐",
    blura: "Precision drafting and modeling challenge.",
    blurb:
      "As a key event of TechKshitiz, the AutoCAD Competition challenges participants to demonstrate their skills in computer-aided design and drafting using AutoCAD software. Competitors will be tasked with creating precise and accurate technical drawings within a given time, testing their speed, creativity, and attention to detail.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Lab",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Engineering & Design",
    tags: ["solo", "cad"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1jJX-_iyavhuaM2C5F_fF873OHzEKeoc118vctKXparg/edit?usp=sharing",
    registerLink: "https://forms.gle/fzBSrFNfrykCYUPn8",
    coordinators: [
      { name: "Saurabh Mishra", phone: "+91 9973320409" },
      { name: "Aman Kumar", phone: "+91 9065261735" },
      { name: "Aman Anurag", phone: "+91 9117242725" },
    ],
  },
  // 5. Brain Games & Quizzes
  {
    id: "puzzle-escape-room",
    title: "Puzzle Escape Room",
    imgUrl: "IMG_20250902_173841_935_qni5lq.jpg",
    emoji: "🧩",
    blura: "Decode, deduce, escape.",
    blurb:
      "The Escape Room event at Techkshitiz is an exciting and challenging activity where participants solve intricate puzzles to escape from a themed room within a set time. It combines problem-solving, teamwork, and quick thinking, making it a thrilling part of the Techkshitiz technical festival. This event tests participants' logical and analytical skills in a fun, immersive environment.",
    level: "Intermediate",
    duration: "1 hr",
    location: "Block B",
    teamSize: "4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Brain Games & Quizzes",
    tags: ["team", "puzzle"],
    rules: [
      "Prizes and physical certificate will be provided only to the participant securing the first first position. ",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1CbVyNmoZ985MB-U0cPgv5CoPNyQPGMvqCuTwy1wMml0/edit?usp=sharing",
    registerLink: "https://forms.gle/xTfdext9uBPQbrN66",
    coordinators: [
      { name: "Kumar Mohit", phone: "+91 7645924757" },
      { name: "Rajnish Kumar", phone: "+91 9142778727" },
      { name: "Priyanshu Raj", phone: "+91 6207795220" },
      { name: "Ritika Rani", phone: "............" },
      { name: "Anisha Patel", phone: "............" },
      { name: "Pragya Rani", phone: "............" },
    ],
  },
  {
    id: "technical-quiz",
    title: "Technical Quiz",
    imgUrl: "IMG_20250902_173841_789_1_1_n0nbpl.jpg",
    emoji: "🧠",
    blura: "Test your knowledge on latest technology trends.",
    blurb:
      "The quiz challenges participants' expertise in various domains of technology, offering an engaging and stimulating environment for tech enthusiasts to test their skills. This event promotes learning, quick thinking, and a passion for technology among students and participants.",
    level: "Beginner",
    duration: "1 hr",
    location: "Auditorium",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Brain Games & Quizzes",
    tags: ["solo", "quiz"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/150SH_sU3GEz1x53Fn5RQfVfyLslcK10o3ucyLVZbQ4U/edit?usp=sharing",
    registerLink: "https://forms.gle/mNMj8V49RqiXp6na9",
    coordinators: [
      { name: "Kumar Mohit", phone: "+91 7645924757" },
      { name: "Adeel Ala", phone: "+91 8873469135" },
      { name: "Sachin Kumar", phone: "+91 7654569443" },
      { name: "Priyanshu Raj", phone: "+91 6207795220" },
    ],
  },
  {
    id: "rubix-cube",
    title: "Rubix Cube Challange",
    imgUrl: "6176910038715712722_121_ytj9nz.jpg",
    emoji: "🧠",
    blura: "Solve the cube and test the speed.",
    blurb:
      "The Rubik's Cube event at Techkshitiz is a competitive challenge where participants race to solve the Rubik's Cube as quickly as possible. It typically involves rounds of solving the cube in minimum time, testing speed, skill, and problem-solving abilities.",
    level: "Beginner",
    duration: "1 hr",
    location: "Auditorium",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Brain Games & Quizzes",
    tags: ["solo", "quiz"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1_wP96O2zMI1kjhRXuDhp9-9a-WcCmHZMI7b5AjOte_k/edit?usp=sharing",
    registerLink: "https://forms.gle/JJyDTMx67csvRv4t5",
    coordinators: [
      { name: "Rajan Kumar", phone: "+91 8228051357" },
      { name: "Ruchi Kumari", phone: "............" },
    ],
  },
  // DEMO TEXT
  // HELLO
  // 6. Creative & Showcase
  {
    id: "videography",
    title: "Videography Competition",
    emoji: "🎥",
    blura: "Capture, edit, and tell a story.",
    imgUrl: "videogrpah_qkpnyo.jpg",
    blurb:
      "As part of this event, the Videography Challenge invites participants to produce unique videos—whether telling stories or demonstrating technical concepts. This is a wonderful opportunity for students to experiment, build new skills, and showcase their video-making talents.",
    level: "Beginner",
    duration: "-",
    location: "Campus",
    teamSize: "2-4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Creative & Showcase",
    tags: ["solo", "media"],
    rules: [
      "Prizes and physical certificate will be provided only to the participant securing the first position. ",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1eqKrvmxLueGwWvFwi42Ro7nnYTBlX-k1ujF9syM8QAY/edit?usp=sharing",
    registerLink: "https://forms.gle/g5gPdmmLeuAtiipVA",
    coordinators: [
      { name: "Saurabh Mishra", phone: "+91 9973320409" },
      { name: "Danish Hamraj", phone: "+91 8969352535" },
    ],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    imgUrl: "graphic_tje1yz.jpg",
    emoji: "🎨",
    blura: "Design with constraints.",
    blurb:
      "The graphics design event at TechKshitiz showcases the creativity and design skills of participating students. It challenges them to create innovative and visually appealing designs, often focused on technology themes.",
    level: "Beginner",
    duration: "1 hr",
    location: "Design Studio",
    teamSize: "1",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Creative & Showcase",
    tags: ["solo", "design"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1dY_K14tpu24Yad0CLSavzconQiygJbVvT8GIdnGy-_A/edit?usp=sharing",
    registerLink: "https://forms.gle/79bgh6ktzcWuU46L6",
    coordinators: [
      { name: "Harish Tiwari", phone: "+91 9572736198" },
      { name: "Ayushmaan Shandilya", phone: "+91 8969352535" },
      { name: "Khushi Kumari", phone: "............" },
      { name: "Kumari Rishidhi", phone: "............" },
      { name: "Khushi Kumari", phone: "............" },
    ],
  },
  {
    id: "crafting-decoration",
    title: "Crafting & Decoration Stalls",
    imgUrl: "creaftstal_kzcmyc.jpg",
    emoji: "🧵",
    blura: "Create and decorate with flair.",
    blurb:
      "The Crafting and Stall Decoration event at Techkshitiz is designed to showcase creativity, innovation, and aesthetic skills. Participants get a chance to transform simple spaces into visually appealing stalls through unique themes and handmade crafts.",
    level: "Beginner",
    duration: "-",
    location: "Courtyard",
    teamSize: "2-4",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Creative & Showcase",
    tags: ["team", "craft"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1Vs_IksNTRVBAZwh3CRRdac7NaH0wiw95xz8KxAwly9I/edit?usp=sharing",
    registerLink: "https://forms.gle/XL3ivtmQd8ctNG9D6",
    coordinators: [
      { name: "Khushee Pandey", phone: "............" },
      { name: "Sweety Kumari", phone: "............" },
    ],
  },
  {
    id: "technical-rangoli",
    title: "Technical Rangoli Competition",
    imgUrl: "aiml_vzyy7p.jpg",
    emoji: "🌺",
    blura: "Colorful patterns with precision.",
    blurb:
      "The Technical Rangoli event in TechKshitiz blends creativity with innovation by presenting technical concepts through traditional rangoli art. Participants use colors, patterns, and symbols to depict themes related to science, technology, and engineering in a visually appealing way.",
    level: "Beginner",
    duration: "2 hrs",
    location: "Campus Ground",
    teamSize: "1-3",
    prize: "Exciting prizes , Medals and Certificates",
    registration: "Free",
    category: "Creative & Showcase",
    tags: ["team", "art"],
    rules: [
      "Prizes and physical certificate  will be awarded to all members of the first two winning teams.",
      "E-Certificate will be provided to all the participants",
    ],
    rulebookLink:
      "https://docs.google.com/document/d/1lVh6EGmz1UPEXpbfainHhSdmUhde2fHc2onjjnctmBk/edit?usp=sharing",
    registerLink: "https://forms.gle/GExCc6dQEwf4QkRp9",
    coordinators: [
      { name: "Sweety Kumari", phone: "............" },
      { name: "Kashish Singhal", phone: "............" },
    ],
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
      location: "TBA",
    },
    {
      title: "Inauguration",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Technical Quiz",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
      note: "Source lists 12:00am; assumed 12:00pm for daytime schedule",
    },
    {
      title: "Web Design",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Puzzle Escape Room",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Typing Master",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "AutoCAD Design",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
  ],
  "Day 02": [
    {
      title: "Hackathon problem share",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Crafting & Stall Decoration",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
      note: "End time TBA",
    },
    {
      title: "Graphic Design ",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
      note: "End time TBA",
    },
    {
      title: "Debugger",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "IoT Fusion",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Bridge Design",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Circuit Design",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "E‑Sports",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
      note: "End time TBA",
    },
  ],
  "Day 03": [
    {
      title: "Hackathon",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Videography",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "RC Car Racing",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Tech Flash",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Rubix Cube",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
    {
      title: "Prize Distribution",
      time: "To be Announced",
      duration: "TBA",
      location: "TBA",
    },
  ],
};
