function toggleAudio() {
    const audio = document.getElementById('batman-theme');
    const icon = document.getElementById('audio-icon');
    audio.loop = true;
    if (audio.paused) {
      audio.play();
      audio.volume = 0.3;
      icon.src = '/assets/pause-fill.svg';
    }
    else {
      audio.pause();
      icon.src = '/assets/play-fill.svg';
    }
  }

// Listen for keyboard play/pause events
navigator.mediaSession.setActionHandler('play', () => {
  const audio = document.getElementById('batman-theme');
  audio.play();
  document.getElementById('audio-icon').src = '/assets/pause-fill.svg';
});

navigator.mediaSession.setActionHandler('pause', () => {
  const audio = document.getElementById('batman-theme');
  audio.pause();
  document.getElementById('audio-icon').src = '/assets/play-fill.svg';
});
