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
	stack: string[];
	highlights: string[];
	image: string;
	github: string;
};

export const projects: Project[] = [
	{
		slug: "legisdex",
		year: "2025–26",
		status: "Live",
		name: "LegisDex",
		description: "An AI-powered FIDIC contract assistant for architects, engineers, and quantity surveyors.",
		details: "LegisDex turns complex contract work into a clearer research and review workflow. The product is designed around useful AI assistance, grounded retrieval, and the confidence that comes from seeing where an answer came from.",
		system: "Agentic RAG SaaS",
		role: "Full-stack product + AI engineering",
		platform: "Web application",
		focus: "Contract intelligence",
		stack: ["AI workflows", "Retrieval", "Citations", "Product UX"],
		highlights: ["FIDIC contract assistance", "Grounded answers", "Research workflows"],
		image: "/projects/legisdex.jpg",
		github: "https://github.com/dilukshann7?tab=repositories",
	},
	{
		slug: "noxhd-ui",
		year: "2024",
		status: "Live",
		name: "NoxHD UI",
		description: "A beautifully designed UI library for Next.js used by 500+ developers.",
		details: "NoxHD UI is where the engineering and design sides meet most directly: reusable components, clear visual rules, and the small interaction details that help a frontend system feel coherent instead of assembled.",
		system: "Next.js UI library",
		role: "UI system + frontend engineering",
		platform: "Next.js",
		focus: "Reusable interface design",
		stack: ["Next.js", "React", "Design systems", "UI/UX"],
		highlights: ["500+ developers", "Reusable components", "Frontend polish"],
		image: "/projects/noxhdui.jpg",
		github: "https://github.com/dilukshann7?tab=repositories",
	},
	{
		slug: "termicord",
		year: "2026",
		status: "Completed",
		name: "termicord",
		description: "A beautiful, terminal-native Discord attachment downloader for focused workflows.",
		details: "termicord is a focused developer utility with a terminal-native interface. Its value comes from keeping the workflow fast and legible: less chrome, direct actions, and an interface shaped around the environment it runs in.",
		system: "Terminal-native TUI",
		role: "Developer tooling + interaction design",
		platform: "Terminal",
		focus: "Discord attachment workflows",
		stack: ["Terminal UI", "Discord", "Developer tooling", "Interaction design"],
		highlights: ["Terminal-native interface", "Attachment downloads", "Focused workflow"],
		image: "/projects/termicord.jpg",
		github: "https://github.com/dilukshann7?tab=repositories",
	},
	{
		slug: "census-management-system",
		year: "2026",
		status: "Live",
		name: "Census Management System",
		description: "A SvelteKit-based census data collection and admin review system built for local government.",
		details: "This system connects field submission with administrative review. The experience is shaped around a clear path from collecting information to checking, approving, and managing it at scale.",
		system: "Submission to approval",
		role: "Full-stack application + workflow design",
		platform: "SvelteKit",
		focus: "Census data operations",
		stack: ["SvelteKit", "Data collection", "Admin review", "Workflow UX"],
		highlights: ["Submission workflows", "Admin review", "Local government system"],
		image: "/projects/census.jpg",
		github: "https://github.com/dilukshann7?tab=repositories",
	},
];
