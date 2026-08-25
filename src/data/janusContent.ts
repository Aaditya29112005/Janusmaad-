export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  iconName: string;
  href: string;
  badge?: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
  avatar?: string;
}

export const BRAND_INFO = {
  name: 'Janusmaad',
  tagline: "We Don't Just Do Marketing. We Deliver Growth.",
  heroSubtitle: 'Discover holistic digital growth, customer data platforms, attribution modeling, and hyper-personalization across all digital touchpoints.',
  email: 'hello@janusmaad.com',
  phone: '+91 9818747001',
  address: 'HD77, Sector-135, Noida, U.P., 201301, India',
  rating: '4.8',
  reviewCount: '6 REVIEWS',
  copyright: '© 2024 Janusmaad. All Rights Reserved.',
  socials: {
    linkedin: 'https://linkedin.com/company/janusmaad',
    instagram: 'https://instagram.com/janusmaad',
    facebook: 'https://facebook.com/janusmaad',
    twitter: 'https://twitter.com/janusmaad',
  },
};

export const METRICS_PROOF = [
  { value: '500X', label: 'Web Traffic Growth', subtext: 'Single-digit to triple-digit scaling' },
  { value: '4.8/5', label: 'Client Satisfaction Rating', subtext: 'Based on verified enterprise reviews' },
  { value: '10+', label: 'Years Experience', subtext: 'Deep expertise in MarTech & Growth' },
  { value: '100%', label: 'Data Transparency', subtext: 'Zero black-box metrics' },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'growth-as-a-service',
    title: 'Growth-as-a-Service',
    shortTitle: 'Growth as a Service',
    tagline: 'Growth for hire — from Audit, Discovery, Strategy & Coaching, through to Technical Execution.',
    description: 'All your needs covered. We work hand-in-hand with your team to bridge gaps between marketing, analytics, product, and engineering.',
    iconName: 'TrendingUp',
    href: '/services/growth-as-a-service',
    badge: 'Popular',
    highlights: [
      'Comprehensive Growth Blueprint & Audit',
      'Architecture, Data flows & Martech integration',
      'Orchestration across PPC, Social, SEO & CRO',
      'Culture of continuous experimentation',
      'Dedicated strategic advisory & ongoing recommendations'
    ],
  },
  {
    id: 'customer-data-platform',
    title: 'Customer Data Platform (CDP)',
    shortTitle: 'Customer Data Platform',
    tagline: 'Unify Customer Data for Real-Time Personalisation and Actionable Insights.',
    description: 'Implementing various tools might help. But what truly unlocks Growth is a unified CDP infrastructure.',
    iconName: 'Database',
    href: '/services/customer-data-platform',
    badge: 'Enterprise Stack',
    highlights: [
      'Avoid implementation gotchas with deep expertise',
      'Rapid deployment minimizing team downtime',
      'Tailored & scalable data governance architecture',
      'Full client empowerment & hands-on training',
      'Strict security, privacy & regulatory compliance'
    ],
  },
  {
    id: 'attribution-as-a-service',
    title: 'Attribution-as-a-Service',
    shortTitle: 'Attribution as a Service',
    tagline: 'Achieve precise attribution, detect anomalies and gain insights for data-driven decision-making.',
    description: 'Gain clarity across complex multi-touchpoint customer journeys with real-time anomaly detection.',
    iconName: 'PieChart',
    href: '/services/attribution-as-a-service',
    highlights: [
      'Multi-model comparison & custom model creation',
      'Cross-channel data quality & accuracy checks',
      'Conversion path & touchpoint synergy analysis',
      'Anomaly detection & automated ROI monitoring',
      'Actionable budget reallocation recommendations'
    ],
  },
  {
    id: 'personalisation-as-a-service',
    title: 'Personalisation-as-a-Service',
    shortTitle: 'Personalisation as a Service',
    tagline: 'Deliver customised experiences and next-best-actions across all channels.',
    description: 'Because every customer deserves a unique experience. Seamless omnichannel personalization powered by real-time data.',
    iconName: 'Sparkles',
    href: '/services/personalisation-as-a-service',
    badge: 'High Impact',
    highlights: [
      'Audit & Personalisation Maturity Assessments',
      'Dynamic UX delivery & ad campaign personalization',
      'Personalised lifecycle marketing automation',
      'Next-best-action decision engine algorithms',
      'AI & Machine Learning powered experience scaling'
    ],
  },
  {
    id: 'advertising-as-a-service',
    title: 'Advertising-as-a-Service',
    shortTitle: 'Advertising as a Service',
    tagline: 'Craft data-driven advertising strategies to maximise ad spend efficiency.',
    description: 'Target the right audience effectively with data-backed creative, bidding optimization, and audience segmentation.',
    iconName: 'Target',
    href: '/services/advertising-as-a-service',
    highlights: [
      'Data-driven advertising strategy & spend optimization',
      'Personalized ad campaigns connecting at a deeper level',
      'Tailored solutions for startups to large enterprise',
      'Over a decade of hands-on paid acquisition experience',
      'Guaranteed ad conversion improvements'
    ],
  },
  {
    id: 'search-everywhere-optimisation',
    title: 'Search Everywhere Optimisation',
    shortTitle: 'Search Everywhere SEO',
    tagline: 'Optimise your digital presence to ensure your audience can always find you.',
    description: "If they don't see you, they won't find you. Holistic SEO across Google, YouTube, Amazon, TikTok, and social media.",
    iconName: 'Search',
    badge: 'Omni-Channel',
    href: '/services/search-everywhere-optimisation',
    highlights: [
      'Omni-platform optimization (Search, Social, E-comm, Video)',
      'Integrated marketing strategy aligning all touchpoints',
      'Expert keyword research & URL mapping',
      'Technical SEO, schema markup & site speed enhancement',
      'Continuous monitoring & algorithm update adaptation'
    ],
  },
  {
    id: 'lifecycle-marketing-automation',
    title: 'Lifecycle Marketing Automation',
    shortTitle: 'Lifecycle Marketing',
    tagline: 'Design personalised on-site interactions with data-driven lifecycle strategies.',
    description: 'Nurture and retain customers with automated workflows, personalized email/SMS triggers, and customer journey orchestration.',
    iconName: 'Repeat',
    href: '/services/lifecycle-marketing-automation',
    highlights: [
      'On-site interaction personalization & popups',
      'Automated nurture sequences & retention flows',
      'Audience segmentation & dynamic content messaging',
      'Churn prevention & win-back triggers',
      'Comprehensive lifecycle analytics & performance tracking'
    ],
  },
];

