<template>
  <v-navigation-drawer
      v-model="drawer"
      v-bind="$attrs"
      dark
      app
      :src="require('../../assets/sidebar.jpeg')"
    >
      <template
        v-slot:img="props"
      >
        <v-img
          :gradient="gradient"
          v-bind="props"
        >
        </v-img>
      </template>

      <default-drawer-header></default-drawer-header>

      <v-divider></v-divider>

      <default-list :items="items"></default-list>

    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
import DefaultDrawerHeader from './DrawerHeader.vue';
import DefaultList from './List.vue';
export default {
    name: "DefaultDrawer",
    components: {
      DefaultDrawerHeader,
      DefaultList
    },
    data(){
        return {


        }
    },
    computed: {
      ...mapState('app', ['gradient', 'items']),
      drawer: {
        get() {
          return this.$store.getters['app/getDrawer']
        },
        set(value) {
          return this.$store.dispatch('app/toggleDrawer', value)
        }
      }
    }
}
</script>

<style>

</style>
