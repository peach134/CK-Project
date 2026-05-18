const mahrikCutout = "images/mahrik_без фона.png";
const mahrikIntro = "images/mahrik_intro.png";
const mahrikQuiz = "images/mahrik_quiz.png";
const mahrikComment = "images/mahrik_comment.png";
const mahrikFinish = "images/mahrik_finish.png";

const sections = [
  {
    id: "oil",
    nav: "Нефть",
    title: "Почему Тюмень — это не просто город, а «нефтяная столица»",
    subtitle: "Если коротко: без нефти Тюмень была бы совсем другой",
    motif: "oil",
    accent: "route-industrial",
    intro: [
      "Привет, это снова я",
      "Сейчас объясню, почему в Тюмени деньги, дороги и большие здания",
      "Спойлер: всё из-за нефти",
    ],
    explanation: [
      "В 1960-х в Сибири нашли нефть — и это был джекпот уровня страны",
      "До этого Тюмень была обычным городом",
      "После — стала центром огромной нефтяной индустрии",
    ],
    takeaway: "Нефть = быстрый рост города",
    history: [
      "Искать нефть в Сибири начали ещё до войны",
      "Но долго ничего не получалось",
      "В 1960 году всё изменилось —",
      "геологи нашли первую настоящую нефть",
      "А уже через несколько лет её начали добывать в промышленных масштабах",
    ],
    facts: [
      "за 10–15 лет регион стал одним из главных в стране",
      "добыча выросла в десятки раз",
      "сюда ехали люди со всего СССР",
    ],
    why: {
      text: ["Всё, что ты видишь в Тюмени — частично благодаря нефти:"],
      list: ["новые районы", "университеты", "инфраструктура", "уровень жизни"],
      short: "Нефть сделала Тюмень «богатой и молодой одновременно»",
    },
    places: [
      { name: "Памятник Ю.Г. Эрвье", url: "https://2gis.ru/tyumen/geo/1830283133321229" },
      { name: "Памятник Л.И. Ровнину", url: "https://2gis.ru/tyumen/geo/70030076170054746" },
    ],
    quiz: {
      question: "Как ты думаешь, что нашли в первой скважине в Тюмени?",
      options: ["нефть", "газ", "минеральную воду"],
      answer: "минеральную воду",
      responseRight: "Правильно: Минеральную воду. С нефтью пришлось подождать. Это реальный факт.",
      responseWrong: "Не совсем. Правильный ответ: Минеральную воду. С нефтью пришлось подождать.",
    },
    comment: [
      "Если честно, нефть — это не только про деньги",
      "Это про людей, которые ехали сюда в тайгу и делали невозможное",
      "Тюмень — это немного про авантюру",
    ],
  },
  {
    id: "baroque",
    nav: "Сибирское барокко",
    title: "Почему старые здания Тюмени выглядят так необычно",
    subtitle: "Если коротко: в Сибири тоже любили строить красиво",
    motif: "baroque",
    accent: "route-ornament",
    intro: ["Сейчас будет немного архитектуры", "Но не пугайся — без скучных лекций"],
    explanation: [
      "Сибирское барокко — это стиль старых храмов и зданий с кучей деталей, узоров и украшений.",
      "Когда Тюмень начала развиваться, людям захотелось строить не просто «нормально», а красиво и богато.",
    ],
    takeaway: "Сибирское барокко = старая эстетика Тюмени",
    history: [
      "Этот стиль появился в XVIII веке, когда через Сибирь активно шла торговля.",
      "Архитекторы вдохновлялись европейскими зданиями, но делали всё по-сибирски — ярко, необычно и с большим количеством декора.",
      "Многие здания сохранились до сих пор и стали частью образа города.",
    ],
    facts: [
      "стиль встречается только в Сибири",
      "у зданий много декоративных деталей",
      "раньше такие постройки считались очень статусными",
    ],
    why: {
      text: ["Когда гуляешь по центру, именно такие здания создают ощущение «старой Тюмени»."],
      list: [],
      short: "Это архитектура, которая делает Тюмень узнаваемой",
    },
    places: [
      { name: "Свято-Троицкий мужской монастырь", url: "https://2gis.ru/tyumen/geo/70000001037439204" },
      {
        name: "Знаменский кафедральный собор",
        url: "https://2gis.ru/tyumen/geo/1830115629600582/65.532048,57.158811",
      },
      { name: "Исторический центр Тюмени", url: "https://2gis.ru/tyumen/geo/70030076292752006" },
    ],
    comment: ["Если честно, старые здания выглядят намного атмосфернее торговых центров"],
  },
  {
    id: "carpet",
    nav: "Тюменский ковёр",
    title: "Почему ковёр стал символом Тюмени",
    subtitle: "Да, тот самый ковёр с узорами",
    motif: "carpet",
    accent: "route-pattern",
    intro: ["Наконец-то тема про меня"],
    explanation: [
      "Раньше такие ковры были почти в каждом доме.",
      "Их делали вручную: долго, аккуратно и с кучей деталей.",
      "Со временем ковёр стал не просто предметом интерьера, а настоящим символом тюменского уюта.",
    ],
    takeaway: "Тюменский ковёр = тепло, дом и атмосфера",
    history: [
      "Тюменские ковры прославились благодаря своему мягкому ворсу и ярким цветочным узорам.",
      "Их продавали в разные города России, а мастерство ковроткачества передавалось поколениями.",
      "Сегодня ковёр — уже часть культурного образа Тюмени.",
    ],
    facts: [
      "ковры делали вручную",
      "один ковёр могли создавать месяцами",
      "у каждого узора был свой стиль",
    ],
    why: {
      text: [
        "Ковёр — это про атмосферу города.",
        "Про тепло, спокойствие и ощущение дома, которое многие чувствуют в Тюмени.",
      ],
      list: [],
      short: "Даже у города может быть вайб «уютной квартиры»",
    },
    places: [
      {
        name: "Музейный комплекс имени И.Я. Словцова",
        url: "https://yandex.ru/maps/org/muzeyny_kompleks_imeni_i_ya_slovtsova/64553250044/",
      },
      {
        name: "Архитектурные сооружения Улица Красина, 10",
        url: "https://2gis.ru/tyumen/geo/1830223003787413/65.524922,57.159674",
      },
      { name: "Сувенирные магазины" },
    ],
    comment: ["Да, я тоже ковёр"],
  },
  {
    id: "krapivin",
    nav: "Владислав Крапивин",
    title: "Почему в Тюмени так любят Крапивина",
    subtitle: "Его книги — отдельная атмосфера",
    motif: "krapivin",
    accent: "route-book",
    intro: ["Сейчас будет немного вайба детства"],
    explanation: [
      "Крапивин писал книги про дружбу, приключения и свободу.",
      "У многих его истории ассоциируются с летом, дворами и ощущением, что впереди ещё целая жизнь.",
    ],
    takeaway: "Крапивин = романтика детства",
    history: [
      "Писатель много работал с подростками и создал целое движение «Каравелла».",
      "Его книги читают уже несколько поколений, а имя Крапивина давно стало частью культурной жизни Тюмени.",
    ],
    facts: [
      "книги Крапивина известны по всей России",
      "многие произведения связаны с темой свободы",
      "его истории до сих пор переиздают",
    ],
    why: {
      text: [
        "Крапивин — это не просто «писатель из школьной программы».",
        "Это часть атмосферы города и воспоминаний многих людей.",
      ],
      list: [],
      short: "Некоторые города запоминаются зданиями. Тюмень — ещё и историями",
    },
    places: [
      {
        name: "Центральная детская библиотека им. В.П. Крапивина",
        url: "https://2gis.ru/tyumen/geo/1830115629599410",
      },
      { name: "Сквер Владислава Крапивина", url: "https://2gis.ru/tyumen/geo/70030076322422243" },
      {
        name: "Централизованная городская библиотечная система",
        url: "https://2gis.ru/tyumen/geo/70000001065660760/65.536014,57.154569",
      },
    ],
    comment: ["Его книги идеально читать летом где-нибудь на набережной"],
  },
  {
    id: "springs",
    nav: "Термальные источники",
    title: "Почему зимой всех так манят минеральные воды",
    subtitle: "Очень странная, но очень тюменская традиция",
    motif: "springs",
    accent: "route-water",
    intro: ["Представь: на улице −25, а ты сидишь в горячем бассейне"],
    explanation: [
      "Термальные источники — это природная горячая вода из глубины земли.",
      "Для Тюмени это уже не просто развлечение, а часть местного образа жизни.",
    ],
    takeaway: "Источники = главный зимний вайб Тюмени",
    history: [
      "Горячие источники появились благодаря подземным водам Западной Сибири.",
      "Со временем вокруг них построили целые комплексы отдыха, куда теперь приезжают люди со всей страны.",
    ],
    facts: [
      "вода остаётся горячей даже зимой",
      "источники популярны круглый год",
      "это один из главных туристических символов региона",
    ],
    why: {
      text: [
        "Почти каждый студент в Тюмени хотя бы раз ездил на источники.",
        "Это буквально часть местной жизни.",
      ],
      list: [],
      short: "Не съездил на источник — не прочувствовал Тюмень",
    },
    places: [
      { name: "Верхний бор", url: "https://2gis.ru/tyumen/geo/1830115629607363/65.438325,57.236686" },
      { name: "Летолето", url: "https://2gis.ru/tyumen/geo/70000001032130227" },
      { name: "СоветSky", url: "https://2gis.ru/tyumen/geo/1830115630287186/65.082511,57.294777" },
    ],
    comment: ["Самая сложная часть — потом выйти обратно в мороз"],
  },
  {
    id: "merchants",
    nav: "Купечество",
    title: "Почему старый центр выглядит так атмосферно",
    subtitle: "Всё благодаря купцам",
    motif: "merchants",
    accent: "route-facade",
    intro: ["Когда-то Тюмень была серьёзным бизнес-городом"],
    explanation: [
      "Купцы — это предприниматели прошлого.",
      "Они торговали, зарабатывали деньги и вкладывали их в развитие города.",
    ],
    takeaway: "Купцы сделали Тюмень красивой и богатой",
    history: [
      "Через Тюмень проходили важные торговые пути, поэтому город быстро рос.",
      "Купцы строили дома, магазины и целые улицы, многие из которых сохранились до сих пор.",
    ],
    facts: [
      "Тюмень была важным торговым центром Сибири",
      "купцы активно развивали город",
      "многие старые здания связаны именно с ними",
    ],
    why: {
      text: ["Именно благодаря купцам центр Тюмени сейчас выглядит так уютно и атмосферно."],
      list: [],
      short: "Старый центр = наследие купеческой Тюмени",
    },
    placesIntro: "Купеческие дома в центре:",
    places: [
      { name: "Усадьба Колокольниковых", url: "https://2gis.ru/tyumen/geo/1830115629607434" },
      { name: "Улица Республики, 29", url: "https://2gis.ru/tyumen/geo/1830223003785556" },
      { name: "Улица Ленина, 4а", url: "https://2gis.ru/tyumen/geo/1830223003799922" },
      { name: "Улица Республики", url: "https://2gis.ru/tyumen/geo/1830326082994223" },
    ],
    comment: ["Купцы явно понимали, что красивый город — это важно"],
  },
  {
    id: "nalichniki",
    nav: "Наличники",
    title: "Наличники — уютный код старой Тюмени",
    subtitle: "Самые красивые детали города иногда — прямо на окнах",
    motif: "nalichniki",
    accent: "route-window",
    intro: ["Да, сейчас будет целый раздел про окна", "И это интереснее, чем кажется"],
    explanation: [
      "Наличники — это резные деревянные украшения вокруг окон.",
      "Раньше их делали вручную, и каждый мастер добавлял что-то своё.",
    ],
    takeaway: "Наличники = деревянная эстетика Тюмени",
    history: [
      "Наличники не только украшали дом, но и помогали сохранять тепло.",
      "Со временем они стали настоящим искусством — с узорами, орнаментами и сложной резьбой.",
      "Сегодня такие дома помогают почувствовать атмосферу старой Тюмени.",
    ],
    facts: [
      "наличники вырезали вручную",
      "узоры часто были уникальными",
      "раньше это считалось показателем достатка",
    ],
    why: {
      text: ["Иногда именно маленькие детали делают город живым и запоминающимся."],
      list: [],
      short: "Наличники — это тот самый уют старой Тюмени",
    },
    places: [
      {
        name: "Улица Дзержинского, 34",
        url: "https://2gis.ru/tyumen/geo/1830223003785566/65.537575,57.157138",
      },
      {
        name: "Улица Дзержинского, 18",
        url: "https://2gis.ru/tyumen/geo/1830223003800671/65.540767,57.159127",
      },
      { name: "Осипенко, 19", url: "https://2gis.ru/tyumen/geo/1830223003792918/65.546846,57.159686" },
    ],
    comment: ["Если гулять внимательно, можно найти очень красивые окна"],
  },
];

