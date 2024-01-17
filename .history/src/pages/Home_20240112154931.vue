<script lang="ts" setup>

import useToolStore from '@/store/module/tool';

const toolStore = useToolStore()
const getTools = toolStore.getTools
</script>

<template>
    <h1>全部工具</h1>

    <div style="padding: 8px">
        <a-row :gutter="16">
            <a-col :span="8" v-for="item in 10" style="margin-top: 8px;">
                <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                    <p>{{ item }}</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
