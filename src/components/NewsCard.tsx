'use client'
import { ItemType } from '@/lib/types'
import { Card, Divider } from 'antd'
import React from 'react'
import Meta from 'antd/es/card/Meta';
import { useRouter } from 'next/navigation'
import Text from 'antd/es/typography/Text'
import PostInfo from './PostInfo';

export default function NewsCard({ data }: { data: ItemType }) {
    const { title, id } = data
    const { push } = useRouter()
    const handleClick = () => push(`/posts/${id}`)

    return (
        <Card
            hoverable
            bordered={false}
            className='w-full'
            size='small'
            onClick={handleClick}
        >
            <Text className='break-all text-balance' strong>{title}</Text>
            <Divider />
            <Meta description={<PostInfo data={data} />} />
        </Card>
    )
}
