import { Space } from 'antd'
import Text from 'antd/es/typography/Text';


export default function Icon({ data, icon }: { data: number | string | React.ReactNode, icon: React.ReactNode }) {
    return (
        <Space>
            {icon}
            <Text>{data}</Text>
        </Space>
    )
}
