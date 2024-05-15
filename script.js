function validateAge(){
    var name  =document.getElementById("name");
    var age = document.getElementById("age");

    if (age >= 18){
        alert("You are eligible to Vote");
    }else{
        alert("You are still child😂");
   }    
}