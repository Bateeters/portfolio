export const projects = [
    {
        id: "1",
        title: "CMS Search Component",
        description: "Modern, reusable CMS search component designed for third-party travel sites, featuring real-time previewing and deep client customization.",
        overview: "Built a fully customizable search component within a legacy CMS to support a new external-facing product. The component allows non-technical users to configure layouts, inputs, and branding while previewing changes in real time. Developed from prototype to production under tight constraints, balancing modern UX improvements with legacy system limitations.",
        highlights: [
            "Owned development from prototype → requirements → production",
            "Implemented real-time iframe preview, eliminating manual save-and-preview workflows",
            "Built a highly customizable UI (layouts, inputs, colors, fonts)",
            "Improved editor experience for non-technical users",
            "Navigated and debugged a complex legacy CMS architecture",
            "Added accessibility enhancements on top of auto-generated form structures",
        ],
        tech: ["JavaScript", "HTML", "CSS", "CMS Development", "Bootstrap 5", "Razor (C#)", "Select 2", "Git", "Jira", "Accessibilty (ARIA)", "DOM Manipulation", "Component-Based Design"],
        image: "./assets/images/projects/searchComponent.jpg",
        challenge: "A new service required a modern overhaul of one of our reusable search components. It's purpose is to integrate with internal APIs and be used across third-party websites. The existing solution lacked flexibility and required inefficient preview workflows. Development also had to be done inside a complex legacy CMS with inconsistent patterns and limited documentation.",
        solution: "Developed a responsive, configurable search component that allows users to customize layout, inputs, and branding without code changes. Introduced a real-time iframe preview system to streamline the editing experience and eliminate repetitive workflows. Built the component to align with existing CMS architecture while extending functionality through custom JavaScript and accessibility improvements.",
        impact: [
            "Delivered a core feature supporting a new external-facing product, enabling third-party travel site integrations",
            "Streamlined the editing workflow with a real-time iframe preview, reducing time and friction for content managers",
            "Enabled highly customizable and reusable search components for client sites, improving visual consistency and user experience",
            "Enhanced accessibility and responsiveness, ensuring the component works across devices and meets usability standards",
            "Built foundational knowledge of the legacy CMS, improving efficiency and confidence for future development"
        ],
        links: {}
    },
    {
        id: "2",
        title: "Template System (Generic, Destination, & Supplier Pages)",
        description: "Designed and built a scalable CMS template system for destination, supplier, and generic pages—improving site quality, consistency, and ease of use for non-technical users.",
        overview: "Created a library of modern, reusable page templates within a CMS to replace outdated designs and improve overall site quality. Balanced visual design with usability by ensuring all templates were fully editable by non-technical users. Led the process from design through production, including client approvals and launch.",
        highlights: [
            "Took full initiative to identify and solve outdated template issues (no assigned task)",
            "Designed and built destination, supplier, and generic page templates",
            "Created user-friendly, no-code editable layouts for non-technical users",
            "Contributed new reusable page elements adopted across the CMS",
            "Introduced animations and video support within CMS limitations",
            "Improved mobile responsiveness and modern design standards",
            "Participated in client proofing, approval, and production launch",
        ],
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "CMS Development", "Responsive Design", "UX/UI Design", "DOM Manipulation", "Component Reuse", "Content Modeling", "Accessibility"],
        image: "./assets/images/projects/VPsites.jpg",
        challenge: "The platform lacked modern, pre-built templates for destination and supplier pages, while existing generic templates were outdated and visually inconsistent. This resulted in lower-quality site experiences and limited flexibility for users. Any solution needed to work completely within CMS constraints and remain easy to edit for non-technical users.",
        solution: "Designed and implemented a new system of reusable, modern templates that balance visual quality with ease of use. Built pages using standard CMS elements and structured them to be fully editable without code, enabling users to customize content safely. Extended CMS capabilities with custom JavaScript, animations, and video support while maintaining compatibility with existing workflows.",
        impact: [
            "Elevated overall visual quality and consistency across client sites",
            "Increased availability of modern, ready-to-use templates",
            "Reduced need for custom page creation during site setup",
            "Enabled non-technical users to confidently build and edit pages",
            "Templates adopted across a significant portion of sites (~50%+ estimated)"
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
        description: "Led the migration of 300+ client websites from a legacy CMS version to a modern platform, reducing technical debt and improving performance, consistency, and maintainability.",
        overview: "Executed a large-scale migration initiative to transition legacy client websites from Version 3 to Version 4 of a CMS platform. The effort focused on reducing technical debt, improving performance, and consolidating development efforts into a single modern system. Managed site updates, custom rebuilds, and client communication throughout the process.",
        highlights: [
            "Migrated 300+ client websites from V3 → V4",
            "Reduced technical debt by eliminating support for legacy systems",
            "Recreated custom site features and styling to match existing designs",
            "Improved internal workflows for handling and pricing custom requests",
            "Contributed to platform standardization and long-term maintainability",
            "Collaborated with clients to review, adjust, and finalize updated sites",
            "Helped transition the platform to single-version development",
        ],
        tech: ["CMS Development", "JavaScript", "HTML", "CSS", "Responsive Design", "DOM Manipulation", "Technical Debt Reduction", "Platform Migration", "Client-Facing Support / Communication"],
        image: "",
        challenge: "The platform was supporting multiple CMS versions, creating significant technical debt and slowing down development. Teams were required to maintain and build features across separate codebases, reducing efficiency and increasing complexity. Additionally, clients on older versions were not receiving the best product experience.",
        solution: "Executed a structured migration process to transition all remaining V3 websites to V4. Updated site configurations, matched designs using modern themes, and rebuilt custom elements where needed to preserve functionality and branding. Coordinated client communication and handled post-migration adjustments to ensure a smooth transition.",
        impact: [
            "Eliminated support for a legacy platform, significantly reducing technical debt",
            "Enabled the team to focus on a single codebase, improving development speed and QA quality",
            "Improved site performance, consistency, and user experience across migrated sites",
            "Streamlined internal processes for custom work requests and client communication",
            "Helped fully sunset Version 3, allowing the team to move forward with modern development"
        ],
        links: {}
    },
    {
        id: "4",
        title: "Custom Timeline Component",
        description: "Built a reusable content layout component based on a custom client design.",
        highlights: [
            "Created a one-off design that turned into a shared feature",
            "Improved content structure and presentation"
        ],
        tech: ["HTML", "CSS", "JavaScript", "Component Design", "CMS"],
        image: "./assets/images/projects/timeline.jpg",
        links: {
            "Dominica Example": "https://atlasandaura.vacationport.net/Info/Destination/DominicaHome"
        }
    },
    {
        id: "5",
        title: "Food Chain Rumble (WIP)",
        description: "Building a full-stack MERN app with authentication, leaderboards, and community features.",
        highlights: [
            "Implemented state management and REST APIs",
            "Designed scalable database structure for user and match data"
        ],
        tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "REST API", "Render"],
        image: "./assets/images/projects/FCRMockup.jpg",
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