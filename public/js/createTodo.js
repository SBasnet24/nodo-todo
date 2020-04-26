// todoCreate Garne eventhandler
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  postRequest(form.content.value);
});

// updateForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   patchRequest(updateForm.content.value, id);
// });
