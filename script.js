var navbar = document.getElementById("nav");
var menu = document.getElementsByClassName("menu");
var home = document.getElementById("home");
var about = document.getElementById("about");
var follow = document.getElementById("follow");
var designs = document.getElementById("b");
var state = 0;

function draw(){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            designs.style.color = "#fff";
            navbar.style.background = "crimson";
            state = 1;
        }
        else{
            navbar.style.background = "none";
            state = 0;
            designs.style.color = "crimson";
        }
}

function hover1(){
    if(state == 0){
        home.style.color = "crimson";
    }
}
function hover2(){
    if(state == 0){
        about.style.color = "crimson";
    }
}
function hover3(){
    if(state == 0){
        follow.style.color = "crimson";
    }
}

function down1(){
    home.style.color = "#fff";
}
function down2(){
    about.style.color = "#fff";
}
function down3(){
    follow.style.color = "#fff";
}