"use client"
import { FloatButton } from 'antd'
import React from 'react'
import { ReloadOutlined } from '@ant-design/icons'

export default function UpdateButton({ tooltip, onClick }: { tooltip: string, onClick: () => void }) {
    return (
        <FloatButton onClick={onClick} icon={<ReloadOutlined />} tooltip={tooltip} />
    )
}
