//trustee photo slider
let slideIndex = 1;
showSlides(slideIndex, "moveLeft");

// Next/previous controls
function big_photo(n) {
    let trans;
  if(n>0)
    trans="moveLeft"
 else
    trans = "moveRight"
  showSlides(slideIndex += n, trans);
}

function showSlides(n, trans) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let small = document.getElementsByClassName("photo-row");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    small[i].style.display="none";
  }
  slides[slideIndex-1].style.animationName = trans;
  slides[slideIndex-1].style.display = "block";

  small[slideIndex-1].style.animationName = trans+"Fade";
  small[slideIndex-1].style.display="flex";
  small[slideIndex-1].style.justifyContent="space-between";
 
}

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
 frame.style.visibility="visible";

});

function close_frame(){
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
