<script lang="ts" setup>
import {
  HomeOutlined,
  GithubOutlined,
  WechatOutlined
} from '@ant-design/icons-vue';
</script>

<template>
  <div>
    <home-outlined />
    <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
    <github-outlined />
    <wechat-outlined />
  </div>
</template>
  
  