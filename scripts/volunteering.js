//trustee photo slider
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function big_photo(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
 
}



// phone number validation
var phoneInput = document.getElementById('number-input');
var examplePhoneNumber = '+38 (011) 111 - 1111';
phoneInput.addEventListener('focus', function() {
  phoneInput.placeholder =examplePhoneNumber ;
});

phoneInput.addEventListener('blur', function() {
  if (phoneInput.value === '' || phoneInput.value === examplePhoneNumber) {
    phoneInput.placeholder = 'Номер телефону';
  }
});

const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key, and not longer than ten digits
    if(!isNumericInput(event) && !isModifierKey(event)){
        event.preventDefault();
    }
};

const formatToPhone = (event) => {
    if(isModifierKey(event)) {return;}

    const input = event.target.value.replace(/\D/g,'').substring(0,12); // First ten digits of input only
    const zip = input.substring(0,2);
    const areaCode = input.substring(2,5);
    const middle = input.substring(5,8);
    const last = input.substring(8,12);

    if(input.length > 8){event.target.value = `+${zip} (${areaCode}) - ${middle} - ${last}`;}
    else if(input.length > 5){event.target.value = `+${zip} (${areaCode}) - ${middle}`;}
    else if(input.length > 2){event.target.value = `+${zip} (${areaCode})`;}
    else if(input.length > 0){event.target.value = `+${zip}`;}
};

const inputElement = document.getElementById('number-input');
inputElement.addEventListener('keydown',enforceFormat);
inputElement.addEventListener('keyup',formatToPhone);


// form submit button

var frame = document.getElementById('thank-frame');
var submitButton = document.getElementById('become-volunteer');
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

    var help = document.getElementById('help-input');
    if (help.value.replace(/(\s\s+)/g, ' ').length <2){
        help.style.backgroundColor="#D44949";
        return;
    }
    else help.style.background="none";

    var checked = false;
    var radioButtons = document.querySelectorAll('input[name="frequency"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checked=true;
            break;
        }
    }
    var ques = document.getElementById('frequency-question');
    if(!checked){
        ques.style.backgroundColor = "#D44949";
        ques.style.border = "#D44949 3px solid"
        ques.style.borderRadius="10px"
        return;
    }
    else { ques.style.background="none";
        ques.style.border ="none";
    }
    checked=false;

    radioButtons = document.querySelectorAll('input[name="pet"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checked=true;
            break;
        }
    }
    ques = document.getElementById('pet-question');
    if(!checked){
        ques.style.backgroundColor = "#D44949";
        ques.style.border = "#D44949 3px solid"
        ques.style.borderRadius="10px"
        return;
    }
    else { ques.style.background="none";
        ques.style.border ="none";
    }
    checked=false;
    
    radioButtons = document.querySelectorAll('input[name="shelter"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checked=true;
            break;
        }
    }
     ques = document.getElementById('shelter-question');
    if(!checked){
        ques.style.backgroundColor = "#D44949";
        ques.style.border = "#D44949 3px solid"
        ques.style.borderRadius="10px"
        return;
    }
    else { ques.style.background="none";
        ques.style.border ="none";
    }

    document.getElementById('overlay').style.visibility="visible";
    frame.style.visibility="visible";

});

function close_frame(){
    document.getElementById('overlay').style.visibility="hidden";
    frame.style.visibility="hidden";
    phoneInput.value='';
    phoneInput.placeholder='Номер телефону';
    document.getElementById('name-input').value='';
    document.getElementById('help-input').value='';
   document.getElementById('which-input').value='';
   
    var radioButtons = document.querySelectorAll('input[name="frequency"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked=false;
        }
    }
    
    radioButtons = document.querySelectorAll('input[name="pet"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked=false;
        }
    }
    
    radioButtons = document.querySelectorAll('input[name="shelter"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            radioButton.checked=false;
        }
    }

}
