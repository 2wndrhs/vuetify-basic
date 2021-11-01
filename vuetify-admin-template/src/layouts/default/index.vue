<template>
    <v-app>
        <default-bar @drawer="toggleDrawer"></default-bar>
        <!-- app 속성은 컴포넌트를 기본 레이아웃으로 만듬 -->
        <default-drawer v-model="drawer"></default-drawer>
        <!-- <default-drawer :value="drawer"></default-drawer> -->
        <default-view></default-view>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
import DefaultBar from './AppBar.vue'
import DefaultDrawer from './Drawer.vue'
import DefaultView from './View.vue'
export default {
    name: "DefaultLayout",
    components: {
        DefaultBar,
        DefaultDrawer,
        DefaultView
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