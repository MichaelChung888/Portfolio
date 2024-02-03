//--------------------------------------------------------------------------------------//
//                              Hidden and Show animations                              //
//--------------------------------------------------------------------------------------//

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

const hiddenElements = document.querySelectorAll(".hiddenAnim-left, .hiddenAnim-top, .hiddenAnim, .hiddenAnim-right, .hiddenAnim-bottom");
hiddenElements.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function

//--------------------------------------------------------------------------------------//
//                                    Navbar Scroll                                     //
//--------------------------------------------------------------------------------------//

const nav = document.getElementById("navbar");
const navHeight = nav.offsetHeight;
const navList = document.querySelectorAll("#navbar-list a");
const aboutTop = document.getElementById("about").offsetTop;
const projectTop = document.getElementById("project").offsetTop;
const contactTop = document.getElementById("contact").offsetTop;
let timer = false;

window.addEventListener("scroll", () => {
    const topViewPort = document.documentElement.scrollTop;
    if (topViewPort <= 100) {
        nav.style.backgroundColor = "transparent";
        navList.forEach(e => e.style.color = "#111827");
        navList.forEach(e => e.classList.remove("underline"))
        navList[0].classList.add("underline")
    } else if (topViewPort <= aboutTop - navHeight) {
        nav.style.backgroundColor = "#fff";
        navList.forEach(e => e.style.color = "#111827");
        navList.forEach(e => e.classList.remove("underline"))
        navList[0].classList.add("underline")
    } else if (topViewPort <= projectTop - navHeight) {
        nav.style.backgroundColor = "#111827";
        navList.forEach(e => e.style.color = "#fff");
        navList.forEach(e => e.classList.remove("underline"))
        navList[1].classList.add("underline")
    } else if (topViewPort <= contactTop - navHeight) {
        nav.style.backgroundColor = "#fff";
        navList.forEach(e => e.style.color = "#111827");
        navList.forEach(e => e.classList.remove("underline"))
        navList[2].classList.add("underline")
    } else {
        nav.style.backgroundColor = "#1e1b4b";
        navList.forEach(e => e.style.color = "#fff");
        navList.forEach(e => e.classList.remove("underline"))
        navList[3].classList.add("underline")
    }
    timer = false;
}, { passive: true });



//--------------------------------------------------------------------------------------//
//                                 Home Dynamic Header                                  //
//--------------------------------------------------------------------------------------//

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

//--------------------------------------------------------------------------------------//
//                                     Navbar Menu                                      //
//--------------------------------------------------------------------------------------//

// OpenMenu()
function OpenMenu() {
    document.getElementById("Menu").classList.remove("hidden");
}

// CloseMenu()
function CloseMenu() {
    document.getElementById("Menu").classList.add("hidden");
}

//--------------------------------------------------------------------------------------//
//                                        Email                                         //
//--------------------------------------------------------------------------------------//

emailjs.init("TzoKCIF6zHtrSca6D");

function Submit(event) {
    event.preventDefault();
    console.log("hello")
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send('service_kj75q4a', 'template_9hrz1og', templateParams, 'TzoKCIF6zHtrSca6D')
    .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
        console.log('FAILED...', err);
    });
}

var form = document.getElementById("form-id");
form.addEventListener('submit', Submit);