export const SERVICE_PILLARS = [
  {
    id: 'martech',
    title: 'Martech',
    tagline: 'Marketing Technology Architecture',
    description: 'Strategic guidance and implementation support to optimize marketing efforts through the effective utilization of technology and data-driven solutions.',
    icon: 'Layers',
    href: '/services/martech',
  },
  {
    id: 'adtech',
    title: 'Adtech',
    tagline: 'Advertising Tech Infrastructure',
    description: 'Advanced advertising technologies to enhance targeting, campaign management, and overall performance of digital advertising efforts.',
    icon: 'Zap',
    href: '/services/adtech',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    tagline: 'Actionable Intelligence',
    description: 'Deliver actionable insights by analyzing data to drive informed decision-making and business growth.',
    icon: 'BarChart3',
    href: '/services/analytics',
  },
  {
    id: 'data',
    title: 'Data',
    tagline: 'Enterprise Data Management',
    description: 'Comprehensive solutions for collecting, managing, and leveraging data to drive strategic outcomes.',
    icon: 'Database',
    href: '/services/data',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'prashant',
    quote: 'Parag and his team bring a wealth of experience in digital marketing and I have full trust in Janusmaad to help me grow my business. They are passionate about the customer journey and have demonstrated strong technical knowledge in analytics, social media marketing, data integration and lifecycle marketing. Thank you guys and I would recommend highly to anyone seeking guidance in this subject.',
    author: 'Prashant Alambara',
    role: 'Founder',
    company: 'Happy Home Broker Owner',
    metric: 'Full Customer Journey Mastery',
  },
  {
    id: 'ben',
    quote: 'Parag and the team at Janusmaad have been really great to work with, motivated to keep things on track so that we can focus on our business, and really good at shining a light on the complexities of doing digital advertising accurately. Highly recommend.',
    author: 'Ben Hutchings',
    role: 'General Manager',
    company: 'Paper Bark Camp',
    metric: 'High Efficiency Advertising',
  },
  {
    id: 'vishwajeet',
    quote: 'Team has skilled professionals who plan, maintain and keep targets and tasks onboard which helps us see the progress from our own eyes. They are very Responsive, Honest, Genuine and go above and over boundaries and time for us. Helped increase traffic from Single digit to Triple digit. Or you can say increased web traffic 500X. Enabled Data-Driven Marketing & Advertising.',
    author: 'Vishwajeet Rawat',
    role: 'Founder',
    company: 'Himalayan Panacea',
    metric: '500X Traffic Increase',
  },
];

