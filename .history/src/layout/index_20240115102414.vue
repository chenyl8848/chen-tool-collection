<script lang="ts" setup>

import Siderbar from '@/layout/siderbar/index.vue'
import Header from '@/layout/header/index.vue'
import Content from '@/layout/content/index.vue'
import Footer from '@/layout/footer/index.vue'
import { ref } from 'vue';
const collapsed = ref<boolean>(false);

</script>

<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="collapsed" collapsible class="layout-siderbar">
            <Siderbar></Siderbar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="layout-header">
                <Header></Header>
            </a-layout-header>
            <a-layout-content class="layout-content">
                <Content></Content>
            </a-layout-content>
            <a-layout-footer class="layout-footer" style="height: 12px;">
                <Footer></Footer>
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.layout {
    height: 100vh;
    overflow: hidden;

}

.layout-siderbar {
    background-color: white;
}

.layout-header {
    background: #fff;
    padding: 0
}

.layout-content {
    margin: 0 16px;
    background-color: #f1f5f9;
    overflow-y: auto;
}

.layout-footer {
    text-align: center;
    background-color: #f1f5f9;
}
</style>
  
  