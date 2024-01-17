<script lang="ts" setup>
import router from '@/router';


const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div @click="goHome()">
    <h1>我是logo</h1>
  </div>
</template>
  
  