
var frame = document.getElementById('thank-frame');
var submitButton = document.getElementById('send-request');
const nodeList= document.querySelectorAll("section");

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    var name = document.getElementById('name-input')
    if (name.value.replace(/(\s\s+)/g, ' ').length <2){
        name.style.backgroundColor="#D44949";
        return;
    }
    else name.style.background="none";

    var number = document.getElementById('number-input');
    if (number.value.replace(/(\s\s+)/g, ' ').length <22){
        number.style.backgroundColor="#D44949";
        return;
    }
    else number.style.background="none";

    var email = document.getElementById('email-input');
    if (email.value.replace(/(\s\s+)/g, ' ').length <22){
        email.style.backgroundColor="#D44949";
        return;
    }
    else email.style.background="none";

    var interesed = document.getElementById('why-interested');
    if (interesed.value.replace(/(\s\s+)/g, ' ').length <2){
        interesed.style.backgroundColor="#D44949";
        return;
    }
    else interesed.style.background="none";

    var user_info = document.getElementById('user-info');
    if (user_info.value.replace(/(\s\s+)/g, ' ').length <2){
        user_info.style.backgroundColor="#D44949";
        return;
    }
    else user_info.style.background="none";

    frame.style.visibility="visible";

});

function close_frame(){
    frame.style.visibility="hidden";
    phoneInput.value='';
    phoneInput.placeholder='Номер телефону';
    document.getElementById('name-input').value='';
    document.getElementById('number-input').value='';
    document.getElementById('email-input').value='';
    document.getElementById('why-interested').value='';
    document.getElementById('user-info').value='';


}
