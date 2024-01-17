<script lang="ts" setup>

import useToolStore from '@/store/module/tool';
let useTool = useToolStore()

console.log(useTool.tools.value, "valuesssssssssss")
</script>

<template>
    <h1>首页</h1>
</template>
