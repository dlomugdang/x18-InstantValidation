function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;
  /*if(userLength >= 6){
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }*/
  if(userLength <= 6){
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.indexOf(' ') >= 0){
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  var passEntered = document.getElementById("pass").value;
  var passLength = passEntered.length;
  if(passEntered == "password" || passEntered == "PASSWORD"){
    //Show message that there is an error with the password...
    //Turn the username items red
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(userEntered == passEntered){
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passLength < 6 || passLength > 20){
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters and less than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else{
  //Turn the username items green
  document.getElementById("passwordGroup").classList.add("has-success");
  }
}
