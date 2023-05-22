// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn       = document.querySelector('#horn-select');
  const img        = document.querySelector('#expose img');
  const audio      = document.querySelector('#expose audio');
  const volume     = document.querySelector('#volume');
  const icon       = document.querySelector('#volume-controls img');
  const button     = document.querySelector('#expose button');
  const jsConfetti = new JSConfetti();

  horn.onchange = () => {
    img.src = `assets/images/${horn.value}.svg`;
    img.alt = horn.selectedOptions[0].innerText;
    audio.src = `assets/audio/${horn.value}.mp3`;
  };

  volume.oninput = () => {
    const value = volume.value;
    audio.volume = value / 100.0;
    var level = 3;
    if (value == 0) {
      level = 0;
    } else if (value < 33) {
      level = 1;
    } else if (value < 67) {
      level = 2;
    }
    icon.src = `assets/icons/volume-level-${level}.svg`;
    icon.alt = `Volume level ${level}`;
  };

  button.onclick = () => {
    audio.play();
    if (horn.selectedIndex == 3) jsConfetti.addConfetti();
  };
}