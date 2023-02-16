const show_item = document.getElementById("show_item");
const button1 = document.getElementById("button6");
const button2 = document.getElementById("button7");
const items_name = document.getElementsByClassName("dropdown-item");
const content6 = document.getElementById("content6");
const content7 = document.getElementById("content7");


// content6.style.display = "block";
// button6을 누르면 특정 내용이 content 영역에 보여짐
button6.addEventListener("click", function(){
  content7.style.display = "none";
  content6.style.display = "block";
  show_item.innerHTML = "6 기";
});

// button7를 누르면 특정 내용이 content 영역에 보여짐
button7.addEventListener("click", function(){
  content6.style.display = "none";
  content7.style.display = "block";
  show_item.innerHTML = "7 기";
});
