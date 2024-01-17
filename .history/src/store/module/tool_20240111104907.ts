import { defineStore } from "pinia";

import tools from "@/tools";

const useToolStore = defineStore('toolStore', () => {

    const tool:any[] = tools
    const getMenus = () => {
        tools.forEach(item => {
            
        });
    }

    return {
        getMenus
    }
})

export default useToolStore