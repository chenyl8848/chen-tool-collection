export interface ToolsType {
    name: string,
    icon: string,
    path?: string,
    list?: Array<ToolsType>
}

export const tools: Array<ToolsType> = [
    {
        name: '图片&视频',
        icon: '/map',
        list: [
            {
                name: '地图',
                icon: '',
                path: 'map'
            }
        ]
    }
]
