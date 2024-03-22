"use strict";

var index = 0;

function changecolors() {
  var colors = ["red", "blue", "orange", "purple", "yellow"];
  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