export const WHY_JANUSMAAD = [
  {
    number: '01',
    title: 'We Care',
    subtitle: 'Accountable & Genuinely Invested',
    description: 'We care genuinely; pouring our hearts and minds into ensuring your success. Use tech to craft exceptional personalised experience for customer.',
  },
  {
    number: '02',
    title: 'Data Magicians',
    subtitle: 'Growth Through Data',
    description: 'From our vast experience, we fuel growth through data: collecting, stitching, modeling, distributing, generating insights, data science, audience management, and orchestration.',
  },
  {
    number: '03',
    title: 'Persistence Over Promises',
    subtitle: 'Transparency and Commitment',
    description: 'We value honesty in our commitments; we share our experience and guide you to make calculated data-driven decisions.',
  },
  {
    number: '04',
    title: 'High-Impact Results',
    subtitle: 'Sustainable High ROI',
    description: 'While we appreciate quick wins, we prioritise sustainable growth. Instead of rushing into burning cash on paid media, we analyse data and enable you to take tactical and strategic decisions.',
  },
];

export const VALUES = [
  {
    title: 'Integrity',
    description: 'Upholding honesty, transparency, and ethical behaviour in every single action.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Customer-First Approach',
    description: 'Committed to shaping every decision, action, and solution around the needs of the customer.',
    icon: 'Users',
  },
  {
    title: 'Endurance',
    description: 'Standing resilient in the face of challenges and tirelessly pursuing innovative solutions.',
    icon: 'Activity',
  },
  {
    title: 'Greatness',
    description: 'Relentless pursuit of excellence and consistently challenging ourselves to surpass expectations.',
    icon: 'Award',
  },
];

export const GAAS_TIMELINE = [
  {
    step: '01',
    title: 'Growth Blueprint',
    description: 'Detailed growth plan encompassing Status Quo & Existing Bottlenecks discovery, Market Research, SEO & SEM Audit, Analytics Review, Performance & Reporting Review, Product/Competitor analysis, Process, Tool and Tech Audit, and custom Growth Blueprint creation.',
  },
  {
    step: '02',
    title: 'Growth Foundation',
    description: 'Define and implement the Architecture, Data flows and processes needed to track & measure insights: Data Mapping & Source Connections, Analytics/Martech/Adtech Integrations, CDP Integration, Lifecycle Marketing Integrations, and Attribution Modelling.',
  },
  {
    step: '03',
    title: 'Orchestration & Execution',
    description: 'Prioritise, Manage, Orchestrate and Execute growth initiatives across Display PPC & Social Ads, SEO & Content, CRO, Web Dev & Design, Customer Lifecycle Marketing, Marketing & Sales Automation, Process Automation, Affiliate Marketing & Branding.',
  },
  {
    step: '04',
    title: 'Experimentation',
    description: 'Build out the culture of experimentation, process automation, continuous innovation and improvement: Growth Experimentation, Omni-Channel Personalisation, Feedback Loop Integration, 360 customer engagement execution, Tools & Process Training.',
  },
  {
    step: '05',
    title: 'Ongoing Recommendation',
    description: 'Continuous support and guidance as your growth partners, whether as advisors or executing new initiatives: Strategic Advisory, Continuous Support, Regular Check-ins, Crisis Management.',
  },
];

export const GAAS_WHY_PILLARS = [
  {
    title: 'Growth marketing strategies are advancing rapidly',
    text: 'Advances in growth strategies, such as implementing the correct analytics stack, achieving best-practice channel performance, enabling personalization, and effectively implementing marketing/sales automation, are complex. They demand business acumen, funnel understanding, and cross-disciplinary expertise in growth, monetization, marketing, analytics, product development, and engineering. There’s no one-size-fits-all solution for sustainable growth. Many challenges require continuous optimization, akin to changing a wheel on a moving car.',
  },
  {
    title: 'Bridge the gap between your teams',
    text: 'We are growth and personalization experts who bridge the gap between teams to establish a data-driven culture. Our small team, with entrepreneurial backgrounds, comprises marketers, data scientists, and developers. As your trusted guide, we identify the most impactful areas of your funnel to improve your bottom line. Whether you need traditional advisory services or in-house support to execute strategies, our growth-as-a-service offers on-call consultants working directly with you.',
  },
  {
    title: 'Get expertise you need to succeed, without over-hiring',
    text: "For the cost of a single full time employee, you get best-in-market consultants across all elements of growth: Analytics, Engineering, Product, PPC, SEO & Content, CRO, Web design, Customer lifecycle marketing, Personalisation and marketing/sales automation. We pull your teams together across functions, train them up on best-practice tools and processes. To achieve the same level of expertise, you'd need to hire 4-5 people on competitive salaries.",
  },
];

