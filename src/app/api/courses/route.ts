import { courses } from "@/lib/courses";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return Response.json(courses);
}
