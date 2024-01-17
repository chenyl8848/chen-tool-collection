import { createApp } from 'vue'
import './style.css'

// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

//导入组件库
import * as antIcons from '@ant-design/icons-vue'

import router from './router';
import store from './store';

import App from './App.vue'

const app = createApp(App)

// 注册组件
Object.keys(antIcons).forEach(key => {
    app.component(key, antIcons[key])
})

// app.use(Antd)
app.use(router)
app.use(store)

app.mount('#app')
