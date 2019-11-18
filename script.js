document.addEventListener("DOMContentLoaded", function (event) {
    let sendMail;
    let sites = JSON.parse(JSON.stringify(data));
    console.log("Кол-во постов - " + sites.length);
    sites.sort(function(a, b){
        return b.id-a.id
    })
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
    sendMail = () => window.location.href = `mailto:al1111997@yandex.ru`;
});

function expandContent (){
    let x = document.getElementById('content');
    if (x.className === "content") {
        document.getElementById("expand").innerHTML = "сделать контент снизу ⬇️";
        x.className += "Expanded";
    } else {
        document.getElementById("expand").innerHTML = "сделать контент справа ➡️";
        x.className = "content";
    }
};

function Blog() {
    let posts = document.getElementById("postsContent")
    let blog = document.getElementById("blogContent")
    if (posts.style.display === "none"){
        posts.style.display = "flex"
        blog.style.display = "none"
    } else {
        posts.style.display = "none"
        blog.style.display = "flex"
    }
}


