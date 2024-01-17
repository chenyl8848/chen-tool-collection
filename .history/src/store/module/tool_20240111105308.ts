import { defineStore } from "pinia";

import { tools, ToolsType } from "@/tools";

const useToolStore = defineStore('toolStore', () => {

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