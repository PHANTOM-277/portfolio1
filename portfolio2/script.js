//get all elements

const img2 = document.querySelector("#box2img");
const larrow2 = document.querySelector("#box2-left-arrow");
const rarrow2 = document.querySelector("#box2-right-arrow");
const nav = document.querySelector("nav");
const nav_text = document.querySelectorAll(".nav-text"); // returns a list
const nav_text_length = nav_text.length;//get no.of elements
const computedStyle = window.getComputedStyle(nav);
const nav_height = parseFloat(computedStyle.getPropertyValue('height'));
console.log(nav_height);
const box = new Array(5);
const b_bound = new Array(5);
let j = 0;
let i = 1;
let k = 0;
//get all boxes
for(j=0;j<5;j++){
    box[j] = document.querySelector(`#box${j+1}`);
}



//all functions
function change(IMG , num){
    IMG.src=`assets/icons/${num}.png`;
}

function change_color(num){
    if(num%2 == 0){
        nav.style.backgroundColor = "#175676";
        for(k = 0; k< nav_text_length; k++){
            nav_text[k].style.color = "#cce6f4";
        }
    }
    else{
        nav.style.backgroundColor = "#cce6f4";
        for(k = 0; k< nav_text_length; k++){
            nav_text[k].style.color = "#175676";
        }
    }
}

function tell(o){
    //testing function
    console.log(box[o].getBoundingClientRect().top);
    console.log(box[o].getBoundingClientRect().bottom);
}

function img_isInViewPort(){
    img_bound = img2.getBoundingClientRect();
    if(
        img_bound.left>0
        && img_bound.top>0
        && img_bound.right <= window.innerWidth
        && img_bound.bottom <= window.innerHeight
    ){
        if(i<9){
            i++;
        }
        else if(i==9){
            i = 1;
        }
        change(img2,i);
        
    }
}


function box_isInViewPort(){
    for(j=0;j<5;j++){
        b_bound[j] = box[j].getBoundingClientRect();
        if((nav_height <b_bound[j].bottom && b_bound[j].bottom <= window.innerHeight) || b_bound[j].top == 0){
            change_color(j+1);
        }
    }
}


larrow2.addEventListener("click", function(){
    if(i>1){
        i--;
    }
    else{   // i is 1
        i = 9;
    }
    change(img2,i);
    clearInterval(timer);
    slide_timer = setInterval(img_isInViewPort, 3000);
})

rarrow2.addEventListener("click",function(){
    if(i<9){
        i++;
    }
    else{ // i is 9
        i=1;
    }
    change(img2,i);
    clearInterval(timer);
    timer = setInterval(img_isInViewPort, 3000);
})

let slide_timer = setInterval(img_isInViewPort, 3000);

let box_timer = setInterval(box_isInViewPort, 200);




