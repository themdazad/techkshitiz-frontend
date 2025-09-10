export type TeamMember = { name: string; role: string; branch: string; photo: string };

export const organizingTeam: TeamMember[] = [
  { name: "Ayushmaan Shandilya", role: "Lead Organizer", branch: "CSE", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
  { name: "Kritika", role: "Operations", branch: "ECE", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
  { name: "Aarav", role: "Design", branch: "ME", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
  { name: "Sneha", role: "Sponsorships", branch: "CE", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
  { name: "Rohan", role: "Tech", branch: "EE", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
  { name: "Isha", role: "Content", branch: "IT", photo: "https://res.cloudinary.com/dmu1qh4dj/image/upload/v1756736721/samples/smile.jpg" },
];
export type clubIncharge = { name: string;branch: string; photo: string };
export const clubIncharges : clubIncharge[]=[
  { name: "Dr. Preetam Amrit", branch: "Computer Science & Engineering", photo: "https://res.cloudinary.com/dcsqprug1/image/upload/v1757235672/preetamamrit_laga0j.jpg" },
  { name: "Prof. Sundram Mishra", branch: "Electrical Engineering", photo: "https://res.cloudinary.com/dcsqprug1/image/upload/v1757235668/SundramMishra_f9ld3e.jpg" },
  { name: "Dr. Yamika Patel", branch: "Mechanical Engineering", photo: "https://res.cloudinary.com/dcsqprug1/image/upload/v1757235664/yamikapatel_apkdex.jpg" },
  { name: "Prof. Mohit Prakash", branch: "Electrical Engineering", photo: "https://res.cloudinary.com/dcsqprug1/image/upload/v1757235663/mohitprakash_gzkvp9.jpg" },
]

export type clubHead = { name: string;branch: string; photo: string;description:string ; linkedin:string; };
export const clubHeads : clubHead[]=[
  { name: "Md. Azad", branch: "Electrical Engineering", photo: "https://res.cloudinary.com/dswkss8nj/image/upload/v1757491754/mdazad_fgzj4h.jpg",description:"Team Management & Planning", linkedin:"https://www.linkedin.com/in/themdazad/"},
  { name: "Abhinav Kumar", branch: "Electrical Engineering", photo: "https://res.cloudinary.com/dswkss8nj/image/upload/v1757491743/abhinav_uhlkyy.jpg",description:"Event Management & Planning", linkedin:"https://www.linkedin.com/in/abhinav-kumar-gecsiwan/" },
  { name: "Shahnoor Ishtiyaque", branch: "CSE - IoT", photo: "https://res.cloudinary.com/dswkss8nj/image/upload/v1757491745/shahnoor_massm1.jpg" ,description:"Promotions and participants Management",linkedin:"https://www.linkedin.com/in/shahnoor-ishtiyaque-496843297/" },
]