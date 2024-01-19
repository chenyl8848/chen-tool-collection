<script lang="ts" setup>
import JsonEditorVue from 'json-editor-vue3'

const data = {
    "hello": "vue"
}
</script>


<template>
    <div class="box">
        <h4>普通</h4>
        <JsonViewer :value="jsonData" copyable boxed sort theme="light" @onKeyClick="keyClick" />
        <h4>暗黑</h4>
        <JsonViewer :value="jsonData" copyable boxed sort theme="dark" @onKeyClick="keyClick" />
    </div>
</template>