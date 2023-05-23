var mySelect = document.getElementById("mySelect");

mySelect.addEventListener("change", function() {
    var selectedOption = mySelect.value;
    console.log(selectedOption); // Виведення обраного параметра у консоль (для перевірки)
});
