import { defineStore } from "pinia";

import { tools, ToolsType } from "@/tools";
import { it } from "node:test";

const useToolStore = defineStore('toolStore', () => {

    const tool: Array<ToolsType> = tools
    const getMenus = () => {
        tools.forEach((item:ToolsType) => {
            item.name
        });
    }

    return {
        getMenus
    }
})

export default useToolStore