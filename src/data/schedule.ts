export type DayKey = "Day 01" | "Day 02" | "Day 03";

export interface ScheduleItem {
  time: string;
  title: string;
  duration: string;
  location: string;
  coordinators?: string[];
  note?: string;
}

export const schedule: Record<DayKey, ScheduleItem[]> = {
  "Day 01": [
    {
      title: "Rangoli",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: [ "Sweety", "Rajnish" ]
    },
    {
      title: "Selfie Point Stand (Craft & Decoration)",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: [ "Sweety" ]
      
    },
    {
      title: "Videography Challenge",
      time: "08:00 - 10:00 am",
      duration: "2 hrs",
      location: "Campus",
      coordinators: ["Saurabh Mishra"]
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
        "Ayushmaan"
      ]
    },
    {
      title: "Web Designing PS Announcement",
      time: "02:00 pm",
      duration: "12 hrs",
      location: "Whatsapp Group",
      coordinators: [
        "Ayushmaan"
      ]
    },
    {
      title: "Technical Quiz",
      time: "02:15 - 03:00 pm",
      duration: "45 mins",
      location: "Computer Lab",
      coordinators: [
        "Priyanshu"
      ]
    },
    {
      title: "Debugger",
      time: "03:30 - 04:30 pm",
      duration: "1 hr",
      location: "Central Computer Lab + Advance Computer Lab",
      coordinators: [
        "Adeel"
      ]
    },
    {
      title: "Graphic Designing + Presentation",
      time: "04:30 - 05:30 pm",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        "Harish"
      ]
    },
    {
      title: "E-Sports",
      time: "05:30 - 07:00 pm",
      duration: "1.5 hrs",
      location: "Ground/Auditorium",
      coordinators: [
        "Rajeev"
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
        "Mohit"
      ]
    },
    {
      title: "RC Car Racing",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "Badminton Court",
      coordinators: [
        "Rajnish"
      ]
    },
    {
      title: "IoT Fusion + Presentation",
      time: "10:00 - 12:00 pm",
      duration: "2 hrs",
      location: "TBA",
      coordinators: [
        "Ashish"
      ]
    },
    {
      title: "Rubik's Cube",
      time: "12:00 - 01:00 pm",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        "Rajan"
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
        "Aman Kumar"
      ]
    },
    {
      title: "Hackathon Presentation",
      time: "02:00 - 05:00 pm",
      duration: "3 hrs",
      location: "Auditorium",
      coordinators: [
        "Ayushmaan"
      ]
    },
    {
      title: "E-Sports Final",
      time: "05:00 - 07:00 pm",
      duration: "2 hrs",
      location: "Ground/Auditorium",
      coordinators: [
        "Rajeev"
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
        "Deepak"
      ]
    },
    {
      title: "AutoCAD",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        "Aman Anurag"
      ]
    },
    {
      title: "Web Designing Presentation",
      time: "10:00 - 11:00 am",
      duration: "1 hr",
      location: "TBA",
      coordinators: [
        "Ayushmaan"
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