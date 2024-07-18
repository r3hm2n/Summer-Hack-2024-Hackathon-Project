window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("loader-hidden");
  }, 3000);

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});


let $ = (e) => document.querySelector(e);


let dots = $(".dots");

function animate(element, className) {
  element.classList.add(className);
  setTimeout(() => {
    element.classList.remove(className);
    setTimeout(() => {
      animate(element, className);
    }, 500);
  }, 2500);
}

animate(dots, "dots--animate");

