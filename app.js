const lists = document.querySelectorAll("ul li");
const form = document.querySelector("#form");
const results = document.querySelector(".results");
const fieldsets = document.querySelectorAll("fieldset");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const submit = document.querySelector("#submit");
let index = 0;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  lists.forEach((a) => a.classList.add("active"));
  submit.setAttribute("disabled", "true");
  fieldsets[index].classList.remove("active");
  const formData = new FormData(form);
  console.log(formData);
  [...formData].map((a) => {
    console.log(a);
    const li = document.createElement("li");
    li.textContent = `${a[0]} : ${a[1]}`;
    results.querySelector("ul").append(li);
  });
});
next.addEventListener("click", () => {
  fieldsets[index].classList.remove("active");
  lists[index].classList.remove("active");
  index++;
  prev.removeAttribute("disabled");
  if (index > fieldsets.length - 2) {
    next.style.display = "none";
    submit.style.display = "block";
  }
  if (index > fieldsets.lenght - 1) {
    return;
  }
  fieldsets[index].classList.add("active");
  lists[index].classList.add("active");
});
prev.addEventListener("click", () => {
  results.querySelector("ul").textContent = "";
  fieldsets[index].classList.remove("active");
  lists[index].classList.remove("active");
  index--;
  submit.style.display = "none";
  submit.disabled = false;
  next.style.display = "block";
  if (!index) {
    prev.setAttribute("disabled", "true");
  }
  fieldsets[index].classList.add("active");
  lists[index].classList.add("active");
});
