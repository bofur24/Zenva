let checkbox = document.getElementById('petCheckbox');
let selectionDiv = document.getElementById('petSelection');
let saveForm = document.getElementById('saveForm');



checkbox.addEventListener('change', function(event){
    if(checkbox.checked == true) {
        selectionDiv.style.display = 'block';
    } else {
        selectionDiv.style.display = 'none';
    }
});

saveForm.addEventListener('submit', function(event){
    event.preventDefault();
    let nameText = saveForm.elements[0].value;
    let addressText = saveForm.elements[1].value;
    let ageText = saveForm.elements[2].value;
    let doesHavePets = saveForm.elements[3].checked;
    let petText = 'No pets';
    if (nameText == '') {
        alert('Please enter a name');
        return;
    }
    if (addressText == '') {
        alert('Please enter an address');
        return;
    }
    if (ageText == '') {
        alert('Please enter an age');
        return;
    }
    if (doesHavePets) {
        petText = saveForm.elements[4].value;
    }
    if (petText == 'dog') {
        alert('Sorry, our dog capacity is full :(')
        return;
    }
    alert('Booking saved! Info:\n' +
    
        'Name: ' + nameText + '\n' +
        'Address: ' +addressText + '\n' +
        'Age: ' + ageText + '\n' +
        'Pet: ' + petText + '\n'
    );
});