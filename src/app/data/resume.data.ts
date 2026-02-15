import { ResumeData } from '../models/resume.model';

export const resumeData: ResumeData = {
  header: {
    name: 'Айнур Яруллин',
    position: 'Middle+ Frontend Developer',
    contacts: [
      { id: 'email', label: 'Email', value: 'yapiyoupi1@gmail.com', href: 'mailto:yapiyoupi1@gmail.com' },
      { id: 'phone', label: 'Phone', value: '+7 999 581 37 50', href: 'tel:+79995813750' },
      { id: 'location', label: 'Location', value: 'Челябинск, Россия' },
      // { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/annaschmidt', href: 'https://linkedin.com/in/annaschmidt' },
      { id: 'github', label: 'GitHub', value: 'github.com/Yapi-youpi', href: 'https://github.com/Yapi-youpi' },
    ],
  },
  aboutMe: `Frontend-разработчик (Angular) с системным подходом к архитектуре приложений. Проектирую масштабируемые SPA, выстраиваю структуру проекта и компонентные системы. Работаю с производительностью, чистотой кода и долгосрочной поддерживаемостью продукта.`,

  skills: [
    {
      id: 'frontend',
      title: 'Frontend',
      items: ['Angular', 'TypeScript', 'RxJS', 'HTML5', 'SCSS/CSS', 'Responsive design'],
    },
    {
      id: 'tools',
      title: 'Tools',
      items: ['Git', 'ESLint', 'Figma', 'Jira'],
    },
    {
      id: 'other',
      title: 'Other',
      items: ['REST APIs', 'Agile/Scrum', 'Code review', 'Technical writing'],
    },
  ],

  experience: [
    {
      id: '1',
      role: 'Frontend Developer',
      company: 'ЗАО "ВАЙТБОКС',
      period: '2023 — 2026',
      description: 'Разработка и отладка программного кода, интеграция модулей, сборка приложения и управление версиями с отслеживанием изменений.',
      stack: ['Angular', 'RxJS', 'SCSS', 'Figma'],
    },
    {
      id: '2',
      role: 'Frontend Developer',
      company: 'АО "Восточный ветер"',
      period: '2023 — 2023',
      description: 'Разработка и отладка программного кода, интеграция модулей, сборка приложения и управление версиями с отслеживанием изменений. Разработка простого кода на С#',
      stack: ['Angular', 'RxJS', 'SCSS', 'Figma'],
    },
    {
      id: '3',
      role: 'Frontend Developer',
      company: 'НПО "Панцирь"',
      period: '2020 — 2023',
      description: 'Руковдитель веб-разработки',
      stack: [ 'Angular', '', 'HTML', 'CSS', 'JavaScript', 'jQuery'],
    },
  ],

  projects: [
    // {
    //   id: '1',
    //   title: 'Design System & Component Library',
    //   role: 'Lead',
    //   period: '2023',
    //   description: 'Internal design system with 40+ reusable components. Documentation with Storybook.',
    //   link: 'https://design.example.com',
    //   stack: ['Angular', 'Storybook', 'SCSS'],
    // },
    // {
    //   id: '2',
    //   title: 'Resume Builder (This Page)',
    //   role: 'Solo',
    //   period: '2025',
    //   description: 'Minimal resume layout with Angular standalone components, SCSS BEM, print styles.',
    //   stack: ['Angular 19', 'SCSS', 'Standalone'],
    // },
  ],

  education: [
    {
      id: '1',
      degree: 'Электроника и наноэлектроника',
      institution: 'НИУ "ЮУрГУ',
      year: '2018',
    },
  ],

  additionalInfo: 'Быстро обучаюсь новым технологиям, внимание к деталям и качеству кода',
};
