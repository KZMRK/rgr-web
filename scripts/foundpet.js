
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

    var help = document.getElementById('pet-description');
    if (help.value.replace(/(\s\s+)/g, ' ').length <2){
        help.style.backgroundColor="#D44949";
        return;
    }
    else help.style.background="none";

 frame.style.visibility="visible";

});

function close_frame(){
    frame.style.visibility="hidden";
    phoneInput.value='';
    phoneInput.placeholder='Номер телефону';
    document.getElementById('name-input').value='';
    document.getElementById('pet-description').value='';
   document.getElementById('add-info').value='';
   

}
