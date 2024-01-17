<script lang="ts" setup>

import useToolStore from '@/store/module/tool';
let useTool = useToolStore()

console.log(useTool.tools)
</script>

<template>
    <h1>首页</h1>
</template>
