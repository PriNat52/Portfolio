window.addEventListener('DOMContentLoaded',(event) =>
{
  console.log('DOM fully loaded and parsed');
  document.getElementById("button1").addEventListener('click', welcome);
});


function welcome(){
  //Requirement 2.Prompts the visitor for his/her name
  let name = prompt("Welcome! Please enter your name:");
  //Requirement 3.Displays the users name with an alert
  if (name === null || name === ""){
    alert("Welcome! User");
  }else{
    //Requirement 1.Welcomes the visitor with an alert
      alert("Welcome " + name +"!");
  }

  //Requirement 4.Asksthe visitor to enter two numbers with a prompt
  let result = plus();
  alert("The sum of the two number is:"+ result);
  //Requirement 6.Add conditional logic (if/else)
  if(result <= 10){
    alert("The result is small number");
  }else if(result > 10){
    alert("The result is big number");
  }

  //Requirement 5.Uses a function
  function plus(){
    let x = Number(prompt("Please enter the first number to do addition:"));
    let s = Number(prompt("Please enter the second number to do addition:"));
    if(isFinite(x) && isFinite(s))
    {
      x += s;
      return x;
    }else{
      alert("Please enter a valid number.");
    }
  }

  //Requirement 7.Add a loop
  let con = prompt("Do you want to add two numbers again? Enter y/n:",'y');
  while(con === 'y'){
    let res = plus();
    alert("The sum of the two number is:"+ res);
    if(res <= 10){
      alert("The result is Small number");
    }else if(res > 10){
      alert("The result is Big number");
    }
    con = prompt("Do you want to add two numbers again? Enter y/n:",'n');
    if(con === 'n') {
      alert("Thanks for using the calculator!!");
      }
    }
    if(con === 'n') {
      alert("Thanks for using the calculator!!");
    }else{
      alert("Invalid choice!");
    }
}
