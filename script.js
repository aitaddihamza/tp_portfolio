const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile-nav');
const children = menuButton.children
const links = menu.children;

let observer = new IntersectionObserver(entries => {
    for(const entry of entries) {
        console.log(entry.isIntersecting)
        if(entry.isIntersecting) {
            if(entry.target.className == "phase1" || entry.target.id == "exps") {
                entry.target.animate([
                    {transform: 'translateX(500px)', opacity: 0},
                    {transform: 'translateX(0px)', opacity: 1}
                ], {
                    duration: 600
                }) 
            }
            else if(entry.target.className == "phase2" || entry.target.id == "exp-img") {
                entry.target.animate([
                    {transform: 'translateX(-500px)', opacity: 0},
                    {transform: 'translateX(0px)', opacity: 1}
                ], {
                    duration: 600
                }) 
            }
            else {
                entry.target.animate([
                    {opacity: 0, transform: 'translateY(-500px)'},
                    {transform: 'translateY(0px)', opacity: 1}
                ], {
                    duration: 600
                }) 
            }
        }
    }
})

observer.observe(document.querySelector('.phase1'))
observer.observe(document.querySelector('.phase2'))
observer.observe(document.querySelector('.phase3'))
observer.observe(document.getElementById('exps'))
observer.observe(document.getElementById('exp-img'))

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