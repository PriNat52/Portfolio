

function Submit(){
  let firstName = document.getElementById("firstName").value;
  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let subjectNameError = document.getElementById("subjectrNameError");
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("subject").value;
  let thanks = document.getElementById("thanks");
  const re = /\S+@\S+\.\S+/;
  let exp = /[A-Za-z ]{2,30}$/gi;
  //Requirement 2: Validate both firstName and lastName
  if (firstName.length < 2 | !firstName.match(exp)){
    errorf();
    firstNameError.innerHTML = firstNameError.textContent;
    return false;
  }else if(lastName.length < 2 | !lastName.match(exp)){
    errorl();
    lastNameError.innerHTML = lastNameError.textContent;
    return false;
  }else if(!re.test(String(email).toLowerCase())){
    error();
    subjectNameError.innerHTML = subjectNameError.textContent;
    return false;
  }
}

function move(e){
  document.getElementById("firstName").style.backgroundColor= "lightblue";
  document.getElementById("lastName").style.backgroundColor= "lightblue";
  document.getElementById("subject").style.backgroundColor= "lightblue";
  document.getElementById("message").style.backgroundColor= "lightblue";
  thanks.innerHTML = thanks.textContent;
}

function errorf(e){
  document.getElementById("firstName").style.backgroundColor= "red";
}
function errorl(e){
  document.getElementById("lastName").style.backgroundColor= "red";
}
function error(e){
  document.getElementById("subject").style.backgroundColor= "red";
}