export const CDP_PACKAGES = [
  {
    title: 'Guided DIY',
    subtitle: 'Best if you are on a budget and have analytics & engineering capacity available.',
    features: [
      'Strategic and tactical CDP implementation advice tailored to business goals',
      'Detailed step-by-step instructions for your internal engineering team',
      'Review and feedback for each critical milestone',
      'Weekly calls to keep implementation on track',
      'Provide Best Practice Templates (tracking plans, object journey mapping, data mapping, etc.)',
      '24/7 technical support and guidance'
    ],
  },
  {
    title: 'Managed Implementation',
    subtitle: 'Best if you need fast results without impacting your internal team.',
    badge: 'Most Popular',
    features: [
      'Everything from Guided DIY package, plus:',
      'End-to-End Project Management',
      'CDP Setup (sources, destinations, integration and configuration)',
      'Detailed Tracking Plan Development',
      'Rigorous Quality Assurance (QA)',
      'Regular updates on implementation progress and outcomes',
      'Post-Implementation Review',
      'Dedicated Account Manager',
      'Knowledge Transfer & Training sessions to build internal capability'
    ],
  },
  {
    title: 'Growth Accelerator',
    subtitle: 'Best if you need an overhaul of your entire growth stack with CDP as the centre-piece.',
    features: [
      'Everything from Managed Implementation Package, plus Growth Blueprint:',
      'Growth Stack Review & Target State Development',
      'Specific recommendations for Growth tools & CDP integration',
      'Guidance on using advanced tools like Reverse ETL',
      'Seamless integration of CDP with other tools in your growth stack',
      'Tailored training sessions & regular reporting to track ROI',
      'Implementation of additional tools (Marketing Automation & Analytics Platforms)'
    ],
  },
];

export const CDP_FAQS: FAQItem[] = [
  {
    question: 'How long does a CDP implementation take?',
    answer: 'We can help you implement a CDP as quickly as 4-6 weeks if we project-manage the implementation. The ultimate velocity is dependent on the complexity of your data pipeline and the internal resources you can provide for the aspects you choose to do yourself.',
  },
  {
    question: 'Can you help me implement any CDP?',
    answer: 'Absolutely. Most CDPs work in a similar way, and the principles for a clean and effective implementation are the same for any platform you choose.',
  },
  {
    question: 'What CDP do you recommend for my business?',
    answer: 'Most of our current clients have chosen Segment, but the best CDP for your business may be different. If you don’t have a preference yet, we can help you make a choice based on your priorities and budget. We never take commission for any tools we recommend, so you can always trust our advice.',
  },
  {
    question: "I already have a CDP, but it doesn't work as we'd hoped. Can you fix it?",
    answer: 'Certainly! We have worked with many clients who had already implemented a CDP, but weren’t happy with the value they got out of it. In these cases we typically do a full assessment, and make specific recommendations on how to improve the setup. Sometimes, building a new instance from scratch makes more sense than fixing an existing one.',
  },
  {
    question: 'We are already using a Reverse ETL solution. Is a CDP still necessary?',
    answer: 'Reverse ETL is extremely helpful for keeping attribute-based customer data (such as contact details) in sync across all your systems. A CDP, on the other hand, is ideal for event-based tracking (such as conversion events or actions being taken in your app), and then piping this information into multiple destinations to take actions based on this. So they both have their place and fulfill different purposes.',
  },
  {
    question: 'Will you need access to our code-base to implement server-side code?',
    answer: 'No. We never work directly inside your codebase — this is to protect both your business and ours. But we will provide very specific instructions (usually in the form of tickets) to your engineering team or contractor to implement any necessary changes to your codebase.',
  },
];

