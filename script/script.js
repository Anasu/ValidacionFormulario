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
        'errorID': document.getElementById("lname_error"),
        'errorState': false
    }
    let user = 
    {
        'value': document.getElementById("username").value,
        'maxLength': 20,
        'errorID': document.getElementById("user_error"),
        'errorState': false
    }
    let pass = 
    {
        'value': document.getElementById("pass").value,
        'maxLength': null,
        'errorID': document.getElementById("pass_error"),
        'errorState': false
    }


    let email = 
    {
        'value': document.getElementById("email").value,
        'maxLength': 100,
        'errorID': document.getElementById("email_error"),
        'errorState': false 
    }

    let phone = 
    {
        'value': document.getElementById("phone").value,
        'maxLength': 15,
        'errorID': document.getElementById("phone_error"),
        'errorState': false
    }
    let error = false;
    
    // Validaciones
    valText(name);
    valText(lastName);
    valText(user);
    valText(pass);
    valMail(email);
    valNum(phone);

    // Display de errores
    errText(name);
    errText(lastName);
    errText(user);
    errText(pass);
    errText(email);
    errText(phone);

    bienvenida(error, name, lastName, user, pass);
    event.preventDefault();
}
let bienvenida = function(error, fname, lname, user, pass)
{
    if(error == false)
    {
        alert("¡Bienvenido " + fname.value + " " + lname.value +
            "! Tu usuario es " + user.value + " y tu contraseña "+
            pass.value + ".");
    }
}

let errText = function(validado)
{
    let error_div = validado.errorID;
    error_div.style.display = "none";
    error = false;
    if(validado.errorState){
        error_div.style.display = "block";
        error = true;
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
    // Evalua existencia y posición de @
    let arrPos = null;
    for(let i = 0; i < email.value.length; i++)
    {
        if(email.value[i] == '@')
        {
            if(arrPos == null)
            {
                // Se asegura que no haya una @ anterior 
                // y guarda la posición actual de la @ 
                arrPos = i;
            }
            else
            {
                // Hay 2 o más arroba
                email.errorState = true;
                return;
            }
        }
    }

    if(arrPos == null)
    {
        // No hay @
        email.errorState = true;
        return;
    }
    else if(arrPos == 0)
    {
        // Parte con una @
        email.errorState = true;
    }
    // Evalua la existencia y posicion de punto
    let pntPos = null;
    for (let i = arrPos+1; i < email.value.length ; i ++)
    {
        if(email.value[i] == ".")
        {
            if(pntPos == null)
            {
                // Guarda la posición del punto en i
                pntPos = i;
            }
            
            if(email.value[i-1] == ".")
            {
               // Hay 2 puntos seguidos
                email.errorState = true;
            }
            else if(email.value[i-1] == "@")
            {
                 // Hay una @ seguida de un .
                email.errorState = true;
            }
            else if(i == email.value.length-1)
            {
                // Mail termina en punto
                email.errorState = true;
            }
        }
        
    }

    if(pntPos == null)
    {
        // No encontró un punto
        email.errorState = true;
        return;
    }

    if(email.value.length > email.maxLength)
    {
        email.errorState = true;
        return;
    }
}
let valNum = function(numero)
{
    if (numero.value == "")
    {
        console.log("no hay nada :c")
        numero.errorState = true;
    }
    else
    {
        for(let i = 0; i < numero.value.length; i++)
        {
            if (numero.value[i] > "9" || numero.value[i] < "0")
            {
                numero.errorState = true;
            }
        }
        if(numero.value.length > numero.maxLength)
        {
            numero.errorState = true;
        }
    }
}