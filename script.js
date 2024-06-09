function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // If no audio element is found, exit the function

  // Reset the audio playback time to the beginning and play the audio
  audio.currentTime = 0;
  audio.play();

  // Add the "playing" class to the key element to trigger CSS animation
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Exit the function if the transition is not related to "transform"

  // Remove the "playing" class from the key element after the transition ends
  this.classList.remove("playing");
}

// Get all elements with the class "key" and convert the NodeList to an array
const keys = Array.from(document.querySelectorAll(".key"));

// Add a transitionend event listener to each key element to detect when CSS transitions end
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Add a keydown event listener to the window to detect when a key is pressed
window.addEventListener("keydown", playSound);
