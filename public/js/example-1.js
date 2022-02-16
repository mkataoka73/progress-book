var example1 = new Vue({
  el: '#example-1',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
    ]
  }
})

new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    },
    person: {
      name: 'John',
      age : 32,
      favorite: 'apple, Vue'
    },
  },
})

new Vue({
  el: '#filter',
  data: {
    numbers: [1,2,3,4,5,6,7,8,9]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(n => n % 2 === 0);
    }
  }
})

new Vue({
  el: '#v-for-range',
})

var app5 = new Vue({
  el: '#v-on-click',
  data: {
    message: 'Hello, Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#on-click-2',
  data: {
    message: 'Hello, world!'
  },
  methods: {
    sayHello: function() {
      alert(this.message)
    }
  }
})
