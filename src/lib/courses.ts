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
    description: "Learn full-stack web development from scratch with real-world projects.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    category: "Development",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    instructor: "Sarah Khan",
    duration: "14 hours",
    rating: 4.7,
    level: "Beginner",
    description: "Master visual hierarchy, wireframing, and user-centered design principles.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    category: "Design",
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass",
    instructor: "Alex Rivera",
    duration: "18 hours",
    rating: 4.8,
    level: "Intermediate",
    description: "Build data-driven marketing campaigns using SEO, content, and ads.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: "Marketing",
  },
  {
    id: 4,
    title: "Data Analytics with SQL and BI",
    instructor: "Priya Nair",
    duration: "16 hours",
    rating: 4.6,
    level: "Intermediate",
    description: "Analyze and visualize business data with SQL, dashboards, and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Analytics",
  },
  {
    id: 5,
    title: "Motion Graphics for Creators",
    instructor: "Liam Brooks",
    duration: "12 hours",
    rating: 4.5,
    level: "Advanced",
    description: "Create high-impact animations and branded visuals for social platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Design",
  },
  {
    id: 6,
    title: "Product Management Playbook",
    instructor: "Nadia Rahman",
    duration: "15 hours",
    rating: 4.8,
    level: "Intermediate",
    description: "Ship better products with user research, roadmap planning, and execution.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    category: "Business",
  },
];

export const popularCourses = [...courses]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

export const trendingCourses = [...courses].slice(2, 6);
