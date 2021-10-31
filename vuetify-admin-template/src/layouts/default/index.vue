<template>
    <v-app>
        <app-bar @drawer="toggleDrawer"></app-bar>
        <!-- app 속성은 컴포넌트를 기본 레이아웃으로 만듬 -->
        <app-drawer v-model="drawer"></app-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import AppBar from './AppBar.vue'
import AppDrawer from './Drawer.vue'
export default {
    name: "DefaultLayout",
    components: {
        AppBar,
        AppDrawer
    },
    methods: {
        toggleDrawer(){
            this.drawer = !this.drawer
        }
    },
    data(){
        return {
            drawer: false,
            right: null,
        }
    },
}
</script>

<style>

</style>