const sectionsRoot = document.querySelector("#sections");

const paragraphList = (items) => items.map((item) => `<p>${item}</p>`).join("");
const bulletList = (items) => items.length ? `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>` : "";

function renderPlaces(section) {
  return `
    <article class="block places" id="${section.id === "oil" ? "places" : ""}">
      <h3><span>06</span>Где это увидеть</h3>
      ${section.placesIntro ? `<p>${section.placesIntro}</p>` : ""}
      <div class="places-list">
        ${section.places
          .map((place) => {
            if (!place.url) {
              return `<div class="place-card place-card--plain"><strong>${place.name}</strong><span>Место в городе</span></div>`;
            }
            return `<a class="place-card" href="${place.url}" target="_blank" rel="noreferrer"><strong>${place.name}</strong><span>Открыть карту</span></a>`;
          })
          .join("")}
      </div>
    </article>
  `;
}

function renderQuiz(section) {
  if (!section.quiz) return "";

  return `
    <article class="block quiz" data-quiz="${section.id}">
      <div class="quiz__layout">
        <img src="${mahrikQuiz}" alt="" />
        <div>
          <h3><span>07</span>Мини-интерактив</h3>
          <p class="quiz__question">${section.quiz.question}</p>
          <div class="quiz__options">
            ${section.quiz.options.map((option) => `<button class="quiz__option" type="button">${option}</button>`).join("")}
          </div>
        </div>
      </div>
      <p class="quiz__answer" aria-live="polite"></p>
    </article>
  `;
}

