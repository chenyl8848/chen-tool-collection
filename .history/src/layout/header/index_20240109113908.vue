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
  <div>
    <home-outlined />
    <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
    <github-outlined />
    <wechat-outlined />
    <info-circle-outlined />
    <heart-two-tone two-tone-color="red" />
    <a-button :icon="h(HeartTwoTone)" href="https://www.google.com" >打赏</a-button>
  </div>
</template>
  
  