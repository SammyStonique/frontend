<template>
  <div id="app">
    <Header2 />
    <router-view />
  </div>
</template>

<script>
import Header2 from "./components/Header2.vue";
import axios from "axios";
export default {
  components: { Header2 },
  methods: {
    fetchAnything() {
      this.axios
        .get("https://api.chucknorris.io/jokes/random")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    // this.fetchAnything();
  },
};
</script>
<style lang="scss"></style>
