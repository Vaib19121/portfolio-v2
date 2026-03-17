import BPMN from "@/assets/images/bpmn.webp";
import Dashboard from "@/assets/images/dashboard.webp";
import Workflow from "@/assets/images/workflow.webp";
import Copilot from "@/assets/images/copilot.webp";
export const personalInfo = {
  name: "Vaibhav Mehar",
  title: "Mobile Application Developer",
  subtitle: "React Native · Node.js · Full-Stack",
  bio: "I'm a passionate Software Engineer with 2+ years of experience building innovative mobile apps and full-stack solutions. Currently at EC Infosolutions Pvt. Ltd in Pune, I craft seamless user experiences with clean architecture and modern development practices.",
  location: "Pune, Maharashtra, India",
  email: "vaibhavmehar16@gmail.com",
  phone: "+91 9158755311",
  github: "https://github.com/Vaib19121",
  linkedin: "#",
  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Tech Stacks" },
    { value: "B.E.", label: "Computer Eng." },
  ]
};

export const skills = {
  languages: [
    { name: "JavaScript", level: 90, icon: "JS" },
    { name: "TypeScript", level: 85, icon: "TS" },
    { name: "C++", level: 80, icon: "C++" },
    { name: "PHP", level: 75, icon: "PHP" },
  ],
  frameworks: [
    { name: "React Native", level: 92, icon: "RN" },
    { name: "React.js", level: 85, icon: "RE" },
    { name: "Node.js", level: 80, icon: "NO" },
    { name: "Redux Toolkit", level: 85, icon: "RX" },
  ],
  tools: ["MongoDB", "PostgreSQL", "Firebase", "Git", "Socket.io", "CodePush", "Expo", "REST APIs", "JWT", "Reanimated"],
  categories: [
    { title: "Mobile Development", desc: "React Native & cross-platform apps", icon: "📱" },
    { title: "Web Development", desc: "React.js & modern web apps", icon: "🌐" },
    { title: "Backend Development", desc: "Node.js & API development", icon: "⚙️" },
    { title: "Database Management", desc: "MongoDB & PostgreSQL", icon: "🗄️" },
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "EC Infosolutions Pvt. Ltd",
    location: "Pune, Maharashtra",
    duration: "February 2023 – Present",
    type: "Full-Time",
    current: true,
    highlights: [
      "Built and maintained a content creation mobile app using React Native",
      "Implemented real-time chat with Redux Toolkit and WebSocket integration",
      "Integrated Google Sign-In and Apple Sign-In for third-party authentication",
      "Added Google Maps and various third-party libraries for enhanced UX",
      "Implemented in-app purchases and push notifications for Android & iOS",
    ],
    tech: ["React Native", "Redux Toolkit", "WebSocket", "Google Maps", "Firebase"]
  },
  {
    id: 2,
    role: "React Native Developer Intern",
    company: "Infinity Pillars Pvt. Ltd",
    location: "Delhi, India",
    duration: "May 2022 – July 2022",
    type: "Internship",
    current: false,
    highlights: [
      "Designed and implemented smooth UI for a hybrid mobile app",
      "Handled API integration and React Navigation setup",
      "Used Reanimated for fluid animations and Redux for state management",
      "Developed the entire application in TypeScript",
    ],
    tech: ["React Native", "TypeScript", "Reanimated", "Redux", "React Navigation"]
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "Pench Irrigation Nagpur Division Dept.",
    location: "Nagpur, Maharashtra",
    duration: "August 2022 – March 2023",
    type: "Internship",
    current: false,
    highlights: [
      "Designed and built a web application using PHP, MySQL, XAMPP, and JavaScript",
      "Integrated Bill Desk payment gateway into the application",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "XAMPP", "Bill Desk API"]
  }
];

