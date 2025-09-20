export type DayKey = "Day 01" | "Day 02" | "Day 03";

export interface ScheduleItem {
  time: string;
  title: string;
  duration: string;
  location: string;
  coordinators?: { name: string; phone: string; }[];
  note?: string;
}

export const schedule: Record<DayKey, ScheduleItem[]> = {
  "Day 01": [
    {
      title: "Rangoli",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: [
        { name: "Sweety", phone: "9304565637" }
      ]
    },
    {
      title: "Selfie Point Stand (Craft & Decoration)",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: [
        { name: "Sweety", phone: "9304565637" }
      ]
    },
    {
      title: "Videography Challenge",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: [
        { name: "Saurabh Mishra", phone: "9973320409" }
      ]
    },
    {
      title: "Break",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "-"
    },
    {
      title: "Inauguration Ceremony",
      time: "11:00 - 01:00 pm",
      duration: "2 hrs",
      location: "Auditorium"
    },
    {
      title: "Break",
      time: "01:00 - 02:00 pm",
      duration: "1 hr",
      location: "-"
    },
    {
      title: "Hackathon PS Announcement",
      time: "02:00 pm",
      duration: "24 hrs",
      location: "Whatsapp Group",
      coordinators: [
        { name: "Ayushmaan", phone: "8969352535" }
      ]
    },
    {
      title: "Web Designing PS Announcement",
      time: "02:00 pm",
      duration: "12 hrs",
      location: "Whatsapp Group",
      coordinators: [
        { name: "Ayushmaan", phone: "8969352535" }
      ]
    },
    {
      title: "Technical Quiz",
      time: "02:15 - 03:00 pm",
      duration: "45 mins",
      location: "Computer Lab",
      coordinators: [
        { name: "Priyanshu", phone: "6207795220" }
      ]
    },
    {
      title: "Debugger",
      time: "03:30 - 04:30 pm",
      duration: "1 hr",
      location: "Central Computer Lab + Advance Computer Lab",
      coordinators: [
        { name: "Adeel", phone: "8873469135" }
      ]
    },
    {
      title: "Graphic Designing + Presentation",
      time: "04:30 - 05:30 pm",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        { name: "Harish", phone: "8406086269" }
      ]
    },
    {
      title: "E-Sports",
      time: "05:30 - 07:00 pm",
      duration: "1.5 hrs",
      location: "Ground/Auditorium",
      coordinators: [
        { name: "Rajeev", phone: "9304477244" }
      ]
    }
  ],
  "Day 02": [
    {
      title: "Puzzle Escape Room",
      time: "08:00 - 11:00 am",
      duration: "3 hrs",
      location: "TBA",
      coordinators: [
        { name: "Mohit", phone: "7645924757" }
      ]
    },
    {
      title: "RC Car Racing",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "Badminton Court",
      coordinators: [
        { name: "Rajnish", phone: "9142778727" }
      ]
    },
    {
      title: "IoT Fusion + Presentation",
      time: "10:00 - 12:00 pm",
      duration: "2 hrs",
      location: "TBA",
      coordinators: [
        { name: "Ashish", phone: "7700812113" }
      ]
    },
    {
      title: "Rubik's Cube",
      time: "12:00 - 01:00 pm",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        { name: "Rajan", phone: "8228051357" }
      ]
    },
    {
      title: "Break",
      time: "01:00 - 02:00 pm",
      duration: "1 hr",
      location: "-"
    },
    {
      title: "Bridge Designing Workshop",
      time: "02:00 - 05:00 pm",
      duration: "3 hrs",
      location: "TBA",
      coordinators: [
        { name: "Aman Kumar", phone: "9065261735" }
      ]
    },
    {
      title: "Hackathon Presentation",
      time: "02:00 - 05:00 pm",
      duration: "3 hrs",
      location: "Auditorium",
      coordinators: [
        { name: "Ayushmaan", phone: "8969352535" }
      ]
    },
    {
      title: "E-Sports Final",
      time: "05:00 - 07:00 pm",
      duration: "2 hrs",
      location: "Ground/Auditorium",
      coordinators: [
        { name: "Rajeev", phone: "9304477244" }
      ]
    }
  ],
  "Day 03": [
    {
      title: "Typing Master",
      time: "09:00 - 10:00 am",
      duration: "1 hr",
      location: "Computer Lab",
      coordinators: [
        { name: "Deepak", phone: "9507438716" }
      ]
    },
    {
      title: "AutoCAD",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        { name: "Aman Anurag", phone: "9117242725" }
      ]
    },
    {
      title: "Web Designing Presentation",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        { name: "Ayushmaan", phone: "8969352535" }
      ]
    },
    {
      title: "Ending Ceremony",
      time: "02:00 - 06:00 pm",
      duration: "4 hrs",
      location: "Auditorium"
    },
    {
      title: "Prize Distribution",
      time: "02:00 - 06:00 pm",
      duration: "4 hrs",
      location: "Auditorium"
    }
  ]
};

// Event date information
export const eventDates = {
  "Day 01": "22 Sept. 2025",
  "Day 02": "23 Sept. 2025", 
  "Day 03": "24 Sept. 2025"
};

export const eventDateRange = "22-24 September 2025";