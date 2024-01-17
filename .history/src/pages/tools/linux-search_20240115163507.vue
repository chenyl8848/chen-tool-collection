<script lang="ts" setup>
import command from 'linux-command'
import { reactive, ref } from 'vue';


console.log(command)

const searchText = ref('')

// const searchResult = reactive({

// })

const onSearch = () => {
    // command.
}

</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <p style="font-weight: bold;font-size: 18px;">请输入要查询的命令</p>
        <a-input-search v-model:value="searchText" placeholder="ps" @search="onSearch" />
        <p style="font-weight: bold;font-size: 18px; margin-top: 6px;">搜索结果</p>
    </a-card>
    <a-card title="说明" :bordered="false" style="margin-top: 24px;">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </a-card>
</template>