let firstVue = new Vue({
    el: '#firstDiv',
    data: {
        number: 1,
        numbers: [1, 2, 3],
    }
})

let secondVue = new Vue({
    el: '#secondDiv',
    data: {
        isDoorOpen: true
    },
    methods: {
        openCloseDoor: function() {
            this.isDoorOpen = !this.isDoorOpen
        }
    }
})

Vue.component('grocery-item', {
    props: ['groceryitem'],
    template: '<li>{{ groceryitem }}</li>'
})
let thirdVue = new Vue ({
    el: '#thirdDiv'
})






firstVue.number = 5;
firstVue.$data = {number:  5};







// firstVue.$watch('number', function(){
//     alert('Number has changed')
// })
// firstVue.number = 10;