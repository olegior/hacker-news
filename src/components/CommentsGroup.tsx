"use client"
import { getKids } from '@/lib/helpers/api'
import Comment from './Comment'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from 'antd'
import UpdateButton from './UpdateButton'

export default function CommentsGroup({ kids }: { kids: number[] }) {

    const query = useQuery({
        queryKey: [kids],
        queryFn: () => getKids(kids),
        staleTime: 10000,
        refetchOnWindowFocus: false
    })

    const handleUpdate = () => {
        query.refetch();
    }

    const { data, isFetching } = query

    return (
        <>
            <div className='flex flex-col gap-5'>
                {isFetching && <Skeleton loading active />}
                {!isFetching && data?.map((item) =>
                    <Comment key={item.id} data={item} />)}
            </div>
            <UpdateButton onClick={handleUpdate} tooltip='update comments' />
        </>
    )
}
