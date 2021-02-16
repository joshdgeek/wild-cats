var cart = document.querySelector(".cart")
var qty = document.querySelector("#qty")
var qty1 = document.querySelector("#qty1");
var qty2 = document.querySelector("#qty2");
var price = document.querySelector(".price");
var price0 = document.querySelector(".price0");
var price1 = document.querySelector(".price1");
var cost = 37.00;
var firstcart = 0 ; 
var secondcart = 0;
var thirdcart = 0;
let tot = 0;
var total = document.querySelector("#total");
let cartNumber = document.querySelector("#cartNumber")
let order = document.querySelector("#order")
let input = document.querySelector("input")


order.onclick = function(){
 if(input.value===""){
     alert("please fill every detail")
 }
 else{
    alert("purchase successful");
    firstcart = 0;
    secondcart =0 ;
    thirdcart = 0;
    price.innerHTML = 0;
    price0.innerHTML = 0;
    price1.innerHTML = 0;
    qty.innerHTML = 0;
    qty1.innerHTML =0;
    qty2.innerHTML =0;
    update();
 }
}
function add(){
    firstcart++;
  //  alert("added to cart");
    qty.innerHTML = firstcart;
    price.innerHTML = "N"+firstcart * cost
    update()
}
function min(){
    firstcart--;
    if(firstcart<0){
        firstcart=0;
    }
  //  alert("removed")
    qty.innerHTML = firstcart;
    price.innerHTML = "N"+firstcart * cost
    update()
}

function add0(){
    secondcart++;
  //  alert("added to cart");
    qty1.innerHTML = secondcart;
    price0.innerHTML = "N"+secondcart * cost
    update()
}
function min0(){
    secondcart--;
    if(secondcart<0){
        secondcart=0;
    }
   // alert("removed")
    qty1.innerHTML = secondcart;
    price0.innerHTML = "N"+secondcart * cost;
    update();
}
function add1(){
    thirdcart++;
   // alert("added to cart");
    qty2.innerHTML = thirdcart;
    price1.innerHTML = "N"+thirdcart * cost;
    update();
}
function min1(){
    thirdcart--;
    if(thirdcart<0){
        thirdcart=0;
    }
    
  //  alert("removed")
    qty2.innerHTML = thirdcart;
    price1.innerHTML = "N"+thirdcart * cost;
    update();
}

function update(){
    let cart = (firstcart + secondcart + thirdcart)
    let tots =((secondcart * cost)+ (firstcart * cost) + (thirdcart * cost)).toFixed(2)
   total.innerHTML = `<b>${cart} items</b>`
   cartNumber.innerHTML = `<b>N${tots}</b>`
}

