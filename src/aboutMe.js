const periodFrom = (year, month = 0, day = 0) => {
  const today = new Date();
  let days = today.getDate() - day;
  let months = today.getMonth() - month;
  let fullYears = today.getFullYear() - year;
  if (days < 0) months--;
  if (months < 0) fullYears--;
  if (months < 0) months += 12;
  return { fullYears, months, days };
};

export default {
  title: "Javascript разработчик MERN",
  title_en: "Javascript developer MERN",
  about: {
    title: "Обо мне",
    title_en: "About me",
    path: "/",
    isNav: true,
    logo: "./img/logo/about.svg",
    explanation: "Привет. Я - Костя. Javascript разработчик.",
    explanation_en: `Hi. My name is Kostya. I'm javascript developer. Mostly ReactJS.`,
    years: () => {
      const age = periodFrom(1985, 7, 27);
      return `Мне ${age.fullYears}.`;
    },
    years_en: () => {
      const age = periodFrom(1985, 7, 27);
      return `And I'm ${age.fullYears} y.o.`;
    },
  },
  skills: {
    title: "Навыки",
    title_en: "Skills",
    path: "/skills",
    isNav: true,
    logo: "./img/logo/skills.svg",
    explanation: "Технологии, с которыми я имел возможность работать:",
    explanation_en: "Here are some tools I'm using:",
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
      "AntDesign",
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
    title_en: "Projects",
    logo: "./img/logo/projects.svg",
    explanation:
      "В моём распоряжении имеется несколько пет-проектов. Некоторые из них разрабатывались самостоятельно, другие - в команде.",
    explanation_en:
      "I have some pet-projects. Some of them were developed by myself, others - in a team.",
    path: "/projects",
    isNav: true,
    list: [
      {
        title: "Fridgy",
        description:
          "Приложение - виртуальный холодильник. Основная цель: показать реализацию CRUD, REST API, разработку в команде посредством GIT, взимодействие Backend + Frontend с помощью интрументов React JS, Redux, Node JS, Express JS, Mongo DB, Mongoose, React-Bootstrap.",
        description_en:
          "Fridgy is an application to help track your products in your fridge by thier expiry date. Fridgy uses a number of open source projects, frameworks and libraries: React JS, Redux, node.js, Express, Materialize UI, MongoDB, Mongoose.",
        links: [
          {
            name: "Heroku Deployed Site",
            url: "https://fridgy-2020.herokuapp.com/",
          },
          {
            name: "Repository",
            url: "https://github.com/negomi-e/fridgy/",
          },
          {
            name: "Fork",
            url: "https://github.com/samolevich/fridgy",
          },
        ],
      },
      {
        title: "TODO App",
        description: "Классическое приложение TODO List. React JS, Scss.",
        description_en: "Classic TODO List App. React JS, Scss.",
        links: [
          {
            name: "Github Pages Deployed Site",
            url: "https://samolevich.github.io/todo/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/todo/",
          },
        ],
      },
      {
        title: "Star Wars API",
        description:
          "Классическое приложение работы с API swapi.dev с использованием Bootswatch (Bootstrap like library). React JS, Bootswatch+Scss.",
        description_en:
          "Classic application using API swapi.dev, Bootswatch (Bootstrap like library). React JS, Bootswatch+Scss.",
        links: [
          {
            name: "Netlify Deployed Site",
            url: "https://stwarsapi.netlify.app/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/starwarsapi/",
          },
        ],
      },
      {
        title: "Ant Design - RandomUser.me API",
        description:
          "Классическое приложение работы с API randomuser.me с использованием AntDesign, React JS, Redux. Сортировка, фильтры, пагинация.",
        description_en:
          "Classic application using API randomuser.me, AntDesign, React JS, Redux. Sorting, filters, pagination.",
        links: [
          {
            name: "Netlify Deployed Site",
            url: "https://randomuserstable.netlify.app/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/friendly-octo",
          },
        ],
      },
      {
        title: "EventPlanner",
        description:
          "Командная реализация SSR-приложения. Добавить мероприятие, выбрать время, получить статистику. Стек: Node JS, Express JS, Handlebars, Mongo DB, Mongoose, BCrypt(lib), Javascript, HTML, CSS.",
        description_en:
          "Team developed SSR-app. Add event, choose date, get statistics. Node JS, Express JS, Handlebars, Mongo DB, Mongoose, BCrypt(lib), Javascript, HTML, CSS.",
        links: [
          {
            name: "Repository",
            url: "https://github.com/ArtShilov/eventPlaner",
          },
          {
            name: "Fork",
            url: "https://github.com/samolevich/eventPlaner",
          },
        ],
      },
      {
        title: "RentApp",
        description:
          "Командная реализация SSR-приложения. CRUD, роли пользователей (модератор, пользователь).",
        description_en:
          "Team developed SSR-app. CRUD, roles (moderator, user).",
        links: [
          {
            name: "Repository",
            url: "https://github.com/SlavaPush/core-rent-app",
          },
          {
            name: "Fork",
            url: "https://github.com/samolevich/core-rent-app",
          },
        ],
      },
      {
        title: "API Github",
        description:
          "Реализация работы с API Github. Выдаёт последнюю активность в искомой организации (commit, pullrequest...). Технологии: JavaScript, HTML, CSS, Materialize.",
        description_en:
          "Github API implementation. Returns the latest activity in the searched organization (commit, pull request...). Technologies: JavaScript, HTML, CSS, Materialize.",
        links: [
          {
            name: "Github Pages Deployed Site",
            url: "https://samolevich.github.io/solo-project-api-github/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/solo-project-api-github",
          },
        ],
      },
      {
        title: "API HeadHunter",
        description:
          "Проект работает с API HeadHunter и выдаёт последние опубликованные вакансии по региону Москва. JavaScript, HTML, CSS, Materialize.",
        description_en:
          "API HeadHunter implementation. Returns the latest vacancies from region Moscow. JavaScript, HTML, CSS, Materialize.",
        links: [
          {
            name: "Github Pages Deployed Site",
            url: "https://samolevich.github.io/solo-headhunder-api/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/solo-headhunder-api",
          },
        ],
      },
      {
        title: "CV",
        description: "React Github Profile Guide App - CV.",
        description_en: "React Github Profile Guide App - CV.",
        links: [
          {
            name: "Github Pages Deployed Site (THIS SITE)",
            url: "https://samolevich.github.io/cv/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/cv",
          },
        ],
      },
    ],
  },
  certificates: {
    title: "Сертификаты",
    title_en: "Certificates",
    logo: "./img/logo/certificate.svg",
    explanation: "",
    path: "/certificates",
    isNav: true,
    list: [
      {
        description: "Офлайн-интенсив Elbrus Coding Bootcamp",
        description_en: "Elbrus Coding Bootcamp Offline Intensive",
        certs: [
          {
            name: "Сертификат FullStack JavaScript разработчик",
            name_en: "FullStack JavaScript developer certificate",
            url: "https://drive.google.com/file/d/1KHZQQMJqLV-86Xi47VUlu4Tm-ak8AheM/view?usp=sharing",
            pathLocal: "./img/cert/EBC-certificate-Samolevich.png",
            effort: "около 500 часов разработки",
            effort_en: "approximately 500 hours of coursework",
          },
        ],
      },
      {
        description: "Онлайн курс JavaScript от Free Code Camp",
        description_en: "Free Code Camp JavaScript Online Course",
        certs: [
          {
            name: "Сертификат Back End Development and APIs",
            name_en: "Back End Development and APIs certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/back-end-development-and-apis",
            pathLocal: "./img/cert/Back End Development and APIs.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат JavaScript Algorithms and Data Structures",
            name_en: "JavaScript Algorithms and Data Structures certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/javascript-algorithms-and-data-structures",
            pathLocal:
              "./img/cert/Free Code Camp JavaScript Algorithms and Data Structures.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат Responsive Web Design",
            name_en: "Responsive Web Design certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/responsive-web-design",
            pathLocal: "./img/cert/Free Code Camp Responsive Web Design.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат Front End Development Libraries",
            name_en: "Front End Development Libraries certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/front-end-development-libraries",
            pathLocal: "./img/cert/Front End Development Libraries.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
        ],
      },
      {
        description: "Онлайн курс JavaScript от Stepik",
        description_en: "Stepik JavaScript Online Course",
        certs: [
          {
            name: "Сертификат JavaScript Course for beginners",
            name_en: "JavaScript Course for beginners  certificate",
            url: "https://stepik.org/cert/283188",
            pathLocal: "./img/cert/Stepik JavaScript for beginners.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
        ],
      },
    ],
  },
  expirience: {
    title: "Опыт",
    title_en: "Expirience",
    logo: "./img/logo/expirience.svg",
    path: "/expirience",
    isNav: true,
    relevant: {
      title: "Релевантный опыт",
      title_en: "Relevant expirience",
      explanation: [
        "Начиная с июля 2020 года имею опыт разработки как в команде, так и самостоятельно.",
        "Опыт коммерческой разработки в таких компаниях как Айтеко, ФГБУ ИАЦ МЧС РФ. А также в качестве самозанятого.",
        "Проекты можно посмотреть в моём репозитории Github.",
        "",
        "Инструменты, которыми я пользуюсь:",
        "Основная операционная система - Linux (Ubuntu).",
        "Среда разработки - VS Code.",
        "Система контроля версий - Git (Github). В основном через консоль.",
        "CSR App на React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS (flex, grid), SCSS, HTML.",
        "SSR App на NodeJS, Express JS, Handlebars, MongoDB, Mongoose.",
        "Некоторый опыт React-Bootstrap, Bootstrap, MaterialUI, Materialize, D3.js, AntDesign.",
      ],
      explanation_en: [
        "Starting from July 2020, I have experience in development both in a team and independently.",
        "Projects can be viewed in my Github repository.",
        "Tools I use:",
        "The main operating system is Linux (Ubuntu).",
        "Development environment - VS Code.",
        "Version control system - Git (Github). Mainly via console.",
        "CSR App on React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS (flex, grid), SCSS, HTML.",
        "SSR App on NodeJS, Express JS, Handlebars, MongoDB, Mongoose.",
        "Some experience with React-Bootstrap, Bootstrap, MaterialUI, Materialize, D3.js, AntDesign.",
      ],
    },
    nonRelevant: {
      title: "Нерелевантный опыт",
      title_en: "Non-relevant expirience",
      explanation:
        "17 лет опыта работы связаны с торговлей. Начиная с 18 лет, работал в B2B (телекоммуникационные услуги, банковские продукты и услуги, оптовая торговля алкоголем). Самое продолжительное время работы 4.5 года занимался продажей корпусной мебели физическим лицам.",
      explanation_en:
        "I have 17 years experience in sales. Starting at the age of 18, mostly in B2B (telecommunication services, banking products and services, alcohol wholesale). The longest time of work in one place - 4.5 years.",
    },
    devExperience: () => {
      const { fullYears, months } = periodFrom(2020, 6);
      const yearDeclension = fullYears
        ? fullYears % 10 === 1 && fullYears % 100 !== 11
          ? `${fullYears} года`
          : `${fullYears} лет`
        : "";
      const monthDeclension = months
        ? months === 1
          ? ` и ${months} месяцa`
          : ` и ${months} месяцев`
        : "";
      return `В качестве разработчика более ${yearDeclension}${monthDeclension}. `;
    },
    devExperience_en: () => {
      const { fullYears, months } = periodFrom(2020, 6);
      const yearDeclension = `${fullYears} years`;
      const monthDeclension = months
        ? months === 1
          ? ` and ${months} month`
          : ` and ${months} months`
        : "";
      return `I have over ${yearDeclension}${monthDeclension} expirience as a developer. `;
    },
  },
  futureVision: {
    title: "Планы",
    title_en: "My plans",
    logo: "./img/logo/future.svg",
    path: "/",
    description: [
      "В планах изучить Angular JS.",
      "В долгосрочной перспективе изучить технологии и языки для реализации Backend-логики.",
      "Поднять уровень владения английским языком до уровня B2/C1.",
    ],
    description_en: [
      "Learn Angular JS.",
      "In the long term, learn technologies and languages to implement Backend logic.",
      "Improve English proficiency to level B2/C1 (now A2).",
    ],
  },
  education: {
    title: "Образование",
    title_en: "Education",
    logo: "./img/logo/education.svg",
    path: "/",
    description: "Основное образование - среднее.",
    description_en: "High School degree.",
  },

  contact: {
    title: "Контакты",
    title_en: "Contacts",
    logo: "./img/logo/contacts.svg",
    interactions: [
      // {
      //   title: "+7926 324 8737",
      //   title_en: "Call me",
      //   url: "tel:+79263248737",
      //   iconForMobileVersion: "./img/logo/call.svg",
      // },
      {
        title: "Эл.почта",
        title_en: "E-mail me",
        url: "mailto:samolevich@gmail.com",
        iconForMobileVersion: "./img/logo/contacts.svg",
      },
      {
        title: "Телеграм",
        title_en: "Telegram me",
        url: "https://t.me/samolevich",
        iconForMobileVersion: "./img/logo/telegram.svg",
      },
      {
        title: "Вотсап",
        title_en: "WhatsApp me",
        url: "https://wa.me/79263248737",
        iconForMobileVersion: "./img/logo/whatsapp.svg",
      },
    ],
  },
  profile: {
    cv: [
      {
        title: "LinkedIn",
        title_en: "LinkedIn",
        url: "https://www.linkedin.com/in/samolevich/",
      },
      {
        title: "HeadHunter CV",
        title_en: "HeadHunter CV",
        url: "https://hh.ru/applicant/resumes/view?resume=36a4ea03ff08213a590039ed1f4b7530533078",
      },
    ],
    code: [
      {
        title: "Github профиль",
        title_en: "Github profile",
        url: "https://github.com/samolevich",
        iconForMobileVersion: "./img/logo/octocat.svg",
      },
      {
        title: "Codewars профиль",
        title_en: "Codewars profile",
        url: "https://www.codewars.com/users/samolevich",
      },
      {
        title: "FreeCodeCamp профиль",
        title_en: "FreeCodeCamp profile",
        url: "https://www.freecodecamp.org/samolevich",
      },
    ],
  },
  location: {
    title: "СНГ",
    title_en: "CIS",
    logo: "./img/logo/location.svg",
  },
};
