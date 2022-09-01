

Vue.component('blog-post', {
    props: ['blogpost'],
    template: ` <div id="singleBlogPost">
                 <h2>{{ blogpost.title }}</h2>
                 <h3>{{ blogpost.username }}</h3>
                 <h4>{{ blogpost.date }}</h4>
                 <p>{{ blogpost.content }}</p>
                </div>`,
});

let blogVue = new Vue ({
    el: '#blogPosts',
    data: {
        posts: [
            {title: 'First Post', username: 'Keith', date: 'Sep 1, 2022', content: 'This is the content of my very first post'},
            {title: 'Second Post', username: 'Keith', date: 'Sep 2, 2022', content: 'This is the content of my very second post'},
        ]
    }
})