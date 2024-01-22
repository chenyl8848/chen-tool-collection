<script lang="ts" setup>
import { JsonViewer } from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { reactive, ref } from "vue";
import { message } from 'ant-design-vue';

const jsonData = ref<string>('')

const keyClick = (keyName: string) => {
    console.log(keyName, "被点击了")
}
    
// let data = reactive({})
let data = ref('')

const plainOptions = ['普通', '暗黑']
const theme = ref<string>('普通')

const parseJson = () => {
    if (jsonData.value) {
        try {
            data.value = JSON.parse(jsonData.value)
        } catch (error) {
            message.error('请输入正确的 JSON 串');
        }
    } else {
        message.error('请输入 JSON 串');
    }
}

</script>

<!-- https://github.com/qiuquanwu/vue3-json-viewer -->

<template>
    <a-card title="JSON 格式化工具" :bordered="false">
        <template #extra>
            <!-- <a href="#">格式化</a> -->
            <a-button type="link" @click="parseJson()">格式化</a-button>
        </template>
        <a-textarea v-model:value="jsonData" show-count style="height: 200px;" />
        <a-space direction="vertical" style="margin-top: 8px; margin-bottom: 8px;">
            <a-radio-group v-model:value="theme" :options="plainOptions" />
        </a-space>
        <!-- <h4>普通</h4> -->
        <JsonViewer :value="data" copyable boxed sort theme="light" @onKeyClick="keyClick" v-show="theme === '普通'" />
        <!-- <h4>暗黑</h4> -->
        <JsonViewer :value="data" copyable boxed sort theme="dark" @onKeyClick="keyClick" v-show="theme === '暗黑'" />
    </a-card>
</template>

<style>
.box {
    margin-top: 1rem;
}
</style>