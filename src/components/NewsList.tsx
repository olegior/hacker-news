"use client"
import { Flex, FloatButton, List, Row, Skeleton } from "antd";
import { ItemType } from '@/lib/types';
import NewsCard from './NewsCard';
import { useQuery } from '@tanstack/react-query'
import { getNews } from '@/lib/helpers/api';
import UpdateButton from "./UpdateButton";
import { Fragment } from "react";

export default function NewsList({ route }: { route: string }) {

    const query = useQuery({
        queryKey: [route],
        queryFn: () => getNews(route),
        staleTime: 10000,
        refetchOnWindowFocus: false
    })

    const { data, isFetching } = query;

    const skeleton = Array.from({ length: 10 }, (_, ind: number) =>
        <Flex key={ind} className='min-w-80 my-2 w-full max-w-full'>
            <Skeleton active loading className='w-full' />
        </Flex>)

    const setListItem = (item: ItemType) => <Row className='my-2'>
        <NewsCard key={item.id} data={item} />
    </Row>

    const handleUpdate = () => {
        query.refetch()
    }

    return (
        <>
            <List
                dataSource={data} size="large"
                renderItem={(item: ItemType, id: number) => {
                    return !isFetching ? setListItem(item) : <Fragment key={id}></Fragment>
                }}
                pagination={{
                    pageSize: 10,
                    showSizeChanger: false,
                    align: 'center',
                    className: "pb-10"
                }}>
                {isFetching && skeleton}
            </List>
            <UpdateButton tooltip='Update newslist' onClick={handleUpdate} />
        </>
    )
}
