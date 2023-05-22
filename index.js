$("form").on("submit", (e) => {
  e.preventDefault();
  const value = $("input").val();
  if (value) {
    const element = $(`<li>${value}<span>X</span></li>`);
    $(".tasks").append(element);
    $("input").val("");
    saveTasks();
  }
});

$(".tasks").click((e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("selected");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
  }
});

function saveTasks() {
  localStorage.setItem("tasks", $(".tasks").html());
}

function loadTasks() {
  $(".tasks").append(localStorage.getItem("tasks"));
}

loadTasks();
