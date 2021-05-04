import Vue from 'vue';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
import vueGoogleCharts from 'vue-google-charts'

Vue.use(vueGoogleCharts)
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont :  'md' || 'fa'
    },
    theme: {
        light: {
            background: colors.blue.accent2,

        },
        // dark: {
        //     background: colors.blue,
        // }
    }
});
