function lose() {
  document.getElementById("answer").innerHTML = "you lost!";
  document.getElementById("answer").style.backgroundColor = "red";
  const boundary = document.getElementsByClassName("boundary");
  for (var i = 0; i < 5; i++) {
    boundary[i].style.backgroundColor = "red";
  }
}
function win() {
  document.getElementById("answer").innerHTML = "you win!";
  document.getElementById("answer").style.backgroundColor = "green";
  const boundary = document.getElementsByClassName("boundary");
  for (var i = 0; i < 5; i++) {
    boundary[i].style.backgroundColor = "green";
  }
}

// test test

// verification
