<template>
  <div>
    <input v-validate="'numeric'" data-vv-as="field" name="numeric_field" type="text">
    <div class="text-danger" v-if="errors.has('numeric_field')">{{ errors.first('numeric_field') }}</div>
    
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>

    <hr>  
    <h3>flush</h3>
    <b-list-group flush>
      <b-list-group-item href="#">
        <b-row>
          <b-col cols="6" class="d-flex align-items-center">
             <i class="fas fa-university mr-1"></i>  icon
          </b-col>
          <b-col cols="6">
            <div class="d-inline-block ml-2 text-left text-nowrap">
              <div><span>title</span></div>
              <div><span class="text-black-50">description</span></div>
            </div>
          </b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
    </b-list-group>

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