export const PAAS_FAQS: FAQItem[] = [
  {
    question: 'What is Personalisation as a Service and how does it differ from traditional customer service?',
    answer: 'Personalisation as a Service (PaaS) is a cloud-based model that integrates content and customer data from multiple sources to provide personalised experiences across all channels, whereas traditional customer service tailors interactions and support based only on direct manual interactions.',
  },
  {
    question: 'What are the primary benefits of using Personalisation as a Service for businesses?',
    answer: 'Personalisation is a necessity for any business to grow. In this age, we cannot serve the same static experience to every customer and expect to scale up. Primary benefits include enhanced customer satisfaction and loyalty, increased sales and conversion rates, and the ability to deliver consistent omnichannel experiences.',
  },
  {
    question: 'How does Personalisation as a Service support omnichannel personalisation?',
    answer: 'Personalisation as a Service integrates content and customer data from various sources, enabling businesses to deliver personalised messages, recommendations, and offerings seamlessly across different channels such as websites, emails, mobile apps, and ad networks.',
  },
  {
    question: "Why is Personalisation as a Service crucial in today's competitive business landscape?",
    answer: 'It is crucial because it helps businesses create unique and differentiated customer experiences, build stronger connections with customers, and achieve significant improvements in retention, lifetime value, and revenue.',
  },
  {
    question: 'How can businesses get started with Personalisation as a Service?',
    answer: 'Businesses can get started by learning the foundations of personalisation, understanding their customer needs and evaluating personalisation platforms. Janusmaad is there to help businesses understand their past, present and future in the personalisation space.',
  },
];

export const SEO_PACKAGES = [
  {
    id: 'seo-core',
    title: 'SEO Core',
    subtitle: 'Ideal for small businesses & startups looking to establish a strong SEO foundation.',
    keywords: 'Local Keywords: 20 | National Keywords: 30',
    backlinks: '20 HighDA & HighRA Backlinks + 5 Guest Posts',
    blogPosts: '2 Posts / Month',
    highlights: [
      'In-Depth Site & Competitor Analysis',
      'Canonicalization & Internal Link Structuring',
      'Robots.txt & XML Sitemap Setup',
      'Google Search Console & Speed Optimization',
      'Logo, Contact & Breadcrumb Schema Markup',
      'Google Business Profile Verification & Local SEO',
      'YouTube SEO: 3 Videos, 10 Keywords, 20 Backlinks',
      'Facebook & Instagram Profile & Bio Optimization',
      'TikTok & Amazon Basic Setup & Optimization',
      'Monthly Search Engine Rank & Activity Reports'
    ],
  },
  {
    id: 'seo-advanced',
    title: 'SEO Advanced',
    subtitle: 'Perfect for growing businesses needing advanced multi-channel SEO strategies.',
    badge: 'Recommended',
    keywords: 'Local Keywords: 30 | National Keywords: 40',
    backlinks: '40 HighDA & HighRA Backlinks + 10 Guest Posts',
    blogPosts: '4 Posts / Month',
    highlights: [
      'Everything in SEO Core package, plus:',
      'YouTube SEO: 6 Videos, 20 Keywords, 40 Backlinks',
      'Facebook: 3-Month Content Calendar, Messenger Bot Setup',
      'Instagram: Reels Strategy & Shoppable Post Setup',
      'TikTok: Trend & Challenge Strategy, Collaboration Tips',
      'Amazon: Backend Keyword & FBA Optimization Tips',
      'Social Media Performance & Competitive Reports'
    ],
  },
  {
    id: 'seo-elite',
    title: 'SEO Elite',
    subtitle: 'Suited for large enterprises seeking advanced real-time SEO & 24/7 strategic support.',
    keywords: 'Local Keywords: 40 | National Keywords: 50',
    backlinks: '60 HighDA & HighRA Backlinks + 30 Guest Posts',
    blogPosts: '6 Posts / Month',
    highlights: [
      'Everything in SEO Advanced package, plus:',
      'YouTube SEO: 10 Videos, 30 Keywords, 60 Backlinks',
      'Facebook: 6-Month Calendar, Group Strategy, Lead Gen Forms',
      'Instagram: Advanced Reels & Influencer Collaboration',
      'TikTok: Shopping Setup, Live Strategy & Verification',
      'Amazon: Extensive Backend Keywords, A+ Content & Video SEO',
      '24/7 Priority Dedicated Manager & Custom URL Tracking'
    ],
  },
];

