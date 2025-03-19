document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll(".project-tile video");
  
    videos.forEach(video => {
      video.addEventListener("mouseenter", function () {
        video.play();
      });
  
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0; // Reinicia o vídeo ao tirar o mouse
      });
    });
  });
  