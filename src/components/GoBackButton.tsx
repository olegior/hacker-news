'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons';


export default function GoBackButton() {
    const { back } = useRouter()

    return (
        <Button type='link' onClick={back}>
            <ArrowLeftOutlined style={{ fontSize: '1.5rem' }} />
        </Button>
    )
}