export const projects = [
  {
    id: "yoke-yoga",
    title: "Yoke Yoga",
    category: "Mobile App",
    platform: "React Native (iOS & Android)",
    status: "Live",
    year: "2024",
    storeLinks: {
      ios: "https://apps.apple.com/us/app/yoke-yoga/id6480213431",
      android: "https://play.google.com/store/apps/details?id=com.yoke.yoga",
    },
    description: "An award-winning community wellness app that brings yoga, social self-care tracking, and co-regulated healing into one beautifully connected platform — available on iOS and Android.",
    longDescription: "Yoke Yoga is a community-first wellness platform that goes far beyond a typical yoga app. It transforms isolated self-care into a shared, social experience — users track their mood, energy, and practice daily, share 'glimmers' (positive micro-moments), and co-regulate with others in the Sangha community feed. The app features a curated library of short, accessible yoga sessions filterable by mood, need, body type, or lifestyle (e.g. #BackPain, #Anxiety, #Sleep, #Perimenopause). Instructors are diverse, trauma-informed, and inclusive. A gamified Aura Points system rewards users for both self-care and community engagement. Premium subscribers get unlimited access to classes, series, offline downloads, and themed monthly content — all for less than 20 cents a class. Trusted by TedX, CBS, Yoga Alliance, Kripalu, and HuffPost.",
    image: "https://yokeyoga.com/wp-content/uploads/2024/05/Yoke-Yoga-Logo-symbol-transparent.png",
    websiteUrl: "https://yokeyoga.com",
    color: "#a78bfa",
    awards: ["Award-Winning App", "Featured on TedX, CBS, HuffPost"],
    tech: [
      "React Native",
      "Redux Toolkit",
      "Firebase",
      "Node.js",
      "REST APIs",
      "Push Notifications (FCM/APNs)",
      "In-App Purchases",
      "CodePush",
      "React Navigation",
      "Reanimated",
    ],
    features: [
      "Community Sangha feed — share glimmers, reflections & practice moments",
      "Social Wellness Tracker — log mood, energy & connection daily",
      "Aura Points gamification — earn rewards for self-care & community support",
      "Curated yoga library — filter by mood, need, lifestyle, or body",
      "Short, accessible sessions — works in pajamas, at a desk, or mid-chores",
      "Co-Care system — practice alongside others for nervous system co-regulation",
      "Offline downloads — save favorite classes for anytime, anywhere access",
      "Google & Apple Sign-In for frictionless onboarding",
      "Push notifications for community activity and reminders",
      "In-app purchases — Monthly ($9.99/mo) and Annual ($59.99/yr) plans",
      "OTA updates via CodePush — hotfixes without App Store delay",
      "Search by mood, identity, condition, or lifestyle tag",
    ],
    highlights: [
      { label: "Platforms", value: "iOS & Android" },
      { label: "Pricing", value: "Free + Premium" },
      { label: "Monthly Plan", value: "$9.99 / month" },
      { label: "Annual Plan", value: "$59.99 / year" },
      { label: "Cost per class", value: "< 20¢" },
      { label: "Recognition", value: "Award-Winning" },
    ],
    categories: [
      "#Sleep", "#BackPain", "#Anxiety", "#Stress", "#ChronicPain",
      "#Perimenopause", "#Depression", "#Joy", "#Calm", "#Gratitude",
      "#PersonalGrowth", "#SelfCare", "#Strength", "#Balance", "#Relaxation",
    ],
    trustedBy: ["TedX", "CBS", "Yoga Alliance", "Kripalu", "HuffPost", "Peloton", "Accessible Yoga", "Omega"],
    testimonials: [
      { quote: "Yoke Yoga is a space where everyone is welcome!", name: "Bonnie W.", role: "Yoga Teacher" },
      { quote: "What a breath of fresh air!", name: "Claire H.", role: "Yoga Practitioner" },
      { quote: "So many amazing teachers!", name: "Ariane W.", role: "Teacher" },
    ],
    links: {
      demo: "https://yokeyoga.com",
      ios: "https://apps.apple.com/us/app/yoke-yoga/id6480213431",
      android: "https://play.google.com/store/apps/details?id=com.yoke.yoga",
      github: null,
    },
    featured: true,
  },
  {
    id: "chiropractor",
    title: "ChiroPractor",
    category: "Mobile App",
    platform: "React Native",
    status: "Production",
    year: "2023",
    description: "A comprehensive healthcare mobile application with real-time features and seamless authentication. Built to connect chiropractors with patients through an intuitive interface.",
    longDescription: "ChiroPractor is a full-featured healthcare app that revolutionizes how patients connect with chiropractors. The app features real-time chat powered by WebSocket, appointment booking with calendar sync, and offline data synchronization for use in low-connectivity environments. Google and Apple Sign-In provide frictionless onboarding, while CodePush enables over-the-air updates without App Store delays.",
    image: null,
    color: "#00ff88",
    tech: ["React Native", "Node.js", "Socket.io", "MongoDB", "CodePush", "Redux Toolkit"],
    features: [
      "Google & Apple Sign-In authentication",
      "Real-time chat with WebSocket / Socket.io",
      "Appointment booking & calendar integration",
      "Offline sync with local storage fallback",
      "OTA updates via CodePush",
      "Server-Sent Events for live notifications",
    ],
    screenshots: [
      // Add your screenshot URLs here
      "https://example.com/screenshot1.png",
      "https://example.com/screenshot2.png",
    ],
    video: "https://vaib19121.github.io/Portfolio/assets/Videos/ChiropractorDemo.mp4", 
    links: { demo: "#", github: null },
    featured: true,
  },
  {
    id: "soul33",
    title: "Soul33",
    category: "Mobile App",
    platform: "React Native",
    status: "Production",
    year: "2023",
    description: "A meditation and wellness app featuring background music, tarot card readings, offline downloads, and personalized content delivery.",
    longDescription: "Soul33 is a comprehensive mindfulness platform that brings meditation, tarot, and wellness content together in one beautifully designed app. Users can download content for offline playback, explore personalized tarot readings, and engage with a calming background music player powered by Track Player. Firebase Remote Config enables A/B testing and feature flags without new releases.",
    image: null,
    color: "#7c3aed",
    tech: ["React Native", "Track Player", "Firebase", "CodePush", "Tarot API", "Redux"],
    features: [
      "Background music player with Track Player",
      "Tarot card reading feature",
      "Offline content downloads",
      "Google & Apple Sign-In",
      "Push notifications (FCM)",
      "Firebase Remote Config for A/B tests",
    ],
    screenshots: [
     "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9d/b9/a9/9db9a928-a5fe-7099-ffb8-9cea5180c7b6/Frame_11.jpg/460x998bb-60.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/06/0f/4b/060f4b57-4de4-f95e-44f2-548543abae5f/Frame_12.jpg/460x998bb-60.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/dc/0d/c6/dc0dc6cc-cf30-52f4-0d10-a906092e0636/Frame_13.jpg/460x998bb-60.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/6b/e2/28/6be2280b-b9c1-22cd-0f61-5a65eec0f253/Frame_14.jpg/460x998bb-60.webp",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/02/6d/cd/026dcde5-d951-e97c-10df-deda8f4b7bb2/Frame_20.jpg/460x998bb-60.webp"
    ],
    video: "https://vaib19121.github.io/Portfolio/assets/Videos/SoulDemo.mp4",
    links: { demo: "#", github: null },
    featured: true,
  },
 {
    id: "agentic-orchestration-platform",
    title: "Agentic Orchestration Platform (AOP)",
    category: "Enterprise Platform",
    platform: "React.js · Node.js",
    status: "MVP Deployed",
    year: "2024",
    description: "A self-hosted enterprise AI platform that enables organizations to build, deploy, govern, and monetize AI agents and workflows across internal systems—acting as an internal 'AI Operating System' for enterprises.",
    longDescription: "The Agentic Orchestration Platform (AOP) is a vendor-neutral, self-hosted enterprise solution that serves as the central control plane for enterprise AI. Similar in vision to Agentforce but fully extensible and on-premises, AOP connects approved systems, orchestrates agentic workflows, enforces governance policies, and provides measurable business value through packaged AI Apps, role-based Copilots, and hybrid billing models. Built for CIOs, IT teams, and business leaders who need controlled, auditable, and scalable AI adoption across their organization.",
    image: "/portfolio-v2/images/dashboard.webp",
    color: "#6366f1",
    tech: [
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "REST APIs",
      "WebSocket",
      "MongoDB",
      "PostgreSQL",
      "JWT Authentication",
      "RBAC",
      "Material-UI",
      "React Router",
      "Chart.js / Recharts",
    ],
    features: [
      "Agent Orchestration Engine — runtime with permission checks, tool invocation, and retry logic",
      "Workflow Engine — versioned BPMN-like workflows with conditional branching and human-in-the-loop approvals",
      "App Framework — packaged AI capabilities installable per role or department",
      "Role-Based Copilots — AI assistants restricted to approved apps, with RAG support and approval requests",
      "Enterprise Integrations — connectors for ERP, CRM, databases, APIs with field-level access control",
      "Governance & Audit — full RBAC enforcement, policy engine, and complete execution traceability",
      "Hybrid Billing System — subscription, token metering, app usage, time-based, and value-based pricing",
      "Admin Console — centralized control for apps, agents, workflows, users, and policies",
      "App Builder UI — low-code interface to create and configure AI apps visually",
      "Usage Analytics Dashboard — real-time insights into agent execution, token usage, and ROI metrics",
      "Multi-Tenant Architecture — one deployment per client with tenant-isolated data",
      "Approval Workflow UI — request and approve write actions with context and justification",
    ],
    highlights: [
      { label: "Deployment", value: "Single-Tenant (Self-Hosted)" },
      { label: "Version", value: "MVP" },
      { label: "Target Users", value: "CIOs, IT Teams, Business Heads" },
      { label: "Architecture", value: "Vendor-Neutral & Extensible" },
      { label: "Governance", value: "Enterprise-Grade RBAC & Audit" },
      { label: "Billing Models", value: "Hybrid (Subscription + Usage)" },
    ],
    capabilities: [
      "Build & Deploy AI Agents with defined functions and approved tools",
      "Orchestrate Workflows across agents, systems, and human approvals",
      "Package AI Apps as reusable, installable capabilities",
      "Provide Role-Based Copilots with permission-aware context",
      "Integrate with ERP, CRM, Databases, and APIs under governance",
      "Enforce Policies at access, execution, and data levels",
      "Track ROI through hours saved, value delivered, and usage metrics",
      "Support Hybrid Billing: subscriptions, tokens, app usage, and value-based pricing",
    ],
    problemsSolved: [
      "Fragmented and ungoverned AI tools across the enterprise",
      "Copilots lack workflow authority and system access",
      "Difficult to audit and bill AI usage internally",
      "Custom AI solutions don't scale across teams",
      "Hard to measure ROI and value delivered by AI",
    ],
    coreModules: [
      { name: "Agent Runtime", desc: "Execute agents with limits, permissions, and context passing" },
      { name: "Workflow Engine", desc: "BPMN-like workflows with branching and approvals" },
      { name: "App Marketplace", desc: "Install and configure versioned AI apps" },
      { name: "Copilot Interface", desc: "Role-specific AI with RAG and approval flows" },
      { name: "Integration Hub", desc: "Connect ERP, CRM, databases with scoped access" },
      { name: "Policy Engine", desc: "Enforce RBAC, data policies, and execution rules" },
      { name: "Billing Module", desc: "Metered token usage, app execution, and invoicing" },
      { name: "Admin Console", desc: "Centralized governance and monitoring dashboard" },
    ],
    screenshots: [
    
    ],
    video: null,
    links: { 
      demo: null, 
      github: null 
    },
    featured: true,
    tags: [
      "Enterprise AI",
      "Agentic Workflows",
      "AI Orchestration",
      "Governance",
      "Self-Hosted",
      "Multi-Tenant",
      "RBAC",
      "AI Apps",
      "Copilots",
      "Billing & Monetization",
    ],
  },
  {
    id: "iquionix",
    title: "Iquionix",
    category: "Web App",
    platform: "React.js",
    status: "Live",
    year: "2022",
    description: "A full e-commerce platform for keyboards and accessories with Stripe payments, Firebase auth, and a polished Tailwind CSS UI.",
    longDescription: "Iquionix is a fully functional e-commerce website for mechanical keyboard enthusiasts. It features Stripe payment integration, Firebase authentication, real-time inventory management, and a modern responsive UI built with Tailwind CSS. The project showcases full-stack React development with third-party API integration.",
    image: null,
    color: "#f59e0b",
    tech: ["React.js", "Stripe", "Firebase", "Tailwind CSS", "React Router"],
    features: [
      "Stripe payment gateway integration",
      "Firebase authentication & database",
      "Product catalog with filtering",
      "Shopping cart with local state",
      "Responsive Tailwind CSS design",
    ],
    screenshots: [],
    video: null,
    links: { demo: "https://iquionix.web.app", github: null },
    featured: false,
  },
  {
    id: "quiz-api",
    title: "Quiz API",
    category: "Backend",
    platform: "Node.js",
    status: "Open Source",
    year: "2022",
    description: "A RESTful Quiz API with JWT authentication, Sequelize ORM, MySQL database, and Nodemailer for email notifications.",
    longDescription: "A robust RESTful API for powering quiz applications. Built with Express.js and Sequelize ORM for clean database interactions with MySQL. JWT tokens handle stateless authentication, and Nodemailer sends email notifications for quiz results and account verification. Well-documented endpoints for easy integration.",
    image: null,
    color: "#10b981",
    tech: ["Node.js", "Express", "Sequelize", "MySQL", "JWT", "Nodemailer"],
    features: [
      "JWT-based authentication & authorization",
      "Sequelize ORM with MySQL",
      "RESTful endpoint design",
      "Email notifications via Nodemailer",
      "Quiz CRUD operations",
    ],
    screenshots: [],
    video: null,
    links: { demo: null, github: "https://github.com/Vaib19121/Quiz-API" },
    featured: false,
  },
  
];

