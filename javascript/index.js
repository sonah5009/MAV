const menuHeight = document.querySelector("#main-header").offsetHeight;

const moveLocation = document.querySelector("#move").offsetHeight;

const scroll_item_2 = document.querySelector("#scroll2").offsetTop;

console.log(menuHeight, moveLocation, scroll_item_2);

// window.scrollTo({top:moveLocation - menuHeight, behavior:'smooth'});

window.scroll({ top: menuHeight, left: 0, behavior: 'smooth' });

document.querySelector("#js-scroll").addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: scroll_item_2,
    left: 0,
    behavior: "smooth"
  });
});