const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstName: '',
      lastName: '',
      userId: '',
      password: ''
    };
  },
  watch: {
    counter(value) { // function name should be same as data property
      if(value > 50) {
        const counterThis = this;
        setTimeout(() => {
          counterThis.counter = 0;
        }, 1000);
      }
    }
  },
  computed: { // used when output depends on other property
    fullName() {
      if(this.firstName === '' && !this.lastName === '') {
        return '';
      }
      return `${this.firstName} ${this.lastName}`
    }
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    },
    add() {
      this.counter++;
    },
    // using input events
    setFirstName(event, initials) {
      this.firstName = initials + ' ' + event.target.value;
    },
    // by default, javaScript has access to events
    setLastName(event) {
      this.lastName = event.target.value;
    },
    submitForm(event) {
    // event.preventDefault();
      alert(`Hello ${this.firstName} ${this.lastName}!`);
    },
    saveId(event) {
      this.userId = event.target.value;
    },
    // setPassword(event) {
    //   this.password = event.target.value;
    // },
    resetPassword() {
      this.password = '';
    },
  }
});

app.mount('#events');
