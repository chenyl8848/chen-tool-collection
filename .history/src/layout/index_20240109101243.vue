<script lang="ts" setup>
import Siderbar from '@/layout/siderbar/index.vue'
import Header from '@/layout/header/index.vue'
import Content from '@/layout/content/index.vue'
import Footer from '@/layout/footer/index.vue'
</script>

<template>
    <a-layout>
        <a-layout-sider class="sidebar">
            <Siderbar></Siderbar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>
                <Header></Header>
            </a-layout-header>
            <a-layout-content>
                <Content></Content>
            </a-layout-content>
            <a-layout-footer>
                <Footer></Footer>
            </a-layout-footer>
    </a-layout>
</a-layout></template>

<style scoped>
.sidebar {
    width: 25%;
}
</style>
  
  