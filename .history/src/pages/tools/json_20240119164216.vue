<script lang="ts" setup>
import JsonEditorVue from 'json-editor-vue3'

const data = {
    "hello": "vue"
}
</script>


<template>
    <json-editor-vue class="editor" v-model="data" />
</template>