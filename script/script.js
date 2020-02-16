let validation = function()
{
    let name = 
    {
        'value' : document.getElementById("fname").value,
        'maxLength' : 30,
        'errorID' : document.getElementById("fname_error"),
        'errorState': false
    }
    let lastName = 
    {
        'value': document.getElementById("lname").value,
        'maxLength': 80,
        'errorID': document.getElementById("lname_error")
    }
    let user = 
    {
        'value': document.getElementById("username").value,
        'maxLength': 20,
        'errorID': document.getElementById("user_error")
    }
    let pass = 
    {
        'value': document.getElementById("pass").value,
        'maxLength': null,
        'errorID': document.getElementById("pass_error")
    }
  
  var name = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var user = document.getElementById("username").value;
  var pass = document.getElementById("pass").value;
  var phone = document.getElementById("phone").value;
  
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    valText(name);
    errText(name);
  event.preventDefault();
}
let errText = function(validado)
{
    let error_div = validado.errorID;
    error_div.style.display = "none";
    if(validado.errorState){
        error_div.style.display = "block";
    }
}

let valText = function(validado)
{
    let error_div = validado.errorID;
    error_div.style.display = "none";
    
    if(validado.value == "")
    {
        validado.errorState = true;

    }
    else if(typeof(validado.value) != 'string')
    {
        alert("Por favor ingresa tu nombre como texto.");
    }
    else if(validado.value.length > validado.maxLength)
    {
        alert("Por favor ingresa un nombre de 30 caracteres o menos.");
    }
    //console.log(letiable + " desde la funcion valName.");
}

