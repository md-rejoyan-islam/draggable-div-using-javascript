//Get Drag Area
const dragArea = document.getElementById("dragArea");
// Get the div element
const div = document.getElementById("moveDiv");

// Add an event listener for mousedown on the div
dragArea.addEventListener("mousedown", startDrag);

// Initialize some variables for tracking the div's position
let offsetX = 0;
let offsetY = 0;

// The startDrag function, which will be called when the mousedown event is fired
function startDrag(e) {
  // Get the current mouse position
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  
  // Add event listeners for mousemove and mouseup
  document.addEventListener("mousemove", moveDiv);
  document.addEventListener("mouseup", stopDrag);
}

// The moveDiv function, which will be called when the mousemove event is fired
const wWidth = window.innerWidth;
function moveDiv(e) {
  // Update the div's position based on the current mouse position

  div.style.left = e.clientX - offsetX + "px";

  div.style.top = e.clientY - offsetY + "px";
}

// The stopDrag function, which will be called when the mouseup event is fired
function stopDrag() {
  // Remove the event listeners for mousemove and mouseup
  document.removeEventListener("mousemove", moveDiv);
  document.removeEventListener("mouseup", stopDrag);
}
