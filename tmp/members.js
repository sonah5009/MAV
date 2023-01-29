/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
//function myFunction() {
//  document.getElementById("myDropdown").classList.toggle("show");
//}

// get all ELEMENTS with class .dropbtn
//loop through ELEMENTS
//  get all CHILDREN of ELEMENT
//    add a click event to CHILD
//      click event sets ELEMENT's content to content of CHILD
//  assign ELEMENT a click event
//    click event shows/hides dropdown

document.querySelectorAll('.dropdown').forEach((element)=>{
  const btn = element.querySelector('.dropbtn');
  const drop_content = element.querySelector('.dropdown-content');
  drop_content.querySelectorAll('a').forEach((child)=>{
    child.addEventListener('click', (event)=> {
      btn.innerHTML = child.innerHTML;
    });
  });
  btn.addEventListener('click', (event)=>{
    console.log(drop_content);
    drop_content.classList.toggle("show");
  });
});

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

