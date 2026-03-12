const user = {
  id: 101,
  name: "Lokesh Ingle",
  age: 24,
  isDeveloper: true,
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  contact: {
    email: "lokeshingle@gmail.com",
    phone: "9876543210",
    address: {
      city: "Indore",
      state: "Madhya Pradesh",
      country: "India",
    },
  },
  projects: [
    {
      id: 1,
      title: "E-commerce Website",
      techStack: ["React", "Node.js", "MongoDB"],
      completed: true,
    },
    {
      id: 2,
      title: "Chat Application",
      techStack: ["Socket.io", "Express", "MongoDB"],
      completed: false,
    },
    {
      id: 3,
      title: "Blog Platform",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
      completed: false,
    },
  ],
  education: {
    degree: "B.Tech",
    branch: "Computer Science",
    year: 2023,
    college: "XYZ Engineering College",
  },
  socialLinks: {
    github: "https://github.com/lokesh",
    linkedin: "https://linkedin.com/in/lokesh",
    twitter: "@lokeshdev",
  },
};

localStorage.setItem("userData", JSON.stringify(user));
let getData = localStorage.getItem("userData");
document.getElementById("data").innerHTML = getData;
