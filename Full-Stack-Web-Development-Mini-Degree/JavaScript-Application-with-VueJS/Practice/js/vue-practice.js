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
    template: '<li>{{ groceryitem.quantity }} {{ groceryitem.name }}</li>'
})
let thirdVue = new Vue ({
    el: '#thirdDiv',
    data: {
        groceryItems: [
            {name: 'Bread', quantity: 2},
            {name: 'Cheese', quantity: 1},
            {name: 'Apples', quantity: 4},
        ]
    }
})






firstVue.number = 5;
firstVue.$data = {number:  5};







// firstVue.$watch('number', function(){
//     alert('Number has changed')
// })
// firstVue.number = 10;