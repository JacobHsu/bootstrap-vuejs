<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/movie">Movie</router-link>
    </div>
    
    <section class="bg-light" v-if="!isLoading">
      <router-view/>
      <tab-bar></tab-bar>
    </section>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar.vue';
export default {
  name: "app",
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    TabBar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
