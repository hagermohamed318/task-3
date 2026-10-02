let nameinput =document.querySelector("#name");
let ageinput =document.querySelector("#age");
let jopinput =document.querySelector("#jop");
let button =document.querySelector("#btn");

button.addEventListener("click",function () {

    let nameValue=nameinput.value;
    let ageValue=ageinput.value;
    let jopValue=jopinput.value;
    if(nameValue==""||ageValue==""||jopValue==""){

        console.log("Name:" +nameValue);
        console.log("Age:" +ageValue);
        console.log("Jop:" +jopValue);

        if(ageValue<18){
            alert("Your are under age");
        }else{
            alert("Registration Completed");
        }
    }

    });


        







    