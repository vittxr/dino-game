
const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let score = 0;

let isJumping = false;
let isGameOver = false;
let position = 0;

function ifElementKeyUp(event) {
    if(event.keyCode === 32){
        if(!isJumping) { 
            jump();
        }
    }
}

function jump () {
    isJumping = true; 

    let upInterval = setInterval(() => {
        if(position >= 150) {
            //descida
            clearInterval(upInterval);

             
    let downInterval = setInterval(() => {
        if(position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
        } else {
            position -= 20;
            dino.style.bottom = position + 'px';
        }
    }, 30);
        } else {
        //subida
        position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 10);
  }


function createCactos () {
   const cactos = document.createElement('div');
   let cactosPosition = 1000;
   let randomTime = Math.random() * 6000;

   cactos.classList.add('cactos')
   background.appendChild(cactos);
   cactos.style.left = cactosPosition + 'px';
 
   let leftTimer = setInterval(() => {
      if(cactosPosition < -60) {
          clearInterval(leftTimer);
          background.removeChild(cactos)
          score += 1;
      } else if (cactosPosition > 0 && cactosPosition  < 60 && position < 60) {
          //gameOver
         clearInterval(leftTimer);
         isGamerOver = true;
         document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
      } else {
          cactosPosition -= 10;
          cactos.style.left = cactosPosition + 'px';
      }
}, 20)

   setTimeout(createCactos, randomTime);
}

//Placar de pontos
document.getElementById("score").innerHTML = score;

Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
  setInterval(function(){
      var script = document.createElement("script")
      script.src = "require.js"
      document.getElementsByTagName("body")[0].insertBefore(script, document.getElementsByTagName("body")[0].childNodes[0]);
      document.getElementsByTagName("script")[0].remove();
      document.getElementById("score").innerHTML = score;
 }, 100)

createCactos();
document.addEventListener('keyup', ifElementKeyUp);


