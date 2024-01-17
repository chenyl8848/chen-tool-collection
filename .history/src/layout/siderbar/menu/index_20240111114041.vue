<template>
  <div>
    <a-menu mode="inline" :inline-collapsed="state.collapsed" :items="items" @click="console.log('hello')"></a-menu>
  </div>
</template>
<script lang="ts" setup>
import { reactive, h } from 'vue';
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';

const state = reactive({
  collapsed: false
});

const items = reactive([]);

const getMenus = () => {

}
</script>
  
  