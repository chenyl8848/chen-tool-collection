import { defineStore } from "pinia";

import { tools, ToolsType } from "@/tools";

const useToolStore = defineStore('toolStore', () => {

    const tool: Array<ToolsType> = tools
    const getMenus = () => {
        tools.forEach((item:ToolsType) => {

        });
    }

    return {
        getMenus
    }
})

export default useToolStore