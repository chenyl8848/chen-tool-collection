import { defineStore } from "pinia";
import { tools, ToolsType, MenuType } from "@/tools";
import { RouteRecordRaw } from "vue-router"
import router from "@/router";

const useToolStore = defineStore('toolStore', () => {

    const getMenus = generateDynamicRoutes(tools)

    return {
        getMenus
    }
})

const generateDynamicMenus = (tools: Array<ToolsType>): Array<MenuType> => {

}

const generateDynamicRoutes = (tools: Array<ToolsType>): Array<RouteRecordRaw> => {

    let routes: Array<RouteRecordRaw> = []

    tools.forEach((item: ToolsType) => {
        let children: Array<RouteRecordRaw> = []
        if (item.list) {
            generateDynamicRoutes(item.list)
        }

        let route: RouteRecordRaw = {
            name: item.name,
            path: item.path,
            children: children
        }
        router.addRoute(route)
        routes.push(route)
    });

    return routes
}

export default useToolStore