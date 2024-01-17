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
    icon?: any,
    label: string,
    title: string,
    path?: string,
    children?: Array<MenuType>
}

export const tools: Array<ToolsType> = [
    {
        name: '编程开发',
        icon: 'InboxOutlined',
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
        name: '图片&视频',
        icon: 'AppstoreOutlined',
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
        name: '游戏',
        icon: 'DesktopOutlined',
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
    }
]
