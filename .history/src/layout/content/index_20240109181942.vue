<script lang="ts" setup>
import Breadcrumb from '@/layout/content/breadcrumb.vue'
</script>

<template>
  <Breadcrumb></Breadcrumb>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.content {
  padding: '24px';
  background: white;
  min-height: 480px
}
</style>
  
  