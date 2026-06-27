export const personalInfo = {
  name: "Aakash",
  tagline: "DevOps Engineer & Python Automation Developer",
  roles: ["DevOps Engineer", "Python Automation Developer", "Cloud Engineer", "CI/CD Architect", "Linux Systems Engineer"],
  email: "aakashguru725@gmail.com",
  phone: "+91 6380267379",
  location: "Villupuram, Tamil Nadu",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  summary: "DevOps-focused engineer with hands-on expertise in Linux administration, AWS (EC2, S3), Python, and Shell scripting. Skilled in CI/CD automation, Git/GitHub version control, Infrastructure as Code principles, system monitoring, troubleshooting, and security-conscious cloud engineering.",
  stats: [
    { label: "DSA Problems Solved", value: "300+", icon: "💻" },
    { label: "CGPA", value: "8.0", icon: "🎓" },
    { label: "Certifications", value: "3", icon: "🏆" },
    { label: "Projects Built", value: "5+", icon: "🚀" },
  ],
};

export const skills = {
  cloud: [
    { name: "AWS EC2/S3", level: 80, color: "#FF9900" },
    { name: "Docker", level: 75, color: "#2496ED" },
    { name: "Kubernetes", level: 55, color: "#326CE5" },
    { name: "Jenkins", level: 78, color: "#D24939" },
  ],
  devops: [
    { name: "CI/CD Pipelines", level: 82, color: "#6c63ff" },
    { name: "Linux Admin", level: 85, color: "#FCC624" },
    { name: "Shell Scripting", level: 80, color: "#00d4ff" },
    { name: "Git/GitHub", level: 88, color: "#F05032" },
    { name: "Maven", level: 72, color: "#C71A36" },
  ],
  programming: [
    { name: "Python", level: 88, color: "#3776AB" },
    { name: "Java", level: 70, color: "#ED8B00" },
    { name: "Bash", level: 82, color: "#4EAA25" },
    { name: "SQL", level: 65, color: "#00758F" },
  ],
  tools: ["VS Code", "Jupyter", "Anaconda", "ServiceNow", "Automation Anywhere", "GitHub Actions"],
};

export const projects = [
  {
    title: "CI/CD Pipeline Automation on AWS",
    description: "Production-grade CI/CD pipeline for a Java web app. Automated code checkout, Maven build, WAR packaging, and deployment to Apache Tomcat on AWS EC2. Containerized with Docker and streamlined using Jenkins Pipeline.",
    tech: ["Jenkins", "AWS EC2", "Docker", "Maven", "GitHub", "Shell", "Java", "Tomcat"],
    github: "#",
    demo: "#",
    featured: true,
    color: "#6c63ff",
    icon: "⚙️",
  },
  {
    title: "Audio-Visual Object Detection System",
    description: "AI-based automated detection system for low-visibility environments. Implemented data preprocessing, feature extraction, and classification models using TensorFlow with automated workflows.",
    tech: ["Python", "TensorFlow", "Computer Vision", "ML", "NumPy"],
    github: "#",
    demo: "#",
    featured: true,
    color: "#a855f7",
    icon: "🤖",
  },
  {
    title: "Sustainable Flight Route Optimizer",
    description: "Optimized route engine using Dijkstra's and A* algorithms in Python. Applied performance profiling and code optimization to improve execution speed and scalability for large datasets.",
    tech: ["Python", "Algorithms", "DSA", "Graph Theory", "Optimization"],
    github: "#",
    demo: "#",
    featured: true,
    color: "#00d4ff",
    icon: "✈️",
  },
  {
    title: "Python Task Automation Suite",
    description: "Automation scripts to eliminate repetitive operational tasks. Maintained Bash scripting utilities for routine Linux task automation with Git/GitHub for version control.",
    tech: ["Python", "Bash", "Linux", "Git", "Automation"],
    github: "#",
    demo: "#",
    featured: false,
    color: "#39ff14",
    icon: "🐍",
  },
];

export const experience = [
  {
    role: "Python Developer Intern",
    company: "Optimus Technologies",
    location: "Salem",
    period: "2024",
    type: "Internship",
    points: [
      "Developed Python automation scripts to eliminate repetitive operational tasks, reducing manual effort",
      "Performed systematic troubleshooting and debugging of Python-based systems",
      "Maintained Bash scripting utilities for routine Linux task automation",
      "Applied Git/GitHub for version control and collaborative development workflows",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    institution: "Muthayammal Engineering College",
    period: "2022 – 2026",
    grade: "CGPA: 8.0/10",
    highlights: ["Solved 300+ DSA problems on CodeChef", "Participated in ICT Academy cloud programs"],
  },
];

export const certifications = [
  { name: "Automation Anywhere Essentials", issuer: "Automation Anywhere", color: "#FF6B35", icon: "🤖" },
  { name: "ITIL 4 Foundation", issuer: "PeopleCert", color: "#6c63ff", icon: "📋" },
  { name: "ServiceNow Fundamentals", issuer: "ServiceNow", color: "#00d4ff", icon: "☁️" },
];

export const terminalCommands = {
  about: `Aakash — DevOps & Automation Engineer
Location  : Villupuram, Tamil Nadu
Email     : aakashguru725@gmail.com
Education : B.Tech AI & DS @ MEC (2022-2026)
Focus     : Cloud infra, CI/CD, Python automation`,
  skills: `Cloud     : AWS (EC2, S3), Docker, Kubernetes
DevOps    : Jenkins, CI/CD, Maven, Git/GitHub
OS        : Linux (Ubuntu, CentOS), Bash
Languages : Python ████████▌  88%
            Java   ███████    70%
            Bash   ████████   82%
Certs     : ITIL 4, ServiceNow, Automation Anywhere`,
  projects: `[1] CI/CD Pipeline on AWS — Jenkins + Docker + EC2
[2] Audio-Visual Detection — TensorFlow + Python
[3] Flight Route Optimizer — Dijkstra + A* Algo
[4] Python Automation Suite — Bash + Linux`,
  contact: `Email   : aakashguru725@gmail.com
Phone   : +91 6380267379
GitHub  : github.com/aakash
LinkedIn: linkedin.com/in/aakash
Status  : Open to internships & full-time roles ✓`,
  resume: `Initiating download sequence...
[██████████████████████] 100%
✓ Resume ready! Check your downloads folder.`,
  help: `Available commands:
  about    — who I am
  skills   — my tech stack  
  projects — what I've built
  contact  — get in touch
  resume   — download my CV
  clear    — clear terminal`,
};
