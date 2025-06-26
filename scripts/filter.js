const filterButtons = Array.from(document.getElementsByClassName("filter_tag"))
const articles = Array.from(document.getElementsByClassName("article-href"))
filterButtons.forEach(filter => {
    filter.addEventListener('click', () => {

        filterButtons.forEach((el) => el.classList.remove("active"))
        filter.classList.toggle("active")

        const category = filter.dataset['category']
        articles.forEach((el) => el.style.display="none");
        articles.forEach((el) => {
            if(category === "all" || category === el.dataset['category']){
                el.style.display="flex"
            }
        })

    })
})