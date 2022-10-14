onload = (event) => {
  var check = Boolean;
  const walls = document.getElementsByClassName("boundary");
  for (var i = 0; i < walls.length; i++) {
    walls[i].addEventListener("mouseenter", lose);
  }
  function lose() {
    if (check == Boolean) {
      const boundary = document.getElementsByClassName("boundary");
      for (var i = 0; i < boundary.length; i++) {
        boundary[i].style.backgroundColor = "red";
      }
    }
  }
};
