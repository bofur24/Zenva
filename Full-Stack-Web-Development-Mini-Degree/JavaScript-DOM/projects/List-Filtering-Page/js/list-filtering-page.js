let adventureList = [];

let adventures = document.getElementsByClassName('adventure');
for (let i = 0; i < adventures.length; i++) {
    let adventureName = adventures[i].innerHTML;
    adventureList.push(adventureName);
}