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
    <a-flex gap="middle" vertical>
      <a-radio-group v-model:value="value">
        <a-radio value="horizontal">horizontal</a-radio>
        <a-radio value="vertical">vertical</a-radio>
      </a-radio-group>
      <a-flex :vertical="value === 'vertical'">
        <div v-for="(item, index) in new Array(4)" :key="item"
          :style="{ ...baseStyle, background: `${index % 2 ? '#1677ff' : '#1677ffbf'}` }" />
      </a-flex>
    </a-flex>
    <home-outlined />
    <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
    <github-outlined />
    <wechat-outlined />
    <info-circle-outlined />
    <a-button :icon="h(HeartTwoTone)" href="https://www.google.com">打赏</a-button>
  </div>
</template>
  
  