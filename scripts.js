const cards = document.querySelectorAll(".job_desc a");

cards.forEach(elem => {
    elem.addEventListener("click", (event) => {
        const targetElement = event.target.parentNode.parentNode.nextElementSibling;
        console.log(targetElement);
        targetElement.classList.toggle("show_content");
    })
})
