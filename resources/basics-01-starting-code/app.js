const app = Vue.createApp({
  data() { // data option configuration, must return object.
    return {
      title: '<h3>Vue.js<h3>',
      courseTitle: 'Learn Vue.js',
      link: 'https://vuejs.org/',
      duration: '21 days'
    };
  },
  methods: { // all properties in methods option must be a function
    randomGoal() {
      const randomNumber = Math.random();
      if(randomNumber > 0.5) {
        return 'Learn the basics';
      } else {
        return 'Learn advanced';
      }
    },
    getDuration() {
      return this.duration;
    },
    getDescription() {
      return `<p>Vue.js is a progressive JavaScript framework.
      An approachable, performant and versatile framework for building web user interfaces. </p>`
    }
  }
});

app.mount('#user-goal'); // mount holds a css selector, prefer using id as they are unique selectors.