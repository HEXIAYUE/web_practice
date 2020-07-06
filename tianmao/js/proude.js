const app = new Vue({
  el: "#app",
  data: {

  },
  methods: {
    changeRight() {
      this.$refs.right.style.display = "block";
      this.$refs.left.style.display = "none";
    },
    changeLeft() {
      this.$refs.right.style.display = "none";
      this.$refs.left.style.display = "block";
    }
  },
})