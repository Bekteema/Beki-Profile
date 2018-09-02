var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//console.log(myHeading);

var myImage = document.querySelector('#afc');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/arsenal-logo.svg') {
      myImage.setAttribute ('src','images/ferrari-logo.png');
    } else {
      myImage.setAttribute ('src','images/arsenal-logo.svg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello World. My name is '  + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello World. My name is ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
