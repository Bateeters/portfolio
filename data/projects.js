export const projects = [
    {
        id: "1",
        title: "CMS Search Component",
        eyebrow: "Technical Depth",
        description: "Modern, reusable CMS search component designed for third-party travel sites, with real-time previewing and deep client customization.",
        overview: "Modern, reusable CMS search component designed for third-party travel sites, with real-time previewing and deep client customization. Owned development from prototype to requirements to production. Designed the HTML, CSS, and interaction behavior independently, with AI-assisted JavaScript implementation. Built a real-time iframe preview that replaced the old manual save-and-preview workflow. Built a highly customizable UI covering layouts, inputs, colors, and fonts. Improved the editor experience for non-technical users. Worked through a complex legacy CMS architecture. Added accessibility improvements on top of auto-generated form structures.",
        highlights: [
            "Owned development from prototype to requirements to production",
            "Designed HTML, CSS, and interaction behavior independently with AI-assisted JavaScript implementation",
            "Built a real-time iframe preview, removing the old manual save-and-preview workflow",
            "Built a highly customizable UI (layouts, inputs, colors, fonts)",
            "Improved editor experience for non-technical users",
            "Worked through and debugged a complex legacy CMS architecture",
            "Added accessibility improvements on top of auto-generated form structures"
        ],
        tech: ["JavaScript", "HTML", "CSS", "CMS Development", "Bootstrap 5", "Razor (C#)", "Select2", "Git", "Jira", "Accessibility (ARIA)", "DOM Manipulation", "Component-Based Design","AI-Assisted Development"],
        image: "./assets/images/projects/searchComponent.jpg",
        challenge: "A new service required a modern overhaul of one of our reusable search components. Its purpose is to integrate with internal APIs and be used across third-party websites. The existing solution lacked flexibility and required inefficient preview workflows. Development also had to be done inside a complex legacy CMS with inconsistent patterns and limited documentation.",
        solution: "Developed a responsive, configurable search component that lets users customize layout, inputs, and branding without code changes. Built a real-time iframe preview system to remove the old manual save-and-preview workflow. Designed the HTML, CSS, and interaction behavior to align with existing CMS architecture, with AI-assisted implementation of the JavaScript layer, and added accessibility improvements on top of auto-generated form structures.",
        impact: [
            "Delivered a core feature supporting a new external-facing product, enabling third-party travel site integrations",
            "Replaced a manual save-and-preview workflow with a real-time iframe preview, cutting friction for content managers",
            "Built customizable, reusable search components for client sites, improving visual consistency and user experience",
            "Improved accessibility and responsiveness so the component works across devices and meets usability standards",
            "Built working knowledge of the legacy CMS that made later development faster and more confident"
        ],
        links: {}
    },
    {
        id: "2",
        title: "Template System (Generic, Destination, & Supplier Pages)",
        eyebrow: "Product / System Thinking",
        description: "Designed and built a scalable CMS template system for destination, supplier, and generic pages, improving site quality, consistency, and ease of use for non-technical users.",
        overview: "Designed and built a scalable CMS template system for destination, supplier, and generic pages, improving site quality, consistency, and ease of use for non-technical users. Took initiative to identify and fix outdated templates with no assigned task. Designed and built destination, supplier, and generic page templates. Created no-code editable layouts for non-technical users. Contributed new reusable page elements adopted across the CMS. Added animations and video support within CMS limitations. Improved mobile responsiveness and modern design standards. Took part in client proofing, approval, and production launch.",
        highlights: [
            "Took initiative to identify and fix outdated templates with no assigned task",
            "Designed and built destination, supplier, and generic page templates",
            "Created user-friendly, no-code editable layouts for non-technical users",
            "Contributed new reusable page elements adopted across the CMS",
            "Added animations and video support within CMS limitations",
            "Improved mobile responsiveness and modern design standards",
            "Took part in client proofing, approval, and production launch"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "CMS Development", "Responsive Design", "UX/UI Design", "DOM Manipulation", "Component Reuse", "Content Modeling", "Accessibility"],
        image: "./assets/images/projects/VPsites.jpg",
        challenge: "The platform lacked modern, pre-built templates for destination and supplier pages, while existing generic templates were outdated and visually inconsistent. This led to lower-quality site experiences and limited flexibility for users. Any solution needed to work fully within CMS constraints and stay easy to edit for non-technical users.",
        solution: "Designed and built a new system of reusable, modern templates that balance visual quality with ease of use. Built pages using standard CMS elements and structured them to be fully editable without code, so users could customize content safely. Extended CMS capabilities with custom JavaScript, animations, and video support while staying compatible with existing workflows.",
        impact: [
            "Improved overall visual quality and consistency across client sites",
            "Increased the availability of modern, ready-to-use templates",
            "Reduced the need for custom page creation during site setup",
            "Gave non-technical users the confidence to build and edit pages",
            "Templates adopted across an estimated 50%+ of sites"
        ],
        links: {
            "Dominica": "https://atlasandaura.vacationport.net/Info/Destination/DominicaHome",
            "HX Expeditions": "https://atlasandaura.vacationport.net/Info/Supplier/HXExpeditions",
            "Las Vegas": "https://atlasandaura.vacationport.net/Info/Destination/LasVegasHome",
            "Luggage Forward": "https://atlasandaura.vacationport.net/Info/Supplier/LuggageForward"
        }
    },
    {
        id: "3",
        title: "CMS Migration Initiative (V3 → V4)",
        eyebrow: "Scale + Business Impact",
        description: "Led the migration of 300+ client websites from a legacy CMS version to a modern platform, reducing technical debt and improving performance, consistency, and maintainability.",
        overview: "Led the migration of 300+ client websites from a legacy CMS version to a modern platform, reducing technical debt and improving performance, consistency, and maintainability. Migrated 300+ client websites from V3 to V4. Reduced technical debt by eliminating support for legacy systems. Recreated custom site features and styling to match existing designs. Improved internal workflows for handling and pricing custom requests. Contributed to platform standardization and long-term maintainability. Worked directly with clients to review, adjust, and finalize updated sites. Helped transition the platform to single-version development.",
        highlights: [
            "Migrated 300+ client websites from V3 to V4",
            "Reduced technical debt by eliminating support for legacy systems",
            "Recreated custom site features and styling to match existing designs",
            "Improved internal workflows for handling and pricing custom requests",
            "Contributed to platform standardization and long-term maintainability",
            "Worked directly with clients to review, adjust, and finalize updated sites",
            "Helped transition the platform to single-version development"
        ],
        tech: ["CMS Development", "JavaScript", "HTML", "CSS", "Responsive Design", "DOM Manipulation", "Technical Debt Reduction", "Platform Migration", "Client-Facing Support / Communication"],
        image: "",
        challenge: "The platform was supporting multiple CMS versions, creating significant technical debt and slowing down development. Teams had to maintain and build features across separate codebases, which reduced efficiency and increased complexity. Clients on older versions also weren't getting the best product experience.",
        solution: "Executed a structured migration process to transition all remaining V3 websites to V4. Updated site configurations, matched designs using modern themes, and rebuilt custom elements where needed to preserve functionality and branding. Coordinated client communication and handled post-migration adjustments to ensure a smooth transition.",
        impact: [
            "Eliminated support for a legacy platform, significantly reducing technical debt",
            "Let the team focus on a single codebase, improving development speed and QA quality",
            "Improved site performance, consistency, and user experience across migrated sites",
            "Simplified internal processes for custom work requests and client communication",
            "Helped fully sunset Version 3, allowing the team to move forward with modern development"
        ],
        links: {}
    },
    {
        id: "4",
        title: "Custom Timeline Component",
        eyebrow: "UI/UX + Adaptability",
        description: "Identified a mobile usability gap in a legacy CMS and built a working prototype for a reusable timeline-style content component, which became the baseline for the platform's production version.",
        overview: "Identified a mobile usability gap in a legacy CMS and designed and built a working prototype for a timeline-style content component, using HTML, CSS, and JavaScript. The prototype became the baseline for the platform's production, reusable version of the component. Solved the responsive problem by transforming the timeline into a horizontally scrollable mobile card layout with scroll-snap interaction. Built entirely within CMS constraints using raw HTML and CSS.",
        highlights: [
            "Identified a mobile usability gap and built a working prototype from scratch",
            "Solved the responsive transformation from timeline to mobile card carousel using scroll-snap",
            "Prototype became the baseline for the platform's production, reusable timeline component",
            "Built entirely within CMS constraints using raw HTML, CSS, and JavaScript"
        ],
        tech: ["HTML", "CSS", "Responsive Design", "UI Component Design", "CMS Development", "Interaction Design", "Mobile UX"],
        image: "./assets/images/projects/timeline.jpg",
        challenge: "A visually engaging timeline-style layout was designed for a destination page but needed to work within a CMS that lacked component-based architecture. The layout wasn't naturally suited for smaller screens, creating a challenge for responsiveness and usability. The solution also needed to stay fully editable for non-technical users.",
        solution: "Built a working prototype of the timeline design using structured HTML and CSS within CMS constraints. Solved the mobile usability problem by designing a responsive system that transforms the timeline into a horizontally scrollable card layout on smaller screens, using scroll-snap behavior for a touch-friendly experience. The prototype was then used as the baseline for the platform's production, reusable version of the component.",
        impact: [
            "Identified and solved a mobile usability gap that wasn't part of an assigned task",
            "Built a working prototype that became the foundation for a new reusable content format used across client sites",
            "Solved the core responsive design challenge, transforming a timeline into a mobile card carousel with scroll-snap behavior",
            "Expanded CMS capability without requiring changes to the core system"
        ],
        links: {
            "Dominica Example": "https://atlasandaura.vacationport.net/Info/Destination/DominicaHome"
        }
    },
    {
        id: "5",
        title: "Food Chain Rumble Website",
        eyebrow: "Full-Stack Application Development",
        description: "Full-stack MERN learning project built by pairing with an AI coding assistant to explore backend architecture, authentication, and data modeling hands-on.",
        overview: "Full-stack MERN learning project built by pairing with an AI coding assistant to explore backend architecture, authentication, and data modeling. The AI wrote much of the implementation; I set direction, made feature and UX decisions, and worked to understand the code as it was written. Includes JWT authentication, dynamic leaderboards, a forum system, and user stat tracking.",
        highlights: [
            "Built as a hands-on learning project, pairing with an AI coding assistant to explore full-stack development",
            "Set feature scope, architecture direction, and UX decisions throughout",
            "Worked to understand the reasoning behind AI-generated code rather than just accepting it",
            "Deployed to production on Render with CI/CD; managed local dev via Docker Compose across a client/server monorepo",
            "170+ commits to date"
        ],
        tech: ["AI-Paired Learning", "React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose", "JWT Authentication", "REST APIs", "Full-Stack Architecture", "State Management", "Deployment (Render)"],
        image: "./assets/images/projects/FCRMockup.jpg",
        challenge: "I wanted to learn full-stack development beyond the CMS and frontend work I do at my day job, especially backend architecture and data management I hadn't worked with directly before. Rather than learning purely from tutorials, I used an AI coding assistant as a pairing partner on a real, deployed project, so I could see how the pieces fit together instead of just reading about them.",
        solution: "Worked alongside an AI coding assistant the way I would with a pair programmer. I set the direction: features, architecture, and UX, while the AI wrote much of the implementation, and I followed along to understand what was being written and why. Planned a modular MERN architecture (React frontend, Express/Node backend, MongoDB storage) and asked questions or pushed back whenever the approach didn't match what I intended or didn't make sense to me yet.",
        impact: [
            "Delivered a fully functional, deployed full-stack application while learning backend architecture and data modeling hands-on",
            "Built real, working familiarity with JWT authentication, REST APIs, and MongoDB schema design through guided practice",
            "Practiced evaluating AI-generated code against what I actually wanted, rather than accepting it uncritically",
            "Made the product, feature, and UX decisions throughout, even where I leaned on AI for implementation",
            "Came away with a clearer sense of what I already understand and what I still want to learn hands-on"
        ],
        learned: [
            "How much I could learn by pairing with an AI assistant on a real project instead of tutorials alone",  
            "The basics of full-stack architecture: routes, controllers, models, and how the frontend, backend, and database connect",
            "How to evaluate whether AI-generated code matches what I actually want, even before I can write it independently",
            "Where my own knowledge gaps are, and what I want to learn next"
        ],
        links: {
            "Live Site": "https://foodchainrumble.onrender.com",
            "GitHub Repo": "https://github.com/Bateeters/food-chain-rumble"
        }
    },
    /*
    {
        id: "6",
        title: "React Shop",
        description: "Built a responsive e-commerce application using React with Context API and useReducer for state management. Integrated external APIs for dynamic product data and implemented client-side routing to simulate a modern single-page shopping experience.",
        tech: ["React", "JavaScript", "CSS Modules", "HTML", "REST API"],
        image: "./assets/images/projects/reactShop.jpg",
        links: {
            "Demo": "https://brianteetersreactshop.pages.dev/",
            "GitHub Repo": "https://github.com/Bateeters/BrianTeetersReactShop"
        }
    },
    {
        id: "7",
        title: "Tough Mudder Redesign",
        description: "Translated Adobe XD wireframes into a responsive front-end implementation, focusing on navigation clarity, content hierarchy, and brand consistency. Delivered a clean, user-friendly redesign aligned with modern UX standards.",
        tech: ["HTML", "CSS", "Adobe XD", "Responsive Design"],
        image: "./assets/images/projects/ToughMudderMockup.jpg",
        links: {
            "Demo": "https://bateeters.github.io/ToughMudderRedesign/",
            "XD Prototype": "https://xd.adobe.com/view/4eff75d1-a463-4755-a436-6658b4309afb-1bac/?fullscreen",
            "GitHub Repo": "https://github.com/Bateeters/ToughMudderRedesign"
        }
    }
    */
];