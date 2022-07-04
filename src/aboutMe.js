export default {
  title: "Javascript разработчик MERN",
  about: {
    title: "Обо мне",
    path: "/",
    isNav: true,
    logo: "/img/logo/about.svg",
  },
  skills: {
    title: "Навыки",
    path: "/skills",
    isNav: true,
    logo: "/img/logo/skills.svg",
    explanation: "Технологии, с которыми я имел возможность работать:",
    list: [
      "Javascript",
      "React",
      "Redux (Thunk)",
      "NodeJS",
      "Express",
      "MongoDB",
      "Mongoose",
      "Handlebars",
      "Bootstrap",
      "Materialize",
      "MaterialUI",
      "React-Bootstrap",
      "Linux",
      "Git",
      "HTML",
      "CSS",
      "SCSS",
    ],
  },
  projects: {
    title: "Проекты",
    logo: "/img/logo/projects.svg",
    explanation: `В моём распоряжении имеется несколько пет-проектов. Некоторые из них разрвбатывались самостоятельно, другие - в команде.`,
    path: "/projects",
    isNav: true,
    list: [
      {
        title: "Fridgy",
        description: `Приложение - виртуальный холодильник. Основная цель: показать реализацию CRUD, REST API, разработку в команде посредством GIT, взимодействие Backend + Frontend с помощью интрументов React JS, Redux, Node JS, Express JS, Mongo DB, Mongoose, React-Bootstrap.`,
        links: [
          {
            name: "Heroku Deploy",
            url: "https://fridgy-2020.herokuapp.com/",
          },
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/negomi-e/fridgy/",
          },
          {
            name: "Резервный форк",
            url: "https://github.com/samolevich/fridgy",
          },
        ],
      },
      {
        title: "EventPlanner",
        description: `Командная реализация SSR-приложения. Добавить мероприятие, выбрать время, получить статистику.\nСтек: Node JS, Express JS, Handlebars, Mongo DB, Mongoose, BCrypt(lib), Javascript, HTML, CSS.`,
        links: [
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/ArtShilov/eventPlaner",
          },
          {
            name: "Резервный форк",
            url: "https://github.com/samolevich/eventPlaner",
          },
        ],
      },
      {
        title: "RentApp",
        description: `Командная реализация SSR-приложения. CRUD, роли пользователей (модератор, пользователь).`,
        links: [
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/SlavaPush/core-rent-app",
          },
          {
            name: "Резервный форк",
            url: "https://github.com/samolevich/core-rent-app",
          },
        ],
      },
      {
        title: "API Github",
        description: `Реализация работы с API Github. Выдаёт последнюю активность в искомой организации (commit, pullrequest...).\n
        Технологии: JavaScript, HTML, CSS, Materialize.`,
        links: [
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/samolevich/solo-project-api-github",
          },
          {
            name: "Github Pages Deploy",
            url: "https://samolevich.github.io/solo-project-api-github/",
          },
        ],
      },
      {
        title: "API HeadHunter",
        description: `Проект работает с API HeadHunter и выдаёт последние опубликованные вакансии по региону Москва.\n
        JavaScript, HTML, CSS, Materialize.`,
        links: [
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/samolevich/solo-headhunder-api",
          },
          {
            name: "Github Pages Deploy",
            url: "https://samolevich.github.io/solo-headhunder-api/",
          },
        ],
      },
      {
        title: "CV",
        description: `React Github Profile Guide App - CV.`,
        links: [
          {
            name: "Основной репозиторий проекта",
            url: "https://github.com/samolevich/cv",
          },
          {
            name: "Резервный форк",
            url: "https://samolevich.github.io/cv/",
          },
        ],
      },
    ],
  },
  certificates: {
    title: "Сертификаты",
    logo: "/img/logo/certificate.svg",
    explanation: "",
    path: "/certificates",
    isNav: true,
    list: [
      {
        desription: "Офлайн-интенсив Elbrus Coding Bootcamp",
        certs: [
          {
            name: "Сертификат FullStack JavaScript разработчик",
            url: "https://drive.google.com/file/d/1KHZQQMJqLV-86Xi47VUlu4Tm-ak8AheM/view?usp=sharing",
            pathLocal: "/img/cert/EBC-certificate-Samolevich.png",
            effort: "более 500 часов разработки",
          },
        ],
      },
      {
        desription: "Онлайн курс по JavaScript от Free Code Camp",
        certs: [
          {
            name: "Сертификат Back End Development and APIs",
            url: "https://www.freecodecamp.org/certification/samolevich/back-end-development-and-apis",
            pathLocal: "/img/cert/Back End Development and APIs.png",
            effort: "более 300 часов разработки",
          },
          {
            name: "Сертификат JavaScript Algorithms and Data Structures",
            url: "https://www.freecodecamp.org/certification/fcca8ff6e25-52f4-4953-9dd1-5338e016a242/javascript-algorithms-and-data-structures",
            pathLocal:
              "/img/cert/Free Code Camp JavaScript Algorithms and Data Structures.png",
            effort: "более 300 часов разработки",
          },
          {
            name: "Сертификат Responsive Web Design",
            url: "https://www.freecodecamp.org/certification/fcca8ff6e25-52f4-4953-9dd1-5338e016a242/responsive-web-design",
            pathLocal: "/img/cert/Free Code Camp Responsive Web Design.png",
            effort: "более 300 часов разработки",
          },
          {
            name: "Сертификат Front End Development Libraries",
            url: "https://www.freecodecamp.org/certification/samolevich/front-end-development-libraries",
            pathLocal: "/img/cert/Front End Development Libraries.png",
            effort: "более 300 часов разработки",
          },
        ],
      },
      {
        desription: "Онлайн курс по JavaScript от Stepik",
        certs: [
          {
            name: "Сертификат JavaScript Course for beginners",
            url: "https://stepik.org/cert/283188",
            pathLocal: "/img/cert/Stepik JavaScript for beginners.png",
            effort: "более 300 часов разработки",
          },
        ],
      },
    ],
  },
  expirience: {
    title: "Опыт",
    logo: "/img/logo/expirience.svg",
    path: "/expirience",
    isNav: true,
    relevant: {
      title: "Релевантный опыт",
      explanation: `Начиная с декабря 2019 года имею опыт разработки как в команде, так и самостоятельно. Проекты можно псмотреть в моём репозитории Github.\n
        Инструменты, которыми я пользуюсь:\n
        Основная операционная система - Linux (Ubuntu).\n
        Среда разработки - VS Code.\n
        Система контроля версий - Git (Github). В основном из консоли.\n
        CSR App на React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS (flex, grid), SCSS, HTML.\n
        SSR App на NodeJS, Express JS, Handlebars, MongoDB, Mongoose.\n
        Некоторый опыт D3.js, React-Bootstrap, Bootstrap, MaterialUI, Materialize.`,
    },

    nonRelevant: {
      title: "Нерелевантный опыт",
      explanation: `17 лет опыта работы связаны с торговлей. Начиная с 18 лет, работал в торговле B2B (телекоммуникационные услуги, банковские продукты и услуги, оптовая торговля алкоголем). Самое продолжительное время работы 4.5 года занимался продажей корпусной мебели физическим лицам.`,
    },
  },
  futureVision: {
    title: "Планы",
    logo: "",
    path: "/",
    description: `В планах изучить Angular JS.\b
    В долгосрочной перспективе изучить технологии и языки для реализации Backend-логики.\b
    Поднять уровень владения английским языком до уровня B2/C1.`,
  },
  education: {
    title: "Образование",
    logo: "",
    path: "/",
    description: "Основное образование - среднее.",
  },

  contact: {
    title: "Контакты",
    logo: "/img/logo/contacts.svg",
    tel: { title: "+7926 324 8737", url: "tel:+79263248737" },
    email: { title: "Эл.почта", url: "mailto:samolevich@gmail.com" },
    telegram: { title: "Телеграм", url: "https://t.me/samolevich" },
    whatsapp: { title: "Вотсап", url: "https://wa.me/79263248737" },
  },
  profile: {
    cv: [
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/samolevich/",
      },
      {
        title: "HeadHunter CV",
        url: "https://hh.ru/resume/6d6fcb45ff07ff00080039ed1f3056434d3175",
      },
    ],
    code: [
      {
        title: "Github профиль",
        url: "https://github.com/samolevich",
      },
      {
        title: "Codewars профиль",
        url: "https://www.codewars.com/users/samolevich",
      },
      {
        title: "FreeCodeCamp профиль",
        url: "https://www.freecodecamp.org/samolevich",
      },
    ],
  },
  location: {
    title: "Москва",
    logo: "/img/logo/location.svg",
  },
};
