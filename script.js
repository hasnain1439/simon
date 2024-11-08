let gameSeq = [];
let userSeq = [];
let level = 0;
let gameStarted = false;
let gameLevel = document.getElementById("levels");
let body = document.getElementById("body");
let colorBoxes = ['red', 'yellow', 'purple', 'green'];
let gameBtn = document.querySelectorAll(".game-btn");

document.addEventListener("keypress", function(){
    if(gameStarted == false){
        gameStarted = true;
        gameStartLogic()
    }
});

function flashbtn(btn){
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    }, 350)
}

function userFlashbtn(btn){
    btn.classList.add('user-flash');
    setTimeout(function() {
        btn.classList.remove('user-flash');
    }, 350)
}

function gameStartLogic(){
    userSeq = [];
    level++;
    gameLevel.textContent = `Level ${level}`;
    let randomBox = Math.floor(Math.random() * 4);
    let randomBoxGet = colorBoxes[randomBox];
    let btnGet = document.querySelector(`#${randomBoxGet}`);
    flashbtn(btnGet)
    gameSeq.push(randomBoxGet);
    console.log(gameSeq);
}

function checkSeq(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(gameStartLogic, 1000);
        }
    }
    else{
        body.classList.add("wrong-flash");
        setTimeout(()=>{
            body.classList.remove("wrong-flash");
        }, 250);
       resetGame();
    }
}

gameBtn.forEach(function(ele){
    ele.addEventListener("click", function(){
        userFlashbtn(this)
        console.log(this)
        let userSelectBox = this.getAttribute("id");
        userSeq.push(userSelectBox);
        checkSeq(userSeq.length-1);
    })
})

function resetGame(){
    gameLevel.innerHTML = `Game Over! Your Level is <b>${level}</b> <br>Press any key to Start Again the game`;
    gameSeq = [];
    userSeq = [];
    level = 0;
    gameStarted = false;
}