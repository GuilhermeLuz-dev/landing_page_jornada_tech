const cards = document.querySelectorAll(".job_desc a h4");
const questions = document.querySelectorAll("[data-faq-question]");
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
            console.log(targetElement)
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
    const targetQuestion = event.target.parentNode;
    targetQuestion.querySelector(".faq__questions__item__question").classList.toggle("faq__questions__item__question_close");
    targetQuestion.classList.toggle("faq__questions__item--open");
    targetQuestion.querySelector(".faq__questions__item__answer").classList.toggle(classe);
}