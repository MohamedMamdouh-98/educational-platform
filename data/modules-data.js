const modules = [
  {
    id: 1,
    module_number: 1,
    name: "Introduction to Digital Learning",
    description:
      "This module introduces the basic concepts of digital learning and its importance in modern education.",
    progress_rate: 50,
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
  },

  {
    id: 2,
    module_number: 2,
    name: "Learning Management Systems",
    description:
      "This module explains how Learning Management Systems (LMS) help organize and deliver online courses efficiently.",
    progress_rate: 30,
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
  },

  {
    id: 3,
    module_number: 3,
    name: "Digital Content Creation",
    description:
      "Learn how to create engaging digital content including videos, images, and interactive materials.",
    progress_rate: 70,
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
  },

  {
    id: 4,
    module_number: 4,
    name: "Online Assessment Tools",
    description:
      "Explore tools and techniques for conducting assessments online effectively.",
    progress_rate: 20,
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
  },

  {
    id: 5,
    module_number: 5,
    name: "Student Engagement Strategies",
    description:
      "This module focuses on strategies to keep students engaged and active during digital learning sessions.",
    progress_rate: 90,
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
  },
];
