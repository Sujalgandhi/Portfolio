

//you can change the text, but you need to keep same format [yourtext, color];
let yourtext = [
    ["Full Stack", "#DE3C4B"],
    ["Frontend", "#7DE2D1"],
    ["Freelancer", "#DE3C4B"]
  ];
  
  let x = 0;
  let y = 0;
  //how fast typing is
  let wait = 300;
  //how long you want to text stay before overwriting
  let additionalwait = 5;
  let txt = yourtext[0][0].split("");
  let out = "";
  let retyping = setInterval(function () {
    document.getElementById("changingText").innerHTML = out;
    if (x > txt.length - 1) {
    } else {
      out += txt[x];
    }
    x++;
    if (x == txt.length + 2 + additionalwait) {
      if (y == yourtext.length - 1) {
        y = 0;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      } else {
        y += 1;
        txt = yourtext[y][0].split("");
        out = "";
        document.getElementById("changingText").innerHTML = out;
        document.getElementById("changingText").style.color = yourtext[y][1];
        x = 0;
      }
    }
  }, wait);
  

  // this function used to creat th countUp  animation for business websites
// use the three parameters to customize it
// call it for every element
// note that may be small diffrance in the count 100 be 99 so chack it
function numCounter(tagId, maxCount, speed) {
    var initialNumber = 0;
    function counter() {
      document.getElementById(tagId).innerHTML = initialNumber;
      ++initialNumber;
    }
    var counterDelay = setInterval(counter, speed);
    function totalTime() {
      clearInterval(counterDelay);
    }
    var totalPeriod = speed * maxCount;
    setTimeout(totalTime, totalPeriod);
  }
  
  numCounter("Projects", 83, 100);
  numCounter("Clients", 80, 100);
  numCounter("Partners", 92, 100);
  numCounter("", 4, 100);
  

 