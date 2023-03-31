function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "usuario" && password === "senha") {
		alert("Login bem-sucedido!");
        window.location.replace("index.html");
	} else {
		alert("Usuário ou senha inválidos. Tente novamente.");
	}
}
