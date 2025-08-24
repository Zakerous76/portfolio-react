import project1 from "../assets/projects/project-1.jpg"
import project2 from "../assets/projects/project-2.jpg"
import project3 from "../assets/projects/project-3.jpg"
import project4 from "../assets/projects/project-4.jpg"
import project5 from "../assets/projects/project-5.jpg"
import project6 from "../assets/projects/project-6.jpg"
import project7 from "../assets/projects/confusion_matrix.png"
import project8 from "../assets/projects/project-8.jpg"
import project9 from "../assets/projects/project-9.jpg"

export const HERO_CONTENT = `Hi! I’m Zaker, a Master’s student in Computer Engineering at Yıldız Technical Univeristy with a passion for web and mobile development, machine learning, and AI. I’ve built projects ranging from full-stack web apps to Android accessibility tools, and I enjoy turning ideas into functional, real-world applications.`

export const ABOUT_TEXT = `Graduated from Ankara University, I specialize in web and mobile development, and machine learning. My work spans full-stack MERN applications, Flutter apps, and deep learning research. I enjoy learning new technologies and applying them to solve practical problems. I am proficient in JavaScript, Python, Dart, and Java, and I have experience with React, Next.js, Flutter, and cloud deployment.`

export const EXPERIENCES = [
  {
    year: "Feb 2024 – Aug 2024",
    role: "Data Scientist & API Developer",
    company: "EmlakRaporum, Ankara",
    description: `Managed end-to-end data workflows for a real estate evaluation startup: collection, processing, visualization.
Developed APIs using FastAPI to serve interactive Plotly visualizations integrated into the website.
Deployed and optimized the system with Docker on AWS EC2, ensuring scalable and reliable operation.`,
    technologies: [
      "Python",
      "pandas",
      "Plotly",
      "FastAPI",
      "Docker",
      "AWS EC2",
      "BeautifulSoup",
    ],
  },
  {
    year: "Jul 2023 – Sep 2023",
    role: "Data Analyst Intern",
    company: "ORSAM, Ankara",
    description: `Developed Python modules for text processing, data visualization, and analytics.Preprocessed Latin texts and applied text postprocessing to generate word clouds (unigrams/bigrams) for Arabic and English texts.Performed tweet frequency, attitude distribution, geographic analysis, and hashtag usage insights.`,
    technologies: ["Python", "pandas", "matplotlib", "seaborn", "NLP"],
  },
  {
    year: "Dec 2024 – Mar 2025",
    role: "Online Machine Learning Course Teaching Support (Volunteer)",
    company: "UNDP ICPSD, İstanbul",
    description: `Conducted live Python sessions covering data structures, web scraping, and database operations.Assisted students in practical exercises, demonstrating programming concepts and problem-solving techniques.`,
    technologies: ["Python", "Pandas", "BeautifulSoup"],
  },
  {
    year: "2024 - Present",
    role: "Other Experience",
    company: "English Instructor",
    description: `Everest SAT: Provided part-time tutoring for SAT preparation, enhancing communication and mentoring skills. Conducting online classes at the moment`,
    technologies: ["English"],
  },
]

export const PROJECTS = [
  {
    title: "BookHive",
    image: project1,
    description:
      "A full-stack MERN web application that connects readers with free books via the  Gutendex API. Users can browse and search for books, download them in different formats, mark favorite books, and leave reviews with ratings.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "MongoDB",
      "Redux",
      "REST API",
      "Express",
    ],

    url: "https://bookhive-edu.vercel.app/",
  },
  {
    title:
      "Research Project - Classifying Abnormal Sperm Morphologies Using Deep Learning: An Ensemble Approach on Hi-Lab Sperm Morphology Dataset ",
    image: project7,
    description:
      "Designed and implemented an ensemble deep learning model using EfficientNetB4, EfficientNetB6, and Xception to classify 18 sperm morphology types (1 normal, 17 abnormal) from low-resolution microscopic images. Applied advanced preprocessing and augmentation techniques to increase model robustness and achieved an average accuracy of ~69.2%, F1-score of ~68.4%, and demonstrated a 5% improvement over individual models using ensemble averaging.",
    technologies: [
      "Python",
      "Jupyter Notebook",
      "torch",
      "sklearn",
      "numpy",
      "matplotlib",
    ],

    url: "https://bookhive-edu.vercel.app/",
  },
  {
    title: "Opinion Mining on Web Reviews",
    image: project2,
    description:
      "Developed a sentiment analysis system using machine learning to classify Yelp user reviews into positive, negative, or neutral categories. Designed three sentiment classification pipelines: binary (positive/negative), ternary (positive/neutral/negative), and 1–5-star rating prediction. ",
    technologies: ["Python", "sklearn", "Yelp-Reviews-Dataset", "Streamlit"],
    url: "https://yelp-rev-sentiment-analysis.streamlit.app/",
  },

  {
    title: "PicToSpeech",
    image: project4,
    description:
      "An Android app that helps visually impaired users understand English and Turkish texts in images. Used Google’s ML Kit for character recognition and TTS libraries for speech synthesis. Extracted context from text using Gemini LLM API.",
    technologies: ["Java", "Android Studio", "Google's ML Kit", "Gemini API"],
    url: "https://github.com/Zakerous76/PicToSpeech",
  },
  {
    title: "MyFitWizz: Fitness App",
    image: project5,
    description:
      "A cross-platform fitness app built using Flutter and Firebase. Features include secure registration and authentication, customizable user profiles, exercise dashboard, RPE and BMI calculators, and workout timers.",

    technologies: ["Dart", "Flutter", "Firebase"],
    url: "https://github.com/Zakerous76/myfitwizz",
  },
  {
    title: "Helka Company Landing Page (Incomplete)",
    image: project8,
    description:
      "The repository accessed by clicking this card contains a partially completed landing page for Helka. The project was originally intended to create a modern, interactive website for the company, but the project was later discontinued.",
    technologies: ["Javascript", "NextJS"],
    url: "https://github.com/Zakerous76/helka-react",
  },

  {
    title: "Real Estate Dashboard Plot API",
    image: project9,
    description:
      "A FastAPI web application that provides interactive Plotly charts for real estate sales, population statistics, and weather data. All charts are served as self-contained HTML, allowing them to be viewed directly in the browser without any additional frontend setup. Optionally, the application can be easily adapted to serve JSON data for integration with custom frontend frameworks or dashboards.",
    technologies: ["Python", "FastAPI", "Plotly", "Numpy"],
    url: "https://github.com/Zakerous76/analythings-viz-2-fastAPI-integration/tree/before_refactoring",
  },

  {
    title: "PromptLand",
    image: project6,
    description:
      "A cross-platform fitness app built using Flutter and Firebase. Features include secure registration and authentication, customizable user profiles, exercise dashboard, RPE and BMI calculators, and workout timers.",

    technologies: ["Dart", "Flutter", "Firebase"],
    url: "https://prompt-land-xi.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "NextJS"],
    url: "/",
  },
]

export const CONTACT = {
  address: "Fatih, İstanbul - Türkiye",
  email: "mzhamin7@gmail.com",
}
