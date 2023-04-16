let midText = document.getElementById('mid-text')
let playerChoice
let comFinalChoice

class comChoices{
    constructor(element, elementImg){
        this.element = document.getElementById(element);
        this.elementImg = document.getElementsByClassName(elementImg)[0];
    }

    chosen (){
        comFinalChoice = this.element.id
        this.elementImg.style.width='120px';
        this.elementImg.style.backgroundColor='rgb(255,255,255, .5)';
        this.elementImg.style.padding = '10px';
        this.elementImg.style.borderRadius='10px';
        return(comFinalChoice)
    }

    refresh(){
        this.elementImg.style.width='';
        this.elementImg.style.backgroundColor='';
        this.elementImg.style.padding = '';
        this.elementImg.style.borderRadius='';
    }
    
}

let comRock = new comChoices(1, 'img com-rock')
let comPaper = new comChoices(2, 'img com-paper')
let comScissor = new comChoices(3, 'img com-scissor')

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
  
function comChoose(){
    let result = getRandomArbitrary(1,4)
    if (result == 1){
        comRock.chosen();
    } else if (result == 2){
        comPaper.chosen();
    } else{
        comScissor.chosen();
    }
}

function showWin(){
    midText.innerHTML = "YOU WIN";
    midText.style.backgroundColor = 'green';
    midText.style.color = 'white';
    midText.style.borderRadius = '25px';
    midText.style.transform = 'rotate(-30deg)';
    midText.style.fontSize = '5vw';
    midText.style.padding = '20px';
}

function showLose(){
    midText.innerHTML = "YOU LOSE";
    midText.style.backgroundColor = 'red';
    midText.style.color = 'white';
    midText.style.borderRadius = '25px';
    midText.style.transform = 'rotate(-30deg)';
    midText.style.fontSize = '5vw';
    midText.style.padding = '20px';
}

function showDraw(){
    midText.innerHTML = "DRAW";
    midText.style.backgroundColor = 'orange';
    midText.style.color = 'white';
    midText.style.borderRadius = '25px';
    midText.style.transform = 'rotate(-30deg)';
    midText.style.fontSize = '5vw';
    midText.style.padding = '20px';
}

function refreshResult(){
    midText.innerHTML = "VS";
    midText.style.backgroundColor = '';
    midText.style.color = '';
    midText.style.borderRadius = '';
    midText.style.transform = '';
    midText.style.fontSize = '';
    midText.style.padding = '';

    playerImg.style.width='';

    comRock.refresh();
    comPaper.refresh();
    comScissor.refresh();
}


function condition(){
    if(playerChoiceId == comFinalChoice){
        showDraw();
        disableEnable();
    } else if (playerChoiceId == '1' && comFinalChoice == '2'){
        showLose()
        disableEnable();
    } else if (playerChoiceId == '1' && comFinalChoice == '3'){
        showWin();
        disableEnable();
    } else if (playerChoiceId == '2' && comFinalChoice == '1'){
        showWin();
        disableEnable();
    } else if (playerChoiceId == '2' && comFinalChoice == '3'){
        showLose()
        disableEnable();
    } else if (playerChoiceId == '3' && comFinalChoice == '1'){
        showLose()
        disableEnable();
    } else if (playerChoiceId == '3' && comFinalChoice == '2'){
        showWin();
        disableEnable();
    }
}

let logic = -1
function disableEnable(){
    logic = logic * -1
    if (logic == 1){
        document.getElementById('1').style.pointerEvents = 'none';
        document.getElementById('2').style.pointerEvents = 'none';
        document.getElementById('3').style.pointerEvents = 'none';
    }
    if (logic != 1){
        document.getElementById('1').style.pointerEvents = 'auto'; 
        document.getElementById('2').style.pointerEvents = 'auto'; 
        document.getElementById('3').style.pointerEvents = 'auto'; 
    }
    
}

function decideResult(clicked){
    playerChoiceId = clicked.id;
    playerImg = clicked;
    playerImg.style.width='120px';
    if (playerChoiceId != 'undefined'){
        comChoose();
        condition();
    }
}

function refresh(){
    if (logic == 1){
    disableEnable();
    refreshResult();
    }   
}

decideResult()

