//Make Var Number = html id num1
//Make Var Range = html id num2

//add listener to that html id num 1 contents - if change run update
//add listener to that html id num2 contents - if change run 2

var number = document.getElementById('num1');
var range = document.getElementById('num2');

number.addEventListener("change", update);
range.addEventListener("change", update2);

function update() {
range.value = number.value  //so if text num changes - make range = that number
}

function update2() {
number.value = range.value  //so if range changes - make number = that range
}

