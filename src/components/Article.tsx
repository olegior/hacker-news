"use client"
import React from 'react'
import GoBackButton from './GoBackButton';
import CommentsGroup from './CommentsGroup';
import { useQuery } from '@tanstack/react-query';
import { getData } from '@/lib/helpers/api';
import { Card, Flex, FloatButton } from 'antd';
import Link from 'next/link';
import PostInfo from './PostInfo';
import Title from 'antd/es/typography/Title';
import { parseText } from '@/lib/helpers/parseText';


export default function Article({ id }: { id: number }) {

    const { data, isFetching } = useQuery({
        queryKey: [id],
        queryFn: () => getData(id),
        staleTime: 10000,
    })

    if (!data) {
        return null
    }

    const { text, title, url, kids } = data;

    return (
        <Card loading={isFetching} className="w-full">
            <Flex gap={20} vertical className='w-full'>
                <GoBackButton />
                <PostInfo data={data} justify='flex-start' gap={20} />
                <Title level={4}>{title}</Title>
                {text && parseText(text)}
                {url && <Link href={url} className={'text-wrap max-w-full break-all'}>{url}</Link>}
                {kids && <CommentsGroup kids={kids} />}
            </Flex>
            <FloatButton.BackTop tooltip="scroll to top"/>
        </Card>
    )
}
