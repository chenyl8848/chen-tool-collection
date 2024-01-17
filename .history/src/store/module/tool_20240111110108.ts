import { defineStore } from "pinia";
import { tools, ToolsType } from "@/tools";
import { RouteRecordRaw } from "vue-router"

const useToolStore = defineStore('toolStore', () => {

    const generateDynamicRoutes: Array<RouteRecordRaw> = () => {

        let routes: Array<RouteRecordRaw> = []
        tools.forEach((item: ToolsType) => {
            item.name
        });
    }

    return {
        getMenus
    }
})

export default useToolStore