function renderSection(section, index) {
  const number = String(index + 1).padStart(2, "0");
  const commentNumber = section.quiz ? "08" : "07";

  return `
    <section class="code-section code-section--${section.motif} reveal" id="${section.id}" data-title="${section.nav}" data-index="${index + 1}">
      <div class="section-rail">
        <p class="section-kicker"><span>${number}</span>Остановка</p>
        <h2>${section.title}</h2>
        <p class="section-subtitle">${section.subtitle}</p>
        <div class="section-motif ${section.accent}" aria-hidden="true">
          <span class="motif-label">${section.nav}</span>
          <i></i>
          <b></b>
        </div>
      </div>

      <div class="route-spine" aria-hidden="true"><span></span></div>

      <div class="content-stack">
        <article class="guide-note guide-note--intro">
          <img src="${mahrikIntro}" alt="" />
          <div>
            <p class="label">Вступление от Махрика</p>
            ${paragraphList(section.intro)}
          </div>
        </article>

        <article class="block">
          <h3><span>03</span>Объяснение по-студенчески</h3>
          ${paragraphList(section.explanation)}
        </article>

        <article class="block takeaway">
          <h3><span>04</span>Короткий вывод</h3>
          <p>${section.takeaway}</p>
        </article>

        <article class="block">
          <h3><span>05</span>Мини-история</h3>
          ${paragraphList(section.history)}
        </article>

        <article class="block facts">
          <h3><span>Ф</span>Факт-блок</h3>
          ${bulletList(section.facts)}
        </article>

        <article class="block why">
          <h3><span>!</span>Почему это важно для тебя</h3>
          ${paragraphList(section.why.text)}
          ${bulletList(section.why.list)}
          <p><strong>Коротко:</strong> ${section.why.short}</p>
        </article>

        ${renderPlaces(section)}
        ${renderQuiz(section)}

        <article class="guide-note guide-note--comment">
          <img src="${mahrikComment}" alt="" />
          <div>
            <p class="label">${commentNumber}. Комментарий Махрика</p>
            ${paragraphList(section.comment)}
          </div>
        </article>
      </div>
    </section>
  `;
}

