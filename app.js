//Hidden and Show animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {             //If the html element comes into viewport range, add the class ".show" to it
            entry.target.classList.add("show");
        }
        else {                                  //When it goes out of viewport range, remove the ".show" class
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll(".hidden-left") //Will take all html elements with class ".hidden"
const hiddenElementsTop = document.querySelectorAll(".hidden-top") //Will take all html elements with class ".hidden"
hiddenElementsLeft.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function
hiddenElementsTop.forEach((el) => observer.observe(el)); //Take each html element in the array and pass it into the observer function



//Welcome dynamic header
var line1 = document.querySelector('.dynamic-header');

var typewriter = new Typewriter(line1, {
    loop: true,
    delay: 70
});

setTimeout(() => {
    typewriter.typeString("Hi my name is Michael Chung")
    .pauseFor(2500)
    .deleteAll()
    .typeString("I'm a Junior Software and Web Developer")
    .pauseFor(2500)
    .start();
}, 1000);