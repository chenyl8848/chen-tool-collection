export interface ToolsType {
    name: string,
    icon?: string,
    description?: string,
    isLike?: boolean,
    path: string,
    list?: Array<ToolsType>
}

export interface MenuType {
    key: string,
    icon: any,
    label: string,
    title: string,
    path?: string,
    children?: Array<MenuType>
}

export const tools: Array<ToolsType> = [
    {
        name: '图片&视频',
        icon: 'map',
        path: '/images',
        list: [
            {
                name: '地图',
                icon: '',
                path: '/map',
                isLike: true,
                description: '一个地图'
            }
        ]
    },
    {
        name: '编程开发',
        icon: 'develop',
        path: '/develop',
        list: [
            {
                name: 'XML转JSON',
                icon: '',
                path: '/xml'
            },
            {
                name: 'IP地址查询',
                icon: '',
                path: '/ip'
            },

        ]
    },
    {
        name: '游戏',
        icon: 'map',
        path: '/game',
        list: [
            {
                name: 'XML转JSON',
                icon: '',
                path: '/json'
            },
            {
                name: 'IP地址查询',
                icon: '',
                path: '/query'
            },

        ]
    },

]
