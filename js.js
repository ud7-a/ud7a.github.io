let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')

onscroll = function () {
    let value = scrollY
    stars.style.left = value + 'px'
    moon.style.top = value*2 + 'px'
    if (value >= 409) {
        moon.style.display = 'none'
    }
    else {
        moon.style.display = 'block'
    }
    boat.style.left = value * 2 + 'px'
    boat.style.top = value * 2 + 'px'
    river.style.top = value + 'px'
    mountains3.style.top = value + 'px'
    mountains4.style.top = value + 'px'

}
