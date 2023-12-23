"use strict";

(function () {
  let isReverse = false;

  function toggleReverseAll() {
    isReverse = !isReverse;
    console.log(
      "Scroll behavior is:" + (isReverse === true ? " Reversed." : " Normal.")
    );
  }

  function setDelta(delta) {
    return -delta * 1;
  }

  function reverseAll(event) {
    if (isReverse && event.deltaY != 0) {
      // reverse scroll direction
      window.scrollBy({ top: setDelta(event.deltaY), left: 0 });
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
