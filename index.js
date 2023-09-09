//Hidden and Show animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const classes = entry.target.classList;
        const id = entry.target.id;
        const addFunction = () => { classes.add("show"); }

        if (entry.isIntersecting) {  //If the html element comes into viewport range, add the class ".show" to it
            if (classes.contains("anim200")) {
                setTimeout(addFunction, 200);
            } else if (classes.contains("anim400")) {
                setTimeout(addFunction, 400);
            } else if (classes.contains("anim600")) {
                setTimeout(addFunction, 600);
            } else if (classes.contains("anim800")) {
                setTimeout(addFunction, 800);
            } else if (classes.contains("anim1000")) {
                setTimeout(addFunction, 1000);
            } else if (classes.contains("anim1200")) {
                setTimeout(addFunction, 1200);
            } else if (classes.contains("anim1400")) {
                setTimeout(addFunction, 1400);
            } else if (classes.contains("anim1600")) {
                setTimeout(addFunction, 1600);
            }   else if (classes.contains("anim1800")) {
                setTimeout(addFunction, 1800);
            } else {
                addFunction();
            }
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-top, .hidden, .hidden-right, .hidden-bottom");
hiddenElements.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function



//Navbar scroll
const nav = document.getElementById("navbar");
const navHeight = nav.offsetHeight;
const navList = document.querySelectorAll(".nav-list a");
const aboutTop = document.getElementById("about").offsetTop;
const projectTop = document.getElementById("project").offsetTop;
const contactTop = document.getElementById("contact").offsetTop;
let timer = false;

window.addEventListener("scroll", () => {
    const topViewPort = document.documentElement.scrollTop;
    if (topViewPort <= 100) {
        nav.style.backgroundColor = "transparent";
        navList.forEach(e => e.style.color = "#f2f2f2");
    } else if (topViewPort <= aboutTop - navHeight) {
        nav.style.backgroundColor = "#002233";
        navList.forEach(e => e.style.color = "#f2f2f2");
        console.log("hello");
    } else if (topViewPort <= projectTop - navHeight) {
        nav.style.backgroundColor = "#e9f1fA";
        navList.forEach(e => e.style.color = "#000000");
    } else if (topViewPort <= contactTop - navHeight) {
        nav.style.backgroundColor = "#45567d";
        navList.forEach(e => e.style.color = "#fff");
    } else {
        nav.style.backgroundColor = "#252a2f";
        navList.forEach(e => e.style.color = "#fff");
    }
    timer = false;
}, { passive: true });



//Welcome dynamic header
let i = 0;
let mode = 0; //Software Developer = 0, Web Developer = 1;
const txt1 = "Software Developer"; /* The text */
const txt2 = "Web Developer";
const speed = 100; /* The speed/duration of the effect in milliseconds */
const pause = 2500;
const header = document.querySelector(".typewriter");

function deleteWriter() {
    if(header.innerHTML === "") {
        mode = !mode;
        i = 0;
        setTimeout(typeWriter, speed);
    } else {
        document.querySelector('.typewriter').innerHTML = header.innerHTML.slice(0, header.innerHTML.length-1);
        setTimeout(deleteWriter, speed);
    }
}

function typeWriter() {
    if(header.innerHTML === txt1 || header.innerHTML === txt2) {
        setTimeout(deleteWriter, pause);
    } else if (mode) {
        document.querySelector('.typewriter').innerHTML += txt2.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        document.querySelector('.typewriter').innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();


//Welcome Learn more animation
document.querySelector(".welcome-learn").addEventListener("mouseover", () => {
    document.querySelector(".welcome-learn i").classList.add("fa-rotate-90");
});

document.querySelector(".welcome-learn").addEventListener("mouseout", () => {
    document.querySelector(".welcome-learn i").classList.remove("fa-rotate-90");
});



