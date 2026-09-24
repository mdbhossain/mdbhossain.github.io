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
  profileImage: "",

  rotatingFocus: [
    "wearable health",
    "multimodal sensing",
    "human-centered AI",
    "computer vision",
    "energy expenditure estimation"
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
      institution: "Khulna University of Engineering & Technology (KUET)",
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

  experience: [
    {
      role: "Record Instructor",
      organization: "Department of Electrical and Computer Engineering, The University of Alabama",
      location: "Tuscaloosa, Alabama",
      period: "May 2025 — Present",
      points: [
        "Conduct teaching in Microcomputers.",
        "Prepare course materials, instructional activities, and assessments.",
        "Support student learning through structured instruction and academic guidance."
      ]
    },
    {
      role: "Graduate Teaching Assistant",
      organization: "Department of Electrical and Computer Engineering, The University of Alabama",
      location: "Tuscaloosa, Alabama",
      period: "January 2025 — May 2025",
      points: [
        "Assisted the course instructor with lecture and examination-paper assessment.",
        "Supported grading and course administration.",
        "Worked with students on course-related learning needs."
      ]
    },
    {
      role: "Graduate Research Assistant",
      organization: "Computer Laboratory of Ambient and Wearable Systems (CLAWS), The University of Alabama",
      location: "Tuscaloosa, Alabama",
      period: "August 2020 — January 2025",
      points: [
        "Analyzed wearable-sensor and image data using signal processing, computer vision, and deep-learning methods.",
        "Reported experimental results and contributed to research documentation.",
        "Assisted with manuscript preparation, data curation, model development, and human-subject research workflows."
      ]
    },
    {
      role: "Graduate Research Assistant",
      organization: "Cyber Physical Social System Design Lab, The University of Akron",
      location: "Akron, Ohio",
      period: "August 2018 — May 2019",
      points: [
        "Investigated reinforcement-learning methods for intelligent computer-network routing.",
        "Analyzed experimental results and contributed to manuscript preparation."
      ]
    },
    {
      role: "Lecturer",
      organization: "Department of Electrical and Electronic Engineering, Manarat International University",
      location: "Dhaka, Bangladesh",
      period: "January 2013 — August 2018",
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
      type: "conference",
      title: "Communication and Machine Learning Framework for Just-in-Time Adaptive Interventions Targeting Eating Behavior",
      authors: "E. Sazonov, D. Hossain, S. E. Fard, M. B. Hossain, M. A. McCrory, J. A. Higgins, J. G. Thomas",
      venue: "6th Middle East and North Africa Communications Conference (MENACOMM)",
      url: "https://doi.org/10.1109/MENACOMM69507.2026.11532882",
      featured: true
    },
    {
      year: "2025",
      type: "conference",
      title: "Detection of Screen Usage During Eating Events Among Preschool-Aged Children",
      authors: "T. Ghosh, M. B. Hossain, S. Holiday, M. Cribbet, S. W. White, Y. Gan, E. Sazonov",
      venue: "IEEE International Conference on Image Processing (ICIP)",
      url: "https://doi.org/10.1109/ICIP55913.2025.11084752",
      featured: true
    },
    {
      year: "2024",
      type: "journal",
      title: "A CNN Model for Physical Activity Recognition and Energy Expenditure Estimation from an Eyeglass-Mounted Wearable Sensor",
      authors: "M. B. Hossain, S. R. LaMunion, S. E. Crouter, E. L. Melanson, E. Sazonov",
      venue: "Sensors, 24(10), 3046",
      url: "https://doi.org/10.3390/s24103046",
      featured: true
    },
    {
      year: "2024",
      type: "conference",
      title: "Enhancing Egocentric Insights: Comparison of Deep Learning Models for Food and Beverage Object Detection from Egocentric Images",
      authors: "M. B. Hossain, E. Sazonov",
      venue: "International Symposium on Sensing and Instrumentation in 5G and IoT Era (ISSI)",
      url: "https://doi.org/10.1109/ISSI63632.2024.10720475",
      featured: true
    },
    {
      year: "2019",
      type: "conference",
      title: "Reinforcement Learning-Driven QoS-Aware Intelligent Routing for Software-Defined Networks",
      authors: "M. B. Hossain, J. Wei",
      venue: "IEEE Global Conference on Signal and Information Processing (GlobalSIP)",
      url: "https://scholar.google.de/citations?hl=en&user=O0B7BRsAAAAJ",
      featured: false
    },
    {
      year: "2014",
      type: "conference",
      title: "A New Approach of Image Encryption Using 3D Chaotic Map to Enhance Security of Multimedia Component",
      authors: "M. B. Hossain, M. T. Rahman, A. S. Rahman, S. Islam",
      venue: "International Conference on Informatics, Electronics & Vision (ICIEV)",
      url: "https://scholar.google.de/citations?hl=en&user=O0B7BRsAAAAJ",
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