export const blogs = [
  {
    id: "react-native-performance",
    title: "Optimizing React Native Performance: Lessons from Production",
    excerpt: "After shipping two production apps, here are the performance tricks that actually made a difference — from list virtualization to Reanimated 2.",
    date: "March 2024",
    readTime: "8 min read",
    tags: ["React Native", "Performance", "Mobile"],
    color: "#00ff88",
    author: "Vaibhav Mehar",
    content: [
      {
        type: "intro",
        text: "Performance optimization in React Native can feel overwhelming. After shipping multiple production apps with thousands of users, I've learned which optimizations actually matter and which are just premature optimization. Let me share the lessons that made a real impact."
      },
      {
        type: "heading",
        text: "1. List Virtualization with FlashList"
      },
      {
        type: "paragraph",
        text: "One of the biggest performance wins came from replacing FlatList with Shopify's FlashList for long scrollable lists. In our content feed with hundreds of items, we saw scroll performance improve from 45 FPS to 60 FPS consistently."
      },
      {
        type: "code",
        language: "javascript",
        code: `import { FlashList } from "@shopify/flash-list";

<FlashList
  data={posts}
  renderItem={({ item }) => <PostCard post={item} />}
  estimatedItemSize={200}
  keyExtractor={item => item.id}
/>`
      },
      {
        type: "paragraph",
        text: "The key is providing an accurate estimatedItemSize. FlashList uses this to efficiently recycle views and maintain smooth scrolling even with complex item layouts."
      },
      {
        type: "heading",
        text: "2. React.memo and useCallback Properly"
      },
      {
        type: "paragraph",
        text: "Memoization helps, but only when used strategically. I wrap expensive list items in React.memo and ensure callbacks are stable with useCallback:"
      },
      {
        type: "code",
        language: "javascript",
        code: `const PostCard = React.memo(({ post, onLike }) => {
  return (
    <TouchableOpacity onPress={() => onLike(post.id)}>
      {/* Complex UI */}
    </TouchableOpacity>
  );
});

// In parent component
const handleLike = useCallback((postId) => {
  dispatch(likePost(postId));
}, [dispatch]);`
      },
      {
        type: "heading",
        text: "3. Reanimated 2 for Smooth Animations"
      },
      {
        type: "paragraph",
        text: "Moving animations to Reanimated 2 was a game-changer. Animations run on the UI thread at 60 FPS without blocking JavaScript. Our swipe gestures and page transitions became buttery smooth:"
      },
      {
        type: "code",
        language: "javascript",
        code: `import Animated, { 
  useSharedValue, 
  useAnimatedStyle,
  withSpring 
} from 'react-native-reanimated';

const scale = useSharedValue(1);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }]
}));

const handlePress = () => {
  scale.value = withSpring(1.2);
};`
      },
      {
        type: "heading",
        text: "4. Image Optimization"
      },
      {
        type: "paragraph",
        text: "Images are often the culprit for memory issues. We implemented proper image caching with react-native-fast-image and served appropriately sized images from our CDN:"
      },
      {
        type: "code",
        language: "javascript",
        code: `import FastImage from 'react-native-fast-image';

<FastImage
  source={{
    uri: imageUrl,
    priority: FastImage.priority.normal,
    cache: FastImage.cacheControl.immutable
  }}
  resizeMode={FastImage.resizeMode.cover}
/>`
      },
      {
        type: "heading",
        text: "5. Redux Toolkit Query for Data Caching"
      },
      {
        type: "paragraph",
        text: "We reduced unnecessary API calls by 60% using RTK Query's automatic caching. It handles request deduplication, cache invalidation, and optimistic updates out of the box:"
      },
      {
        type: "code",
        language: "javascript",
        code: `const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Posts'],
      keepUnusedDataFor: 300, // 5 minutes
    }),
  }),
});`
      },
      {
        type: "heading",
        text: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Profile before optimizing — use React DevTools Profiler and Flipper",
          "FlashList for long lists, React.memo for expensive components",
          "Move animations to Reanimated 2 for 60 FPS smoothness",
          "Implement proper image caching and serve optimized sizes",
          "Use RTK Query or React Query for smart data caching",
          "Test on low-end devices — performance issues show up there first"
        ]
      },
      {
        type: "paragraph",
        text: "These optimizations took our app from struggling on mid-range devices to running smoothly even on older phones. The best part? Most require minimal code changes but deliver massive UX improvements."
      }
    ]
  },
  {
    id: "websocket-chat",
    title: "Building Real-Time Chat with WebSocket in React Native",
    excerpt: "A deep dive into implementing Socket.io in React Native, handling reconnection logic, and keeping state in sync with Redux Toolkit.",
    date: "January 2024",
    readTime: "10 min read",
    tags: ["WebSocket", "Socket.io", "Redux"],
    color: "#00e5ff",
    author: "Vaibhav Mehar",
    content: [
      {
        type: "intro",
        text: "Real-time features like chat require WebSockets, but implementing them correctly in React Native has unique challenges. Here's how I built a production-ready chat system with Socket.io that handles reconnection, offline messages, and state management elegantly."
      },
      {
        type: "heading",
        text: "Setting Up Socket.io Client"
      },
      {
        type: "paragraph",
        text: "First, install socket.io-client. I create a singleton service to manage the connection lifecycle:"
      },
      {
        type: "code",
        language: "javascript",
        code: `// socketService.js
import io from 'socket.io-client';

class SocketService {
  socket = null;
  
  connect(userId, token) {
    this.socket = io('https://api.example.com', {
      auth: { token },
      query: { userId },
      transports: ['websocket'],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });
    
    this.setupListeners();
  }
  
  setupListeners() {
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
    
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }
  
  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketService();`
      },
      {
        type: "heading",
        text: "Redux Integration"
      },
      {
        type: "paragraph",
        text: "I use Redux Toolkit to manage chat state and integrate Socket.io events with Redux actions:"
      },
      {
        type: "code",
        language: "javascript",
        code: `// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    conversations: {},
    activeConversation: null,
    isConnected: false,
    pendingMessages: [],
  },
  reducers: {
    setConnected: (state, action) => {
      state.isConnected = action.payload;
    },
    addMessage: (state, action) => {
      const { conversationId, message } = action.payload;
      if (!state.conversations[conversationId]) {
        state.conversations[conversationId] = [];
      }
      state.conversations[conversationId].push(message);
    },
    markMessageSent: (state, action) => {
      const { tempId, messageId } = action.payload;
      // Update temp message with server ID
    },
  },
});

export const { setConnected, addMessage, markMessageSent } = chatSlice.actions;
export default chatSlice.reducer;`
      },
      {
        type: "heading",
        text: "Handling Reconnection Logic"
      },
      {
        type: "paragraph",
        text: "Network changes are common on mobile. I handle reconnection gracefully and resend pending messages:"
      },
      {
        type: "code",
        language: "javascript",
        code: `import NetInfo from '@react-native-community/netinfo';

// In your main App component or custom hook
useEffect(() => {
  const unsubscribe = NetInfo.addEventListener(state => {
    if (state.isConnected && !socketService.socket?.connected) {
      socketService.connect(userId, token);
      
      // Resend pending messages
      pendingMessages.forEach(msg => {
        socketService.emit('message', msg);
      });
    }
  });
  
  return () => unsubscribe();
}, [userId, token, pendingMessages]);`
      },
      {
        type: "heading",
        text: "Custom Hook for Chat Messages"
      },
      {
        type: "paragraph",
        text: "I encapsulate the chat logic in a reusable hook:"
      },
      {
        type: "code",
        language: "javascript",
        code: `// useChat.js
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketService from './socketService';
import { addMessage, setConnected } from './chatSlice';

export const useChat = (conversationId) => {
  const dispatch = useDispatch();
  const messages = useSelector(state => 
    state.chat.conversations[conversationId] || []
  );
  
  useEffect(() => {
    socketService.socket?.on('message', (data) => {
      if (data.conversationId === conversationId) {
        dispatch(addMessage({
          conversationId,
          message: data,
        }));
      }
    });
    
    socketService.socket?.on('connect', () => {
      dispatch(setConnected(true));
    });
    
    socketService.socket?.on('disconnect', () => {
      dispatch(setConnected(false));
    });
    
    return () => {
      socketService.socket?.off('message');
    };
  }, [conversationId, dispatch]);
  
  const sendMessage = useCallback((text) => {
    const tempId = Date.now().toString();
    const message = {
      id: tempId,
      conversationId,
      text,
      timestamp: new Date(),
      status: 'pending',
    };
    
    // Optimistic update
    dispatch(addMessage({ conversationId, message }));
    
    // Send to server
    socketService.socket?.emit('message', message, (ack) => {
      if (ack.success) {
        dispatch(markMessageSent({ 
          tempId, 
          messageId: ack.messageId 
        }));
      }
    });
  }, [conversationId, dispatch]);
  
  return { messages, sendMessage };
};`
      },
      {
        type: "heading",
        text: "Chat Screen Component"
      },
      {
        type: "paragraph",
        text: "Using the hook makes the chat screen component clean and focused:"
      },
      {
        type: "code",
        language: "javascript",
        code: `const ChatScreen = ({ route }) => {
  const { conversationId } = route.params;
  const { messages, sendMessage } = useChat(conversationId);
  const [text, setText] = useState('');
  
  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText('');
    }
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={handleSend}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};`
      },
      {
        type: "heading",
        text: "Key Takeaways"
      },
      {
        type: "list",
        items: [
          "Use a singleton service to manage Socket.io connection lifecycle",
          "Integrate WebSocket events with Redux for centralized state",
          "Handle reconnection automatically with NetInfo",
          "Implement optimistic updates for better UX",
          "Store pending messages and resend after reconnection",
          "Clean up socket listeners to prevent memory leaks",
          "Use acknowledgments to confirm message delivery"
        ]
      },
      {
        type: "paragraph",
        text: "This architecture has been battle-tested in production with thousands of concurrent users. It handles poor network conditions gracefully and provides a smooth, native-feeling chat experience."
      }
    ]
  },
  {
    id: "codepush-ota",
    title: "OTA Updates in React Native with CodePush",
    excerpt: "How I use Microsoft App Center's CodePush to ship hotfixes and feature updates without waiting for App Store review.",
    date: "November 2023",
    readTime: "6 min read",
    tags: ["CodePush", "React Native", "DevOps"],
    color: "#7c3aed",
    author: "Vaibhav Mehar",
    content: [
      {
        type: "intro",
        text: "Waiting days or weeks for App Store review to fix a critical bug is painful. CodePush lets you push JavaScript updates directly to users' devices instantly. Here's how I set it up and use it in production."
      },
      {
        type: "heading",
        text: "What is CodePush?"
      },
      {
        type: "paragraph",
        text: "CodePush is Microsoft's service that enables React Native developers to push updates directly to app users without going through the App Store. It works by replacing your JavaScript bundle and assets while keeping the native code unchanged."
      },
      {
        type: "heading",
        text: "Setting Up CodePush"
      },
      {
        type: "paragraph",
        text: "First, install the CodePush SDK and link it:"
      },
      {
        type: "code",
        language: "bash",
        code: `npm install --save react-native-code-push
npx react-native link react-native-code-push

# Install App Center CLI
npm install -g appcenter-cli
appcenter login`
      },
      {
        type: "paragraph",
        text: "Create apps in App Center for iOS and Android, then grab your deployment keys:"
      },
      {
        type: "code",
        language: "bash",
        code: `appcenter apps create -d MyApp-iOS -o iOS -p React-Native
appcenter apps create -d MyApp-Android -o Android -p React-Native

appcenter codepush deployment list -a <username>/MyApp-iOS
appcenter codepush deployment list -a <username>/MyApp-Android`
      },
      {
        type: "heading",
        text: "Integrating in Your App"
      },
      {
        type: "paragraph",
        text: "Wrap your root component with CodePush HOC:"
      },
      {
        type: "code",
        language: "javascript",
        code: `import codePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  installMode: codePush.InstallMode.ON_NEXT_RESUME,
  minimumBackgroundDuration: 60 * 10, // 10 minutes
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* Your app */}
      </NavigationContainer>
    </Provider>
  );
};

export default codePush(codePushOptions)(App);`
      },
      {
        type: "heading",
        text: "Deployment Strategy"
      },
      {
        type: "paragraph",
        text: "I use two deployments for each platform: Staging and Production. This allows testing before rolling out to all users:"
      },
      {
        type: "code",
        language: "bash",
        code: `# Release to Staging first
appcenter codepush release-react \\
  -a <username>/MyApp-iOS \\
  -d Staging \\
  -m --description "Fix chat reconnection issue"

# After testing, promote to Production
appcenter codepush promote \\
  -a <username>/MyApp-iOS \\
  -s Staging \\
  -d Production`
      },
      {
        type: "heading",
        text: "Update UI with Progress"
      },
      {
        type: "paragraph",
        text: "Show users when an update is downloading:"
      },
      {
        type: "code",
        language: "javascript",
        code: `import codePush from 'react-native-code-push';

const App = () => {
  const [updateProgress, setUpdateProgress] = useState(null);
  
  useEffect(() => {
    const syncStatusCallback = (status) => {
      switch(status) {
        case codePush.SyncStatus.DOWNLOADING_PACKAGE:
          console.log('Downloading update...');
          break;
        case codePush.SyncStatus.INSTALLING_UPDATE:
          console.log('Installing update...');
          break;
      }
    };
    
    const downloadProgressCallback = (progress) => {
      setUpdateProgress(progress);
    };
    
    codePush.sync(
      { 
        installMode: codePush.InstallMode.ON_NEXT_RESUME,
      },
      syncStatusCallback,
      downloadProgressCallback
    );
  }, []);
  
  return (
    <View style={styles.container}>
      {updateProgress && (
        <View style={styles.updateBanner}>
          <Text>Downloading update: {Math.round(updateProgress.receivedBytes / updateProgress.totalBytes * 100)}%</Text>
        </View>
      )}
      {/* Rest of your app */}
    </View>
  );
};`
      },
      {
        type: "heading",
        text: "Best Practices"
      },
      {
        type: "list",
        items: [
          "Only push JS/asset changes — native code requires full app update",
          "Test updates on Staging deployment before Production",
          "Use mandatory updates sparingly — for critical bugs only",
          "Set rollback policies in case something goes wrong",
          "Monitor update adoption rates in App Center analytics",
          "Keep update bundles small to avoid long download times",
          "Use version targeting to avoid breaking older app versions"
        ]
      },
      {
        type: "heading",
        text: "When to Use CodePush"
      },
      {
        type: "paragraph",
        text: "✅ Bug fixes that don't require native changes"
      },
      {
        type: "paragraph",
        text: "✅ UI/UX improvements and copy changes"
      },
      {
        type: "paragraph",
        text: "✅ Feature flags and A/B test configurations"
      },
      {
        type: "paragraph",
        text: "❌ Native module updates or third-party SDK changes"
      },
      {
        type: "paragraph",
        text: "❌ Major feature releases (users expect App Store updates)"
      },
      {
        type: "paragraph",
        text: "CodePush has been a lifesaver multiple times. When we discovered a critical crash affecting login, we pushed a fix to 100% of users within 2 hours — something impossible with traditional app updates."
      }
    ]
  },
  {
    id: "typescript-rn",
    title: "Why I Switched to TypeScript for All My React Native Projects",
    excerpt: "TypeScript catches bugs before runtime, improves DX, and makes refactoring painless. Here's my setup and the patterns I rely on.",
    date: "September 2023",
    readTime: "7 min read",
    tags: ["TypeScript", "React Native", "Best Practices"],
    color: "#f59e0b",
    author: "Vaibhav Mehar",
    content: [
      {
        type: "intro",
        text: "I resisted TypeScript for a year. It seemed like unnecessary overhead. But after converting my first React Native project, I was hooked. The confidence it gives you when refactoring and the bugs it catches before runtime are game-changing."
      },
      {
        type: "heading",
        text: "The Turning Point"
      },
      {
        type: "paragraph",
        text: "We had a nasty production bug: a navigation prop was undefined, crashing the app for users on a specific flow. The bug existed for weeks because that flow wasn't hit during testing. TypeScript would have caught this immediately."
      },
      {
        type: "heading",
        text: "Setting Up TypeScript in React Native"
      },
      {
        type: "paragraph",
        text: "Modern React Native makes TypeScript setup easy:"
      },
      {
        type: "code",
        language: "bash",
        code: `# New project with TypeScript template
npx react-native init MyApp --template react-native-template-typescript

# Existing project
npm install --save-dev typescript @types/react @types/react-native
npx tsc --init`
      },
      {
        type: "paragraph",
        text: "Here's my tsconfig.json for React Native:"
      },
      {
        type: "code",
        language: "json",
        code: `{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "lib": ["es2019"],
    "jsx": "react-native",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@utils/*": ["utils/*"],
      "@types/*": ["types/*"]
    }
  },
  "exclude": ["node_modules"]
}`
      },
      {
        type: "heading",
        text: "Typing Navigation"
      },
      {
        type: "paragraph",
        text: "React Navigation types are powerful once you set them up correctly:"
      },
      {
        type: "code",
        language: "typescript",
        code: `// types/navigation.ts
export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Post: { postId: string; commentId?: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Now in any screen:
import { useRoute, RouteProp } from '@react-navigation/native';

type PostScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;

const PostScreen = () => {
  const route = useRoute<PostScreenRouteProp>();
  const { postId, commentId } = route.params; // ✅ Fully typed!
  
  return <View>...</View>;
};`
      },
      {
        type: "heading",
        text: "API Response Types"
      },
      {
        type: "paragraph",
        text: "Define types for your API responses to catch data shape mismatches:"
      },
      {
        type: "code",
        language: "typescript",
        code: `// types/api.ts
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Post {
  id: string;
  userId: string;
  title: string;
  content: string;
  likes: number;
  createdAt: string;
  author: User;
}

// In your API service
const fetchPost = async (postId: string): Promise<Post> => {
  const response = await fetch(\`/api/posts/\${postId}\`);
  const data: Post = await response.json();
  return data; // ✅ Type-safe
};`
      },
      {
        type: "heading",
        text: "Redux Toolkit with TypeScript"
      },
      {
        type: "paragraph",
        text: "RTK has excellent TypeScript support. Here's how I type my slices:"
      },
      {
        type: "code",
        language: "typescript",
        code: `// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

// Typed selector
export const selectCurrentUser = (state: RootState) => 
  state.user.currentUser;

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;`
      },
      {
        type: "heading",
        text: "Component Props Pattern"
      },
      {
        type: "paragraph",
        text: "I use this pattern for all component props:"
      },
      {
        type: "code",
        language: "typescript",
        code: `interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  onComment?: (postId: string) => void;
  variant?: 'default' | 'compact';
}

const PostCard: React.FC<PostCardProps> = ({ 
  post, 
  onLike, 
  onComment,
  variant = 'default' 
}) => {
  return (
    <TouchableOpacity onPress={() => onLike(post.id)}>
      <Text>{post.title}</Text>
    </TouchableOpacity>
  );
};

export default PostCard;`
      },
      {
        type: "heading",
        text: "Utility Types I Use Daily"
      },
      {
        type: "paragraph",
        text: "TypeScript's utility types are incredibly handy:"
      },
      {
        type: "code",
        language: "typescript",
        code: `// Pick specific fields
type UserPreview = Pick<User, 'id' | 'name' | 'avatar'>;

// Omit fields
type UserWithoutEmail = Omit<User, 'email'>;

// Partial (all optional)
type UpdateUserPayload = Partial<User>;

// Make specific fields optional
type CreatePostPayload = Omit<Post, 'id' | 'createdAt'>;

// Record for key-value maps
type PostsById = Record<string, Post>;`
      },
      {
        type: "heading",
        text: "Benefits I've Experienced"
      },
      {
        type: "list",
        items: [
          "Catch bugs at compile time instead of runtime",
          "Autocomplete for everything — discover API shapes as you code",
          "Fearless refactoring — rename props, functions, types everywhere instantly",
          "Self-documenting code — types serve as inline documentation",
          "Better collaboration — team members understand expected data shapes",
          "Fewer unit tests needed — TypeScript catches many bugs tests would catch"
        ]
      },
      {
        type: "heading",
        text: "Common Pitfalls to Avoid"
      },
      {
        type: "paragraph",
        text: "❌ Don't use 'any' — it defeats the purpose"
      },
      {
        type: "paragraph",
        text: "❌ Don't over-engineer types — start simple, refine as needed"
      },
      {
        type: "paragraph",
        text: "✅ Use unknown instead of any when you truly don't know the type"
      },
      {
        type: "paragraph",
        text: "✅ Enable strict mode — it catches more bugs"
      },
      {
        type: "paragraph",
        text: "✅ Create shared types in a /types folder for reuse"
      },
      {
        type: "paragraph",
        text: "The upfront cost of learning TypeScript pays dividends. I'm now more productive, confident, and ship fewer bugs. Every new project starts with TypeScript — no exceptions."
      }
    ]
  },
];
