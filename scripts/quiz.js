const quizBtns = document.querySelectorAll(".article_quiz-ans")

quizBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        quizBtns.forEach((el) => el.classList.remove("active"))
        btn.classList.add("active")
    })

})
