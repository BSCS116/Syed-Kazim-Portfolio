const roles = [
  "CS Student 💻",
  "Web Developer 🌐",
  "AI Enthusiast 🤖",
  "Cyber Security Analyst 💀",
  "Programmer 👽"
  
  
];

let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const display = document.getElementById("typing");

  if (i < roles.length) {
    currentRole = roles[i];

    if (!isDeleting) {
      display.textContent = currentRole.substring(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
      }
    } else {
      display.textContent = currentRole.substring(0, j--);
      if (j === 0) {
        isDeleting = false;
        i++;
        if (i >= roles.length) i = 0;
      }
    }
  }

  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

// 🔥 Auto-close menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navLinks");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
    }
  });
});



function openSkillModal(skill) {
  const title = document.getElementById("skill-title");
  const desc = document.getElementById("skill-description");
  const modal = document.getElementById("skillModal");

  const skills = {
    cpp: { title: "C++", desc: "Powerful OOP language used in system programming and game development. Learned in fundamentals and OOP projects." },
    csharp: { title: "C#", desc: "Great for Windows and game development (Unity). Used in desktop apps and exploring GUI tools." },
    java: { title: "Java", desc: "Robust OOP language used for Android and enterprise apps. Learned in semester 2 and used in many projects." },
    python: { title: "Python (Basics)", desc: "High-level language for AI, ML, and scripting. Exploring for automation and AI projects." },

    html: { title: "HTML", desc: "Structure of web pages. Used in building portfolio, Tooly app, and project pages." },
    css: { title: "CSS", desc: "Styling and layout design for websites. Learned through real projects." },
    js: { title: "JavaScript", desc: "Makes websites interactive. Used in form handling, modals, and UI features." },

    vscode: { title: "VS Code", desc: "Popular lightweight code editor. Used for all web & console-based development." },
    terminal: {
    title: "Command Line / Terminal",  desc: "Familiar with using terminal commands for Git, file navigation, compiling code, and running scripts across Linux and Windows environments."},
    intellij: { title: "IntelliJ", desc: "Professional Java IDE. Used in exploring Java apps with better features." },
    git: { title: "Git & GitHub", desc: "Version control system and remote repo hosting. Used to track and share projects." },
    githubAutomation: {
    title: "GitHub Actions & Automation", desc: "Currently learning GitHub Actions through Microsoft Learn to automate build, test, and deployment processes. Skills include GitHub Script, custom workflows, CI/CD, and DevOps fundamentals."},
    arduino: { title: "Arduino UNO", desc: "Used in microcontroller-based hardware experiments and basic electronics." },

    oop: { title: "OOP", desc: "Object-Oriented Programming — foundation of Java/C++ project structure and design." },
    file: { title: "File Handling", desc: "Read/write from files for real-time data persistence in console-based projects." },
    ai: { title: "AI/ML Basics", desc: "Fundamentals of artificial intelligence and machine learning explored through online courses." },
    cyber: {
    title: "Cybersecurity — Cisco Networking Academy (In Progress)",
    desc: "Studying core concepts of cybersecurity including threat detection, ethical hacking basics, and secure communication. Focus areas: Risk Management, Cyber Threats, and Network Security."
    },

    leadership: { title: "Leadership", desc: "Led multiple group projects and team discussions as group leader." },
    problem: { title: "Problem Solving", desc: "Efficient code design, debugging, and logical solutions to programming tasks." },
    presentation: { title: "Presentation", desc: "Effectively presenting tech ideas in labs, viva, and project demos." },
    teamwork: { title: "Teamwork", desc: "Collaborated with group members and distributed work in many college projects." }
  };

  const data = skills[skill];
  if (data) {
    title.textContent = data.title;
    desc.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeSkillModal() {
  document.getElementById("skillModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("skillModal");
  if (e.target === modal) {
    closeSkillModal();
  }
});


function openAchievement(key) {
  const title = document.getElementById("achievement-title");
  const desc = document.getElementById("achievement-description");
  const modal = document.getElementById("achievementModal");

  const data = {
    hero: {
      title: "Hero of Hyderabad Shield",
      desc: "Awarded for outstanding participation and contributions at a major college-level event. Recognized among top students for tech innovation and leadership."
    },
    book: {
      title: "Author: Periodic Table (Book)",
      desc: "Inprogres. This educational resource explains chemical elements, their uses, history, and properties — written to help fellow students."
    },
    lead: {
      title: "Lead Developer — Projects",
      desc: "Led several console-based projects including Cloth Shop System, Library Management, Banking Simulator & more. Responsible for design, code, and team guidance."
    }
  };

  if (data[key]) {
    title.textContent = data[key].title;
    desc.textContent = data[key].desc;
    modal.style.display = "flex";
  }
}

function closeAchievementModal() {
  document.getElementById("achievementModal").style.display = "none";
}

// Optional: Close achievement modal on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("achievementModal");
  if (e.target === modal) {
    closeAchievementModal();
  }
});



