
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Ahmed",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Ahmed Abdelhamid	",
	description: "A Computer Engineer creating websites and software.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1-Mz9r_WRtSnoBTIrl1EnPAdmpLZV7Ym3/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I graduated from Alexandria University  in 2022 with a degree in Computer Engineering. I kick started my professional career as a web developer working as a freelancer.",
		"The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. ",
		"When I’m not programming, I focus on my hobbies which are: diary writing, listening to music.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Software Development",
			description: "I create handy software applications that help in the ease of life.",
			icons: null,
		},
		{
			title: "Web Development",
			description: "I create responsive websites using MERN stack.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Himu",
			description: "himu is a template website for a company , having both front-end and back-end phases.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Ahmed-A-Amin98/himu.github.io",
				},
			]
		},
		{
			title: "LoLsite",
			description: "A front-end template for an international gaming site.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/Ahmed-A-Amin98/lolsite.github.io",
				},
			]
		},
		{
			title: "Doctor-Y",
			description: ["Doctor-Y is a fully Structured Electronic Health Record (EHR) for each patient hosted on cloud servers.",
			],
			icons: [
				{
					icon: faYoutube,
					link: "https://drive.google.com/file/d/1apx_zv4dWKlyE04VsBCX6FR3JW0OD7Vg/view",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at ahmedabdelhamid106@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:ahmedabdelhamid106@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Ahmed Abdelhamid | Computer Engineer | Software developer | Web developer",
	description: "I create software apps and responsive websites. I graduated from Alexandria University in 2022 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@ahmedamin",
	description: "Computer Engineer | Software Developer | Web Developer",
	cards: [
		{
			title: "My Facebook",
			link: "https://www.facebook.com/ahmedabdelhamid998/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/Ahmed-A-Amin98",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/ahmed-abdelhamid998/",
		},
	]
}