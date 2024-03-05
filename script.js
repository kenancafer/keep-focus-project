function increaseBtn() {
  let increaseText = document.getElementById("increaseText");
  let count = increaseText.innerHTML;
  count++;
  document.getElementById("increaseText").innerHTML = count;
}
function decreaseBtn() {
  let increaseText = document.getElementById("increaseText");
  let count = increaseText.innerHTML;
  count--;
  if (count < 0) {
    count.innerHTML = 0;
  } else {
    document.getElementById("increaseText").innerHTML = count;
  }
}
// first songs controller
let firstAudio = document.getElementById("firstAudio");
let firstController = document.getElementById("firstAudioControl");
firstController.addEventListener("click", function () {
  if (firstAudio.paused) {
    firstAudio.play();
  } else {
    firstAudio.pause();
  }
});
// second songs controller

let secondAudio = document.getElementById("secondAudio");
let secondController = document.getElementById("secondAudioControl");
secondController.addEventListener("click", function () {
  if (secondAudio.paused) {
    secondAudio.play();
  } else {
    secondAudio.pause();
  }
});
// third songs controller

let thirdAudio = document.getElementById("thirdAudio");
let thirdController = document.getElementById("thirdAudioControl");
thirdController.addEventListener("click", function () {
  if (thirdAudio.paused) {
    thirdAudio.play();
  } else {
    thirdAudio.pause();
  }
});
