import { defineStore } from "pinia";
import { tools, ToolsType, MenuType } from "@/tools";
import { RouteRecordRaw } from "vue-router"
import router from "@/router";

const useToolStore = defineStore('toolStore', () => {

    const getMenus = generateDynamicMenus(tools)
    const getRoutes = generateDynamicRoutes(tools)

    return {
        getMenus,
        getRoutes
    }
})

const generateDynamicMenus = (tools: Array<ToolsType>): Array<MenuType> => {
    let menus: Array<MenuType> = []

    return menus;
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