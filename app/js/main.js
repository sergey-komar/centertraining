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
  new WOW().init();

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

  //MODAL
  const modalBtn = document.querySelectorAll(".btn");
  const modal = document.querySelector(".modal");
  const modalCloseBtn = document.querySelector(".modal__close");

  modalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("show");
      modal.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
  });
  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      modal.classList.add("hide");
      modal.classList.remove("show");
      document.body.style.overflow = "";
      document.body.style.marginRight = `0px`;
    }
  });

  //MENU
  const menu = document.querySelector(".menu");
  const mobile = document.querySelector(".nav-icon");

  mobile.addEventListener("click", function () {
    document.body.classList.add("overflow");
    this.classList.toggle("nav-icon--active");
    menu.classList.toggle("nav--active");
  });

  const navLinks = document.querySelectorAll(".menu__list a");

  navLinks.forEach(function (item) {
    item.addEventListener("click", function () {
      document.body.classList.remove("overflow");
      mobile.classList.remove("nav-icon--active"); // Убираем активный класс у иконки моб. навигации
      menu.classList.remove("nav--active"); // Убираем активный класс у блока моб. навигации
    });
  });




//video


});
