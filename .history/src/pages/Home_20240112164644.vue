<script lang="ts" setup>

import useToolStore from '@/store/module/tool';
import { ToolsType } from '@/tools';
import { onMounted } from 'vue';
import {
    HeartOutlined,
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

// 收藏
const favorite = (tool: ToolsType) => {
    console.log(tool, "tttttttttt")
}
</script>

<template>
    <h1>全部工具</h1>

    <div style="padding: 8px">
        <a-row :gutter="16">
            <a-col :span="6" v-for="item in tools" style="margin-top: 12px;">
                <a-card :title="item.name">
                    <template #extra>
                        <a-tooltip placement="bottom">
                            <template #title>
                                <span v-if="!item.isLike">加入收藏</span>
                                <span v-else>取消收藏</span>
                            </template>
                            <HeartOutlined @click.prevent="favorite(item)" :style="{ color: item.isLike ? 'hotpink' : '' }" />
                        </a-tooltip>
                    </template>
                    <p>{{ item.description }}</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
