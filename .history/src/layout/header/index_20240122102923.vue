<script lang="ts" setup>
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
import {
  HomeOutlined,
  GithubOutlined,
  WechatOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  BulbFilled,
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

const theme = ref<boolean>(true)

const html = document.documentElement
const link = document.createElement('link')
link.rel = "stylesheet";
link.type = "text/css";
const head = document.getElementsByTagName("head")[0];
head.appendChild(link);

const isDark = useDark({
  selector: 'html',
  attribute: 'data-doc-theme',
  valueDark: 'dark',
  valueLight: 'light',
  onChanged(dark) {

    if (dark) {
      document.body.setAttribute("data-theme", "dark")
      html.setAttribute('data-doc-theme', 'dark');
      html.style.colorScheme = "dark";
      link.href = "/style/antd.dark.css";
      theme.value = true

    } else {
      document.body.setAttribute("data-theme", "light")
      html.setAttribute('data-doc-theme', 'light');
      html.style.colorScheme = "light";
      link.href = "";
      theme.value = false
    }
  }
})

// const changeTheme = () => {
//   theme.value = !theme.value
//   isDark
// }

const changeTheme = useToggle(isDark)

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
      <a-input-search v-model:value="searchText" placeholder="搜索工具" style="min-width: 400px" allowClear
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
      <a-tooltip>
        <template #title>暗黑模式</template>
        <bulb-outlined v-show="theme" class="icon" @click="changeTheme()" />
      </a-tooltip>
      <a-tooltip>
        <template #title>明亮模式</template>
        <bulb-filled v-show="!theme" class="icon" @click="changeTheme()" />
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
  
  