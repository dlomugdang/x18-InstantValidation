/*function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;
  /*if(userLength >= 6){
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }
  if(userLength <= 6){
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(userEntered.indexOf(' ') >= 0){
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
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
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(userEntered == passEntered){
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(passLength < 6 || passLength > 20){
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters and less than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else{
  //Turn the username items green
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("usernameGroup").classList.remove("has-error");
  }
}*/

function register(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username entered: " + userEntered + "\n" + "Pass entered: " + passEntered);
}

function validateUsername(){
  var userEntered = document.getElementById("user").value;
  var userLength = userEntered.length;
  /*if(userLength >= 6){
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
  }*/
  if(userLength < 6){
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else if(userEntered.indexOf(' ') >= 0){
    document.getElementById("usernameError").innerHTML="Username must NOT contain any spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
  }
  else{
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
    //alert(userEntered.value);
  }
}

function validatePassword(){
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var passLength = passEntered.length;
  /*if(passLength >= 6 && passLength <= 20){
      document.getElementById("passwordGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
  }
  else{
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }*/
  if(passEntered == "password" || passEntered == "PASSWORD"){
    //Show message that there is an error with the password...
    //Turn the username items red
    document.getElementById("passwordError").innerHTML="Bad password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if(userEntered == passEntered){
    document.getElementById("passwordError").innerHTML="Password must NOT be the same as the Username";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if(passLength < 6){
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else if(passLength > 20){
    document.getElementById("passwordError").innerHTML="Password must be less than 20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
  else{
  //Turn the username items green
  document.getElementById("passwordGroup").classList.add("has-success");
  document.getElementById("passwordGroup").classList.remove("has-error");
  //alert(passEntered.value);
  }
}
