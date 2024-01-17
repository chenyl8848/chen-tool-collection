<template>
  <div>
    <a-menu mode="inline" :inline-collapsed="state.collapsed" :items="items" @click="jumpTo">
    </a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import useToolStore from "@/store/module/tool";
import router from '@/router';

const state = reactive({
  collapsed: false
});

const items = reactive([]);

onMounted(() => {
  getMenus()
})

const getMenus = () => {
  const toolStore = useToolStore()
  let menus = toolStore.getMenus
  items.push(...menus)
}

const jumpTo = ({ item, key, keyPath }) => {

  router.push(key)
}
</script>
  
  