const form = document.getElementById("login-form");
const errElement = document.getElementById("login-form-err");

function loginHandler(e) {
  e.preventDefault();
  console.log(form.elements["email"].value);
  console.log(form.elements["password"].value);

  const credentials = {
    email: form.elements["email"].value,
    password: form.elements["password"].value,
  };

  fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log(res.status);
      if (res.status === 401) {
        throw new Error("Wrong password or email");
      }
      throw new Error("Auth error");
    })
    .then((obj) => {
      console.log(obj);
      errElement.innerText = "";
    })
    .catch((err) => {
      console.log(err);
      errElement.innerText = err.message;
    });
}

form.addEventListener("submit", loginHandler);
