// $(document).ready(function(){
//     console.log('We are Ready!');
// });

// $(document).ready(function() {
//     $('body').html('<strong>Hello World!</strong>') // inject hello world to the body
//     $('body').html('<ul><li>Time</li></ul>') // overwrites hello world
// });

// $(document).ready(function() {
//     $('#fire').addClass('highlight');
// });

// $(document).ready(function() {
//     $('.non-solid').addClass('highlight');
// });

// $(document).ready(function() {
//     $('#container >>> .non-solid').addClass('highlight'); // > are levels in the hiarchy >level 1 H4 and UL, >> Level 2 li >>> Level 3 li
// });

// $(document).ready(function(){
//     $('#container input[placeholder*=Name]').addClass('highlight');
// });

$(document).ready(function(){
    console.log($('#container')
                .find('.hot')
                .children()
                .first() //.last() //.first()
                .next() // .next() .previous()
                .addClass('highlight'));
});

$(document).ready(function(){
    console.log($('#snow')
                .parent() // Parent to go up, children to go down
                .find('.title') // .closest() parent
                .addClass('highlight'));
});