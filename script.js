// let number = Math.random();
// number = number * 1000;
// number = Math.floor(number);
// console.log(number);

// alert("i am workding");

let clickBtn = document.getElementById("btn");
let ar = ["purple","green","yellow","violet","indigo","blue","ornage","red","black","yellowgreen"];

function randomNumberGenerator (){
    let number = Math.floor(Math.random() * ar.length);
    return number;
}

// let i = randomNumberGenerator();
// console.log(i);

function changeBG (){
    let i = randomNumberGenerator();
    document.body.style.backgroundColor = ar[i];
    clickBtn.style.backgroundColor = ar[i];
    clickBtn.style.color = "white";
    
}

clickBtn.addEventListener("click",changeBG);