function openCert(certId) {
  const modal = document.getElementById("certModal");
  const title = document.getElementById("cert-title");
  const image = document.getElementById("cert-image");
  const description = document.getElementById("cert-description");
  const placeholder = document.getElementById("cert-placeholder");

  const certs = {
    cpp: {
      title: "C++ Essentials — Cisco ",
      image: "media/certificates/cpp-essentials.jpg",
      desc: "Completed in 2024 via Virtual University. Covered OOP, memory management, and file handling. Skills Gained: Object-Oriented Thinking, Syntax Mastery, Project Implementation."
    },
    cppSololearn: {
     title: "C++ Programming — SoloLearn",
     image: "media/certificates/cpp-sololearn.jpg",  
     desc: "Completed SoloLearn’s interactive C++ course. Covered syntax, functions, OOP, file I/O, and basic problem-solving. Skills Gained: C++ Syntax Mastery, Project Implementation, and OOP Concepts."
    },
    promptEng: {
     title: "Prompt Engineering — SoloLearn",
     image: "media/certificates/prompt-engineering-sololearn.jpg", 
     desc: "Completed SoloLearn’s Prompt Engineering course covering effective prompt crafting for AI models, prompt optimization, and task-specific AI interactions. Skills Gained: Prompt Design, AI Command Structuring, and Language Model Handling."
    },
    java: {
      title: "Java Programming Basics — Coursera",
      image: "",
      desc: "Learned Java fundamentals, loops, conditionals, OOP structure. Platform: Coursera. Skills Gained: Java Logic, Class Structures, Data Types."
    },
    cyber: {
       title: "Cybersecurity — Currently Enrolled (Cisco Networking Academy)",
       image: "",
       desc: "Learning fundamental concepts of cybersecurity including network security, ethical hacking, threat detection, and secure communication. Skills Gained: Risk Management, Basic Pen Testing, and Cyber Awareness."
    },
    frontend: {
       title: "Frontend for Beginners — Currently Enrolled (SoloLearn)",
       image: "media/certificates/frontend-sololearn.jpg",
       desc: "Completed SoloLearn's interactive course covering the basics of HTML, CSS, and JavaScript. Skills Gained: Page structure, styling, responsive layout, and basic DOM interaction."
    },
    githubActions: {
       title: "GitHub Actions — Microsoft Learn (Currently Enrolled)",
       image: "media/certificates/github-actions.jpg",
       desc: "Learning how to automate the software development lifecycle using GitHub Actions. Topics include CI/CD workflows, GitHub Script, API integration, and publishing with GitHub Packages. Part 1 & Part 2 enrolled."
    }


  };
  

  const data = certs[certId];
  if (data) {
    title.textContent = data.title;
    image.src = data.image;
    description.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";

  
}

function closeCertModal() {
  document.getElementById("certModal").style.display = "none";

}

// Close modal when clicking outside
window.addEventListener("click", function (e) {
  const modal = document.getElementById("certModal");
  if (e.target === modal) {
    closeCertModal();
  }
});


function openProject(id) {
  const modal = document.getElementById("projectModal");
  const title = document.getElementById("project-title");
  const image = document.getElementById("project-image");
  const desc = document.getElementById("project-description");

  const projects = {
    hospital: {
      title: "Hospital Management System",
      image: "media/projects/hospital-code.png",
      desc: "Java-based OOP console project. Manages patient data, appointments, billing, and stores information in files. You led the team as Group Leader."
    },
    carbike: {
      title: "Car & Bike Rental System",
      image: "media/projects/car-rental-code.png",
      desc: "Java console app with file handling. Users can rent/return vehicles. Generates printable receipts using file I/O."
    },
    atm: {
      title: "Banking System (ATM Simulation)",
      image: "media/projects/atm-simulator-output.png",
      desc: "C++ based ATM simulator with secure PIN login, deposit, withdraw, and transfer options. Features: 4-digit PIN validation, PIN reset, secure transactions."
    },
   clothShop: {
    title: "Cloth Shop Management System",
    image: "media/projects/cloth-shop-output.png",
    desc: "C++ based console application for managing a cloth shop’s inventory, billing, stock, and administrative controls. Includes stock management, daily sales report, and secure admin access."
  }
  };

  const data = projects[id];
  if (data) {
    title.textContent = data.title;
    image.src = data.image;
    desc.textContent = data.desc;
    modal.style.display = "flex";
  }
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

// Close on outside click
window.addEventListener("click", function (e) {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    closeProjectModal();
  }
});


function openLightbox(imgElement) {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImage");
  modalImg.src = imgElement.src;
  modal.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Optional: close on ESC key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
  }
});
