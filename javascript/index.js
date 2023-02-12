const menuHeight = document.querySelector("#main-header").offsetHeight;

const moveLocation = document.querySelector("#move").offsetTop;

console.log(menuHeight, moveLocation)

// window.scrollTo({top:moveLocation - menuHeight, behavior:'smooth'});

window.scroll({ top: menuHeight, left: 0, behavior: 'smooth' });