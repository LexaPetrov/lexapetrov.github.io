document.addEventListener("DOMContentLoaded", function (event) {
    let sendMail;
    let expand;
    let sites = JSON.parse(JSON.stringify(data));
    console.log("Кол-во постов - " + sites.length);
    for (let i = 0; i < sites.length; i++) {
        let div = `<div class="postsCard">`;
        div += `<img src="${sites[i].img}" alt="postCard" />`;
        div += `<div class="postText">`;
        div += `<h1 class="postTitle"><a href="${sites[i].link}">${sites[i].title}</a></h1>`;
        div += `<span class="postDescription">${sites[i].description}</span>`;
        div += `<span class="postDate">Добавлено: ${sites[i].date}</span>`;
        div += `<span class="postTags">${sites[i].tags}</span>`;
        div += `</div>`;
        div += `</div>`;
        document.getElementById("postsContent").innerHTML += div;

    }
    // for (let i = 0; i < sites.length; i++) {
    //     data[i].tags.split(" ")[i].toUpperCase();
    // }
    sendMail = () => window.location.href = `mailto:al1111997@yandex.ru`;

});