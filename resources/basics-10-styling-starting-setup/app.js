const app = Vue.createApp({
  data() {
    return {
      box1Selected: false,
      box2Selected: false
    }
  },
  computed: {
    box2Classes() {
      return {active: this.box2Selected}
    }
  },
  methods: {
    toggleBoxClick(boxNo) {
      if(boxNo === 1) {
        this.box1Selected = !this.box1Selected;
      } else if(boxNo === 2) {
        this.box2Selected = !this.box2Selected;
      }
    }
  }

});

app.mount('#styling');