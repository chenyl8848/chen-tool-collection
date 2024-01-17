<script lang="ts" setup>
import Logo from '@/layout/siderbar/logo/index.vue'
import Menu from '@/layout/siderbar/menu/index.vue'
import Header from '@/layout/header/index.vue'
import Footer from '@/layout/footer/index.vue'
import Content from '@/layout/content/index.vue'

import Siderbar from '@/layout/siderbar/index.vue'
</script>

<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="collapsed" collapsible class="layout-siderbar">
            <!-- <div class="logo">
                <Logo></Logo>
            </div>
            <div class="menu">
                <Menu></Menu>
            </div> -->
                <Siderbar></Siderbar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="layout-header">
                <Header></Header>
            </a-layout-header>
            <a-layout-content class="layout-content">
               <Content></Content>
            </a-layout-content>
            <a-layout-footer class="layout-footer">
                <Footer></Footer>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.layout {
    min-height: 100vh;

}

.layout-siderbar {
    background-color: white;

}

.logo {
    padding: 5px;
    height: 90px;
}

.layout-header {
    background: #fff;
    padding: 0
}

.layout-content {
    margin: 0 16px;
}

.layout-footer {

}
</style>
  
  