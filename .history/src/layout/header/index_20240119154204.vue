<script lang="ts" setup>
import { ref } from 'vue';
import {
  HomeOutlined,
  GithubOutlined,
  WechatOutlined,
  InfoCircleOutlined,
  CoffeeOutlined
} from '@ant-design/icons-vue';
import router from '@/router';

const searchText = ref('')

const goHome = () => {
  router.push('/')
}

const goGithub = () => {
  window.open('https://github.com/chenyl8848/chen-tool-collection')
}

const goWechat = () => {
  window.open('https://chen-coding.oss-cn-shenzhen.aliyuncs.com/%E5%85%AC%E4%BC%97%E5%8F%B7.png')
}

const goAbout = () => {
  router.push('/about')
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
      <a-input-search v-model:value="searchText" placeholder="input search text" style="min-width: 400px"
        @search="onSearch" />
      <a-tooltip>
        <template #title>Github</template>
        <github-outlined class="icon" @click="goGithub()" />
      </a-tooltip>
      <a-tooltip>
        <template #title>微信公众号</template>
        <wechat-outlined class="icon" @click="goWechat()" />
      </a-tooltip>
      <a-tooltip>
        <template #title>关于</template>
        <info-circle-outlined class="icon" @click="goAbout()" />
      </a-tooltip>
      <a-tooltip placement="bottomRight">
        <template #title>请作者喝一杯咖啡</template>
        <CoffeeOutlined class="icon" />
      </a-tooltip>
      <!-- <a-button :icon="h(CoffeeOutlined)" href="https://www.google.com" style="">打赏</a-button> -->
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
  
  