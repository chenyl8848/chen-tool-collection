<script lang="ts" setup>

// const getTools = []
</script>

<template>
    <h1>全部工具</h1>

    <div style="padding: 12px">
        <a-row :gutter="16">
            <a-col :span="8" v-for="item in 10" style="margin-top: 8px;">
                <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                    <p>{{item}}</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
