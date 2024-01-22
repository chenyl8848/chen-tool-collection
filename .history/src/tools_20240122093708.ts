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
                name: 'Linux 命令查询',
                icon: '',
                path: '/linux-search',
                description: 'Linux 命令大全搜索工具'
            },
            {
                name: 'IP 地址查询',
                icon: '',
                path: '/ip'
            },
            {
                name: '加密解密',
                icon: '',
                path: '/encrypt'
            },
            {
                name: 'JSON 格式化',
                icon: '',
                path: '/json',
                description: 'JSON 字符串格式化工具'
            },


        ]
    },
    {
        name: '图片&视频',
        icon: 'CameraOutlined',
        path: '/multimedia',
        list: [
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
                path: '/text-diff'
            },
            {
                name: '富文本编辑器',
                icon: '',
                path: '/markdown',
                description: '富文本编辑器'
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
                description: '百度地图'
            },
            {
                name: '思维导图',
                icon: '',
                path: '/mind-map',
                description: '思维导图'
            }
        ]
    },
    {
        name: '游戏人生',
        icon: 'DesktopOutlined',
        path: '/game',
        list: [

        ]
    },
    {
        name: '网站相关',
        icon: 'SettingOutlined',
        path: '/website',
        list: [
            {
                name: '留言反馈',
                icon: '',
                path: '/feedback'
            },
            {
                name: '友情链接',
                icon: '',
                path: '/links'
            },

        ]
    }
]
