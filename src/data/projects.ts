export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  stack: string[];
  demo?: string;
  code: string;
  image?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "finance-simulator",
    title: "Финансовый Life-симулятор",
    description: "SPA с игровой механикой для обучения финансовой грамотности",
    fullDescription: "Полноценная экономическая симуляция с системой инвестиций, карьеры и случайных событий. Проект демонстрирует умение проектировать сложную бизнес-логику, работать с состоянием и создавать переиспользуемые UI-компоненты.",
    stack: ["React 19", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "Recharts", "date-fns"],
    demo: "https://handle-finance.vercel.app",
    code: "https://github.com/ledneev/handleFinance",
    image: "/images/finsim.jpg",
    featured: true,
    year: 2025
  },
  {
    id: "stellar-burgers",
    title: "Stellar Burgers",
    description: "Сервис заказов с конструктором бургеров, лентой заказов и личным кабинетом",
    fullDescription: "Полнофункциональное SPA с полным циклом аутентификации (JWT), защищёнными маршрутами, модальными окнами поверх страниц и unit и e2e тестами",
    stack: ["React", "TypeScript", "Redux Toolkit", "React Router v6", "REST API", "JWT", "jest", "cypress"],
    demo: "https://stellar-burgers-coral.vercel.app/", 
    code: "https://github.com/ledneev/stellar-burgers",
    image: "/images/burger.jpg",
    featured: true,
    year: 2026
  },
  {
    id: "weblarek",
    title: "Web-Larёk",
    description: "Интернет-магазин с каталогом, корзиной и оформлением заказа",
    fullDescription: "Полноценный e-commerce проект, построенный на архитектурном паттерне MVP с event-driven коммуникацией. Интеграция с REST API, сложная клиентская логика.",
    stack: ["TypeScript", "MVP Architecture", "Webpack", "REST API", "HTML Templates"],
    demo: "https://weblarek.vercel.app",
    code: "https://github.com/ledneev/weblarek",
    image: "/images/larek.jpg",
    featured: true,
    year: 2025
  },
  {
    id: "blog-customizer",
    title: "Blog Customizer",
    description: "UI-инструмент для динамической настройки стилей блога через CSS-переменные",
    fullDescription: "Инструмент с real-time изменением стилей на основе CSS Custom Properties. Создана библиотека компонентов, задокументированная в Storybook.",
    stack: ["React", "TypeScript", "CSS Custom Properties", "Storybook", "CSS Modules"],
    demo: "", // potom
    code: "https://github.com/ledneev/blog-customizer",
    image: "/images/blog.png",
    year: 2025
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Приложение для отслеживания погоды с Observer паттерном",
    fullDescription: "Реактивное приложение с интеграцией OpenWeatherMap API, геолокацией, кэшированием и адаптивным дизайном.",
    stack: ["JavaScript", "TypeScript", "Observer Pattern", "REST API", "Local Storage"],
    demo: "https://weather-app-seven-beta-46.vercel.app",
    code: "https://github.com/ledneev/weather-app",
    image: "/images/weather.jpg",
    year: 2025
  },
  {
    id: "smart-data-table",
    title: "Smart Data Table",
    description: "ETL-инструмент для работы с большими наборами данных",
    fullDescription: "Инструмент с ETL-пайплайнами, эффективными алгоритмами сортировки и виртуализацией для оптимизации производительности.",
    stack: ["JavaScript", "TypeScript", "Data Processing", "Algorithms"],
    demo: "https://smart-table-tau.vercel.app/",
    code: "https://github.com/ledneev/smart-table",
    image: "/images/table.jpg",
    year: 2025
  }
];

export const featuredProjects = projects.filter(p => p.featured);

export const sortedProjects = [...projects].sort((a, b) => b.year - a.year);