// grab
const btnCrazys = document.querySelectorAll(".crazy");

// functions
function goCrazy() {
  // find the crazy button
  //const button = e.target;

  // get a random number for the left offset
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

  console.log(offsetLeft, offsetTop);

  // apply those numbers to the this
  this.style.top = offsetTop + "px";
  this.style.left = offsetLeft + "px";
}

// listeners
btnCrazys.forEach((button) => button.addEventListener("mouseenter", goCrazy));
