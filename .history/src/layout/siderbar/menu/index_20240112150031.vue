<template>
  <div>
    <a-menu mode="inline" :inline-collapsed="state.collapsed" :items="items" @click="jumpTo()"></a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, h, onMounted } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import useToolStore from "@/store/module/tool";

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

const jumpTo = (item, key. keyPath) => {

}
</script>
  
  