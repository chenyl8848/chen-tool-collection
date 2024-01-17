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
        icon: 'ControlOutlined',
        path: '/develop',
        list: [
            {
                name: 'Linux命令查询',
                icon: '',
                path: '/xml'
            },
            {
                name: 'IP地址查询',
                icon: '',
                path: '/ip'
            },
            {
                name: '加密解密',
                icon: '',
                path: '/ip'
            },
            {
                name: 'JSON格式化',
                icon: '',
                path: '/ip'
            },
            

        ]
    },
    {
        name: '图片&视频',
        icon: 'CameraOutlined',
        path: '/multimedia',
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
        name: '文本工具',
        icon: 'FontSizeOutlined',
        path: '/text',
        list: [
            {
                name: '文本比对',
                icon: '',
                path: '/xml'
            },
            {
                name: '富文本编辑器',
                icon: '',
                path: '/ip'
            },

        ]
    },
    {
        name: '其他工具',
        icon: 'AppstoreOutlined',
        path: '/images',
        list: [
            {
                name: '百度地图',
                icon: '',
                path: '/map',
                isLike: true,
                description: '一个地图'
            }
        ]
    },
    {
        name: '游戏人生',
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
    },
    {
        name: '网站相关',
        icon: 'SettingOutlined',
        path: '/website',
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
