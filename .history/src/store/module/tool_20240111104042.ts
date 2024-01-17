import { defineStore } from "pinia";

import tools from "@/tools";

const useToolStore = defineStore('toolStore', () => {
    return {
        tools
    }
})

export default useToolStore