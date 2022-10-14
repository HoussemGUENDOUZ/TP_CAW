onload = (event) => {
  var check = Boolean;
  document.getElementById("end").addEventListener("mouseenter", win);
  function win() {
    if (check == Boolean) {
      const boundary = document.getElementsByClassName("boundary");
      for (var i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "green";
      }
      alert("You win !");
      check = true;
    }
  }
};
