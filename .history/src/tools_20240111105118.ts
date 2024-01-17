interface ToolsType {
    name: string,
    icon: string,
    path?: string,
    list?: Array<ToolsType>
}

const tools: Array<ToolsType> = [
    {
        name: '地图',
        icon: '/map',
        list: [
            {
                name: '',
                icon: '',
                path: ''
            }
        ]
    }
]

export default tools