export const SEO_FAQS: FAQItem[] = [
  {
    question: 'What is Search Everywhere Optimization, and why is it important in 2024?',
    answer: "Search Everywhere Optimization involves optimizing content across various platforms beyond Google, like YouTube, Amazon, TikTok, and social media. It's crucial because modern customers search for information on multiple platforms. A holistic approach ensures greater visibility and higher conversions.",
  },
  {
    question: 'How does optimizing for YouTube differ from traditional SEO for Google?',
    answer: 'YouTube optimization focuses on video content, using keywords in titles, descriptions, and tags, and enhancing thumbnails and playlists. Unlike Google’s text-based SEO, it emphasizes video elements and viewer engagement metrics like watch time and retention.',
  },
  {
    question: 'How can businesses benefit from optimizing for emerging platforms like TikTok and ChatGPT?',
    answer: 'TikTok optimization involves creating engaging short-form videos with trending hashtags to reach younger demographics. Optimizing for ChatGPT means providing clear, structured schema and concise content for AI models to relay accurately in response to conversational prompts.',
  },
  {
    question: 'Why is it important to optimize for Bing, and how does it differ from Google SEO?',
    answer: 'Bing holds a significant share of the desktop search market and attracts a distinct demographic. Bing SEO involves keyword optimization, quality content, and backlinks, similar to Google, but emphasizes social media signals and direct domain authority more strongly.',
  },
  {
    question: 'How does Facebook and Instagram optimization improve social media presence?',
    answer: 'Optimizing business profiles on Facebook and Instagram includes keyword-rich descriptions, structured content calendars, and engaging rich media. Utilizing Facebook Ads, Instagram Stories, Reels, and shopping features significantly boosts organic discovery and sales.',
  },
];

export const TECH_STACK = [
  { name: 'Segment', category: 'CDP & Data Routing' },
  { name: 'Adobe Experience Platform', category: 'Enterprise CDP' },
  { name: 'Tealium', category: 'Customer Data Hub' },
  { name: 'Snowplow', category: 'Behavioral Data Engine' },
  { name: 'Adobe Analytics', category: 'Enterprise Analytics' },
  { name: 'Mixpanel', category: 'Product Analytics' },
  { name: 'Google Analytics 4', category: 'Web Analytics' },
  { name: 'Analytics 360', category: 'Enterprise Web Analytics' },
  { name: 'Amplitude', category: 'Behavioral Analytics' },
  { name: 'Visual Website Optimizer', category: 'A/B Testing & Heatmaps' },
  { name: 'Braze', category: 'Customer Engagement' },
  { name: 'HubSpot', category: 'Inbound & Automation' },
  { name: 'Adobe Campaign', category: 'Cross-Channel Marketing' },
  { name: 'Optimizely', category: 'Experimentation Platform' },
  { name: 'Branch', category: 'Deep Linking & Attribution' },
  { name: 'Ensighten', category: 'Tag Management' },
  { name: 'Hotjar', category: 'Behavior Analytics' },
  { name: 'Adobe Launch', category: 'Tag Management' },
  { name: 'Google Tag Manager', category: 'Tag Infrastructure' },
  { name: 'Crazyegg', category: 'Click Heatmaps' },
  { name: 'Looker', category: 'Business Intelligence' },
  { name: 'Google BigQuery', category: 'Data Warehouse' },
  { name: 'Google Data Studio', category: 'Data Visualization' },
  { name: 'Tableau', category: 'Data Analytics' },
  { name: 'Google Ads', category: 'Search & Display Ads' },
  { name: 'Meta Business Suite', category: 'Paid Social Ads' },
  { name: 'X Business', category: 'Paid Advertising' },
  { name: 'Google Marketing Platform', category: 'Ad Tech Suite' },
  { name: 'Bing Ads', category: 'Search Advertising' },
  { name: 'LinkedIn Marketing Solutions', category: 'B2B Advertising' },
  { name: 'TikTok for Business', category: 'Short-Form Video Ads' },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Why Search Everywhere Optimization is Essential in 2024',
    excerpt: 'Discover why relying solely on Google SEO is no longer sufficient and how omni-platform optimization unlocks organic growth across YouTube, TikTok, and Amazon.',
    date: 'July 28, 2024',
    category: 'SEO Strategy',
    readTime: '6 min read',
  },
  {
    id: '2',
    title: 'The Blueprint for Building a High-Converting Customer Data Platform',
    excerpt: 'Learn the key pitfalls to avoid when setting up your CDP and how to unify fragmented user touchpoints into real-time actionable segments.',
    date: 'July 15, 2024',
    category: 'MarTech & Data',
    readTime: '8 min read',
  },
  {
    id: '3',
    title: 'Hyper-Personalization: Shifting from Static Campaigns to Next-Best-Actions',
    excerpt: 'Explore how top SaaS and Enterprise e-commerce brands leverage AI and event-driven architectures to deliver individualized experiences.',
    date: 'June 30, 2024',
    category: 'Personalization',
    readTime: '5 min read',
  },
];

