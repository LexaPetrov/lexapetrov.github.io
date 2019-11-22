document.addEventListener("DOMContentLoaded", function (event) {

    if (window.location.hash.split('@')[0] === "#blog"){
        Blog();
        setTimeout(toPost, 1000);
    }

    let sendMail;
    let sites = JSON.parse(JSON.stringify(data));
    console.log("Кол-во сайтов - " + sites.length);
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

    let post = JSON.parse(JSON.stringify(posts));
    post.sort(function(a, b){
        return b.id-a.id
    })
    console.log("Кол-во постов блога - " + post.length);
    for (let i = 0; i < post.length; i++) {
        let div = `<div class="blogPost" id="${post[i].ref}">`;
        div += ` <h1 class="blogPostTitle">${post[i].title}</h1>`;
        div += ` <p class="blogPostDate">${post[i].date}</p>`;
        div += `<p class="blogPostText">${post[i].text}</p>`;
        div += `<p class="sourceLink"><a href="https://lexapetrov.github.io#blog@${post[i].ref}">ссылка на пост</a></p>`;
        div += `</div>`;
        document.getElementById("blogContent").innerHTML += div;
    }
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


function toPost() {
    document.getElementById(window.location.hash.split('@')[1]).scrollIntoView({behavior: "smooth"});
}

