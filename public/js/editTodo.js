// update todo garna ko lagy
const updateForm = document.querySelector("#updateForm");
const id = document.querySelector(".editClass").dataset.id;

console.log(updateForm);
console.log(id);

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  patchRequest(updateForm.content.value, id);
});
