var buttonSearch = document.getElementsByClassName('button');
var buttonNumber = buttonSearch.length;

console.log(buttonNumber);

for (var x = 0; x < buttonNumber; x++) {
    console.log(buttonSearch[x].innerText);
}