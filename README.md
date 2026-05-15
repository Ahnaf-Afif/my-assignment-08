# SkillSphere

A clean course-learning website built with Next.js. SkillSphere is designed for people who want to explore practical courses, check the details before enrolling, and manage their account from one simple place.

Live site: [https://my-assignment-08.vercel.app](https://my-assignment-08.vercel.app)

## Purpose

This project was made as a course platform assignment. The main idea is to give users a smooth learning marketplace experience where they can browse available courses, read useful course information, and use authentication features like login, registration, Google sign-in, and profile updates.

I kept the design bright and friendly, with a focus on making the course cards and details easy to scan.

## Key Features

- Home page with a modern hero section and featured course areas
- All courses page with search functionality
- Course cards showing category, level, instructor, rating, duration, students, and price
- Dynamic course details page for each course
- Course curriculum and instructor information
- Enroll button with toast feedback
- Login and registration system
- Google social login using Better Auth
- User profile page with profile update support
- Responsive layout for desktop and mobile screens
- Reusable components for navbar, footer, cards, and course details

## Tech Stack

- Next.js
- React
- Tailwind CSS
- DaisyUI
- Better Auth
- MongoDB
- HeroUI
- Lucide React
- React Icons
- Motion
- React Hook Form
- React Toastify

## NPM Packages Used

These are the main packages used in this project:

```txt
@better-auth/mongo-adapter
@heroui/react
@heroui/styles
better-auth
daisyui
lucide-react
mongodb
motion
next
react
react-dom
react-hook-form
react-icons
react-toastify
tailwindcss
@tailwindcss/postcss
eslint
eslint-config-next
```

## Pages

- `/` - Home page
- `/AllCourses` - All courses with search
- `/Details/[id]` - Single course details page
- `/Login` - Login page
- `/Register` - Registration page
- `/Profile` - User profile page

## Run Locally

Clone the project and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```txt
http://localhost:3000
```

## Environment Variables

For the authentication and database features, the project needs these environment variables:

```env
MONGO_URI=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

## Project Note

SkillSphere is still an assignment project, but I tried to make it feel like a real learning platform instead of just a collection of pages. The course data, details page, authentication flow, and profile section are all connected around that idea.
