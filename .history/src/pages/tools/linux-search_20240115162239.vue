<script lang="ts" setup>
import command  from 'linux-command'


console.log(command)

</script>

<template>
    <h1>Linux 命令查询{{ command['ps'].d }} {{ command['ps'].p }} {{ command['ps'].n }}</h1>
</template>