"use strict";

(function () {
  let isReverse = false;

  function toggleReversAll() {
    isReverse = !isReverse;
    console.log(
      "Scroll behavior is:" + (isReverse === true ? " Reversed." : " Normal.")
    );
  }

  function reversAll(event) {
    if (isReverse && event.deltaY != 0) {
      // reverse scroll direction
      window.scrollY = window.scrollY - event.deltaY;
      window.scrollTo({
        top: window.scrollY,
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }

  window.addEventListener("wheel", reversAll, { passive: false });

  document.getElementsByClassName("btn").addEventListener("click", function (event) {
    toggleReversAll();
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "~") {
      toggleReversAll();
    }
  });
})();
