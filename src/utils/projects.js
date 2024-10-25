const projects = [
  {
    id: 1,
    projectName: "Qrious Trader",
    description:
      "A virtual trading application where users can trade in real markets with virtual money.",
    features: [
      "Authentication with Google OAuth, allowing login with Gmail.",
      "Crypto Coins Watchlist with real-time data.",
      "Buy and sell coins with virtual money in real markets.",
      "View portfolio with detailed statistics.",
      "Place market and limit orders.",
      "View performance based on the month.",
    ],
    techStack: ["ReactJS", "NodeJS", "MongoDB", "Tailwind CSS", "HTML", "CSS"],
    order: 1,
    imageUrl:
      "https://res.cloudinary.com/djpplkd1b/image/upload/v1729822441/VirtualTrading_apckjn.png",
    websiteUrl: "https://qurious-trader.vercel.app/",
    githubUrl: "https://github.com/Anjnaeyulu143/qurious-trader",
  },
  {
    id: 2,
    projectName: "Nxt Assess",
    description: "A quiz-like assessment platform with a 10-minute time limit.",
    features: [
      "Three types of questions: image-based, text-based, and selection-type.",
      "Timed quiz with automatic submission after 10 minutes.",
      "Allows manual submission before the time limit.",
      "Core logic includes callback functions, setInterval, React Context, and REST API integration.",
    ],
    techStack: ["ReactJS", "CSS", "JS", "HTML", "CSS"],
    order: 0,
    imageUrl:
      "https://res.cloudinary.com/djpplkd1b/image/upload/v1729822475/NxtAsses_xp8res.png",
    websiteUrl: "https://nxt-assess-three.vercel.app/login",
    githubUrl: "https://github.com/Anjnaeyulu143/Nxt-Assess",
  },
  {
    id: 3,
    projectName: "Virtual Library",
    description:
      "A virtual book library with various books, where users can manage their personal collection.",
    features: [
      "Reusable search functionality for finding books by name or author.",
      "Add books to the user's personal library.",
      "Remove books from the personal library.",
      "Basic routing concepts.",
      "Global state management using Redux.",
    ],
    techStack: ["ReactJS", "React-Redux", "Tailwind CSS", "JS", "HTML", "CSS"],
    order: 1,
    imageUrl:
      "https://res.cloudinary.com/djpplkd1b/image/upload/v1729822459/virtualLibrary_ctt1zk.png",
    websiteUrl: "https://virtual-book-library-chi.vercel.app/",
    githubUrl: "https://github.com/Anjnaeyulu143/virtual-book-library",
  },
];

export default projects;
