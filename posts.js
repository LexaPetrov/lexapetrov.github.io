let posts = [
    {
        "id": "0",
        "ref": "pervyi_post",
        "title":
            `
    Первый пост
    `,
        "date": "20 ноя 2019 16:43",
        "text": `Проделал огромную работу по переделке портфолио,
    это уже третья его версия, сделал даже блог себе, буду тут писать что-нибудь интересное.
    Изучаю сейчас React кстати :)`
    },

    {
        "id": "1",
        "ref": "10_ssylok_dlya_spark_ar",
        "title": `10 ПОЛЕЗНЫХ ССЫЛОК И ПОДСКАЗОК ДЛЯ СОЗДАТЕЛЕЙ МАСОК`,
        "date": "22 ноя 2019 18:00",
        "text": `
      Здесь я собрал для вас полезные ссылки и ответы на частые вопросы при работе с масками в Spark AR:
          <p>&nbsp;</p>
          <p>1) Где открывать файлы script.js? Я советую эту программу - <a href="https://notepad-plus-plus.org/downloads/">NotePad++</a></p>
          <p>&nbsp;</p>
          <p>2) Где посмотреть статистику своих масок? Как загрузить маску? - <a href="https://www.facebook.com/sparkarhub">facebook.com/sparkarhub</a></p>
          <p>&nbsp;</p>
          <p>3) Я хочу сам обучаться, как мне найти информацию? Официальная документация - <a href="https://sparkar.facebook.com/ar-studio/learn/documentation/">https://sparkar.facebook.com/ar-studio/learn/documentation/</a></p>
          <p>&nbsp;</p>
          <p>4) КАК ПРИВЯЗАТЬ ИНСТАГРАМ К ФЕЙСБУКУ / ФЕЙСБУК К ИНСТАГРАМУ?? У меня работает <a href="https://www.facebook.com/business/help/898752960195806">эта инструкция</a></p>
          <p>&nbsp;</p>
          <p>5) КАК ЗАПИСАТЬ ДЕМОНСТРАЦИОННОЕ ВИДЕО? Нажмите на кнопку 'Send to device' в программе, отправьте эффект
            в инстаграм камеру, снимите видео со своим эффектом. Затем сохраните его в камеру телефона и перекиньте
             любым способом на ПК (через вк, почту, не важно)</p>
            <p>&nbsp;</p>
            <p><b>Требования к видео:</b>
    
            <p>Снято с помощью камеры Instagram
            <p>Не редактировалось (не видео Boomerang)
            <p>Без наложения
            <p>Максимум 15 секунд
            <p>Размер файла не превышает 32 МБ
            <p>Тип файла: MOV или MP4
            <p>&nbsp;</p>
            <p>6) КАК СОЗДАТЬ ИКОНКУ ДЛЯ МАСКИ? 
            <a href="https://sparkar.facebook.com/ar-studio/learn/documentation/design/effect-icons/">ИНСТРУКЦИЯ</a>
            <a href="https://origincache.facebook.com/developers/resources/?id=Instagram-Template.zip">
             ШАБЛОН ДЛЯ ФОТОШОПА</a></p>
     <p><img src="dist/img/blogimg.jpg" class="blogImg"/>
    <p>&nbsp;
      <p>7) Название эффекта содержит теги / URL. Что делать? Все просто, уберите их из названия.
    Теги это слова с символом '#', url это различные ссылки</p>
      <p>&nbsp;
     <p>8) НЕ РАБОТАЕТ КНОПКА 'Edit' ЧТО ДЕЛАТЬ? СПОСОБ 1 - Откройте файл вручную 
     (блокнотом, Notepad++, Sublime Text и тд.) из системного проводника из
    той папки, в которую вы сохранили проект. СПОСОБ 2 - Присвойте Visual Studio Code /
     Sublime / #выпоняли стандартный способ открытия файлов .js в Windows, и SparkAR откроет его,
      когда вы щелкнете по нему.</p>
     <p>&nbsp;
     <p>9) Где взять видео с двумя людьми? 
     <a href="https://ru.depositphotos.com/stock-footage/%D0%B4%D0%B2%D0%B0-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.html">
     например здесь</a>, его не нужно покупать, просто нажмите на него пр. кнопкой мыши - 
     "сохранить видео как..." Затем воспользуйтесь любым конвертером для изменения формата на 
     .webm и любым редактором для образки видео. 
     <p>&nbsp;
     <p>10) ССЫЛКИ - <a href="https://video.online-convert.com/ru/convert-to-webm">
     Онлайн конвертер в .webm для видео</a> 
     <a href="https://online-video-cutter.com/ru/">Онлайн обрезка видео</a>
     <p>&nbsp;
     <p>Спасибо за внимание! Для материальной поддержки (буду очень рад)- 
     <a href="https://rocketbank.ru/aleksey-petrov-sparkling-hill">ТЫК</a>
    `
    },
    {
        "id": "2",
        "ref": "slider_spark",
        "title":
            `
    NATIVE SLIDER - ОБНОВЛЕНИЕ В SPARK AR
    `,
        "date": "26 ноя 2019 15:48",
        "text": `
        <p>Всем привет! В программу добавили слайдер, новый дополнительный контроллер, который можно вызывать непосредственно в камере 
        Instagram, который позволяет пользователям выбирать и настраивать детали эффекта в соответствии со своими предпочтениями.
        <p>Что можно менять с помощью него?</p>
        <p>&nbsp;</p>
        <p>Можно менять: opacity, zoom элементов, фокус элементов (как видно в официальном эффекте в камере).</p>
        <p>&nbsp;</p>
        <p>Также, используя обращения к input'ам блока makeup из туториала по макияжу, я думаю, тоже можно менять значения. Например тут 
         изменять размеры глаз, теней, прозрачности губ и так далее. (ещё не пробовал, кто делал и получилось - молодец)</p>
         <p>&nbsp;</p>
         <img src="./dist/img/blogimg3.png" class="blogImg" alt="">
        <p>&nbsp;</p>
		<p>Код для подключения слайдера:</p>
		<div style="max-width: 100%; font-size: 12px; text-wrap: " >
		<p>const nativeUI = require("NativeUI");
        <p>const materials = require("Materials");
        <p>let val = 0.5;
        <p>let mat = materials.get('material0');
        <p>const slider = nativeUI.slider;
        <p>slider.value.monitor({fireOnInitialValue:false})
        <p>.subscribe((mod) => {
        <p>val = mod.newValue;
        <p>mat.opacity = val;
        <p>});
        <p>slider.value = 0.5;
        <p>slider.visible = true;
        </div>
         <p>Пока как-то так.</p>
         <p>Спасибо за внимание! Для материальной поддержки (буду очень рад)- 
     <a href="https://rocketbank.ru/aleksey-petrov-sparkling-hill">ТЫК</a>
        `
    },

    {
        "id": "3",
        "ref": "pages_news",
        "title":`ОБНОВЛЕНИЕ БЛОГА И ПОРТФОЛИО - ТЕМНАЯ ТЕМА ПОСТОВ`,
        "date": "30 ноя 2019 22:11",
        "text": `
         <p>Обновил свой сайт. Теперь посты портфолио и блога имеют тёмную тему.
         Добавил кликабельные ссылки на свёрстанные макеты в портфолио. 
         Вёрстка некоторых макетов не закончена до конца. И не знаю, буду ли копаться в старом коде, 
         чтобы довести до конца вёрстку старых макетов, или же возьмусь за новые.
         Все свёрстанные макеты теперь будут располагаться в репозитории
         <a href="https://github.com/LexaPetrov/pages">https://github.com/LexaPetrov/pages</a> и будут
         лежать в каталоге /pages, веб-приложения с отдельными репо будут лежать по адресам этих репо,
          сайт и блог лежат
         на одноимённом репозитории.
         `
    },
    {
        "id": "4",
        "ref": "reactnative_news",
        "title":`REACT NATIVE IS COMING`,
        "date": "2 дек 2019 13:41",
        "text": `<p>Параллельно с изучением React я начал изучать React Native.`
    },
    {
        "id": "5",
        "ref": "reactnative_complete",
        "title":`Прошёл курс по React Native`,
        "date": "14 дек 2019 13:36",
        "text": `<p>Завершил прохождение курса от Владилена Минина. Очень интересно и информативно, а главное
        всё понятно! С полученной информацией уже можно создавать крутые приложения, использовать как удалённую БД
        (Firebase), так и локальную (SQLite). Рекомендую данный курс к покупке! Не пиратьте.
        <img style="width: 30%; height:50%; align: center;" src="https://udemy-certificate.s3.amazonaws.com/image/UC-0SVDER8O.jpg?l=null
        " class="blogImg" alt="">
        `
    }
];

