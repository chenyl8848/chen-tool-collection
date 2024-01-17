<script lang="ts" setup>
import command from 'linux-command'
import { ref } from 'vue';

interface CommandType {
    n: string,
    d: string,
    p: string
}

const searchText = ref<string>('')
const searchResult = ref<Array<CommandType>>([])

const onSearch = () => {
    searchResult.value = []

    let result: Array<string> = Object.keys(command).filter((item: string) => {
        return item.indexOf(searchText.value.toLocaleLowerCase()) >= 0
    })

    result.forEach((item: string) => {
        searchResult.value.push(command[item])
    })
}

const info = ref<string>('')
const getCommandInfo = (path: string) => {
}


</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <p style="font-weight: bold;font-size: 18px;">请输入要查询的命令</p>
        <a-input-search v-model:value="searchText" placeholder="ps" @search="onSearch" />
        <p style="font-weight: bold;font-size: 18px; margin-top: 6px;">搜索结果（点击查看详情）</p>
        <div v-for="item in searchResult" style="display: flex;">
            <!-- <a-radio :checked="true" size="small"></a-radio> -->
            <a-radio-group value="a">
                <a-radio value="a" style="margin-top: 6px;"></a-radio>
            </a-radio-group>
            <!-- <a-button type="link" size="small" @click="getCommandInfo(item.p)">
                <p style="font-weight: bold;font-size: 18px;color: #000;">{{ item.n }}：{{
                    item.d }}</p>
            </a-button> -->
            <a @click="getCommandInfo(item.p)">
                <p style="font-weight: bold;font-size: 18px;">{{ item.n }}：{{item.d }}</p>
            </a>
        </div>
        <!-- <p style="font-weight: bold;font-size: 18px; margin-top: 6px;" v-for="item in searchResult">{{ item.n }}：{{ item.d }}</p> -->
        <!-- <p>{{ command['alias'].d }}</p>
        <p>{{ command['alias'].p }}</p> -->
        <p>{{ info }}</p>
    </a-card>
</template>