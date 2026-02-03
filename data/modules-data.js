const modules = [
  {
    id: 1,
    module_number: 1,
    name: "Introduction to Digital Learning",
    description:
      "This module introduces the basic concepts of digital learning and its importance in modern education.",
    progress_rate: 50,
    module_img: "../../assets/img/Picture1.png",
    images: [
      "../../assets/img/cav1.png",
      "../../assets/img/cav2.png",
      "../../assets/img/cav1.png",
      "../../assets/img/cav2.png",
      "../../assets/img/cav1.png",
      "../../assets/img/cav2.png",
      "../../assets/img/cav1.png",
      "../../assets/img/cav2.png",
      "../../assets/img/cav1.png",
      "../../assets/img/cav2.png",
    ],
    video: "https://www.youtube.com/embed/k4OQMhA7heo?si=K8mVQe0RSmpQPJcv",
    quiz: [
      {
        question: "What is the main goal of digital learning?",
        options: [
          "Improve accessibility",
          "Increase paperwork",
          "Reduce technology usage",
          "Limit student interaction",
        ],
        correct_answer: "Improve accessibility",
        hint: "Think about making education available to more people.",
      },
      {
        question: "Which environment does digital learning mainly use?",
        options: [
          "Online platforms",
          "Printed books only",
          "Physical classrooms only",
          "Offline libraries",
        ],
        correct_answer: "Online platforms",
        hint: "It usually requires an internet connection.",
      },
    ],
    objectives: [
      "Define digital learning and its core concepts",
      "Understand the benefits of digital learning in modern education",
      "Identify key components of effective digital learning environments",
      "Recognize different types of digital learning tools and platforms",
      "Analyze how digital learning improves accessibility to education",
    ],
  },

  {
    id: 2,
    module_number: 2,
    name: "Learning Management Systems",
    description:
      "This module explains how Learning Management Systems (LMS) help organize and deliver online courses efficiently.",
    progress_rate: 30,
    module_img: "../../assets/img/Picture2.png",
    images: ["images/module2/img1.jpg", "images/module2/img2.jpg"],
    video: "videos/module2.mp4",
    quiz: [
      {
        question: "What is an LMS mainly used for?",
        options: [
          "Managing courses",
          "Designing hardware",
          "Writing code only",
          "Creating games",
        ],
        correct_answer: "Managing courses",
        hint: "It helps teachers and students manage learning content.",
      },
      {
        question: "Which feature is common in LMS platforms?",
        options: [
          "Assignments submission",
          "Car engine control",
          "Photo editing",
          "Game rendering",
        ],
        correct_answer: "Assignments submission",
        hint: "Students usually upload their work there.",
      },
    ],
    objectives: [
      "Understand the purpose and functionality of Learning Management Systems",
      "Identify popular LMS platforms and their features",
      "Navigate and use basic LMS functions effectively",
      "Create and manage online courses using LMS tools",
      "Utilize assessment and grading features in LMS",
      "Implement student engagement tools within LMS",
    ],
  },

  {
    id: 3,
    module_number: 3,
    name: "Digital Content Creation",
    description:
      "Learn how to create engaging digital content including videos, images, and interactive materials.",
    progress_rate: 70,
    module_img: "../../assets/img/Picture3.png",
    images: ["images/module3/img1.jpg", "images/module3/img2.jpg"],
    video: "videos/module3.mp4",
    quiz: [
      {
        question: "What is an example of digital content?",
        options: [
          "Educational videos",
          "Handwritten notes only",
          "Printed exams",
          "Chalkboards",
        ],
        correct_answer: "Educational videos",
        hint: "It is usually multimedia-based.",
      },
      {
        question: "Which tool helps create digital content?",
        options: ["Video editors", "Printers", "Fax machines", "Typewriters"],
        correct_answer: "Video editors",
        hint: "Used for editing visual media.",
      },
    ],
    objectives: [
      "Master principles of effective digital content design",
      "Create engaging multimedia presentations",
      "Edit and produce educational videos",
      "Design interactive learning materials",
      "Apply visual design principles to digital content",
      "Optimize content for different digital platforms",
      "Use various content creation tools and software",
    ],
  },

  {
    id: 4,
    module_number: 4,
    name: "Online Assessment Tools",
    description:
      "Explore tools and techniques for conducting assessments online effectively.",
    progress_rate: 20,
    module_img: "../../assets/img/Picture4.png",
    images: ["images/module4/img1.jpg", "images/module4/img2.jpg"],
    video: "videos/module4.mp4",
    quiz: [
      {
        question: "Why are online assessments used?",
        options: [
          "Evaluate learners",
          "Entertain students",
          "Replace teachers",
          "Disable feedback",
        ],
        correct_answer: "Evaluate learners",
        hint: "They measure learning outcomes.",
      },
    ],
    objectives: [
      "Design effective online assessments and quizzes",
      "Implement various assessment types (formative, summative, diagnostic)",
      "Use automated grading and feedback systems",
      "Analyze assessment data to improve teaching",
      "Create secure and reliable online exams",
      "Integrate assessments with learning management systems",
      "Develop rubrics for online assessment evaluation",
    ],
  },

  {
    id: 5,
    module_number: 5,
    name: "Student Engagement Strategies",
    description:
      "This module focuses on strategies to keep students engaged and active during digital learning sessions.",
    progress_rate: 90,
    module_img: "../../assets/img/Picture5.png",
    images: ["images/module5/img1.jpg", "images/module5/img2.jpg"],
    video: "videos/module5.mp4",
    quiz: [
      {
        question: "Which method increases student engagement?",
        options: [
          "Interactive activities",
          "Long lectures",
          "No feedback",
          "Passive learning",
        ],
        correct_answer: "Interactive activities",
        hint: "Students participate actively here.",
      },
    ],
    objectives: [
      "Implement interactive learning activities",
      "Foster online community and collaboration",
      "Use gamification to enhance engagement",
      "Design engaging discussion forums",
      "Create interactive virtual classrooms",
      "Monitor and measure student engagement levels",
      "Apply feedback techniques to motivate learners",
      "Address challenges in digital learning engagement",
    ],
  },
];
