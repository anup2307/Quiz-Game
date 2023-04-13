highscoredisplay = document.querySelector('#highscores');
orderedlist = document.querySelector('ol');
gobackbutton = document.querySelector('#gobackbutton');
clearbutton = document.querySelector('#clearbutton');

var j=1;
var scoredetails = localStorage.getItem("scoredetails");
scoredetails = JSON.parse(scoredetails);
for (var i=0; i<scoredetails.length; i+=2)
{
    var li = document.createElement("li");
    li.textContent = scoredetails[i] +" - " + scoredetails[j];
    li.setAttribute ("style", "background-color:rgb(202, 202, 202); width:200px; margin-top:5px;");
    orderedlist.append(li);
    console.log(scoredetails[i] +" - " + scoredetails[j]);
    j += 2;
}

gobackbutton.addEventListener('click',function(){
    window.location.href="index.html";
})

clearbutton.addEventListener('click',function(){
    orderedlist.remove();
    localStorage.clear();
})