function showMessage() {
  document.getElementById("message").classList.remove("hidden");

  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play();
}
