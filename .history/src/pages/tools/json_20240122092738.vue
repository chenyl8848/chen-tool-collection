<script lang="ts" setup>
import { JsonViewer } from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { computed, reactive, ref } from "vue";
import { message } from 'ant-design-vue';

const inputData = ref<string>('')

const keyClick = (keyName: string) => {
    console.log(keyName, "被点击了")
}

// const data = computed(() => {
//     if (testData.value) {
//         try {
//             return JSON.parse(testData.value)
//         } catch (error) {
//             console.log(error, "ereerere")
//             message.error('This is an error message');
//         }
//     } else {
//         return ''
//     }
// })

const data = reactive({})

const plainOptions = ['普通', '暗黑']
const theme = ref<string>('普通')

const parseJson = () => {
    if ()
}

</script>

<!-- https://github.com/qiuquanwu/vue3-json-viewer -->

<template>
    <a-card title="JSON 格式化工具" :bordered="false">
        <template #extra>
            <!-- <a href="#">格式化</a> -->
            <a-button type="link" @click="parseJson()">格式化</a-button>
        </template>
        <a-textarea v-model:value="inputData" show-count style="height: 200px;" />
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