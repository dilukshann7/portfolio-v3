export type Certification = {
	slug: string;
	title: string;
	issuer: string;
	issued: string;
	expires?: string;
	credentialId: string;
	skills: string[];
	logo: string;
	certificateImage?: string;
	verificationUrl: string;
	linkedinUrl: string;
};

const linkedinUrl = "https://www.linkedin.com/in/dilukshann7/details/certifications/";

export const certifications: Certification[] = [
	{
		slug: "developing-ai-applications",
		title: "Developing AI Applications",
		issuer: "DataCamp",
		issued: "Dec 2025",
		credentialId: "2f382e105bc9fe63964bcdaf96465b383c4f65dc",
		skills: ["Artificial Intelligence (AI)", "Generative AI", "Python", "LLM applications", "Prompt engineering", "AI workflows"],
		logo: "/certifications/logos/datacamp.svg",
		certificateImage: "/certifications/datacamp-ai-app.jpg",
		verificationUrl: "https://www.datacamp.com/statement-of-accomplishment/2f382e105bc9fe63964bcdaf96465b383c4f65dc",
		linkedinUrl,
	},
	{
		slug: "ai-engineer-for-developers-associate",
		title: "AI Engineer for Developers Associate",
		issuer: "DataCamp",
		issued: "Nov 2025",
		expires: "Nov 2027",
		credentialId: "AIEDA0014288250055",
		skills: ["Machine Learning", "Python (Programming Language)", "Generative AI", "Model evaluation", "DataCamp projects"],
		logo: "/certifications/logos/datacamp.svg",
		certificateImage: "/certifications/datacamp-ai-eng.jpg",
		verificationUrl: "https://www.datacamp.com/statement-of-accomplishment/AIEDA0014288250055",
		linkedinUrl,
	},
	{
		slug: "foundational-c-sharp-with-microsoft",
		title: "Foundational C# with Microsoft",
		issuer: "Microsoft",
		issued: "Sep 2025",
		credentialId: "dilukshann7-fcswm",
		skills: ["C#", ".NET Framework", "Object-oriented programming", "Programming fundamentals", "Visual Studio"],
		logo: "/certifications/logos/microsoft.svg",
		certificateImage: "/certifications/microsoft-csharp.jpg",
		verificationUrl: "https://freecodecamp.org/certification/dilukshann7/foundational-c-sharp-with-microsoft",
		linkedinUrl,
	},
	{
		slug: "meta-front-end-developer-specialization",
		title: "Meta Front-End Developer Specialization",
		issuer: "Meta",
		issued: "Nov 2024",
		credentialId: "JRTJAQGHQTII",
		skills: ["HTML5", "Cascading Style Sheets (CSS)", "React", "JavaScript"],
		logo: "/certifications/logos/meta.svg",
		certificateImage: "/certifications/meta-frontend.jpg",
		verificationUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/JRTJAQGHQTII",
		linkedinUrl,
	},
	{
		slug: "postman-api-fundamentals-student-expert",
		title: "Postman API Fundamentals Student Expert",
		issuer: "Postman",
		issued: "Oct 2024",
		credentialId: "KM_tZLh5SfC_DhpL1kNXOA",
		skills: ["Application Programming Interfaces (API)", "Postman API", "API testing"],
		logo: "/certifications/logos/postman.svg",
		verificationUrl: "https://badges.postman.com/KM_tZLh5SfC_DhpL1kNXOA",
		linkedinUrl,
	},
	{
		slug: "automate-the-boring-stuff-with-python",
		title: "Automate the Boring Stuff with Python Programming",
		issuer: "Udemy",
		issued: "Sep 2024",
		credentialId: "UC-c45a9f7a-dcbb-4c94-87aa-9e6a6009ad57",
		skills: ["Python (Programming Language)", "Flask", "Automation", "Scripting"],
		logo: "/certifications/logos/udemy.svg",
		verificationUrl: "https://www.udemy.com/certificate/UC-c45a9f7a-dcbb-4c94-87aa-9e6a6009ad57/",
		linkedinUrl,
	},
	{
		slug: "learn-typescript",
		title: "Learn TypeScript",
		issuer: "Scrimba",
		issued: "Aug 2024",
		credentialId: "X8A9YGZ9E29B",
		skills: ["TypeScript", "Cascading Style Sheets (CSS)", "JavaScript"],
		logo: "/certifications/logos/scrimba.svg",
		certificateImage: "/certifications/scrimba-ts.jpg",
		verificationUrl: "https://scrimba.com/certificate-uX8A9YGZ9E29B",
		linkedinUrl,
	},
	{
		slug: "html-css-javascript-for-web-developers",
		title: "HTML, CSS, and Javascript for Web Developers",
		issuer: "The Johns Hopkins University",
		issued: "Jun 2024",
		credentialId: "2HAQ7C26MGAF",
		skills: ["Git", "JavaScript", "HTML5", "CSS", "Web development", "Responsive design"],
		logo: "/certifications/logos/johns-hopkins.svg",
		certificateImage: "/certifications/jhu-webdev.jpg",
		verificationUrl: "https://www.coursera.org/account/accomplishments/verify/2HAQ7C26MGAF",
		linkedinUrl,
	},
];
