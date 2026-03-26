// Edit this file to update the content without changing the UI structure.
export const portfolioContent = {
  hero: {
    name: "Fran Iriso",
    eyebrow: "Embedded Systems | Robotics | Autonomous Systems",
    title: "Hi, I'm Fran. I build embedded and robotic systems for real-world problems.",
    summary:
      "I am completing a dual MSc in Autonomous Systems and Intelligent Robots (EIT Digital, July 2026). My background spans embedded systems, robotics, mechatronics, and biomedical engineering, with hands-on work in space and medical-device contexts.",
    statusLabel: "What I bring",
    statusValue: "Embedded + robotics execution from concept to integration",
    availability: "I enjoy projects that mix firmware, electronics, sensing, and system-level problem solving.",
    location: "Europe-based | Born in Argentina | International profile",
    contact: [
      { label: "Email", value: "franiriso@gmail.com", href: "mailto:franiriso@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/fran-iriso", href: "https://linkedin.com/in/fran-iriso" },
      { label: "GitHub", value: "github.com/franiriso", href: "https://github.com/franiriso" },
      { label: "Portfolio", value: "franiriso.github.io", href: "https://franiriso.github.io/" }
    ],
    photo: {
      src: "assets/portfolio_photo_cutout.png",
      alt: "Fran Iriso portrait"
    },
    telemetry: [
      { label: "Focus", value: "Embedded systems, robotics, biomedical devices, and autonomous technologies" },
      { label: "Approach", value: "Bridging hardware and software through hands-on engineering and real-world systems" },
      { label: "Experience", value: "International academic and professional background across multiple European countries" },
      { label: "Background", value: "U18 Spanish national water polo team" }
    ]
  },
  home: {
    highlights: [
      { label: "Countries worked / studied in", value: "5" },
      { label: "Languages", value: "6" },
      { label: "Degrees in progress / completed", value: "4+" },
      { label: "Domains touched", value: "Space, medical, robotics, industrial" }
    ],
    aboutBlocks: [
      {
        title: "Engineering profile",
        text:
          "Dual MSc training in Mechatronics and Computer Engineering (EIT Digital), built on Biomedical Engineering and Industrial Electronics + Control foundations."
      },
      {
        title: "International execution",
        text:
          "I adapt quickly to new teams and technical contexts. I like bridging hardware and software and keeping communication clear across multidisciplinary environments."
      }
    ],
    currentlyExploring: [
      "FDIR for mission-critical embedded systems",
      "Robot perception and autonomy pipelines",
      "Medical sensing and signal interpretation"
    ],
    techGroups: [
      {
        title: "Embedded / Firmware",
        accent: "amber",
        description: "Low-level software and reliability on real hardware.",
        items: ["C", "C++", "Python", "ESP32", "STM32", "RTOS", "Embedded Linux", "FDIR", "State Machines", "Eagle", "KiCad"]
      },
      {
        title: "Robotics / Autonomy",
        accent: "cyan",
        description: "Sensing, control, and autonomy for intelligent machines.",
        items: ["ROS2", "Path Planning", "Distributed Systems", "Sensor Fusion", "Perception Systems", "Computer Vision"]
      },
      {
        title: "Programming",
        accent: "blue",
        description: "Software for prototypes, tooling, and analysis.",
        items: ["Python", "C", "C++", "C#", "MATLAB", "SQL"]
      },
      {
        title: "Simulation / Analysis",
        accent: "silver",
        description: "Modeling, vision, and data-driven engineering.",
        items: ["Machine Learning", "Signal Processing", "Regression Models", "Data Analysis", "AI Control"]
      },
      {
        title: "Tools / Platforms",
        accent: "green",
        description: "Delivery tools for collaborative engineering teams.",
        items: ["Linux", "Docker", "Git", "Jira", "Codex", "Claude Code"]
      },
      {
        title: "Hardware / Systems",
        accent: "red",
        description: "Prototyping and cross-domain systems integration.",
        items: ["PCB Design", "Soldering", "Circuit Design", "Sensors/Actuators Integration", "3D CAD", "Medical Devices", "Clinical Safety"]
      }
    ],
    languages: [
      { name: "Spanish", level: "Native", score: 100, context: "Primary communication" },
      { name: "Catalan", level: "Native", score: 100, context: "Primary communication" },
      { name: "English", level: "Full professional fluency", score: 92, context: "Technical and international collaboration" },
      { name: "Italian", level: "Intermediate", score: 63, context: "Work and study context" },
      { name: "Swedish", level: "Beginner", score: 34, context: "Lived academic and professional environment" },
      { name: "French", level: "Beginner", score: 28, context: "International study environment" }
    ],
    publication: {
      title: "IEEE EMBC 2026 (pending)",
      citation: "Iriso, F. et al. | Universitat Politècnica de Catalunya",
      description:
        "\"Estimation of Tidal Volume From Indirect Respiratory Temperature Signals Using Linear Regression\" (pending publication). Add DOI and final link once released."
    }
  },
  resume: {
    experience: [
      {
        role: "Embedded Software Engineer Intern",
        organization: "Capsule Corporation srl",
        location: "Milan, Italy",
        period: "Feb 2026 - Jul 2026",
        summary: "Embedded software for a satellite water-propulsion system, focused on real-time operation and reliability.",
        bullets: [
          "Developed embedded software modules for operation-critical behavior.",
          "Designed and implemented FDIR (Fault Detection, Isolation & Recovery) in RTOS-based modules.",
          "Performed functional validation and debugging on avionics hardware, including edge-case testing."
        ],
        tags: ["Space systems", "FDIR", "RTOS", "Embedded software"]
      },
      {
        role: "Embedded Developer",
        organization: "Creekside AB",
        location: "Stockholm, Sweden",
        period: "Jun 2023 - Sep 2024",
        summary: "Designed and developed embedded software and hardware solutions across multiple industry applications.",
        bullets: [
          "Collaborated in cross-functional teams to deliver robust, production-ready solutions.",
          "Contributed to projects for high-profile clients, including Epic Games."
        ],
        tags: ["Embedded systems", "Hardware-software integration", "Prototyping"]
      },
      {
        role: "Research Engineer",
        organization: "KTH Royal Institute of Technology",
        location: "Stockholm, Sweden",
        period: "Jan 2023 - Aug 2023",
        summary: "Research engineering for medical-device sensing with KTH, Digital Futures, and KI collaboration.",
        bullets: [
          "Developed a multi-dimensional in-ear sensing system.",
          "Designed and implemented physiological signal acquisition and processing methods.",
          "Contributed to experimental validation and analysis of sensor performance in real-world conditions."
        ],
        tags: ["Medical devices", "Sensors", "Research", "Cross-institution collaboration"]
      },
      {
        role: "Mathematics Teacher",
        organization: "Area d'Estudi",
        location: "Barcelona, Spain",
        period: "Jul 2019 - Aug 2022",
        summary: "Taught mathematics (calculus, geometry, algebra) to students aged 15 to 23.",
        bullets: [
          "Designed lesson plans and personalized support paths.",
          "Helped students improve performance through consistent coaching."
        ],
        tags: ["Communication", "Teaching", "Mentoring"]
      }
    ],
    education: [
      {
        degree: "MSc in Mechatronics Engineering",
        institution: "University of Trento | EIT Digital Master School",
        location: "Trento, Italy",
        period: "Sep 2024 - Jun 2026",
        summary: "Autonomous Systems and Intelligent Robots track.",
        details: ["GPA: 4.67 / 5.0", "Coursework: Distributed Robot Perception, Intelligent Vehicles, Path Planning"]
      },
      {
        degree: "MSc in Computer Engineering",
        institution: "Budapest University of Technology and Economics | EIT Digital Master School",
        location: "Budapest, Hungary",
        period: "Sep 2024 - Jun 2026",
        summary: "Autonomous Systems and Intelligent Robots track.",
        details: ["GPA: 4.67 / 5.0", "Coursework: Machine Learning, AI Control, Computer Vision, Robotics"]
      },
      {
        degree: "Minor in Innovation and Entrepreneurship",
        institution: "University of Rennes | EIT Digital Master School",
        location: "Rennes, France",
        period: "Jun 2025 - Jul 2025",
        summary: "Innovation-focused complement to technical training.",
        details: ["Short intensive program within EIT Digital."]
      },
      {
        degree: "BSc in Biomedical Engineering",
        institution: "Universitat Politecnica de Catalunya",
        location: "Barcelona, Spain",
        period: "Sep 2021 - Jun 2025",
        summary: "Built foundations in medical technology, systems modeling, and physiological signals.",
        details: ["GPA: 7.62 / 10", "Thesis: Multivariable model to estimate tidal volume from indirect respiratory signals"]
      },
      {
        degree: "BSc in Industrial, Electronics Automatic and Control Engineering",
        institution: "Universitat Politecnica de Catalunya",
        location: "Barcelona, Spain",
        period: "Sep 2018 - Jan 2024",
        summary: "Strong controls, electronics, and practical device-engineering foundation.",
        details: ["GPA: 7.78 / 10", "Thesis: PCB design for remote monitoring of a motor-controlled polarizing filter"]
      },
      {
        degree: "Exchange Studies",
        institution: "KTH Royal Institute of Technology",
        location: "Stockholm, Sweden",
        period: "Jun 2022 - Jan 2023",
        summary: "Academic exchange period with international technical collaboration.",
        details: ["Exchange studies completed during BSc program."]
      }
    ]
  },
  projects: {
    degreeSpecs: {
      title: "Engineering Degrees",
      summary: "Four core engineering tracks that shape my work across software and hardware.",
      items: [
        {
          degree: "MSc Mechatronics Engineering",
          institution: "University of Trento | EIT Digital",
          period: "2024 - 2026"
        },
        {
          degree: "MSc Computer Engineering",
          institution: "Budapest University of Technology and Economics | EIT Digital",
          period: "2024 - 2026"
        },
        {
          degree: "BSc Biomedical Engineering",
          institution: "Universitat Politecnica de Catalunya",
          period: "2021 - 2025"
        },
        {
          degree: "BSc Industrial, Electronics Automatic and Control Engineering",
          institution: "Universitat Politecnica de Catalunya",
          period: "2018 - 2024"
        }
      ]
    },
    intro:
      "Project cards are editable placeholders based on real work. Add media, links, and results when ready.",
    cards: [
      {
        title: "Satellite Water Propulsion FDIR",
        blurb:
          "Embedded software and FDIR strategy for a water-propulsion satellite subsystem, with validation on avionics hardware.",
        tags: ["Embedded software", "RTOS", "FDIR", "Space systems"],
        featured: true,
        mediaLabel: "Add subsystem diagram or bench photo",
        links: [
          { label: "GitHub", href: "" },
          { label: "Demo", href: "" },
          { label: "Publication", href: "" }
        ]
      },
      {
        title: "In-Ear Sensor Research Platform",
        blurb:
          "Medical sensing research at KTH with Digital Futures and Karolinska collaboration, including physiological signal processing.",
        tags: ["Sensors", "Medical devices", "Research engineering", "Signal acquisition"],
        featured: false,
        image: {
          src: "assets/Screenshot 2026-03-26 at 00.55.38.png",
          alt: "In-ear sensor project screenshot"
        },
        mediaLabel: "Add prototype photo or sensing diagram",
        links: [
          { label: "GitHub", href: "" },
          { label: "Demo", href: "" },
          { label: "Publication", href: "" }
        ]
      },
      {
        title: "Respiratory Signal Modeling Thesis",
        blurb:
          "BSc thesis on estimating tidal volume from indirect respiratory signals using a multivariable model.",
        tags: ["Biomedical engineering", "Modeling", "Signals", "Analysis"],
        featured: false,
        image: {
          src: "assets/Screenshot 2026-03-26 at 00.47.38.png",
          alt: "Respiratory signal modeling screenshot"
        },
        mediaLabel: "Add plot, chart, or thesis cover",
        links: [
          { label: "GitHub", href: "" },
          { label: "Demo", href: "" },
          { label: "Publication", href: "" }
        ]
      },
      {
        title: "Remote Polarizing Filter Control PCB",
        blurb:
          "Electronics and control thesis focused on PCB design for remote monitoring of a motor-controlled polarizing filter.",
        tags: ["PCB design", "Controls", "Embedded hardware", "Instrumentation"],
        featured: false,
        image: {
          src: "assets/Screenshot 2026-03-26 at 00.54.41.png",
          alt: "PCB project screenshot"
        },
        mediaLabel: "Add PCB render or lab photo",
        links: [
          { label: "GitHub", href: "" },
          { label: "Demo", href: "" },
          { label: "Publication", href: "" }
        ]
      }
    ]
  }
};
