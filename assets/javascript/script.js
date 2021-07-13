const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const experience = document.querySelector('.experiences');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

experience.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        //remove active from other button
        buttons.forEach(function (button) {
            button.classList.remove('active');
        });
        e.target.classList.add('active');


        //hide other article
        articles.forEach(function(article){
            article.classList.remove("active");
            console.log("Dimas")
        });
        const element = document.getElementById(id);
        element.classList.add('active');
    }
});
