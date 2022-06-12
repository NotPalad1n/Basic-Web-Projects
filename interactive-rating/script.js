var value = 0;

function one(){
    value = 1;
    document.querySelectorAll(".button").forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(".one").classList.add('active');
}

function two(){
    value = 2;
    document.querySelectorAll(".button").forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(".two").classList.add('active');
}

function three(){
    value = 3;
    document.querySelectorAll(".button").forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(".three").classList.add('active');
}

function foor(){
    value = 4;
    document.querySelectorAll(".button").forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(".foor").classList.add('active');
}

function five(){
    value = 5;
    document.querySelectorAll(".button").forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(".five").classList.add('active');
}

function submit(){
    if (value !== 0){
        document.querySelector(".request").textContent = '';
        var img = document.createElement("img");
        img.src = "images/illustration-thank-you.svg";
        document.querySelector(".icon").appendChild(img);
        document.querySelector(".user").textContent = "You selected " + value + " out of 5"
        document.querySelector(".user").style.padding = "0.25em 1em";
        document.querySelector(".user").style.margin = "2em 0"; 
        document.querySelector(".title").textContent = 'Thank you!';
        document.querySelector(".text").textContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!';
    }
}