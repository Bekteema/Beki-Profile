var myImage = document.querySelector('#myprofilepic');

myImage.onmouseover = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beki.png') {
      myImage.setAttribute ('src','images/beki-black-and-white.png');
    } else {
      myImage.setAttribute ('src','images/beki.png');
    }
}

var newcolor = document.querySelector('#changecolor');

newcolor.ondblclick = function() {
  var newCol = '#694D75';
  document.body.style.backgroundColor = newCol;
}
