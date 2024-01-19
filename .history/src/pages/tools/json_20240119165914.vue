<script lang="ts" setup>
import { JsonViewer } from "vue3-json-viewer"
// if you used v1.0.5 or latster ,you should add import "vue3-json-viewer/dist/index.css"
import "vue3-json-viewer/dist/index.css";
import { reactive } from "vue";
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

const dataObj = '{"callbackUrl":"https://yxkcs1.yun-xk.com/pc/callback/esign?project=10077\u0026lock=67\u0026sign=238","initiatorAlias":"zhongxq@cndrealty.com","signContracts":[{"contractSeries":"554982a5-85ae-44ce-befe-e945ccf8e25b"}],"signValid":"2024-02-17 14:28:19","signers":[{"accountSeries":"753454a6-f306-40d9-bea9-3ecfbd2caf6d","accountType":"0","allowApiSign":0,"autoSign":false,"signContractReqs":[{"contractSeries":"554982a5-85ae-44ce-befe-e945ccf8e25b","signInfoReqs":[{"key":"乙方","keyStrategy":"-1","locateMethod":"1"}]}]},{"accountType":"1","alias":"zhongxq@cndrealty.com","allowApiSign":1,"autoSign":false,"orgId":"91330110MACB8KU32C","signContractReqs":[{"contractSeries":"554982a5-85ae-44ce-befe-e945ccf8e25b","signInfoReqs":[{"key":"甲方","keyStrategy":"-1","locateMethod":"1","sealSeries":"5cc32540-bd47-44ec-b447-56cb148ad0ee"}]}]}],"subject":"契约锁甲方模式-代用名-认筹协议","transactionNo":"238-CCJMQVEOUO"}'
const data = reactive(dataObj)
</script>

<!-- https://github.com/qiuquanwu/vue3-json-viewer -->

<template>
    <a-card title="JSON 格式化工具" :bordered="false" style="width: 300px">
        <a-textarea v-model:value="data" show-count/>
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