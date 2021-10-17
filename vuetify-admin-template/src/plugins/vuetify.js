import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);

const theme = {
    primary: '#42b883',
    secondary: '#35495e'
}

export default new Vuetify({
    theme: {
        themes: {
            light: theme,
            dark: theme
        }
    }
});
