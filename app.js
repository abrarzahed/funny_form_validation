const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const btn = document.querySelector("button");

// const dancer = document.querySelector(".dancer");

passwordInput.addEventListener("input", function (e) {
  const target = e.target;
  if (target.value.length < 5) {
    btn.addEventListener("mouseenter", controlMove);
    target.style.outlineColor = "red";
    btn.textContent = "👿";
  } else {
    target.style.outlineColor = "green";
    target.style.left = "28px";
    btn.removeEventListener("mouseenter", controlMove);
    btn.textContent = "😍";
  }
});

function controlMove() {
  const target = btn;
  if (target.style.left == "28px") {
    target.style.left = "66%";
  } else {
    target.style.left = "28px";
  }
}

btn.addEventListener("mouseenter", controlMove);
btn.addEventListener("click", function (e) {
  e.preventDefault();
});
