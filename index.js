"use strict";

(function () {
  let isReverse = false;

  function toggleReverseAll() {
    isReverse = !isReverse;
    console.log(
      "Scroll behavior is:" + (isReverse === true ? " Reversed." : " Normal.")
    );
  }

  function reverseAll(event) {
    if (isReverse && event.deltaY != 0) {
      // reverse scroll direction
      window.scrollBy({
        top: -event.deltaY * 1.5,
        left: 0,
      });
      event.preventDefault();
    }
  }

  window.addEventListener("wheel", reverseAll, { passive: false });

  window.addEventListener("keydown", function (event) {
    if (event.key === "~") {
      toggleReverseAll();
    }
  });
})();
