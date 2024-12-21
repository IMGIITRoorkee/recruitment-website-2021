function toggleAudio() {
    const audio = document.getElementById('batman-theme');
    const icon = document.getElementById('audio-icon');
    audio.loop = true;
    if (audio.paused) {
      audio.play();
      icon.src = '/assets/mute-icon.png';
    } else {
      audio.pause();
      icon.src = '/assets/play-icon.png';
    }
  }