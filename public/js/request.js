// SAbbai API Calll HAndle garne wala
// Calling API for POST request
const postRequest = async (data) => {
  const res = await axios({
    method: "POST",
    url: "/api/todos/",
    data: {
      content: data,
    },
  });
  console.log(res.data.todo);
  if (res.data.status === "success") {
    window.setTimeout(() => {
      location.assign("/");
    }, 500);
  }
};
// Calling API for patch request
const patchRequest = async (data, id) => {
  const res = await axios({
    method: "PATCH",
    url: `/api/todos/${id}`,
    data: {
      content: data,
    },
  });
  console.log(res);
  if (res.data.status === "success") {
    window.setTimeout(() => {
      location.assign("/");
    }, 500);
  }
};
// Calling API for a Delete Request
const deleteRequest = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `/api/todos/${id}`,
    data: null,
  });
  console.log(res);
  window.setTimeout(() => {
    location.assign("/");
  }, 500);
};
