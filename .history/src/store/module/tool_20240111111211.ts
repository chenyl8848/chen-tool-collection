import { defineStore } from "pinia";
import { tools, ToolsType } from "@/tools";
import { RouteRecordRaw } from "vue-router"

const useToolStore = defineStore('toolStore', () => {

    const generateDynamicRoutes = (): Array<RouteRecordRaw> => {

        let routes: Array<RouteRecordRaw> = []


        tools.forEach((item: ToolsType) => {
            let
            if (item.list) {
                generateDynamicRoutes(item.list)
            }

            let route: RouteRecordRaw = {
                path: ''
            }
            routes.push(route)
        });

        return routes
    }

    return {
        generateDynamicRoutes
    }
})

const generateDynamicRoutes = (tools: Array<ToolsType>): Array<RouteRecordRaw> => {

    let routes: Array<RouteRecordRaw> = []

    tools.forEach((item: ToolsType) => {
        let children: Array<RouteRecordRaw> = []
        if (item.list) {
            generateDynamicRoutes(item.list)
        }

        let route: RouteRecordRaw = {
            path: '',
            children: children
        }
        routes.push(route)
    });

    return routes
}

export default useToolStore