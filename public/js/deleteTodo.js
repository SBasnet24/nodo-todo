// todoDelte Garne eventhandler
const deleteForm = document.querySelector("#deleteForm");
// api ma id pathauna ko lagy maile dataattribute define garera leko
const id = document.querySelector(".deleteClass").dataset.id;

console.log(deleteForm);
console.log(id);

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteRequest(id);
});
