highscoredisplay = document.querySelector('#highscores');
orderedlist = document.querySelector('ol');
gobackbutton = document.querySelector('#gobackbutton');
clearbutton = document.querySelector('#clearbutton');

var li1 = document.createElement("li");
var score
li1.textContent= localStorage.getItem("initial") + " - " + localStorage.getItem("score");
li1.setAttribute ("style", "background-color:rgb(202, 202, 202); width:200px");
orderedlist.append(li1);


gobackbutton.addEventListener('click',function(){
    window.open("file:///C:/Users/aarav/bootcamp/homework/Quiz-Game/index.html");
})

clearbutton.addEventListener('click',function(){
    li1.remove();
    // localStorage.clear();
})