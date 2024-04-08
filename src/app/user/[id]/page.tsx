import { getUser } from '@/lib/helpers/api'
import { toDate } from '@/lib/helpers/moment'
import { Card, Descriptions, Flex } from 'antd'
import { UserOutlined, CalendarOutlined, InfoCircleOutlined, LikeOutlined } from '@ant-design/icons';
import GoBackButton from '@/components/GoBackButton';
import { parseText } from '@/lib/helpers/parseText';

type PropsType = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: PropsType) {
    const data = await getUser(params.id)
    return {
        title: `${data.id} | Hacker News`
    }
}

export default async function User({ params }: PropsType) {
    const { id, about, created, karma } = await getUser(params.id)
    const data = [
        {
            key: '1',
            label: <> <UserOutlined /> user</>,
            children: id
        },
        {
            key: '2',
            label: <><CalendarOutlined /> created </>,
            children: toDate(created)
        },
        {
            key: '3',
            label: <><InfoCircleOutlined /> about</>,
            children: parseText(about)
        },
        {
            key: '4',
            label: <><LikeOutlined /> karma</>,
            children: karma
        }
    ]

    return (
        <Card>
            <Flex vertical justify='center' align='center' gap={30}>
                <GoBackButton />
                <Descriptions items={data} bordered column={1} />
            </Flex>
        </Card>
    )
}
