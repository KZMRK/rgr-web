//trustee photo slider


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

