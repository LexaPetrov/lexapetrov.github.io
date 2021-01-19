export const getAge = () => {
    let bday = new Date(1997, 1, 24);

    let now = new Date();
    let diff = now - bday;

    let milliseconds = diff;
    let seconds = milliseconds / 1000;
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    let years = days / 365.25

    return `${years}`
}

let git = 'https://lexapetrov.github.io'

export const data = [
    {
        "id": 20,
        "img": "img/item__21.png",
        "name": "Интернет-приёмная",
        "link": "https://letters.orb.ru",
        "desc": `Интернет-приёмная правительства Оренбургской области`,
        "tags": "ReactJS",
        "class": 'react js'
    },
    {
        "id": 19,
        "img": "img/item__20.png",
        "name": "mysocials.ru",
        "link": "https://mysocials.ru",
        "desc": `Страница с мультиссылкой на любые сервисы бесплатно. Планируется мобильное приложение`,
        "tags": "React NodeJS Heroku MySQL",
        "class": 'react js'
    },
    {
        "id": 18,
        "img": "img/item__18.png",
        "name": "Активный гражданин 56",
        "link": "https://github.com/LexaPetrov/rn-ag",
        "desc": `Мобильное приложение портала ag.orb.ru. Будет загружено в Google Play и App Store`,
        "tags": "React-Native WebView iOS Android",
        "class": 'react js'
    },
    {
        "id": 17,
        "img": "img/item__17.jpg",
        "name": "muztorg.ru web-scraper",
        "link": "https://github.com/LexaPetrov/muztorg-parser",
        "desc": `Парсинг товаров с сайта muztorg.ru`,
        "tags": "NodeJS axios cheerio",
        "class": 'js'
    },
    {
        "id": 16,
        "img": "img/item__16.jpg",
        "name": "medusa.io web-scraper",
        "link": "https://github.com/LexaPetrov/medusaparser",
        "desc": `Парсинг новостей с сайта medusa.io`,
        "tags": "NodeJS puppeteer",
        "class": 'js'
    },
    {
        "id": 15,
        "img": "img/item__15.png",
        "name": "#минцифра56 RNative",
        "link": "https://lexapetrov.github.io/rn-digital-news/index.html",
        "desc": `Простое мобильное приложение, вывод новостей с сайта Министерства циф. развития, экран с ссылками на сервисы, экран с формой подачи обращения в интернет-приёмную. В списке новостей полный текст новости можно просмотреть при нажатиии на нее.`,
        "tags": "NodeJS React-Native expo mobile",
        "class": 'react'
    },
    {
        "id": 14,
        "img": "img/item__14.png",
        "name": "NodeJS web scraper server",
        "link": "https://github.com/LexaPetrov/rn-digital-news/tree/master/backend",
        "desc": `Парсинг новостей с сайта digital.orb.ru. Вывод в JSON, доступ по REST API, плановое обновление новостей при изменении JSON файла и по интервалу таймера. Является бэкендом для простого мобильного приложения.`,
        "tags": "NodeJS axios cheerio REST_API",
        "class": 'js'
    },
    {
        "id": 0,
        "img": "img/item__1.png",
        "name": "subsobs.xyz",
        "link": "https://lexapetrov.github.io/obs-subs/",
        "desc": `Веб приложение - счетчик подписчиков YouTube для стрима. Предоставляет возможность по ссылке на канал YouTube создать информер с заданными параметрами.`,
        "tags": "YoutubeAPI ReactJS Redux",
        "class": 'react'
    },
    {
        "id": 11,
        "img": "img/item__11.png",
        "name": "lookatme.top",
        "link": "https://lexapetrov.github.io/lookatme.top",
        "desc": `Веб приложение - конструктор профилей с мультиссылками. Аналог Taplink, mssg.me и прочих. Сейчас его сервер отключен.`,
        "tags": "ReactJS MYSQL NGINX NodeJS",
        "class": 'react'
    },
    {
        "id": 12,
        "img": "img/item__12.png",
        "name": "Служебные записки ОГУ",
        "link": "https://lexapetrov.github.io/notetemplate",
        "desc": `Веб приложение, свернутое в EXE для кафедры моего университета. Позволяет на выходе получить заполненный по шаблону документ служебной записки о переносе занятия или о замене преподавателя.`,
        "tags": "ReactJS Electron Standalone",
        "class": 'react'
    },
    {
        "id": 13,
        "img": "img/item__13.png",
        "name": "Python web scraper",
        "link": `https://github.com/lexapetrov/rkn_parser`,
        "desc": `Парсинг лицензиатов кабельного вещания по всем регионам РФ с сайта РКН. Вывод в таблицы Excel.`,
        "tags": "Python Pandas Numpy bs4",
        "class": 'python'
    },
    {
        "id": 8,
        "img": "img/item__9.png",
        "name": "HRium / Люмос22",
        "link": `${git}/pages/hrium/`,
        "desc": "Сверстал PSD-макет из тестового задания. Из сложностей была реализация обратного отсчёта, в остальном макет не сильно сложный в плане вёрстки.",
        "tags": "HTML CSS Figma",
        "class": 'html'
    },
    {
        "id": 9,
        "img": "img/item__10.png",
        "name": "WEB ALTERNATIVE",
        "link": `${git}/pages/webalternative/`,
        "desc": "Вёрстка Figma-макета из тестового задания. Сложный макет, в нем много кастомных элементов, необычных блоков, а также отдельные блоки для мобильной версии.",
        "tags": "HTML CSS Figma Javascript",
        "class": 'html'
    },
    {
        "id": 7,
        "img": "img/item__8.JPG",
        "name": "Плеер аудиодорожек",
        "link": `${git}/pages/jsplayer/`,
        "desc": "Реализация приложения на ванильном JS.",
        "tags": "HTML CSS VanillaJavascript",
        "class": 'js'
    },
    {
        "id": 1,
        "img": "img/item__2.jpg",
        "name": "КонтрКасса",
        "link": `${git}/pages/kontrkassa/`,
        "desc": "Вёрстка PSD-макета сайта 'контркасса' для компании Web-Строитель",
        "tags": "Photoshop HTML CSS",
        "class": 'html'
    },
    {
        "id": 2,
        "img": "img/item__3.png",
        "name": "Тест по ИБ",
        "link": `${git}/educationtest-js/`,
        "desc": "Веб-приложение - тест для учащихся школ и вузов в области информационной безопасности. Тест содержит банк вопросов из более чем 200 штук, при начале прохождения теста выбираются 30 случайных вопросов, на которые и предстоит ответить.",
        "tags": "HTML CSS Javascript Standalone",
        "class": 'js'
    },
    {
        "id": 3,
        "img": "img/item__4.jpg",
        "name": "Microimpuls Redbox",
        "link": `${git}/pages/redbox/`,
        "desc": "Вёрстка PSD-макета сайта 'redbox' для компании Microimpuls.",
        "tags": "Photoshop HTML CSS",
        "class": 'html'
    },
    {
        "id": 4,
        "img": "img/item__5.jpg",
        "name": "PSD-макет для Softline",
        "link": `${git}/softlinepage/`,
        "desc": "Вёрстка из PSD-макета сайта 'allsoft 2019' для компании Softline. Верстал на ReactJS.",
        "tags": "Photoshop ReactJS",
        "class": 'react'
    },
    {
        "id": 5,
        "img": "img/item__6.png",
        "name": "TODO-list на React Native",
        "link": "https://github.com/LexaPetrov/rn-todo-app/",
        "desc": "Мобильное приложение с возможностью добавлять элементы в список дел, удалять их, когда выволнены, а также редактировать. Сделано на React Native + БД Firebase.",
        "tags": "React-Native Firebase mobile",
        "class": 'react'
    },
    {
        "id": 6,
        "img": "img/item__7.jpeg",
        "name": "Блог на React Native",
        "link": "https://github.com/LexaPetrov/rn-self-posts/",
        "desc": "Мобильное приложение - реализация личного блога с возможностью создавать посты, прикреплять к ним фотографии. Сделано на React Native + БД SQLite.",
        "tags": "React-Native SQLite mobile",
        "class": 'react'
    }
]