<template>
  <div id="app">
    <b-alert show>Default Alert</b-alert>
    <b-alert variant="success" show dismissible>Success Alert</b-alert>
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>

    <input-groups :frequency.sync="freq"></input-groups>
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <section class="bg-light" v-if="!isLoading">
      <tab-bar></tab-bar>
    </section>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import InputGroups from './components/InputGroups.vue';
import TabBar from './components/TabBar.vue';


export default {
  name: "app",
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      isLoading: false,
      showDismissibleAlert: false,
      freq: 6,
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
    HelloWorld,
    InputGroups,
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
