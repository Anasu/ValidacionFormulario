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


    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    
    valText(name);
    errText(name);
    valText(lastName);
    errText(lastName);
    valText(user);
    errText(user);
    valText(pass);
    errText(pass);
    valMail(email);
    
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
    for(let i = 0; i < email.length; i++)
    {
        if(email[i] == '@')
        {
            if(arrPos == null)
            {
                arrPos = i;
            }
            else
            {
                alert("2 arrobas.");
                return;
            }
        }
    }

    if(arrPos == null)
    {
        alert("no arroba.");
        return;
    }
    else if(arrPos == 0)
    {
        alert("oe, pon el mail bien po csm");
    }
    
    let pntPos = null;
    for (let i = arrPos+1; i < email.length ; i ++)
    {
        if(email[i] == ".")
        {
            if(pntPos == null)
            {
                pntPos = i;
            }
            
            if(email[i-1] == ".")
            {
                alert("tengo 2 puntos seguidos");
            }
            else if(email[i-1] == "@")
            {
                alert("tengo una arroba y un punto");
            }
            else if(i == email.length-1)
            {
                alert("termina con un punto");
            }
        }
        
    }

    if(pntPos == null)
    {
        alert("no punto. No capes.");
        return;
    }

}