function valid_input(){
    var x = document.forms['login-form']['l-login'].value;
    var length = x.length;
    if (length<=10){
        alert("اعداد تلفن شما باید 11 رقم باشد")
    }
    else if (length>=12){
        alert("اعداد تلفن شما باید 11 رقم باشد")
    }
    return false;

};