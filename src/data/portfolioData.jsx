import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma, FaJava, FaDocker, FaAws } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython, SiJenkins, SiApache, SiPostman, SiSpring, SiSelenium, SiApachespark } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Tejaswar Reddy",
  title: "SDET Engineer & Test Automation Specialist",
  email: "tejaswarreddy2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/tejaswar2004",
  github: "https://github.com/tejaswar2004",
  resumeLink: "/Lingareddy_Tejaswar_Reddy_Resume.pdf", // Place your CV PDF file in the public/ folder
  bio: "Experienced SDET Engineer specializing in test automation, API testing, and continuous integration. Proficient in Selenium, TestNG, Cucumber BDD, and cloud technologies. Passionate about ensuring software quality and delivering robust, reliable solutions.",
  shortBio: "I ensure software quality through automation." // For Hero section
};

export const education = [
  {
    institution: "Lovely Professional University ",
    degree: "Bachelor of Engineering in Computer Science",
    duration: "Aug 2021 –June 2025",
    score: "CGPA: 7.64/10",
  },
  {
    institution: "Sri Chaitanya Collage (Raman Bhavan 3)",
    degree: "Class 12th SSC",
    duration: "April 2019 - May 2021",
    score: "Marks: 897/1000%",
  },
  {
    institution: "Sri Chaitanya High School - Vempalli",
    degree: "Class 10th  SSC ",
    duration: "April 2018 - May 2019",
    score: "97%",
  },
];

export const projects = [
  {
    title: "Tic-Tac-Toe Game",
    tech: ["HTML5", "CSS3", "JavaScript"],
    description: "A modern, feature-rich Tic-Tac-Toe game with split-screen design, score tracking, and target-based match system. Built with vanilla HTML, CSS, and JavaScript. Features glassmorphism UI, real-time score updates, progress bars, and responsive design for all devices.",
    date: "2024",
    liveLink: "https://tejaswar2004.github.io/TIC_TOC_TOE_Game/",
    category: "Frontend",
    icon: <SiJavascript size={24} className="text-accent-1"/>
  },
  {
    title: "BuildBridge",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: "Streamlined contracting for construction projects, reducing deal closure time by 40% via an AI-based platform matching builders with clients. Developed both frontend and backend, integrating user authentication, contract storage, and a responsive UI.",
    date: "March 2025 – Present",
    liveLink: "https://build-bridge-seven.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "FarmConnect",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    description: "Optimized crop storage for farmers, increasing warehouse occupancy by 25% via an AI-powered marketplace connecting farmers with warehouse owners. Developed a seamless booking system with real-time warehouse availability and farmer-friendly UI.",
    date: "Feb 2025 – Present",
    liveLink: "https://farm-connect-iota-psi.vercel.app/",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1"/>
  },
  {
    title: "WealthWise",
    tech: ["React JS", "Node JS", "Firebase", "API Integration"],
    description: "Enhanced financial literacy and user engagement by 40% through an interactive fintech platform integrating gamification. Developed an engaging React UI with gamified elements ensuring smooth user interactions.",
    date: "Jan 2025 – Present",
    liveLink: "https://wealthwisefinance.vercel.app/",
    category: "Fintech",
    icon: <SiFirebase size={24} className="text-accent-1"/>
  },
];

export const skills = {
  languages: [
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "Shell Scripting", icon: <FaCode /> },
  ],
  frameworksAndLibraries: [
    { name: "Spring Boot", icon: <SiSpring /> },
    { name: "Rest Assured", icon: <FaCode /> },
    { name: "Selenium WebDriver", icon: <SiSelenium /> },
    { name: "Cucumber BDD", icon: <FaCode /> },
    { name: "TestNG", icon: <FaCode /> },
    { name: "Apache Spark", icon: <SiApachespark /> },
    { name: "Hadoop", icon: <SiApache /> },
  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "Jenkins", icon: <SiJenkins /> },
    { name: "AWS Cloud", icon: <FaAws /> },
    { name: "AWS Lambda", icon: <FaAws /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "REST API Testing", icon: <SiPostman /> },
    { name: "Manual Testing", icon: <FaCode /> },
    { name: "Cluster Management", icon: <FaCode /> },
    { name: "Data Structures", icon: <FaDatabase /> },
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies",
    "Analytical Thinking",
    "Team Collaboration",
    "Effective Communication",
    "Attention to Detail",
    "Adaptability",
    "Time Management"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};