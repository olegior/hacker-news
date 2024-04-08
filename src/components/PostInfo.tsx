import React from 'react'
import Icon from './Icon'
import { ItemType } from '@/lib/types'
import { CalendarOutlined, UserOutlined, LikeOutlined, CommentOutlined } from '@ant-design/icons';
import { toDate } from '@/lib/helpers/moment';
import { Flex } from 'antd';
import UserLink from './UserLink';
import Link from 'next/link';

type PropsType = {
    data: ItemType,
    justify?: string,
    gap?: number
}

export default function PostInfo({ data, justify = 'space-between', gap = 0 }: PropsType) {
    if (!data) {
        return null;
    }
    const { score, by, time, descendants, id } = data;
    return (
        <Flex justify={justify} wrap='wrap' gap={gap}>
            {score
                ? <Icon key={'score' + score} data={score} icon={<LikeOutlined />} />
                : <Link href={`/posts/${id}`}>#{id}</Link>
            }
            <Icon key={'by' + by} data={<UserLink by={by} />} icon={<UserOutlined />} />
            {descendants &&
                <Icon key={'descendants' + descendants} data={descendants} icon={<CommentOutlined />} />}
            <Icon key={'time' + time} data={toDate(time, true)} icon={<CalendarOutlined />} />
        </Flex>
    )
}
