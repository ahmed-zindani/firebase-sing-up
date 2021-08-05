console.log(firebase)

function singup (){
document.getElementById('email');
document.getElementById('password');






firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error",error.message)
    // ..
  });
}