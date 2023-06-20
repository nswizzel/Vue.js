const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      id: 0,
      goalList: [],
      showGoals: true,
    };
  },
  computed: {
    buttonText() {
      return this.showGoals ? "Hide Goals" : "Show Goals";
    },
  },
  methods: {
    addGoal() {
      this.goalList.push({ id: this.id, goal: this.enteredValue });
      this.enteredValue = "";
      this.id = this.id + 1;
    },
    removeGoal(idx) {
      this.goalList.splice(idx, 1);
    },
    toggleGoals() {
      this.showGoals = !this.showGoals;
    },
  },
});

app.mount("#user-goals");
