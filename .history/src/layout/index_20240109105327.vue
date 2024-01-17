<script lang="ts" setup>
import Logo from '@/layout/siderbar/logo/index.vue'
import Menu from '@/layout/siderbar/menu/index.vue'
import Header from '@/layout/header/index.vue'
import Footer from '@/layout/footer/index.vue'
</script>

<template>
    <a-layout style="min-height: 100vh;background: #fff;">
        <a-layout-sider v-model:collapsed="collapsed" collapsible>
            <div class="logo">
                <Logo></Logo>
            </div>
            <div class="menu">
                <Menu></Menu>
            </div>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <Header></Header>
            </a-layout-header>
            <a-layout-content style="margin: 0 16px">
                <a-breadcrumb style="margin: 16px 0">
                    <a-breadcrumb-item>User</a-breadcrumb-item>
                    <a-breadcrumb-item>Bill</a-breadcrumb-item>
                </a-breadcrumb>
                <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    Bill is a cat.
                </div>
            </a-layout-content>
            <a-layout-footer style="text-align: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<style scoped>
.logo {
    height: 180px;
    background: white;
}
</style>
  
  