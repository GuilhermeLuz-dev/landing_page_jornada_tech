const cards = document.querySelectorAll(".job_desc a h4");
const questions = document.querySelectorAll(".faq__questions__item__question");
cards.forEach(elem => {
    elem.addEventListener("click", (event) => {
        const targetElement = event.target.parentNode.parentNode.parentNode.nextElementSibling;
        targetElement.classList.toggle("show_content");
        closeCards(targetElement);
    })
})

function closeCards(target) {
    cards.forEach(element => {
        let targetElement = element.parentNode.parentNode.parentNode.nextElementSibling;
        if (targetElement != target) {
            targetElement.classList.remove("show_content");
        }
    })


}

questions.forEach(question => {
    question.addEventListener("click", (event) => {
        abreOuFechaResposta(event);
    })
})

function abreOuFechaResposta(event) {
    const classe = "faq__questions__item--is-open";
    const targetQuestion = event.target;
    if (targetQuestion.classList.contains("faq__questions__item__question")) {
        targetQuestion.classList.toggle("faq__questions__item__question--open");
        targetQuestion.parentNode.classList.toggle("faq__questions__item--open");
        targetQuestion.nextElementSibling.classList.toggle(classe);
    }
}