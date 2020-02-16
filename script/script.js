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


    let email = 
    {
        'value': document.getElementById("email").value,
        'maxLength': 100,
        'errorID': document.getElementById("email_error"),
        'errorState': false 
    }
    let phone = document.getElementById("phone").value;
    
    // Validaciones
    valText(name);
    valText(lastName);
    valText(user);
    valText(pass);
    valMail(email);

    // Display de errores
    errText(name);
    errText(lastName);
    errText(user);
    errText(pass);
    errText(email);
    
    //llamar funcion de validacion de error que lee bool

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
        validado.errorState = true;
    }
    else if(validado.maxLength!= null && validado.value.length > validado.maxLength)
    {
        validado.errorState = true;
    }
}

let valMail = function(email)
{
    let arrPos = null;
    for(let i = 0; i < email.value.length; i++)
    {
        if(email.value[i] == '@')
        {
            if(arrPos == null)
            {
                arrPos = i;
            }
            else
            {
                email.errorState = true;
                return;
            }
        }
    }

    if(arrPos == null)
    {
        email.errorState = true;
        return;
    }
    else if(arrPos == 0)
    {
        email.errorState = true;
    }
    
    let pntPos = null;
    for (let i = arrPos+1; i < email.value.length ; i ++)
    {
        if(email.value[i] == ".")
        {
            if(pntPos == null)
            {
                pntPos = i;
            }
            
            if(email.value[i-1] == ".")
            {
                email.errorState = true;
            }
            else if(email.value[i-1] == "@")
            {
                email.errorState = true;
            }
            else if(i == email.value.length-1)
            {
                email.errorState = true;
            }
        }
        
    }

    if(pntPos == null)
    {
        alert("no punto. No capes.");
        return;
    }

}