<script lang="ts" setup>
import command from 'linux-command'


console.log(command)

</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />
        <p>Card content</p>
        <p>Card content</p>
    </a-card>
    <a-card title="说明" :bordered="false" style="margin-top: 24px;">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </a-card>
</template>