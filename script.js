"use strict"

let display = document.getElementById("display");
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
let add = document.getElementById("+");
let sub = document.getElementById("-");
let mult = document.getElementById("*");
let equal = document.getElementById("=");
let C = document.getElementById("C");
let CE = document.getElementById("CE");
let CS = document.getElementById("CS");
//setup the display
let display_num = 0;
let stored_num = 0;
let last_op = "=";
update_display();

function push_num (v){//pushes a number to the display;
    display_num *= Math.pow(10, v.length);
    display_num += parseInt(v);
    update_display();
}
//stores the currently displayed number and then begins putting the new number on the display.
function store_display(){
    stored_num = display_num;
    display_num = 0;
    update_display();
}
//maths functions
function add_num(){
    last_op = "+";
    store_display();
}
function sub_num(){
    last_op = "-";
    store_display()
}
function mult_num(){
    last_op = "*";
    store_display();
}
function C_num(){//clear the display
    display_num = 0;
    update_display();
}
function CE_num(){//clears the display and stored value.
    stored_num = 0;
    display_num = 0;
    update_display();
}
function CS_num(){
    stored_num = 0;
    update_display();
}
function equals(){
    switch(last_op){
        case "=": break;
        case "+": display_num += stored_num; break;
        case "-": display_num -= stored_num; break;
        case "*": display_num *= stored_num; break;
    }
    update_display();

}
//pushes display num to the display
function update_display(){
    context.clearRect(0,0,display.width,display.height);
    context.font = "20px Arial"
    context.fillText(display_num,0,20);//display our current value at the top.
    context.font = "10px Arial"
    context.fillText(stored_num,0,40);//stored num is displayed underneath our the current value.
}
//button listeners
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
add.onclick = add_num;
sub.onclick = sub_num;
mult.onclick = mult_num;
equal.onclick = equals;
C.onclick = C_num;
CE.onclick = CE_num;
CS.onclick = CS_num;
//key listeners
document.addEventListener("keydown",(event) => {
    if(["1","2","3","4","5","6","7","8","9"].includes(event.key)){
        push(event.key);
    }
});