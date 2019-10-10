let castingCard1 = document.querySelector(".castingCard1")
let castingCard2 = document.querySelector(".castingCard2")
let castingCard3 = document.querySelector(".castingCard3")
let castingCard4 = document.querySelector(".castingCard4")
let castingCard5 = document.querySelector(".castingCard5")
let castingCard6 = document.querySelector(".castingCard6")

let zoomedCard1 = document.querySelector(".zoomCard1")
let zoomedCard2 = document.querySelector(".zoomCard2")
let zoomedCard3 = document.querySelector(".zoomCard3")
let zoomedCard4 = document.querySelector(".zoomCard4")
let zoomedCard5 = document.querySelector(".zoomCard5")
let zoomedCard6 = document.querySelector(".zoomCard6")


castingCard1.addEventListener(
    "mouseover",function(){
        zoomedCard1.classList.add("zoomedCard1A")
    }
)
castingCard1.addEventListener(
    "mouseout",function(){
        zoomedCard1.classList.remove("zoomedCard1A")
    }
)
castingCard2.addEventListener(
    "mouseover",function(){
        zoomedCard2.classList.add("zoomedCard2A")
    }
)
castingCard2.addEventListener(
    "mouseout",function(){
        zoomedCard2.classList.remove("zoomedCard2A")
    }
)
castingCard3.addEventListener(
    "mouseover",function(){
        zoomedCard3.classList.add("zoomedCard3A")
    }
)
castingCard3.addEventListener(
    "mouseout",function(){
        zoomedCard3.classList.remove("zoomedCard3A")
    }
)

castingCard4.addEventListener(
    "mouseover",function(){
        zoomedCard4.classList.add("zoomedCard4A")
    }
)
castingCard4.addEventListener(
    "mouseout",function(){
        zoomedCard4.classList.remove("zoomedCard4A")
    }
)

castingCard5.addEventListener(
    "mouseover",function(){
        zoomedCard5.classList.add("zoomedCard5A")
    }
)
castingCard5.addEventListener(
    "mouseout",function(){
        zoomedCard5.classList.remove("zoomedCard5A")
    }
)

castingCard6.addEventListener(
    "mouseover",function(){
        zoomedCard6.classList.add("zoomedCard6A")
    }
)
castingCard6.addEventListener(
    "mouseout",function(){
        zoomedCard6.classList.remove("zoomedCard6A")
    }
)
