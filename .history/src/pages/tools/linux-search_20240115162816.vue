<script lang="ts" setup>
import command from 'linux-command'
import { ref } from 'vue';


console.log(command)

const searchText = ref('')

</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <p>请输入要查询的命令</p>
        <a-input-search v-model:value="searchText" placeholder="input search text" @search="onSearch" />
        <p>Card content</p>
    </a-card>
    <a-card title="说明" :bordered="false" style="margin-top: 24px;">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </a-card>
</template>