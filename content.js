// Edit this file to update the content without changing the UI structure.
export const portfolioContent = {
  hero: {
    name: "Fran Iriso",
    eyebrow: "Embedded Systems | Robotics | Autonomous Systems",
    title: "Hi, I'm Fran. I build embedded and robotic systems for real-world problems.",
    summary:
      "I am an engineer with a multidisciplinary path across embedded software, electronics, robotics, and biomedical systems. I have worked and studied across Spain, Sweden, Italy, France, and Hungary, and I enjoy building practical systems with international teams.",
    statusLabel: "Current focus",
    statusValue: "Reliable embedded and robotics systems",
    availability: "Open to engineering roles and research collaborations.",
    location: "Europe-based | Born in Argentina | International profile",
    contact: [
      { label: "Email", value: "franiriso@gmail.com", href: "mailto:franiriso@gmail.com" },
      { label: "LinkedIn", value: "linkedin.com/in/fran-iriso", href: "https://linkedin.com/in/fran-iriso" },
      { label: "GitHub", value: "github.com/franiriso", href: "https://github.com/franiriso" }
    ],
    photo: {
      src: "assets/portfolio_photo_cutout.png",
      alt: "Fran Iriso portrait"
    },
    telemetry: [
      { label: "Focus", value: "Embedded systems, robotics, biomedical devices, and autonomous technologies" },
      { label: "Approach", value: "Bridging hardware and software through hands-on engineering and real-world systems" },
      { label: "Experience", value: "International academic and professional background across multiple European countries" },
      { label: "Mindset", value: "Competitive athlete background — discipline, teamwork, and high-performance environments" }
    ]
    // [
    //   { label: "Focus", value: "Embedded systems, robotics, autonomous systems, biomedical devices" },
    //   { label: "Approach", value: "Hands-on integration + applied R&D" },
    //   { label: "Edge", value: "Former national-level athlete → discipline & performance mindset" }
    // ]
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
          "I am completing a dual MSc in Autonomous Systems and Intelligent Robots (EIT Digital), built on two BSc foundations: Biomedical Engineering and Industrial Electronics + Control."
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
        items: ["C", "C++", "Python", "ESP32", "STM32", "RTOS", "Espressif", "Eagle", "KiCad", "SMD Soldering", "Oscilloscope", "Multimeter"]
      },
      {
        title: "Robotics / Autonomy",
        accent: "cyan",
        description: "Sensing, control, and autonomy for intelligent machines.",
        items: ["ROS2", "Robotics", "Path Planning", "Intelligent Vehicles", "Distributed Robot Perception"]
      },
      {
        title: "Programming",
        accent: "blue",
        description: "Software for prototypes, tooling, and analysis.",
        items: ["Python", "C#", "SQL", "MATLAB"]
      },
      {
        title: "Simulation / Analysis",
        accent: "silver",
        description: "Modeling, vision, and data-driven engineering.",
        items: ["Machine Learning", "Computer Vision", "AI Control", "Signal Modeling"]
      },
      {
        title: "Tools / Platforms",
        accent: "green",
        description: "Delivery tools for collaborative engineering teams.",
        items: ["Windows", "MacOS", "Linux", "Docker", "SCADA", "Git"]
      },
      {
        title: "Hardware / Systems",
        accent: "red",
        description: "Prototyping and cross-domain systems integration.",
        items: ["Prototyping", "3D CAD", "Medical Devices", "Clinical Safety", "PCB Design"]
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
      title: "Pending IEEE EMBC 2026 publication",
      citation: "Iriso, F. et al. | Universitat Politècnica de Catalunya",
      description:
        "Pending IEEE EMBC 2026 publication. Update with final title, co-authors, and link once published."
    }
  },
  resume: {
    experience: [
      {
        role: "Embedded Software Developer",
        organization: "Capsule Corporation",
        location: "Milan, Italy",
        period: "Feb 2026 - Jul 2026",
        summary: "Embedded software development for a satellite water-propulsion system with focus on fault management and real-time behavior.",
        bullets: [
          "Worked on FDIR-oriented software for mission-critical embedded operations.",
          "Contributed within an RTOS-driven environment where reliability and operational clarity matter."
        ],
        tags: ["Space systems", "FDIR", "RTOS", "Embedded software"]
      },
      {
        role: "Embedded Developer",
        organization: "Creekside AB",
        location: "Stockholm, Sweden",
        period: "Jun 2023 - Sep 2024",
        summary: "Delivered software and hardware for embedded systems in collaboration with mechanical engineers across different device contexts.",
        bullets: [
          "Built across electronics and firmware, not just application-layer software.",
          "Worked in multidisciplinary delivery flows where integration quality was central."
        ],
        tags: ["Embedded systems", "Hardware-software integration", "Prototyping"]
      },
      {
        role: "Research Engineer",
        organization: "KTH Royal Institute of Technology",
        location: "Stockholm, Sweden",
        period: "Jan 2023 - Aug 2023",
        summary: "Research support for medical-device sensing with academic and clinical collaboration.",
        bullets: [
          "Developed a multidimensional in-ear sensor project with Digital Futures.",
          "Supported principal-investigator research with collaboration involving Karolinska Institutet."
        ],
        tags: ["Medical devices", "Sensors", "Research", "Cross-institution collaboration"]
      },
      {
        role: "Mathematics Teacher",
        organization: "Area d'Estudi",
        location: "Barcelona, Spain",
        period: "Jul 2019 - Aug 2022",
        summary: "Taught students aged 15 to 23 through long-term curricular support and performance-focused coaching.",
        bullets: [
          "Strengthened technical communication and explanation under varied learning styles.",
          "Helped students reach target grades through structure, clarity, and consistency."
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
        period: "Sep 2022 - Jun 2025",
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
          period: "2022 - 2025"
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
          "Embedded software work on fault detection, isolation, and recovery for a water-propulsion satellite subsystem.",
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
          "Medical sensing research at KTH with Digital Futures and Karolinska collaboration.",
        tags: ["Sensors", "Medical devices", "Research engineering", "Signal acquisition"],
        featured: false,
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
