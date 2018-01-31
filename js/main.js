// Write an evaluate() function (do not use the eval() function)
// Write a function(s) for what should happen when you click on any digit
// Write a function(s) for what should happen when you click on any operator
var output = document.querySelector('#output');
var operators = document.querySelectorAll('.operators');
var numButtons = document.querySelectorAll('.buttons');

var numCheck = 0;
var concatStr = '';
var numOne = '';
var numTwo = '';

for (var i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click',check)
}
function check (){
    var dis = this.innerText;
    numCheck = dis;
    output.innerHTML = numCheck; 
}




