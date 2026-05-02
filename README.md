# SkillSphere

SkillSphere is a modern online learning platform where users can explore courses, view detailed lessons, and enroll in skill-based programs such as Web Development, Design, Marketing, and more.

## Live URL

https://skillsphere-online-learning-live.vercel.app

## Purpose

Build a responsive single-page style learning experience using Next.js App Router with authentication, protected routes, course discovery, and profile management.

## Key Features

- Persistent Navbar and Footer layout with route-based rendering (App Router)
- Home page with Hero Slider, Popular Courses, Learning Tips, Top Instructors, and Trending Courses
- All Courses page with search by course title
- Protected Course Details route (redirects to login when unauthenticated)
- BetterAuth authentication:
	- Email/password login
	- Email/password registration
	- Google social login
- My Profile page for logged-in user
- Update profile info (name + image URL) using BetterAuth `updateUser`
- Toast notifications for auth and update actions
- Loading states and custom not-found page
- Fully responsive design for mobile, tablet, and desktop

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- DaisyUI
- BetterAuth
- Swiper.js

## NPM Packages Used

- better-auth
- better-sqlite3
- daisyui
- swiper
- react-hot-toast
- clsx

## Environment Variables

Create `.env.local` from `.env.example` and set the values:

```env
BETTER_AUTH_SECRET=replace-with-a-random-32-char-secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Run Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deployment Notes

- Deploy on Vercel

