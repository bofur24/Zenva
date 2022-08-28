

// Retrieve elements from the document 5 different ways.

// let class1 = document.getElementsByClassName('class1');
// let button1 = document.getElementById('button1');
// let divs = document.getElementsByTagName('DIV');
// let first = document.querySelector('.class1');
// let all = document.querySelectorAll('.class1');
// let div1 = document.getElementById('div1');
// let innerDivs = div1.getElementsByClassName('class1');
// alert(innerDivs[0].innerHTML);


//alert(divs[0].innerHTML);
//alert(button1.innerHTML);
//alert(class1[0].innerHTML);
//alert(class1[1].innerHTML);

//Retrieve and edit the elements

// let div1 = document.getElementById('div1');
// let div1Class = div1.getAttribute('class') // getAttribute can be -> class, id, style, or value.
// let div1HTML = div1.innerHTML;
// let noValueDiv1Color = div1.style.backgroundColor;
// let div1Computed = window.getComputedStyle(div1).backgroundColor; //force styles to run before the JavaScript is ran.

// //div1.setAttribute('class', 'class2'); change class of div1 to class2
// div1.innerHTML = "Goodbye"; // Hello World has changed to Goodbye
// div1.style.backgroundColor = '#0000ff';
// div1.style.color = '#ffffff';
// div1.setAttribute('style', 'height: 100px; background-color: #0000ff; color: #ffffff'); // excutes this code first then the normal styles behind it.

// adding removing Html Elements

// let div1 = document.getElementById('div1');
// let newDiv = document.createElement('div');
// newDiv.innerHTML = 'Hello there!';
// document.body.appendChild(newDiv); // placed at the end of the document body
// div1.appendChild(newDiv); // placed at the end of the div1 id
// document.body.removeChild(div1); // removed all div1 elements

// adding event listeners

// document.addEventListener('DOMContentLoaded'), function(event) {
//     alert('Page has been loaded');
// };

// document.getElementById('div1').addEventListener('mouseover', function(event) {
//     event.target.style.backgroundColor = '#0000ff';
//     event.target.style.color = '#ffffff';
// });

// document.getElementById('div1').addEventListener('mouseout', function(event) {
//     event.target.style.backgroundColor = '#00ff00';
//     event.target.style.clor = '#ffffA1';
// })


// let button1 = document.getElementById('button1');
// button1.addEventListener('click', function(event) {    
//     target = event.target;
//     alert(target.innerHTML);
// })

// Client Side Forms
let form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let textInput = form.elements[0];
    alert(textInput.value);
})