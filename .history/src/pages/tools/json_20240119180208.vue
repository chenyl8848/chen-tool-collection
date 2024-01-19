<script lang="ts" setup>
import { JsonViewer } from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { computed, ref } from "vue";

const testData = ref<string>('')

const keyClick = (keyName: string) => {
    console.log(keyName, "被点击了")
}

const data = computed(() => {
    if (testData.value) {
        return JSON.parse(testData.value)
    } else {
        return ''
    }
})

const plainOptions = ['普通', '暗黑'];

</script>

<!-- https://github.com/qiuquanwu/vue3-json-viewer -->

<template>
    <a-card title="JSON 格式化工具" :bordered="false">
        <a-textarea v-model:value="testData" show-count style="height: 200px;" />
        <a-space direction="vertical">
            <a-radio-group v-model:value="light" :options="plainOptions" />
        </a-space>
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