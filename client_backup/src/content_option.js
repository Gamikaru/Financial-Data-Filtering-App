import profilePic from "./assets/images/profilepic.jpg";

const logotext = "InvestiLearn";

const meta = {
    title: "InvestiLearn | Financial Investment Education",
    description:
        "InvestiLearn is your go-to platform for mastering financial investment. Learn, practice, and grow your investment skills with our interactive and engaging lessons.",
};

const introdata = {
    title2: "Welcome to InvestiLearn",
    title3: "Your Journey to Financial Mastery Begins Here",
    animated: {
        first: "Learn the fundamentals of investing",
        second: "Master advanced investment strategies",
        third: "Grow your wealth with confidence",
        fourth: "Interactive and engaging lessons",
        fifth: "Real-world investment simulations",
    },
    description: `InvestiLearn is dedicated to providing comprehensive and interactive financial investment education. Our platform offers a range of courses and tools designed to help you understand and excel in the world of investing. Whether you're a beginner or an experienced investor, our lessons are tailored to meet your needs and help you achieve your financial goals.`,
    your_img_url: profilePic,
};

const dataabout = {
    title: "About InvestiLearn",
    aboutme: `InvestiLearn is a cutting-edge platform designed to make financial investment education accessible and engaging. Our mission is to empower individuals with the knowledge and skills needed to make informed investment decisions and achieve financial independence. With a focus on interactive learning and real-world applications, InvestiLearn is your partner in financial success.`,
};

const worktimeline = [
    {
        jobtitle: "Founder & CEO",
        where: "InvestiLearn, Global",
        date: "Jan 2022 – Present",
    },
    {
        jobtitle: "Financial Analyst",
        where: "XYZ Financial Services, New York, USA",
        date: "Jan 2018 – Dec 2021",
    },
    {
        jobtitle: "Investment Advisor",
        where: "ABC Investments, London, UK",
        date: "Jan 2015 – Dec 2017",
    },
];

const skills = [
    // Investment Skills
    { name: "Stock Market Analysis", value: 90 },
    { name: "Portfolio Management", value: 85 },
    { name: "Risk Assessment", value: 80 },

    // Financial Tools
    { name: "Excel & Financial Modeling", value: 90 },
    { name: "Bloomberg Terminal", value: 85 },
    { name: "Trading Platforms", value: 80 },

    // Programming for Finance
    { name: "Python for Finance", value: 85 },
    { name: "R for Statistical Analysis", value: 80 },
    { name: "SQL for Data Management", value: 80 },
];

const services = [
    {
        title: "Investment Courses",
        description:
            "Comprehensive courses covering everything from the basics of investing to advanced strategies and portfolio management.",
    },
    {
        title: "Interactive Simulations",
        description:
            "Real-world investment simulations to practice and hone your skills in a risk-free environment.",
    },
    {
        title: "Personalized Coaching",
        description:
            "One-on-one coaching sessions with experienced investment advisors to help you achieve your financial goals.",
    },
    {
        title: "Market Analysis Tools",
        description:
            "Access to advanced tools and resources for analyzing market trends and making informed investment decisions.",
    },
];

const dataportfolio = [
    {
        title: "Stock Market Basics",
        description:
            "An introductory course covering the fundamentals of the stock market, including how to buy and sell stocks, and understanding market trends.",
        img: "https://img.youtube.com/vi/69nQPBiBVfM/hqdefault.jpg",
        repoUrl: "https://github.com/InvestiLearn/stock-market-basics",
    },
    {
        title: "Advanced Portfolio Management",
        description:
            "A comprehensive course on managing investment portfolios, including diversification strategies and risk management.",
        img: "https://img.youtube.com/vi/Ufwg7X6MCzo/hqdefault.jpg",
        repoUrl: "https://github.com/InvestiLearn/advanced-portfolio-management",
    },
    {
        title: "Real Estate Investment",
        description:
            "Learn the ins and outs of real estate investment, including property valuation, market analysis, and investment strategies.",
        img: "https://img.youtube.com/vi/7DAb4dOONYc/hqdefault.jpg",
        repoUrl: "https://github.com/InvestiLearn/real-estate-investment",
    },
    {
        title: "Cryptocurrency Trading",
        description:
            "An in-depth course on trading cryptocurrencies, including understanding blockchain technology and market dynamics.",
        img: "https://img.youtube.com/vi/pjqZhlnWB3c/hqdefault.jpg",
        repoUrl: "https://github.com/InvestiLearn/cryptocurrency-trading",
    },
    {
        title: "Financial Modeling",
        description:
            "Learn how to build financial models to forecast company performance and make informed investment decisions.",
        img: "https://img.youtube.com/vi/VXtIpgKZDR8/hqdefault.jpg",
        repoUrl: "https://github.com/InvestiLearn/financial-modeling",
    },
];

const contactConfig = {
    YOUR_EMAIL: "contact@investilearn.com",
    YOUR_PHONE_US: "+1 800 123 4567",
    YOUR_PHONE_UK: "+44 20 1234 5678",
    description: "Have questions or need assistance? Reach out to us!",
    YOUR_SERVICE_ID: "service_xxx",
    YOUR_TEMPLATE_ID: "template_xxx",
    YOUR_USER_ID: "user_xxx",
};

const socialprofils = {
    github: "https://github.com/InvestiLearn",
    linkedin: "https://linkedin.com/in/investilearn",
    twitter: "https://twitter.com/investilearn",
    // Removed Facebook as it's not listed in your resume
};

const languages = [
    { name: "English", level: "Fluent" },
    { name: "Spanish", level: "Advanced" },
    { name: "French", level: "Intermediate" },
];

export {
    contactConfig,
    dataabout,
    dataportfolio,
    introdata,
    languages,
    logotext,
    meta,
    services,
    skills,
    socialprofils,
    worktimeline
};
