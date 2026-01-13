document.addEventListener("DOMContentLoaded", function () {
  const videoContainers = document.querySelectorAll(".video_container");

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target.querySelector("video");
          if (video) {
            video.play();
            video.muted = true;
          }
          entry.target.style.animation = "fadeInUp 0.8s ease-out";
        } else {
          const video = entry.target.querySelector("video");
          if (video) {
            video.pause();
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  videoContainers.forEach((container) => {
    videoObserver.observe(container);
  });

  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease-in";

  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);

  
});
