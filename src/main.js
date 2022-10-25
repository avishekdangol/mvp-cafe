import { createApp } from 'vue'
import App from './App.vue'
// import mitt from 'mitt'

// const emitter = mitt()

import 'bootstrap/dist/css/bootstrap.css'
import router from './vue-router/router'

// Components
// import Layout from './components/Layout/Layout.vue'
// import Dashboard from './components/Admin/Layout.vue'
// import PageNotFound from './components/404.vue'

// awesomefont icon
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass ,faHome, faMugHot, faCircleInfo, faEnvelope , faCalendar , faClock , faPhone, faMapLocation, faTimes, faSignOut, faTachometer, faCheck, faPlus, faEdit, faRefresh, faTruck, faCashRegister, faUpload} from '@fortawesome/free-solid-svg-icons';
import { faFacebook ,faInstagram, faTiktok, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons" ;

library.add(faMagnifyingGlass ,faFacebook, faInstagram, faTiktok, faTwitter, faHome, faMugHot, faCircleInfo, faEnvelope, faCalendar , faClock , faPhone , faMapLocation, faTimes, faSignOut, faTachometer, faYoutube, faCheck, faPlus, faEdit, faRefresh, faTruck, faCashRegister, faUpload);

// Vue Store
// import store from './store/store'

// Vue Toastification
// import Toast, { POSITION } from "vue-toastification"

// import PerfectScrollbar from 'vue3-perfect-scrollbar'

const app = createApp(App).component("font-icon", FontAwesomeIcon)
// app.config.globalProperties.emitter = emitter

// app.component('layout', Layout)
// app.component('dashboard', Dashboard)
// app.component('page-not-found', PageNotFound)

app.use(router)
// app.use(store)
// app.use(Toast, {
//   position: POSITION.BOTTOM_LEFT
// })
// app.use(PerfectScrollbar)

app.mount('#app')