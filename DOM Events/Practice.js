const allButtons = document.querySelectorAll(".my-btns button");

allButtons.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    e.target.style.backgroundColor = "yellow";
    e.target.style.color = "red"
  });
});
