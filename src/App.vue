<template>
  <div id="app">
    <Header2 />
    <router-view />
  </div>
</template>

<script>
import Header2 from "./components/Header2.vue";
export default { components: { Header2 } };
</script>
<style lang="scss"></style>
