<script lang="ts" setup>
import Sider from '@/layout/siderbar/index.vue'
</script>

<template>
    <a-layout>
        <a-layout-sider>
            <Sider></Sider>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </a-layout>
</template>
  
  