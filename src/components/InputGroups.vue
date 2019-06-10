<template>
  <b-input-group prepend="hold mousedown" class="mt-3">
    <b-input-group-prepend>
      <b-button variant="outline-success" @mousedown="minus" :disabled="frequency <= min">
        <i class="fas fa-minus"></i>
      </b-button>
    </b-input-group-prepend>
    <b-form-input type="text" v-model="frequency"></b-form-input>
    <b-input-group-append>
      <b-button variant="info" @mousedown="press(plus)" @mouseup="stopInterval" :disabled="frequency >= max">
        <i class="fas fa-plus"></i>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>


<script>
import NP from 'number-precision'
export default {
  name: "InputGroups",
  data: () => ({
    step: 1,
    min: 3,
    max: 9,
    interval: 500,
    intervalID: 0
  }),
  props: {
    frequency: Number
  },
  methods: {
    minus() {
      this.$emit("update:frequency", NP.minus(this.frequency, this.step));
    },
    plus(step) {
      let add = NP.plus(this.frequency, step);
      if (add > this.max) {
        add = this.max;
        this.stopInterval();
      }
      this.$emit("update:frequency", add);
    },
    press(bidM) {
      bidM(this.step);
      this.stopInterval();
      this.intervalID = setInterval(bidM, this.interval, this.step);
    },
    stopInterval() {
      if (this.intervalID) {
        clearInterval(this.intervalID);
      }
    }
  }
};
</script>