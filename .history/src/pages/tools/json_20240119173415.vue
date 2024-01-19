<script lang="ts" setup>
import { JsonViewer } from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { reactive, ref } from "vue";
let obj = {
    name: "qiu",//字符串
    age: 18,//数组
    isMan: false,//布尔值
    date: new Date(),
    fn: () => { },
    arr: [1, 2, 5],
    reg: /ab+c/i
};
const jsonData = reactive(obj);
const keyClick = (keyName: string) => {
    console.log(keyName, "被点击了")
}

const dataObj = {}
const data = reactive(dataObj)

const testData = ref<string>('')
</script>

<!-- https://github.com/qiuquanwu/vue3-json-viewer -->

<template>
    <a-card title="JSON 格式化工具" :bordered="false">
        <a-textarea v-model="testData" show-count/>
        <h4>普通</h4>
        <JsonViewer :value="data" copyable boxed sort theme="light" @onKeyClick="keyClick" />
        <h4>暗黑</h4>
        <JsonViewer :value="data" copyable boxed sort theme="dark" @onKeyClick="keyClick" />
    </a-card>
</template>

<style>
.box {
    margin-top: 1rem;
}
</style>