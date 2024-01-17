<script lang="ts" setup>
import command  from 'linux-command'


console.log(command)

</script>

<template>
    <h1>Linux 命令查询{{ command['ps'].d }}</h1>
</template>