const body = document.querySelector("body");

const SMALL_WINDOW = "smallWindow";
const MEDIUM_WINDOW = "mediumWindow";
const LARGE_WINDOW = "largeWindow";

const resizeEventHandler = {
  detectWidth: () => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 500) {
      body.classList.add(SMALL_WINDOW);
      body.classList.remove(MEDIUM_WINDOW, LARGE_WINDOW);
    } else if (windowWidth >= 500 && windowWidth <= 900) {
      body.classList.add(MEDIUM_WINDOW);
      body.classList.remove(SMALL_WINDOW, LARGE_WINDOW);
    } else {
      body.classList.add(LARGE_WINDOW);
      body.classList.remove(SMALL_WINDOW, MEDIUM_WINDOW);
    }
  },
};

window.addEventListener("resize", resizeEventHandler.detectWidth);
