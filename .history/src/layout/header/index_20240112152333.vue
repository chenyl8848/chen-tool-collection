<script lang="ts" setup>
import { h } from 'vue';
import {
  HomeOutlined,
  GithubOutlined,
  WechatOutlined,
  InfoCircleOutlined,
  HeartTwoTone
} from '@ant-design/icons-vue';

const goHome = () => {

}

const onSearch = () => {
  console.log('onSearchhhhhhhhhhhh')
}
</script>

<template>
  <div class="header">
    <a-flex gap="middle" horizontal>
      <a-tooltip>
        <template #title>主页</template>
        <home-outlined class="icon" @click="goHome()" />
      </a-tooltip>
      <a-input-search v-model:value="value" placeholder="input search text" style="min-width: 400px" @search="onSearch" />
      <a-tooltip>
        <template #title>Github</template>
        <github-outlined class="icon" />
      </a-tooltip>
      <a-tooltip>
        <template #title>微信公众号</template>
        <wechat-outlined class="icon" />
      </a-tooltip>
      <a-tooltip>
        <template #title>关于</template>
        <info-circle-outlined class="icon" />
      </a-tooltip>
      <a-button :icon="h(HeartTwoTone)" href="https://www.google.com" style="">打赏</a-button>
    </a-flex>
  </div>
</template>

<style scoped>
.header {
  margin: 18px 12px 0px 12px;
}

.icon {
  font-size: 24px;
  margin-top: 4px;
}
</style>
  
  