'use client'
import React, { useState } from 'react'
import { ItemType } from '../lib/types'
import CommentsGroup from './CommentsGroup';
import { Button } from 'antd'
import { parseText } from '@/lib/helpers/parseText';
import PostInfo from './PostInfo';

export default function Comment({ data }: { data: ItemType }) {
    const { dead, text, kids, deleted } = data;

    const handleButton = () => {
        setShowNested(prev => !prev)
    }

    const [showNested, setShowNested] = useState(false)

    const showButton = kids && <Button type='link' onClick={handleButton}>show more...</Button>

    const nestedComments = showNested ? <CommentsGroup kids={kids} /> : showButton

    return (
        <div className={`flex flex-col gap-4  p-1 border-l ${(deleted || dead) && 'text-gray-500 line-through'}`}>
            <PostInfo data={data} justify='flex-start' gap={10} />
            <div className='text-balance break-all'>
                {text && parseText(text)}
            </div>
            {nestedComments}
        </div >
    )
}
