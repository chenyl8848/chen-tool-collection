<script lang="ts" setup>
// import command from 'linux-command'
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { message } from 'ant-design-vue'
import MarkdownIt from 'markdown-it';
import { ok } from 'assert';
const markdown = new MarkdownIt()

interface CommandType {
    n: string,
    d: string,
    p: string
}

onMounted(() => {
    getData()
})

let command = {}
const getData = () => {
    axios.get('https://unpkg.com/linux-command/dist/data.json')
        .then((res) => {
            if (res.status === 200) {
                command = res.data
            } else {
                message.error('搜索命令失败');
            }
        })
        .catch((error) => console.log(error))
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

const commandInfo = ref<string>('')
const getCommandInfo = (name: string) => {
    axios.get(`https://unpkg.com/linux-command/command/${name}.md`)
        .then((res) => {
            if (res.status === 200) {
                open.value = true
                commandInfo.value = res.data
            } else {
                message.error('获取命令详情失败');
            }
        })
        .catch((error) => { console.log(error) })
}

const open = ref<boolean>(false)
const handleOk = () => {
    open.value = false
    console.log("ok")
}

</script>

<template>
    <a-card title="Linux 命令查询" :bordered="false">
        <p style="font-weight: bold;font-size: 18px;">请输入要查询的命令</p>
        <a-input-search v-model:value="searchText" placeholder="ps" @search="onSearch" />
        <p style="font-weight: bold;font-size: 18px; margin-top: 6px;">搜索结果（点击查看详情）</p>
        <div v-for="item in searchResult" style="display: flex;">
            <a-radio-group value="a">
                <a-radio value="a" style="margin-top: 6px;"></a-radio>
            </a-radio-group>
            <a @click="getCommandInfo(item.n)">
                <p style="font-weight: bold;font-size: 18px;">{{ item.n }}：{{ item.d }}</p>
            </a>
        </div>
        <p>{{ commandInfo }}</p>
        <template>
            <div v-html="markdown.render(commandInfo)"></div>
        </template>
    </a-card>

    <a-modal v-model:open="open" @ok="handleOk" okText="关闭" cancelText="" maskClosable="false">
        <div v-html="markdown.render(commandInfo)"></div>
    </a-modal>
</template>