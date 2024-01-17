import { defineStore } from "pinia";
import { tools, ToolsType, MenuType } from "@/tools";
import { RouteRecordRaw } from "vue-router"
import router from "@/router";
import { h } from "vue";
import HelloWorld from '@/components/HelloWorld.vue'

import {
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
} from '@ant-design/icons-vue';

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

    tools.forEach((item) => {
        let children: Array<MenuType> = []

        if (item.list) {
            children = generateDynamicMenus(item.list)
        }

        let menu: MenuType = {
            key: item.path,
            title: item.name,
            label: item.name,
            path: item.path,
            icon: () => h(AppstoreOutlined)
        }

        if (children.length > 0) {
            menu.children = children
        }

        menus.push(menu)
    })

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
            component: HelloWorld,
            children: children
        }
        router.addRoute(route)
        routes.push(route)
    });

    return routes
}

const generateAllTools = (tools: Array<ToolsType>): Array<ToolsType> => {

    let toolList: Array<ToolsType> = []

    tools.forEach((item: ToolsType) => {
        if (item.list) {
            generateAllTools(item.list)
        } else {
            toolList.push(item)
        }

    })

    return toolList
}

export default useToolStore