/*
  ================================================================
  MD BILLAL HOSSAIN — PORTFOLIO CONTENT
  ================================================================
  Most future updates can be made in THIS FILE ONLY.
  Change text, add/remove array items, update URLs, and refresh dates.

  Optional profile photo:
  1) Put a photo in: assets/profile.jpg
  2) Set profileImage below to "assets/profile.jpg"
*/

window.PORTFOLIO_DATA = {
  profileImage: "assets/headshot.jpg",

  // News: newest first. "url" is optional. Shown in the left margin on wide screens.
  news: [
    {
      date: "Sep 2026",
      text: "Paper published in IEEE Access on objectively measuring how screen use affects physical activity in preschool children.",
      url: "https://doi.org/10.1109/ACCESS.2026.3729105"
    },
    {
      date: "2026",
      text: "Serving as a reviewer for IEEE-EMBS BHI 2026."
    },
    {
      date: "2026",
      text: "Paper at MENACOMM 2026 on a framework for just-in-time interventions targeting eating behavior.",
      url: "https://doi.org/10.1109/MENACOMM69507.2026.11532882"
    },
    {
      date: "Oct 2025",
      text: "Attended IEEE-EMBS BHI 2025 in Atlanta, Georgia.",
      url: "https://bhi.embs.org/2025/"
    },
    {
      date: "2025",
      text: "Paper at IEEE ICIP 2025 on detecting screen use during meals among preschool children.",
      url: "https://doi.org/10.1109/ICIP55913.2025.11084752"
    },
    {
      date: "May 2025",
      text: "Started as Instructor of Record for Microcomputers at The University of Alabama."
    }
  ],

  // Keywords shown in the glowing "Research Interests" panel on the home section.
  focusKeywords: [
    "Wearable Health",
    "Multimodal Sensing",
    "Computer Vision",
    "Machine Learning",
    "Deep Learning",
    "Signal Processing",
    "Imputation",
    "Embedded & Edge AI"
  ],

  education: [
    {
      degree: "Ph.D. in Electrical & Computer Engineering",
      institution: "The University of Alabama",
      period: "2020 — 2026 (expected)",
      detail: "Tuscaloosa, Alabama · GPA 4.0/4.0"
    },
    {
      degree: "M.S. in Electrical Engineering",
      institution: "The University of Akron",
      period: "Completed 2020",
      detail: "Akron, Ohio · GPA 3.825/4.0"
    },
    {
      degree: "B.Sc. in Electronics & Communication Engineering",
      institution: "Khulna University of Engineering & Technology",
      period: "2008 — 2012",
      detail: "Khulna, Bangladesh"
    }
  ],

  researchAreas: [
    {
      number: "01",
      title: "Wearable Sensing & mHealth",
      text: "Wearable and ambient sensing systems for objective measurement of health-related behavior in real-world settings."
    },
    {
      number: "02",
      title: "Machine & Deep Learning",
      text: "Supervised, self-supervised, unsupervised, and multimodal learning for classification, regression, representation learning, and inference."
    },
    {
      number: "03",
      title: "Computer Vision",
      text: "Egocentric vision, object detection, image classification, privacy-aware analysis, and visual context modeling."
    },
    {
      number: "04",
      title: "Physical Activity & Energy Expenditure",
      text: "Sensor-driven physical activity recognition and energy expenditure estimation using wearable accelerometry and multimodal context."
    },
    {
      number: "05",
      title: "Signal Processing",
      text: "Feature extraction and statistical learning from physiological, motion, and wearable-sensor time series."
    },
    {
      number: "06",
      title: "Embedded & Edge AI",
      text: "Efficient machine-learning pipelines, edge inference, embedded systems, and hardware-aware deployment."
    }
  ],

  projects: [
    {
      status: "Ongoing",
      title: "Free-living energy expenditure estimation",
      text: "Exploring self-supervised and unsupervised approaches, multimodal sensing, and data-imputation strategies for energy expenditure estimation in free-living conditions.",
      tags: ["Wearable AI", "Multimodal Learning", "Time Series"]
    },
    {
      status: "Research",
      title: "Egocentric food & beverage object detection",
      text: "Benchmarking modern object-detection and vision architectures for food and beverage recognition in egocentric imagery captured by wearable devices.",
      tags: ["YOLO", "RT-DETR", "DINO", "PyTorch"]
    },
    {
      status: "Completed",
      title: "Physical activity recognition & EE estimation",
      text: "Developed a multi-task CNN framework for physical activity recognition and energy expenditure estimation from eyeglass-mounted wearable accelerometer data.",
      tags: ["CNN", "Accelerometry", "TensorFlow"]
    },
    {
      status: "Completed",
      title: "QoS-aware intelligent routing",
      text: "Applied reinforcement learning to software-defined networking, using reward modeling to support intelligent, quality-aware routing decisions.",
      tags: ["A2C", "Reinforcement Learning", "SDN"]
    }
  ],

  // Experience timeline (newest first).
  // type: "teaching" or "research" sets the label and dot colour.
  // start / end: "YYYY-MM" (end can be "present"); dates and durations are calculated from these.
  // Consecutive roles at the same institution are grouped under one heading.
  // courses: shown as chips beside the role. "points" are kept for reference but not shown.
  experience: [
    {
      role: "Instructor of Record",
      type: "teaching",
      unit: "Dept. of Electrical & Computer Engineering",
      institution: "The University of Alabama",
      place: "Tuscaloosa, AL",
      start: "2025-05",
      end: "present",
      courses: ["Microcomputers"],
      points: [
        "Conduct teaching in Microcomputers.",
        "Prepare course materials, instructional activities, and assessments.",
        "Support student learning through structured instruction and academic guidance."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      type: "teaching",
      unit: "Dept. of Electrical & Computer Engineering",
      institution: "The University of Alabama",
      place: "Tuscaloosa, AL",
      start: "2025-01",
      end: "2025-05",
      courses: ["Microcomputers"],
      points: [
        "Assisted the course instructor with lecture and examination-paper assessment.",
        "Supported grading and course administration.",
        "Worked with students on course-related learning needs."
      ]
    },
    {
      role: "Graduate Research Assistant",
      type: "research",
      unit: "Computer Laboratory of Ambient & Wearable Systems (CLAWS)",
      institution: "The University of Alabama",
      place: "Tuscaloosa, AL",
      start: "2020-08",
      end: "2025-01",
      courses: [],
      points: [
        "Analyzed wearable-sensor and image data using signal processing, computer vision, and deep-learning methods.",
        "Reported experimental results and contributed to research documentation.",
        "Assisted with manuscript preparation, data curation, model development, and human-subject research workflows."
      ]
    },
    {
      role: "Graduate Research Assistant",
      type: "research",
      unit: "Cyber Physical Social System Design Lab",
      institution: "The University of Akron",
      place: "Akron, OH",
      start: "2018-08",
      end: "2019-05",
      courses: [],
      points: [
        "Investigated reinforcement-learning methods for intelligent computer-network routing.",
        "Analyzed experimental results and contributed to manuscript preparation."
      ]
    },
    {
      role: "Lecturer",
      type: "teaching",
      unit: "Dept. of Electrical & Electronic Engineering",
      institution: "Manarat International University",
      place: "Dhaka, Bangladesh",
      start: "2013-01",
      end: "2018-08",
      courses: ["Microprocessor & Interfacing", "Digital Signal Processing", "Computer Networks", "Digital Electronics", "Digital Communication", "Computer Programming"],
      points: [
        "Prepared and delivered lectures, developed course materials, and assessed student learning.",
        "Guided undergraduate research and design projects and provided academic mentoring.",
        "Contributed to syllabus development, course planning, and academic administration."
      ]
    }
  ],

  publications: [
    {
      year: "2026",
      type: "journal",
      title: "Objective Assessment of Media Screens Effect on Physical Activity in Preschool Children",
      authors: "M. B. Hossain, S. Holiday, C. Bui, M. Cribbet, S. W. White, Y. Gan, E. Sazonov",
      venue: "IEEE Access, vol. 14",
      url: "https://ieeexplore.ieee.org/abstract/document/11674116",
      featured: true
    },
    {
      year: "2024",
      type: "journal",
      title: "A CNN Model for Physical Activity Recognition and Energy Expenditure Estimation from an Eyeglass-Mounted Wearable Sensor",
      authors: "M. B. Hossain, S. R. LaMunion, S. E. Crouter, E. L. Melanson, E. Sazonov",
      venue: "Sensors, 24(10), 3046",
      url: "https://www.mdpi.com/1424-8220/24/10/3046",
      featured: true
    },
    {
      year: "2024",
      type: "conference",
      title: "Enhancing Egocentric Insights: Comparison of Deep Learning Models for Food and Beverage Object Detection from Egocentric Images",
      authors: "M. B. Hossain, E. Sazonov",
      venue: "International Symposium on Sensing and Instrumentation in 5G and IoT Era (ISSI)",
      url: "https://ieeexplore.ieee.org/abstract/document/10720475",
      featured: true
    },
    {
      year: "2019",
      type: "conference",
      title: "Reinforcement Learning-Driven QoS-Aware Intelligent Routing for Software-Defined Networks",
      authors: "M. B. Hossain, J. Wei",
      venue: "IEEE Global Conference on Signal and Information Processing (GlobalSIP)",
      url: "https://ieeexplore.ieee.org/abstract/document/8969320",
      featured: false
    },
    {
      year: "2014",
      type: "conference",
      title: "A New Approach of Image Encryption Using 3D Chaotic Map to Enhance Security of Multimedia Component",
      authors: "M. B. Hossain, M. T. Rahman, A. S. Rahman, S. Islam",
      venue: "International Conference on Informatics, Electronics & Vision (ICIEV)",
      url: "https://ieeexplore.ieee.org/abstract/document/6850856",
      featured: false
    }
  ],

  courses: [
    {
      title: "Microcomputers",
      note: "Current teaching assignment · The University of Alabama"
    },
    {
      title: "Embedded Systems / Microprocessor & Interfacing",
      note: "Previous teaching experience"
    },
    {
      title: "Digital Signal Processing",
      note: "Previous teaching experience"
    },
    {
      title: "Computer Networks",
      note: "Previous teaching experience"
    },
    {
      title: "Digital Electronics",
      note: "Previous teaching experience"
    }
  ],

  service: [
    {
      title: "Journal Reviewer",
      organization: "Scientific Reports",
      period: "2026"
    },
    {
      title: "Conference Reviewer",
      organization: "IEEE-EMBS International Conference on Biomedical and Health Informatics",
      period: "2026"
    },
    {
      title: "Conference Reviewer",
      organization: "IEEE Engineering in Medicine and Biology Society Annual International Conference",
      period: "2021"
    },
    {
      title: "Journal Reviewer",
      organization: "Journal of Multimedia Information System / Korea Multimedia Society",
      period: "2019 — Present"
    }
  ],

  skills: [
    {
      group: "Programming",
      items: ["Python", "C++", "MATLAB", "C", "SQL", "Java", "Bash / Shell"]
    },
    {
      group: "ML / Vision",
      items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Hugging Face", "YOLO", "Transformers"]
    },
    {
      group: "Systems",
      items: ["Docker", "Git", "GitHub", "GitLab", "WSL", "Linux", "Windows"]
    },
    {
      group: "Methods",
      items: ["Deep Learning", "Multimodal Learning", "Signal Processing", "Computer Vision", "Time-Series Modeling", "Reinforcement Learning"]
    }
  ]
};
