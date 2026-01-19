import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([

{
  id: "p1",
  title: "Launch Meetup",
  description:
    "MooMap began as a small-group idea driven by curiosity and real-world challenges in livestock management. At this meetup, we shared our early research on technology, market needs, and practical solutions, marking the first step from concept to a real platform.",
  location: "University of Vavuniya",
  images: ["/events//LaunchMeetup/PHOTO-2025-06-17-19-21-05.jpg", 
           "/events//LaunchMeetup/PHOTO-2025-06-17-19-21-01.jpg"
           ],
  dateText: "17,06,2025",
  isUpcoming: false,
},

{
  id: "p2",
  title: "Pilot Testing & Field Data Collection",
  description:
    "Following the initial launch, MooMap moved into pilot testing with village cattle owners around the University of Vavuniya. We worked closely with local farmers to deploy early prototypes, observe real usage, and gather field data. These trials helped refine our technology and align the solution with real community needs.",
  location: "Villages around University of Vavuniya",
  images: [
    "/events/PilotTesting/PHOTO-2025-07-03-12-50-03.jpg",
    "/events/PilotTesting/PHOTO-2025-07-03-12-50-04.jpg",
    "/events/PilotTesting/PHOTO-2025-09-05-12-23-40.jpg",
    "/events/PilotTesting/PHOTO-2025-08-31-20-03-22.jpg"
  ],
  dateText: "03, 07, 2025",
  isUpcoming: false
},

{
  id: "p3",
  title: "Research Paper Publication – RCAICT 2025",
  description:
    "The research outcomes of MooMap were published at the Research Conference on Advances in Information and Communication Technology (RCAICT 2025) under the theme “ICT Innovation and Emerging Technologies.” The paper presented insights from pilot testing, field data collection with village cattle owners, and the application of smart technologies to livestock management, marking an important academic milestone.",
  location: "Faculty of Technological Studies, University of Vavuniya",
  images: ["/events/RCAICT/1766498383266.jpeg",
           "/events/RCAICT/mapping.jpeg",
           "/events/RCAICT/PHOTO-2025-09-03-16-52-43.jpg"
          ],
  dateText: "03,09,2025",
  isUpcoming: false
},

{
  id: "p4",
  title: "Finalist Showcase – IEEE FYP Arena 2025",
  description:
    "Project MooMap was selected as a finalist and showcased at IEEE FYP Arena 2025 under the Electronics, Robotics, and Automation track. The event provided a national-level platform to present our research, system design, and real-world impact. We sincerely thank the IEEE Sri Lanka Section and the Faculty of Engineering, University of Ruhuna for organizing this prestigious event that empowers young engineers and researchers.",
  location: "Faculty of Engineering, University of Ruhuna",
  images: ["/events/IEEEFYP/PHOTO-2025-12-19-23-07-54.jpg",
           "/events/IEEEFYP/PHOTO-2025-12-14-17-16-18.jpg",
           "/events/IEEEFYP/PHOTO-2025-12-14-17-16-11.jpg"],
  dateText: "19,12,2025",
  isUpcoming: false
},

{
  id: "p5",
  title: "First Customer Deployment",
  description:
    "MooMap reached an important milestone by onboarding its first customer with a GPS collar. This initial deployment marked the transition from pilot testing to real-world adoption, allowing us to validate system reliability, usability, and data accuracy in a live environment.",
  location: "Field Deployment",
  images: ["/events/FirstCustomer/1.jpeg",
           "/events/FirstCustomer/2.jpeg",
           "/events/FirstCustomer/3.PNG",
           "/events/FirstCustomer/4.JPG"],
  dateText: "15,01,2026",
  isUpcoming: false
}








]);
}
