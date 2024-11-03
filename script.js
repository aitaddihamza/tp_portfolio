const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile-nav');
const children = menuButton.children
const links = menu.children;


/*
.menu-button div:first-child {
    transform: translateY(11px) rotate(45deg);
}

.menu-button div:nth-child(2) {
    visibility: hidden;
}

.menu-button div:last-child {
    transform: translateY(-12px) rotate(-45deg);
}
*/

for(let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", () => {
            remove()
        })
}

let state = 0
menuButton.addEventListener('click', () => {
    if(state == 0) {
        show()
        state = 1
    }
    else {
        remove()
        state = 0
    }
        
})

function show() {
    children[0].style.transform = "translateY(11px) rotate(45deg)"
    children[2].style.transform = "translateY(-12px) rotate(-45deg)"
    children[1].style.visibility = "hidden"
    menu.style.top = "0px";
}

function remove() {
    children[0].style.transform = "translateY(0px) rotate(0deg)"
    children[2].style.transform = "translateY(0px) rotate(0deg)"
    children[1].style.visibility = "visible"
    menu.style.top = "-1000px";
}