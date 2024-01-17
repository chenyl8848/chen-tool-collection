<script setup lang="ts">
import { ref } from 'vue';
import { BMap, BZoom } from 'vue3-baidu-map-gl'

const ak = ref('cwHsf5i2fAQAlijOyELx5COtkFhItaSm')
</script>

<template>
    <BMap ak="cwHsf5i2fAQAlijOyELx5COtkFhItaSm">
        <BZoom />
        <!-- ... -->
    </BMap>
</template>