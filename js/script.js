window.addEventListener("DOMContentLoaded", function () {
  const module = document.querySelector(".module");
  const close = document.querySelector(".close");
  const recordingOpen = document.querySelectorAll(".recording__btn");
  const menu = document.querySelector(".menu__wrappere");
  const menuCloseBtn = document.querySelector(".menu__close");
  const menuOpenBtn = document.querySelector(".burger");
  const tabsItem = document.querySelectorAll(".tabs__item");
  const servesOptions = document.querySelectorAll(".serves__options");
  const headerContent = document.querySelector(".header__fixed");
  const header = document.querySelector(".header");
  const accordionItem = document.querySelectorAll(".accordion__item");

  const body = document.body;

//   const disableScroll = function () {
//     let pagePosition = window.scrollY;
//     document.body.classList.add("disable-scroll");
//     document.body.dataset.position = pagePosition;
//     document.body.style.top = -pagePosition + "px";
//   };

//   const enableScroll = function () {
//     let pagePosition = parseInt(document.body.dataset.position, 10);
//     document.body.style.top = "auto";
//     document.body.classList.remove("disable-scroll");
//     window.scroll({ top: pagePosition, left: 0 });
//     document.body.removeAttribute("data-position");
//   };

  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.68673, 37.527157],
        zoom: 16,
      }),
      myStreet1 = new ymaps.Placemark(
        [55.68973, 37.527157],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "img/mapIcon.png",
          iconImageSize: [73, 73],
          iconImageOffset: [-30, -60],
        }
      );
    myMap.geoObjects.add(myStreet1);
    myMap.behaviors.disable("scrollZoom");
  }

  var swiper = new Swiper(".slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  headerContent.style.width = header.clientWidth + "px";

  window.addEventListener("resize", () => {
    headerContent.style.width = header.clientWidth + "px";
  });

  const openModule = () => {
    module.classList.add("module-active");
    // disableScroll();
  };

  const closeModule = () => {
    module.classList.remove("module-active");
    // enableScroll();
  };

  document.body.addEventListener("scroll", function () {
    if (document.body.scrollTop > header.clientHeight) {
      header.classList.add("header-fix");
    } else {
      header.classList.remove("header-fix");
    }
  });

  const openMenu = () => {
    menu.classList.add("menu__wrappere-active");
    // disableScroll();
  };
  const closeMenu = () => {
    menu.classList.remove("menu__wrappere-active");
    // enableScroll();
  };

  tabsItem.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      tabsItem.forEach((tab) => {
        tab.classList.remove("tabs__item-active");
      });
      servesOptions.forEach((options) => {
        options.classList.remove("serves__options-active");
      });
      e.target.classList.add("tabs__item-active");
      servesOptions[e.target.dataset.number].classList.add(
        "serves__options-active"
      );
    });
  });

  accordionItem.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target.parentNode.classList.contains("accordion__item-active")) {
        e.target.parentNode.classList.remove("accordion__item-active");
      } else {
        e.target.parentNode.classList.add("accordion__item-active");
      }
    });
  });

  recordingOpen.forEach((btn) => {
    btn.addEventListener("click", openModule);
  });
  close.addEventListener("click", closeModule);
  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
});
