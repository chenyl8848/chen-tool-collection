<template>
    <div style="width: 256px">
      <a-menu
        v-model:openKeys="state.openKeys"
        v-model:selectedKeys="state.selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="state.collapsed"
        :items="items"
      ></a-menu>
    </div>
  </template>
  <script lang="ts" setup>
  
  </script>
  
  