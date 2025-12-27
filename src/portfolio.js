/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vishal Kolekar",
  title: "Hi, I'm Vishal Kolekar ",
   subTitle:
    "Full Stack MERN Developer with 2+ years of experience building scalable web applications, role-based systems, and SaaS platforms.",
  resumeLink:
    "https://drive.google.com/file/d/1cnqas9DXd8AEpLyc9fc9qMDmeRAG20gE/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vishkolekar48",
  linkedin: "https://linkedin.com/in/vishal-kolekar-6348172aa",
  gmail: "kolekarv821@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "Full Stack MERN Developer with hands-on experience in building scalable web applications and role-based systems.",
  skills: [
    emoji("⚡ Build responsive and interactive user interfaces using React.js and Bootstrap"),
    emoji("⚡ Develop secure REST APIs using Node.js and Express.js"),
    emoji("⚡ Implement authentication & authorization using JWT and role-based access control"),
    emoji("⚡ Work with MongoDB for scalable and optimized data management"),
    emoji("⚡ Integrate frontend with backend services and third-party APIs"),
    emoji("⚡ Experience in building SaaS-based and multi-tenant applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Trinity Academy of Engineering, Pune",
      logo: require("./assets/images/trinity-logo.png"),
      subHeader: "B.Tech in Computer Engineering",
      duration: "2020 – 2023",
      desc: "Completed Bachelor’s degree with strong foundation in software development, databases, and web technologies.",
      descBullets: [
        "CGPA: 7.21",
        "Studied Data Structures, DBMS, Web Development, and Software Engineering",
        "Worked on multiple MERN stack academic and real-world projects"
      ]
    },
    {
      schoolName: "Adarsh Institute of Technology",
      logo: require("./assets/images/Adarsh.jfif"),
      subHeader: "Diploma in Computer Technology",
      duration: "2017 – 2020",
      desc: "Completed diploma with strong hands-on experience in programming and system fundamentals.",
      descBullets: [
        "Percentage: 79.54%",
        "Hands-on experience with C, C++, HTML, and databases",
        "Built mini projects and practical applications"
      ]
    }
  ]
};



const techStack = {
  viewSkillBars: true, // Show proficiency bars
  experience: [
    {
      Stack: "Frontend/Design",  // Skill category
      progressPercentage: "90%"  // Proficiency
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Whether to show CodersRank badges
};


// Work experience section

const workExperiences = {
  display: true, // Show Work Experience section
  experience: [
    {
      role: "Software Developer",
      company: "Trivexa Systems Pvt. Ltd, Pune",
      companylogo: require("./assets/images/trivexa.png" ), // replace with company logo or generic icon
      date: "May 2025 – Present",
      desc:
        "Developed role-based dashboards, REST APIs, and multi-tenant SaaS solutions for restaurant platforms. Integrated JWT-based authentication and optimized MongoDB schemas.",
      descBullets: [
        "Built dashboards for multiple user roles using React.js and Redux",
        "Implemented REST APIs using Node.js and Express.js",
        "Integrated JWT authentication and role-based access control (RBAC)",
        "Handled image uploads using Multer and optimized data flow",
        "Designed MongoDB schemas with tenant-level isolation"
      ]
    },
    {
      role: "Software Developer",
      company: "Creative Surya, Pune",
      companylogo: require("./assets/images/creative.jfif"),
      date: "Jan 2024 – May 2025",
      desc:
        "Converted Figma designs into responsive React components and integrated them with backend APIs for real-time data rendering.",
      descBullets: [
        "Developed 20+ responsive React screens from Figma designs",
        "Integrated frontend with backend REST APIs",
        "Improved page load performance by 40%",
        "Resolved UI and API integration issues"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "7 Mentors, Pune",
      companylogo: require("./assets/images/sevenmentor_logo.jfif"),
      date: "Jun 2023 – Jan 2024",
      desc:
        "Created reusable UI components, implemented CRUD operations, and integrated frontend with backend services.",
      descBullets: [
        "Developed reusable UI components for multiple modules",
        "Integrated 15+ REST API endpoints for smooth data flow",
        "Implemented CRUD operations connecting frontend and backend"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some real-world projects I have built using MERN stack",
  projects: [
    {
      image: require("./assets/images/smartbiller.png"), // Replace with screenshot or logo
      projectName: "Smart Biller (Multi-Tenant SaaS)",
      projectDesc:
        "A role-based billing system for restaurants with dashboards, order management, and tenant-level data isolation. Built with React.js, Node.js, and MongoDB.",
     
    },
    {
      image: require("./assets/images/smartschool.png"),
      projectName: "Smart School Management System",
      projectDesc:
        "Role-based portal for admin, teachers, and students with 20+ responsive screens. Integrated RBAC and backend APIs for academic and administrative workflows.",
    },
  ],
  display: true // Show Projects Section
};


// Achievement Section
// Include certificates, talks etc

// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Blogs Section

// const blogSection = {
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7620890236",
  email_address: "kolekarv821@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  // achievementSection,
  // blogSection,
  // talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
