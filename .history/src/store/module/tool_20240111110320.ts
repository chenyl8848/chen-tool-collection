import { defineStore } from "pinia";
import { tools, ToolsType } from "@/tools";
import { RouteRecordRaw } from "vue-router"

const useToolStore = defineStore('toolStore', () => {

    const generateDynamicRoutes = (): Array<RouteRecordRaw> => {

        let routes: Array<RouteRecordRaw> = []
        tools.forEach((item: ToolsType) => {
            let route: RouteRecordRaw = {

            }
            routes.push(route)
        });

        return routes
    }

    return {
        generateDynamicRoutes
    }
})

export default useToolStore