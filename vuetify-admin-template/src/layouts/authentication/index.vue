<template>
  <v-app>
    <authentication-view></authentication-view>
  </v-app>
</template>

<script>
import AuthenticationView from './View.vue'
export default {
    name: "AuthLayout",
    components: {
      AuthenticationView
    }
}
</script>

<style>

</style>