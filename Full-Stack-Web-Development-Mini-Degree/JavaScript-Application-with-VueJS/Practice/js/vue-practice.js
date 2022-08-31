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




firstVue.number = 5;
firstVue.$data = {number:  5};







// firstVue.$watch('number', function(){
//     alert('Number has changed')
// })
// firstVue.number = 10;