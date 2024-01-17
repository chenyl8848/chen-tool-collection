<script lang="ts" setup>

import useToolStore from '@/store/module/tool';
import { ToolsType } from '@/tools';
import { onMounted } from 'vue';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
} from '@ant-design/icons-vue';

const toolStore = useToolStore()
let tools: Array<ToolsType> = []

onMounted(() => {
    tools = toolStore.allTools
    console.log(tools, "toolssssssssss")
})
</script>

<template>
    <h1>全部工具</h1>

    <div style="padding: 8px">
        <a-row :gutter="16">
            <a-col :span="6" v-for="item in tools" style="margin-top: 12px;">
                <a-card :bordered="true" hoverable>
                    <!-- <p>{{ item.description }}</p>
                    hoverable  -->

                    <!-- <a-card-meta :title="item.name" description="This is the description">
                        <template #avatar>
                            <home-outlined />
                        </template>
                    </a-card-meta> -->

                    <template #title>
                        <home-outlined />
                        <p>{{ item.description }}</p>
                    </template>
                    <template #extra>
                        <a href="#">More</a>
                    </template>
                    {{ item.description }}
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
