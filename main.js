const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

btn.addEventListener("click", function(){
    links.classList.toggle("display-links")
})

const date = document.getElementById("date");
const currentDate = new Date().getFullYear();
date.textContent = currentDate;