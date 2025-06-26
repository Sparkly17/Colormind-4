const anses = document.querySelectorAll(".question-anses");
anses.forEach((ans) => {
    const btns = ans.querySelectorAll(".question-ans");
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(el => el.classList.remove("active"));
            btn.classList.add('active');
        });
    });
});

