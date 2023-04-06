var generateBtn = document.querySelector("#start");
var timeLeft= 75;

function timer(){  

    var timeInterval = setInterval(function () {
        timeLeft--;    
        document.getElementById("h4tag").innerText = "Time Left: " + timeLeft;
        if(timeLeft === 0){
          clearInterval(timeInterval);
          displayMessage();
        }
    }, 250);
}

function displayMessage(){
    document.getElementById("ptag").textContent = "All done";
}


generateBtn.addEventListener("click",timer);

