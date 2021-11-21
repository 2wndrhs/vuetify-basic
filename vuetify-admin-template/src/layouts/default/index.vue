<template>
    <v-app>
        <default-bar></default-bar>
        <!-- app 속성은 컴포넌트를 기본 레이아웃으로 만듬 -->
        <default-drawer></default-drawer>
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
    data(){
        return {
            right: null,
        }
    },
}
</script>

<style>

</style>
