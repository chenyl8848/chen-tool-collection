export interface ToolsType {
    name: string,
    icon: string,
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
        path: '/map',
        list: [
            {
                name: '地图',
                icon: '',
                path: '/mmap'
            }
        ]
    },
    {
        name: '编程',
        icon: 'map',
        path: '/map',
        list: [
            {
                name: '地图',
                icon: '',
                path: '/mmap'
            }
        ]
    },

]
