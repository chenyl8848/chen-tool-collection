<script lang="ts" setup>
import router from '@/router';


const goHome = () => {
  router.push('/')
}
</script>

<template>
  <a-card hoverable @click="goHome()">
    <template #cover>
      <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style="height: 180px;" />
    </template>
    <a-card-meta title="Java陈序员">
      <template #description>www.instagram.com</template>
    </a-card-meta>
  </a-card>
</template>
  
  