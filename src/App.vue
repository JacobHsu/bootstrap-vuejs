<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show dismissible>Success Alert</b-alert>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },
  components: {
    HelloWorld
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
