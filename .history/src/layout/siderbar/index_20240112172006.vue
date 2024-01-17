<script lang="ts" setup>
import Logo from '@/layout/siderbar/logo/index.vue'
import Menu from '@/layout/siderbar/menu/index.vue'
</script>

<template>
  <div>
    <div class="logo">
      <Logo></Logo>
    </div>
    <Menu style=" overflow-y: scroll;"></Menu>
  </div>
</template>

<style scoped>
.logo {
  padding: 5px;
  height: 90px;
}
</style>
  
  