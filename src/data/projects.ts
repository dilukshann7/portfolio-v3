export type ProjectTechnology = {
	name: string;
	icon: string;
};

export type ProjectLink = {
	label: string;
	href: string;
	type: "live" | "repository";
};

export type Project = {
	slug: string;
	year: string;
	status: string;
	name: string;
	description: string;
	details: string;
	system: string;
	role: string;
	platform: string;
	focus: string;
	stack: ProjectTechnology[];
	highlights: string[];
	image: string;
	links: ProjectLink[];
};

export const projects: Project[] = [
	{
		slug: "legisdex",
		year: "2025–26",
		status: "Live",
		name: "LegisDex",
		description: "An AI-powered FIDIC contract assistant for architects, engineers, and quantity surveyors.",
		details: "I built LegisDex to make FIDIC contract research and review easier. It uses grounded retrieval so users can check where an answer came from.",
		system: "Agentic RAG SaaS",
		role: "Full-stack product + AI engineering",
		platform: "Web application",
		focus: "Contract intelligence",
		stack: [
			{ name: "Next.js", icon: "/tech/nextjs.svg" },
			{ name: "OpenAI", icon: "/tech/openai.svg" },
			{ name: "PostgreSQL", icon: "/tech/postgresql.svg" },
			{ name: "Drizzle ORM", icon: "/tech/drizzle.svg" },
			{ name: "Stripe", icon: "/tech/stripe.svg" },
			{ name: "Payload CMS", icon: "/tech/payloadcms.svg" },
			{ name: "Three.js", icon: "/tech/three.svg" },
		],
		highlights: ["FIDIC contract assistance", "Grounded answers", "Research workflows"],
		image: "/projects/legisdex.jpg",
		links: [{ label: "Open live product", href: "https://legisdex.com/", type: "live" }],
	},
	{
		slug: "noxhd-ui",
		year: "2024",
		status: "Live",
		name: "NoxHD UI",
		description: "A beautifully designed UI library for Next.js used by 500+ developers.",
		details: "I designed and built NoxHD UI as a reusable component system for Next.js. I focused on useful components, clear visual rules, and polished interactions.",
		system: "Next.js UI library",
		role: "UI system + frontend engineering",
		platform: "Next.js",
		focus: "Reusable interface design",
		stack: [
			{ name: "Next.js", icon: "/tech/nextjs.svg" },
			{ name: "TypeScript", icon: "/tech/typescript.svg" },
			{ name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
			{ name: "Framer Motion", icon: "/tech/motion.svg" },
			{ name: "GSAP", icon: "/tech/gsap.svg" },
		],
		highlights: ["500+ developers", "Reusable components", "Frontend polish"],
		image: "/projects/noxhdui.jpg",
		links: [{ label: "View repository", href: "https://github.com/Nox-HD/ui", type: "repository" }],
	},
	{
		slug: "termicord",
		year: "2026",
		status: "Completed",
		name: "termicord",
		description: "A beautiful, terminal-native Discord attachment downloader for focused workflows.",
		details: "I built termicord as a terminal tool for downloading Discord attachments. I kept the interface direct and readable without adding unnecessary UI.",
		system: "Terminal-native TUI",
		role: "Developer tooling + interaction design",
		platform: "Terminal",
		focus: "Discord attachment workflows",
		stack: [
			{ name: "Bun", icon: "/tech/bun.svg" },
			{ name: "TypeScript", icon: "/tech/typescript.svg" },
			{ name: "OpenTUI", icon: "/tech/opentui.svg" },
			{ name: "Zig", icon: "/tech/zig.svg" },
			{ name: "Discord API", icon: "/tech/discord.svg" },
		],
		highlights: ["Terminal-native interface", "Attachment downloads", "Focused workflow"],
		image: "/projects/termicord.jpg",
		links: [{ label: "View repository", href: "https://github.com/dilukshann7/termicord", type: "repository" }],
	},
	{
		slug: "census-management-system",
		year: "2026",
		status: "Live",
		name: "Census Management System",
		description: "A SvelteKit-based census data collection and admin review system built for local government.",
		details: "I built this system to connect field data collection with administrative review. It handles submission, checking, approval, and management in one workflow.",
		system: "Submission to approval",
		role: "Full-stack application + workflow design",
		platform: "SvelteKit",
		focus: "Census data operations",
		stack: [
			{ name: "SvelteKit", icon: "/tech/svelte.svg" },
			{ name: "Tailwind CSS", icon: "/tech/tailwind.svg" },
			{ name: "Drizzle ORM", icon: "/tech/drizzle.svg" },
			{ name: "PostgreSQL", icon: "/tech/postgresql.svg" },
			{ name: "Better Auth", icon: "/tech/betterauth.svg" },
			{ name: "Zod", icon: "/tech/zod.svg" },
		],
		highlights: ["Submission workflows", "Admin review", "Local government system"],
		image: "/projects/census.jpg",
		links: [
			{ label: "Open live app", href: "https://census-lk.vercel.app/", type: "live" },
			{ label: "View repository", href: "https://github.com/dilukshann7/census-ms", type: "repository" },
		],
	},
];
