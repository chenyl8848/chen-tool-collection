interface ToolsType {
    name: string,
    icon: string,
    path?: string,
    list?: ToolsType[]
}

const tools: ToolsType = [
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