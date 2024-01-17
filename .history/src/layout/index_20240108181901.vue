<script lang="ts" setup>
import Siderbar from '@/layout/siderbar/index.vue'
import Header from '@/layout/header/index.vue'
import Content from '@/layout/content/index.vue'
</script>

<template>
    <a-layout>
        <a-layout-sider>
            <Siderbar></Siderbar>
        </a-layout-sider>
        <a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
    </a-layout>
</template>
  
  