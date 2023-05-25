let boxEl = document.getElementById('box');
let btnEl = document.getElementById("btn");
const copyEl = document.getElementById("copy");
const notificationEl = document.querySelector(".notification")

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij@#$%^&*()-_"//?.><,klmnopqrstuvwxyz0123456789';

btnEl.addEventListener("click", () => {
generatePassword ();
})

function generatePassword () {
  // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghij@#$%'
  let result = " ";
  let length = 10
  const charactersLenght = characters.length;
  for( let x = 0; x < length; x++){
    result += characters.charAt(Math.floor(Math.random() * charactersLenght));
    // const randomNum = Math.floor(Math.random() * charactersLenght)
    // result += characters.substring(randomNum, randomNum + 1)
  } 
  console.log(result);
  boxEl.value = result;
   notificationEl.innerText = result + " copied!";
  
} 


copyEl.addEventListener( "click", () =>{
  copyPassword ();
  notificationEl.classList.remove("active");
  setTimeout( () =>{
    notificationEl.classList.add("active");
  }, 200)
})

function copyPassword () {
   boxEl.select(); //selects
   boxEl.setSelectionRange(0,999999) //choses range for mobile devices
  navigator.clipboard.writeText(boxEl.value)  //copies
}




