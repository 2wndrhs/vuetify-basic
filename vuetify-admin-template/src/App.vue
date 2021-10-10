<template>
  <v-app>
    <!-- app 속성은 컴포넌트를 기본 레이아웃으로 만듬 -->
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },
  
  methods: {
    toggleDrawer(){
      this.drawer = !this.drawer
    }
  },
  
  data(){
    return {
      drawer: false,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system'},
          { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page'},
          { title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints'}
        ],
        right: null,
    }
  },
}
</script>
