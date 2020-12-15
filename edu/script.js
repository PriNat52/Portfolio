$(document).ready(function(){
  jQuery.getJSON("data.json", function () {
    console.log("hello");
    makeRequest();
   });
 });
/*Requirement: Create a XMLHttpRequest object
iv.Send the request to the server */
 function makeRequest(){

  let httpRequest = new XMLHttpRequest();

  if(!httpRequest){
    console.log("Exit: Records cannot be found");
    return false;
  }
  /*Requirement.Process the returned JSON data using JavaScript */
   httpRequest.onreadystatechange = function() {
     if(httpRequest.readyState === XMLHttpRequest.DONE){

       console.log('in function');
       if (httpRequest.status === 200){
         /* Requirement.Update the page content
         1.The JSON data must be displayed in a HTMLtable. */
         console.log('inside 200');
         
         let myObj,text="",x=0,Obj,i=0;
         myObj = JSON.parse(httpRequest.responseText).my_studies;
         Obj= JSON.parse(httpRequest.responseText).header;
         text += "<table border='1'>";
         text += "<tr><th>"+ Obj[i].educ.name + "</th><th>"+ Obj[i].educ.course + "</th></tr>"; 
         for (x in myObj) {
                     
           text += "<tr><td><a target=_blank href="+ myObj[x].edu.link + ">" + myObj[x].edu.Name + "</td><td>"+ myObj[x].edu.Course + "</td></tr>";
         
         }
         text += "</table>";  
         document.getElementById("result").innerHTML = text;     
         }else{
           console.log('error at 200');
           alert("Error: at 200");
        }
       }else{
         console.log("problem with ready state");
       }
   };
   /*Requirement.Write the code to create the request for your JSON data on the server
   (you must first upload it to the server using FTP) */
   httpRequest.open('GET','data.json');
   httpRequest.send();
}
