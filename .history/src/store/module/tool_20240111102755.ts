import { defineStore } from "pinia";

import tools from "@/tool";

const useToolStore = defineStore('toolStore', () => {
    return {
        tools
    }
})

export default useToolStore