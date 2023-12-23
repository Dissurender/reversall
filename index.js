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
      window.scrollBy({
        top: -event.deltaY * 1.5,
        left: 0,
      });
      event.preventDefault();
    }
  }

  window.addEventListener("wheel", reversAll, { passive: false });

  window.addEventListener("keydown", function (event) {
    if (event.key === "~") {
      toggleReversAll();
    }
  });
})();
