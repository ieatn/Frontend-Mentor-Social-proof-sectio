const rating = document.querySelectorAll('.rating')
rating.forEach((rate) => {
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('img')
        star.src = "images/icon-star.svg"
        star.alt = "star"
        rate.appendChild(star)
    }
})
