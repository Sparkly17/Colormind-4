const likes = document.querySelectorAll(".like")
likes.forEach((like) => {
    let count = parseInt(like.textContent.trim());
    like.addEventListener('click', () => {
        like.innerHTML = `<img alt="" class="like_icon" src="images/like-active.svg"/> ${count+1}`;
    })
})
