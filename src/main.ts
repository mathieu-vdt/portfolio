import 'primevue/resources/themes/aura-light-green/theme.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import PrimeVue from 'primevue/config'

library.add(faUser, faLinkedinIn, faGithub, faBars, faXmark)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(PrimeVue)

app.mount('#app')
