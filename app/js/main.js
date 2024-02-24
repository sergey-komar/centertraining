$(function () {
  $(".questions-accardion__btn").on("click", function () {
    $(this).next().slideToggle(500);
  });

  $(".slider-top__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 20000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
  });

  $(".slider-bottom__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 15000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    variableWidth: true,
    rtl: true,
  });
});

window.addEventListener("DOMContentLoaded", () => {
  // получаем все элементы
  const headingVideo = document.querySelector(".play__video");
  var videoEl = document.getElementsByTagName("video")[0],
    playBtn = document.getElementById("playBtn"),
    vidControls = document.getElementById("controls");

  if (videoEl && vidControls && playBtn && headingVideo) {
    // если браузер может воспроизводить видео удаляем класс
    videoEl.addEventListener(
      "canplaythrough",
      function () {
        vidControls.classList.remove("hidden");
      },
      false
    );
    // запускам или останавливаем воспроизведение
    playBtn.addEventListener(
      "click",
      function (e) {
        e.preventDefault();
        if (videoEl.paused) {
          videoEl.play();
        } else {
          videoEl.pause();
        }
        headingVideo.classList.toggle("hidden-video");
        const path = videoEl.getAttribute("controls");
        videoEl.setAttribute("controls", path);
      },
      false
    );
  }

  if (videoEl && playBtn) {
    videoEl.addEventListener(
      "play",
      function () {
        playBtn.innerText = "";
      },
      false
    );

    videoEl.addEventListener(
      "pause",
      function () {
        playBtn.innerText = "";
      },
      false
    );
  }

  if (videoEl) {
    videoEl.addEventListener(
      "ended",
      function () {
        videoEl.currentTime = 0;
      },
      false
    );
  }

 
});