sectionsRoot.innerHTML = sections.map(renderSection).join("");

document.querySelector("#route-finish").innerHTML = `
  <section class="finish-card reveal" aria-label="Финал маршрута">
    <img src="${mahrikFinish}" alt="" />
    <div>
      <p class="label">Маршрут</p>
      <h2>7 остановок культурного кода пройдены</h2>
      <div class="finish-route">
        ${sections.map((section, index) => `<a href="#${section.id}"><span>${String(index + 1).padStart(2, "0")}</span>${section.nav}</a>`).join("")}
      </div>
    </div>
  </section>
`;

const progressBar = document.querySelector(".progress__bar");
const currentSection = document.querySelector("#current-section");
const routeCount = document.querySelector("#route-count");
const navLinks = [...document.querySelectorAll(".topnav a")];
const routeSections = [...document.querySelectorAll(".code-section")];
const revealItems = [...document.querySelectorAll(".reveal")];

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function setActiveSection(id, title) {
  currentSection.textContent = title;
  const activeIndex = routeSections.findIndex((section) => section.id === id) + 1;
  routeCount.textContent = activeIndex > 0 ? `${activeIndex}/7` : "0/7";
  navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`));
}

function updateActiveSection() {
  const active = routeSections.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.7 && rect.bottom > 120;
  });

  if (active) setActiveSection(active.id, active.dataset.title);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    setActiveSection(visible.target.id, visible.target.dataset.title);
  },
  { rootMargin: "-30% 0px -55% 0px", threshold: [0.08, 0.18, 0.32] }
);

routeSections.forEach((section) => sectionObserver.observe(section));
window.addEventListener(
  "scroll",
  () => {
    updateProgress();
    updateActiveSection();
  },
  { passive: true }
);
updateProgress();
updateActiveSection();

document.querySelectorAll("[data-quiz]").forEach((quizEl) => {
  const section = sections.find((item) => item.id === quizEl.dataset.quiz);
  const answerEl = quizEl.querySelector(".quiz__answer");
  const buttons = [...quizEl.querySelectorAll(".quiz__option")];

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isRight = button.textContent.trim().toLowerCase() === section.quiz.answer;
      buttons.forEach((item) => {
        item.classList.remove("is-right", "is-wrong");
        item.disabled = false;
      });
      button.classList.add(isRight ? "is-right" : "is-wrong");
      quizEl.classList.toggle("quiz--right", isRight);
      quizEl.classList.toggle("quiz--wrong", !isRight);
      answerEl.textContent = isRight ? section.quiz.responseRight : section.quiz.responseWrong;
    });
  });
});
