export type Course = {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  rating: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  image: string;
  category: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.9,
    level: "Beginner",
    description:
      "Covers HTML, CSS, JavaScript, React and a basic Node backend. Good starting point if you've never built a website before.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&fit=crop",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Khan",
    duration: "14 hours",
    rating: 4.7,
    level: "Beginner",
    description:
      "Learn how to wireframe, prototype, and think from a user's perspective. Figma is used throughout the course.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80&fit=crop",
    category: "Design",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    instructor: "Alex Rivera",
    duration: "18 hours",
    rating: 4.8,
    level: "Intermediate",
    description:
      "SEO, paid ads, content strategy and email marketing all in one place. Practical and not overly theoretical.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&fit=crop",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Data Analytics with SQL and BI",
    instructor: "Priya Nair",
    duration: "16 hours",
    rating: 4.6,
    level: "Intermediate",
    description:
      "Write real SQL queries, build dashboards in Power BI, and actually understand what the data is telling you.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&fit=crop",
    category: "Analytics",
  },
  {
    id: 5,
    title: "Motion Graphics for Creators",
    instructor: "Liam Brooks",
    duration: "12 hours",
    rating: 4.5,
    level: "Advanced",
    description:
      "After Effects fundamentals focused on social content — reels, intros, transitions. You'll need some video editing experience first.",
    image: "https://images.unsplash.com/photo-1536240478700-b869ad10a2eb?w=800&q=80&fit=crop",
    category: "Design",
  },
  {
    id: 6,
    title: "Product Management Playbook",
    instructor: "Nadia Rahman",
    duration: "15 hours",
    rating: 4.8,
    level: "Intermediate",
    description:
      "How PMs actually work day to day — user research, writing specs, working with engineers, and prioritizing features without losing your mind.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&fit=crop",
    category: "Business",
  },
];

export const popularCourses = [...courses]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

export const trendingCourses = [...courses].slice(2, 6);
