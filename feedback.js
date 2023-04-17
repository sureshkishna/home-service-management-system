var feedback_btn = document.querySelector(".feedback_btn");
var wrapper = document.querySelector(".wrapper");
var close_btns = document.querySelectorAll(".close_btn");
var li_items = document.querySelectorAll("ul li");

feedback_btn.addEventListener("click", function () {
  wrapper.classList.add("active");
});

close_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    wrapper.classList.remove("active");
  });
});

li_items.forEach(function (item) {
  item.addEventListener("click", function () {
    li_items.forEach(function (item) {
      item.classList.remove("active");
    });

    item.classList.add("active");
  });
});
