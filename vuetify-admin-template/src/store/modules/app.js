const state = {
  drawer: true,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
    { title: 'Pages', icon: 'mdi-menu', items: [
      { title: 'Authentication', icon: 'mdi-login', items: [
        { title: 'Signin', icon: 'mdi-login', to: '/authentication/sign-in'},
        { title: 'Signup', icon: 'mdi-logout', to: '/authentication/sign-up'},
      ]},
      { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list'},
    ]},
    { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system'},
    { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page'},
    { title: 'Breakpoints', icon: 'mdi-view-dashboard', to: '/breakpoints'},
    { title: 'Typography', icon: 'mdi-view-dashboard', to: '/typography'},
    { title: 'Tables', icon: 'mdi-view-dashboard', items: [
      {
        title: 'Basic Table', icon: 'mdi-view-dashboard', to: '/tables/basic-table'
      },
      {
        title: 'App Table', icon: 'mdi-view-dashboard', to: '/tables/app-table'
      }
    ]},
    { title: 'Forms', icon: 'mdi-view-dashboard', items: [
      {
        title: 'Validation Form', icon: 'mdi-view-dashboard', to: '/forms/validation-form'
      },
      {
        title: 'App Form', icon: 'mdi-view-dashboard', to: '/forms/app-form'
      }
    ]},
    { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons'},
    { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons'},
    ],
}
const getters = {
  getDrawer: state => state.drawer
}
const mutations = {
  setDrawer(state, data) {
    state.drawer = data
  }
}
const actions = {
  toggleDrawer({commit}, value){
    commit('setDrawer', value)
  }
}

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
