<template>
  <label>
    {{ label }}
    <v-text-field
      v-bind="$attrs"
      v-on="$listeners"
      class="mt-1"
      :dense="dense"
      :outlined="outlined"
    >
    </v-text-field>
  </label>
</template>

<script>
export default {
  name: 'AppTextField',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: null
    },
    dense: {
      type: Boolean,
      default: true
    },
    outlined: {
      type: Boolean,
      default: true
    }
  },
  created(){
    console.log('this.$attrs: ', this.$attrs);
    console.log('this.$listeners: ', this.$listeners);
  }
}
</script>

<style>

</style>
