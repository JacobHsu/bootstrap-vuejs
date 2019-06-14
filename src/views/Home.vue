<template>
  <div class="home">
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


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import InputGroups from '@/components/InputGroups.vue';

export default {
  name: 'home',
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
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
    InputGroups
  }
}
</script>