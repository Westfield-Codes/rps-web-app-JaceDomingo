function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

function setRounds(rounds){
    if (rounds % 2 == 0){
        alert("Must be odd");
    }
    else {
        window.location.href="chooser.html";
    }
}

function cpuTurn(u) {
    let moves = ["r","p","s"];
    let choice = Math.floor(Math.random()*3)
    let c = moves[choice]
    findWinner(u,c)

}

function findWinner(u,c){    
    if (u==c){
        alert ("We both picked "+u);
    }    
    else {
        let winArray=[["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
        for (let i = 0; i < winArray.length; i++){
              if (winArray[i][0] == u && winArray[i][1] == c){ 
             winner = winArray[i][2];
             }
     }
        alert("I chose "+c+", and you chose "+u+". "+winner+" win!");
     return winner;
    }
}