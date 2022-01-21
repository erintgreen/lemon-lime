var myArray = [
    "picas",
    "cava",
    "zoe mama"
  ];
  
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  document.body.innerHTML = randomItem;

  