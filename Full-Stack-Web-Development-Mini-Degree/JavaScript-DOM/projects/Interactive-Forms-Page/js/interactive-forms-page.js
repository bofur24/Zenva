let checkbox = document.getElementById('petCheckbox');
let selectionDiv = document.getElementById('petSelection');

checkbox.addEventListener('change', function(event){
    if(checkbox.checked == true) {
        selectionDiv.style.display = 'block';
    } else {
        selectionDiv.style.display = 'none';
    }
});
