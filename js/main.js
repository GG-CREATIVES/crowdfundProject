let nav = document.querySelector(".navItems")
let body = document.querySelector("body")

document.querySelector("#openMenu").addEventListener("click", function(){
    nav.style.right = "0"
    // body.style.filter = "blur(3px)"

})

document.querySelector("#closeMenu").addEventListener("click", function(){
    nav.style.right = "-300px"
    // body.style.filter = "blur(0px)"
})