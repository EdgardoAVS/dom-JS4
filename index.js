window.onload = start;

let plus = 0,
    score = 0;

let numbers = []
const doc = {
  id: function(id) {
    return document.getElementById(id);
  }
}

function start () {
  doc.id("score").innerHTML = `Score: ${score}/5`;
  doc.id("result").focus();

  document.querySelectorAll("#number").forEach( element => {
    plus += element.value = Math.floor(Math.random() * 10);
    numbers.push(element.value);
  });

  if(score < 5) {
  doc.id("check").onclick = check;
  doc.id("result").onkeyup = function(e) {
    if (e.key === "Enter") {
      check();
    }
  }
} else {
  doc.id("container-result").innerHTML = `<p class="final">You have finished the game!</p> <button id="try-again" class="button">Play Again</button>`;
  doc.id("check").onclick = "";
  doc.id("result").setAttribute("disabled", "disabled");
  doc.id("try-again").onclick = restart;
}
}



function check () {
  doc.id("result").focus();
  
  const result = doc.id("result").value;
  if(result == plus) {
    score++;
    doc.id("container-result").innerHTML= `<p class="rigth">Correct!</p>`;
    plus = 0;
    numbers = [];
    doc.id("result").value = "";
    start();
    
  } else {
    doc.id("container-result").innerHTML = `<p class="wrong">The result of ${numbers[0]} + ${numbers[1]} es: ${plus}</p> <button id="try-again"class="button">Try Again</button>`;   
    doc.id("result").setAttribute("disabled", "disabled");
    numbers = [];
    doc.id("try-again").onclick = restart;
  }
}

function restart () {
  score = 0;
  plus = 0;
  doc.id("result").value = "";
  doc.id("result").removeAttribute("disabled");
  doc.id("container-result").innerHTML = "";
  start();
}

  

