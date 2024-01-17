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

    console.log(result, "asaaaaa")

    result.forEach((item: string) => {
        searchResult.value.push(command[item])
    })
}

</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <p style="font-weight: bold;font-size: 18px;">请输入要查询的命令</p>
        <a-input-search v-model:value="searchText" placeholder="ps" @search="onSearch" />
        <p style="font-weight: bold;font-size: 18px; margin-top: 6px;">搜索结果</p>
        <div v-for="item in searchResult" style="display: flex;">
            <!-- <a-radio :checked="true" size="small"></a-radio> -->
            <a-radio-group v-model:value="a">
                <a-radio value="a"></a-radio>
            </a-radio-group>
            <p style="font-weight: bold;font-size: 18px;">{{ item.n }}：{{
                item.d }}</p>
        </div>
        <!-- <p style="font-weight: bold;font-size: 18px; margin-top: 6px;" v-for="item in searchResult">{{ item.n }}：{{ item.d }}</p> -->
        <!-- <p>{{ command['alias'].d }}</p>
        <p>{{ command['alias'].p }}</p> -->
    </a-card>
    <a-card title="说明" :bordered="false" style="margin-top: 24px;">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
    </a-card>
</template>