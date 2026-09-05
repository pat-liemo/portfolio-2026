export const skills = [
  {
    icon: '🖥️',
    title: 'Frontend & Immersive Web',
    desc: 'Building responsive UIs and spatial, WebXR-driven experiences.',
    tags: ['React', 'Tailwind CSS', 'Three.js', 'WebXR'],
  },
  {
    icon: '⚙️',
    title: 'Backend & APIs',
    desc: 'REST and GraphQL APIs and data layers that scale cleanly.',
    tags: ['Flask', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'GraphQL'],
  },
  {
    icon: '📱',
    title: 'Mobile & Native',
    desc: 'Cross-platform and native apps with modern declarative UI.',
    tags: ['Kotlin', 'Jetpack Compose', 'React Native', 'Swift', 'ARKit'],
  },
  {
    icon: '🧩',
    title: 'Tools & Foundations',
    desc: 'The fundamentals that keep everything else honest.',
    tags: ['Git', 'Docker', 'Linux', 'OOP', 'Data Structures & Algorithms'],
  },
]

export const projects = [
  {
    status: 'progress',
    statusLabel: 'In Progress',
    title: 'SCOUTR',
    subtitle: '360° Virtual Tour & Digital Twin Platform',
    period: 'Aug 2025 — Present',
    desc: 'A full-stack proptech platform built end-to-end: a React/Three.js web tour viewer, a React Native/Expo mobile field-capture app, and a FastAPI/PostgreSQL backend. Includes a custom LiDAR 3D pipeline — Apple RoomPlan capture, USDZ→glTF conversion, and an original photogrammetric texture-projection algorithm mapping real 360° photography onto 3D mesh geometry — plus a native Swift/ARKit module for spatial capture without GPS.',
    tags: ['React', 'Three.js', 'React Native', 'Swift/ARKit', 'FastAPI', 'PostgreSQL'],
    link: 'https://github.com/pat-liemo',
    code: [
      { t: '// LiDAR capture → mesh pipeline' },
      { t: 'const room = await RoomPlan.capture()' },
      { t: 'const mesh = usdzToGltf(room.scan)' },
      { t: '' },
      { t: 'projectTexture(mesh, panorama, {' },
      { t: '  method: "photogrammetric"', c: true },
      { t: '})' },
      { t: '' },
      { t: '✓ 45+ automated tests passing', ok: true },
    ],
  },
  {
    status: 'completed',
    statusLabel: 'Completed',
    title: 'Social Media AI Manager',
    subtitle: 'AI-Powered Social Commerce Automation Platform',
    period: 'Jun 2026 — Sep 2026',
    desc: 'A full-stack AI customer-support platform integrating the Meta Graph API, Instagram, and Shopify — with real-time webhooks, an AI intent-classification pipeline for order and shipping inquiries, and human-in-the-loop escalation that hands complaints to a support agent automatically.',
    tags: ['React', 'Flask', 'Shopify API', 'Anthropic API', 'Meta API', 'PostgreSQL'],
  },
  {
    status: 'completed',
    statusLabel: 'Completed',
    title: 'Finance Tracking App',
    subtitle: 'Personal Finance Tracking Mobile App',
    period: 'Sep 2025 — Jan 2026',
    desc: 'An Android finance tracker built with an MVVM architecture, a Room persistence layer for transactions and budgets, and Material 3 theming with custom Compose charts for at-a-glance spending breakdowns.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Material 3'],
  },
]

export const journey = [
  {
    year: '2021',
    title: 'Started Computer Science',
    desc: 'Enrolled in the Bachelor of Science, Computer Science program at Kenyatta University, Nairobi.',
  },
  {
    year: '2023',
    title: 'CS50 & First Internship',
    desc: 'Completed Harvard’s CS50, interned as an IT Intern at Flag 42, and began the Software Engineering program at Moringa School.',
  },
  {
    year: '2024',
    title: 'Moringa Grad & Brance Technologies',
    desc: 'Graduated from Moringa’s Software Engineering program, then worked as a Software Developer Intern at Brance Technologies building RESTful PHP backends.',
  },
  {
    year: '2025',
    title: 'IBM AI & Spatial Computing',
    desc: 'Earned IBM AI Fundamentals, started SCOUTR — a proptech platform with a custom LiDAR 3D pipeline — and shipped the Finance Tracking App.',
  },
  {
    year: '2026',
    title: 'Graduated & Shopzetu',
    desc: 'Graduated with a BSc in Computer Science from Kenyatta University, joined Shopzetu as a Software Developer Intern, and shipped an AI-powered social commerce platform integrating Meta and Shopify APIs.',
  },
  {
    year: 'Next',
    title: 'Software Engineer + XR',
    desc: 'Working toward becoming a Software Engineer specializing in XR — Three.js, WebXR, ARKit, and spatial computing.',
  },
]
