Vue.component('table-item', {
  template: '<td>This is a table cell.</td>'
})

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

let table = new Vue({
  el: '#table',
  data: {
    lessons: [
      // { no: 1, title: 'The Setup', done: false },
      // { no: 2, title: 'An Important Message', done: true },
      // { no: 3, title: 'More Printing', done: false },
    ]
  }
})

var lessons = [
  { no: 1, title: 'The Setup', done: false },
  { no: 2, title: 'An Important Message', done: true },
  { no: 3, title: 'More Printing', done: false },
];
