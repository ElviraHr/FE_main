const formRegister = document.getElementById("form-register");

function registerUserHandler(event){
    event.preventDefault();
    const name = formRegister.elements["name"].value;
    const email = formRegister.elements["email"].value;
    const password = formRegister.elements["password"].value;
    const avatar = formRegister.elements["avatar"].value;

    const newUser = {
        name,
        email,
        password,
        avatar,
    };
    fetchRegisterUser(newUser);
}

formRegister.addEventListener("submit", registerUserHandler);

async function fetchRegisterUser(newUser){
    const res = await fetch("https://api.escuelajs.co/api/v1/users",{
        method:"POST",
        body: JSON.stringify(newUser),
        headers: {"Content-Type": "application/json"},
    });

    if (res.ok) {
        window.location.replace("/login");
    }
}