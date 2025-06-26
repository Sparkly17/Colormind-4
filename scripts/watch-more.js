const button = document.getElementById("watch-more")
const allArticles = Array.from(document.getElementsByClassName("article-href"))

var vsego = 0;

function click(){
    console.log("filter")
    vsego += 6;
    allArticles.forEach((article, index) => {
        if(index < vsego){
            article.style.display='block'
        } else{
            article.style.display='none'
        }
    })
}

button.addEventListener('click', () => {
    click()
})

click()