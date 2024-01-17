<script setup lang="ts">
import { ref } from 'vue';
import { BMap, BZoom, BLocation } from 'vue3-baidu-map-gl'

const ak = ref('cwHsf5i2fAQAlijOyELx5COtkFhItaSm')
</script>

<template>
    <BMap :ak="ak" :plugins="['TrackAnimation']">
        <BZoom />
        <BLocation />
        <!-- ... -->
    </BMap>
</template>