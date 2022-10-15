onload = (event) => {
  var check = Boolean;
  document.getElementById("end").addEventListener("mouseenter", win);
  function win() {
    if (check == Boolean) {
      document.getElementById("status").innerHTML = "you win!";
      document.getElementById("status").style.backgroundColor = "green";
      const boundary = document.getElementsByClassName("boundary");
      for (var i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "green";
      }
      check = true;
    }
  }
  const walls = document.getElementsByClassName("boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseenter", lose);
  }
  function lose() {
    if (check == Boolean) {
      document.getElementById("status").innerHTML = "you lost!";
      document.getElementById("status").style.backgroundColor = "red";
      const boundary = document.getElementsByClassName("boundary");
      for (var i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "red";
      }
      check = false;
    }
  }
  document.getElementById("start").addEventListener("click", startOrReset);
  function startOrReset() {
    if (check == false || check == true) {
      location.reload(true);
    } else {
      document.getElementById("maze").addEventListener("mouseleave", lose);
    }
  }
};
