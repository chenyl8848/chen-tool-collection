import { defineStore } from "pinia";

import tools from "@/tool";

let useToolStore = defineStore('toolStore', () => {
    return {
        tools
    }
})

export default useToolStore