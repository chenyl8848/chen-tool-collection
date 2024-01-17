<script lang="ts" setup>
import { h } from 'vue';
import {
  HomeOutlined,
  GithubOutlined,
  WechatOutlined,
  InfoCircleOutlined,
  HeartTwoTone
} from '@ant-design/icons-vue';
</script>

<template>
  <div class="header">
    <a-flex gap="middle" horizontal>
      <home-outlined style="font-size: 24px" />
      <a-input-search v-model:value="value" placeholder="input search text" style="min-width: 400px" @search="onSearch" />
      <github-outlined style="font-size: 24px" />
      <wechat-outlined style="font-size: 24px" />
      <info-circle-outlined style="font-size: 24px" />
      <a-button :icon="h(HeartTwoTone)" href="https://www.google.com" style="margin-bottom: 2px;">打赏</a-button>
    </a-flex>
  </div>
</template>

<style scoped>
.header {
  margin: 18px 12px 0px 12px;
}
</style>
  
  