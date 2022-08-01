var boxno = document.querySelectorAll(".box").length;
console.log(boxno);

var spaces= [null, null, null, null, null, null, null, null, null];
const heading = document.querySelector(".heading");

const O_text = "O";
const X_text = "X";
let currentP = O_text;

var i=0;
for(i = 0 ; i < boxno ; i++){
        let styleString="";
        if(i < 3){
            styleString += " border-bottom: 3px solid #00204a;";
        }
        if(i % 3 == 0){
            styleString += " border-right: 3px solid #00204a;";
        }
        if(i % 3 == 2){
            styleString += " border-left: 3px solid #00204a;";
        }
        if(i > 5){
            styleString += " border-top: 3px solid #00204a;";
        }
        document.querySelectorAll(".box")[i].style = styleString;
        document.querySelectorAll(".box")[i].addEventListener("click", clicked);
}

document.querySelector(".restartGame").addEventListener("click",function(){
    for(i = 0 ; i <  boxno ; i++ ){
        spaces[i] = null;
        document.querySelectorAll(".box")[i].innerText="";
        document.querySelectorAll(".box")[i].style.color = "#00204a";
    }
    heading.innerText = "TicTacToe";
});

function clicked(event){
    var id= event.target.id;
    console.log(id);

    if(!spaces[id]){
        spaces[id] = currentP;
        event.target.innerText = currentP;

        if(playerHasWon()){
            heading.innerText=currentP + " has Won!";
            for(i=0 ;i < boxno ; i++){
                document.querySelectorAll(".box")[i].removeEventListener("click",clicked);
            }
            return;
        }
        currentP = (currentP === O_text) ? X_text : O_text;
        console.log(currentP);
    }
}

function playerHasWon(){
    if(spaces[0] === currentP){
        if(spaces[1] === currentP && spaces[2] === currentP){
            console.log(currentP + " won on top row!");
            document.querySelectorAll(".box")[0].style.color = "red";
            document.querySelectorAll(".box")[1].style.color = "red";
            document.querySelectorAll(".box")[2].style.color = "red";
            return true;
        }
        if(spaces[3] === currentP && spaces[6] === currentP){
            console.log(currentP + " won on left column!");
            document.querySelectorAll(".box")[0].style.color = "red";
            document.querySelectorAll(".box")[3].style.color = "red";
            document.querySelectorAll(".box")[6].style.color = "red";
            return true;
        }
        if(spaces[4] === currentP && spaces[8] === currentP){
            console.log(currentP + " won on the left diagonal!");
            document.querySelectorAll(".box")[0].style.color = "red";
            document.querySelectorAll(".box")[4].style.color = "red";
            document.querySelectorAll(".box")[8].style.color = "red";
            return true;
        }
    }
    else if(spaces[2] === currentP){
        if(spaces[4] === currentP && spaces[6] === currentP){
            console.log(currentP + " won on the right diagonal!");
            document.querySelectorAll(".box")[2].style.color = "red";
            document.querySelectorAll(".box")[4].style.color = "red";
            document.querySelectorAll(".box")[6].style.color = "red";
            return true;
        }
        if(spaces[5] === currentP && spaces[8] === currentP){
            console.log(currentP + " won on the right column!");
            document.querySelectorAll(".box")[2].style.color = "red";
            document.querySelectorAll(".box")[5].style.color = "red";
            document.querySelectorAll(".box")[8].style.color = "red";
            return true;
        }
    }
    else if(spaces[6] === currentP){
        if(spaces[7] === currentP && spaces[8] === currentP){
            console.log(currentP + " won on the bottom row!");
            document.querySelectorAll(".box")[6].style.color = "red";
            document.querySelectorAll(".box")[7].style.color = "red";
            document.querySelectorAll(".box")[8].style.color = "red";
            return true;
        }
    }
    else if(spaces[4] === currentP){
        if(spaces[3] === currentP && spaces[5] === currentP){
            console.log(currentP + " won on the mid row!");
            document.querySelectorAll(".box")[3].style.color = "red";
            document.querySelectorAll(".box")[4].style.color = "red";
            document.querySelectorAll(".box")[5].style.color = "red";
            return true;
        }
        if(spaces[1] === currentP && spaces[7] === currentP){
            console.log(currentP + " won on the mid column!");
            document.querySelectorAll(".box")[1].style.color = "red";
            document.querySelectorAll(".box")[4].style.color = "red";
            document.querySelectorAll(".box")[7].style.color = "red";
            return true;
        }
    }
}

