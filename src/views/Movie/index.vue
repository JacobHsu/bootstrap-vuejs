<template>
  <div>
    <input v-validate="'numeric'" data-vv-as="field" name="numeric_field" type="text">
    <div class="text-danger" v-if="errors.has('numeric_field')">{{ errors.first('numeric_field') }}</div>
    
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
      ]
    }
  }
}
</script>

<style lang="scss" module>
</style>