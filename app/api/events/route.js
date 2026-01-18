import { NextResponse } from "next/server";

export async function GET() {
  const now = Date.now();

  return NextResponse.json([
    {
      id: "u1",
      title: "Community Meetup",
      description: "Meet the mapping community.",
      location: "Colombo",
      images: ["/events/meetup.jpeg", "/events/mapping.jpeg"],
      startAt: new Date(now + 86400000).toISOString(),
    },
    {
      id: "u2",
      title: "Field Mapping Day",
      description: "Bring your phone, we’ll map together.",
      location: "Kandy",
      images: ["/events/mapping.jpeg", "/events/launch.jpeg"],
      startAt: new Date(now + 7 * 86400000).toISOString(),
    },
    {
      id: "p1",
      title: "Launch Meetup",
      description: "We launched MooMap!",
      location: "Colombo",
      images: ["/events/launch.jpeg"],
      startAt: new Date(now - 4 * 86400000).toISOString(),
    },
  ]);
}
