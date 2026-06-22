export const profileData = {
  name: "Matyus Cristian-Gabriel",
  title: "Software Engineer",
  description: "Passionate about building scalable and efficient software solutions. Experienced in full-stack development and always eager to learn new technologies.",
  location: "Berlin, Germany",
  email: "gabrielmatyus@googlemail.com",
  phone: "+49 15202999520",
  linkedin: "https://www.linkedin.com/in/gabriel-matyus-b3697a418",
  github: "https://github.com/gabrielmatyus"
};

export const resumeData = {
  education: [
    { 
        institution: "University of Technology Cluj-Napoca",
        degree: "Finished in 1995"
    }
  ],
  experience: [
    {
      company: "Oracle",
      role: "Software Engineer",
      duration: "Jan 2002 - 2026"
    },
  ],
  skills: ["TypeScript", "React", "Node.js", "Kotlin", "Docker", "Kubernetes"],
  provider: ["Google Cloud"]
};

export const projectsData = [
  {
    name: "Family Plans",
    description: "Parental control mobile app.",
    architecture: "Android app built with Kotlin, using Firebase for backend services and Google Cloud for hosting. Uses Google Cloud Run for FCM notifications.",
    link: "https://github.com/gabrielmatyus/my-family",
    features: ["Parental controls", "Location tracking", "App usage reports", "Real-time notifications", "Movement Sensor data monitoring"]
  },
    {
    name: "Portofolio",
    description: "Profile presentation website.",
    architecture: "Built with React and TypeScript, using Firebase Hosting.",
    link: "https://github.com/gabrielmatyus/portofolio",
    features: ["Profile presentation", "Work experience", "Skills showcase", "Projects overview", "Contact information"]
  }
];