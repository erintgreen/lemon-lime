//document.querySelector(".hamburger-menu").addEventListener("click", () => {
   //  document.querySelector(".container").classList.toggle("change");
 // });

/*
var arr = ["cava ;)","noodles and co","motomaki", "picas","chez thuy","khow thai","panera", "go cook something you lazy fucks", "pasta jays", "grocery store sushi", "kokoro", "wapos", "osakas", "blackbelly", "le french cafe", "walnut cafe", "dushanbe"];

  function getItem(){
   document.getElementById("something").innerHTML = arr[Math.floor(Math.random() * arr.length)];

 }

function getRandomItem(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];

   return item;
  } 

const array = ["1. axe throwing", "2. build a bear", "3. pottery workshop", "4. bowling", "5. work on this website or learn something cool in cs", "6. picnic/ dinner and drive (if cold)", "7. science museum", "8. build some legos", "9. take a hike/walk", "10. go out to a nice dinner", "11. massage and movie night"];

const result = getRandomItem(array);
console.log(result);


*/ 

const henrysBirthday = {
    food : ["cava ;)","noodles and co","motomaki", "picas","chez thuy","khow thai","panera", "go cook something you lazy fucks", "pasta jays", "grocery store sushi", "kokoro", "wapos", "osakas", "blackbelly", "le french cafe", "walnut cafe", "dushanbe"],
    dates : ["1. axe throwing", "2. build a bear", "3. pottery workshop", "4. bowling", "5. work on this website or learn something cool in cs", "6. picnic/ dinner and drive (if cold)", "7. science museum", "8. build some legos", "9. take a hike/walk", "10. go out to a nice dinner", "11. massage and movie night"],
    
    }

 function getItem(type){
        if(type === "food"){
        Item = henrysBirthday.food[randomnumber]; 
        }
        if(type === "dates"){
        Item = henrysBirthday.dates[randomnumber]
        }}