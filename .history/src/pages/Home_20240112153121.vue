<script lang="ts" setup>

</script>

<template>
    <h1>首页</h1>

    <div style="background-color: #ececec; padding: 20px">
        <a-row :gutter="16">
            <a-col :span="8" v-for="item in 10">
                <a-card title="Card title" :bordered="false">
                    <p>card content</p>
                    <p>item</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
