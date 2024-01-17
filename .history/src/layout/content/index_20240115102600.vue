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
  /* background: #f1f5f9; */
  background: black;
  /* min-height: 1240px; */
  height: 100vh;
}
</style>
  
  