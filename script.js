"use strict"

let display = document.getElementById("calc_window");
let context = display.getContext("2d");

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");


let display_num = 0;
function push_num (v){//pushes a number to the display;
    display_num *= Math.pow(10, v.length);
    display_num += parseInt(v);
    update_display();
}

//pushes display num to the display
function update_display(){
    alert(display_num);
    context.clearRect(0,0,display.width,display.height);
    context.fillText(display_num,0,0);
}
let push = push_num;
one.onclick = () => push("1");
two.onclick = () => push("2");
three.onclick = () => push("3");
four.onclick = () => push("4");
five.onclick = () => push("5");
six.onclick = () => push("6");
seven.onclick = () => push("7");
eight.onclick = () => push("8");
nine.onclick = () => push("9");