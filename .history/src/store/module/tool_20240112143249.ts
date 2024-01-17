import { defineStore } from "pinia";
import { tools, ToolsType, MenuType } from "@/tools";
import { RouteRecordRaw } from "vue-router"
import router from "@/router";
import { h } from "vue";

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

    for(let i = 0; i < tools.length; i++) {
        let item:ToolsType = tools[i]
        let menu: MenuType = {
            key: i,
            title: item.name,
            label: item.name,
            icon: () => h('AppstoreOutlined')
        }

        menus.push(menu)
    }

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