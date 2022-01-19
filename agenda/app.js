function registrar() {
  var email = document.getElementById("email").value;
  var contrasena = document.getElementById("contrasena").value;
  console.log("hola mundo");

  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, contrasena)

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}
