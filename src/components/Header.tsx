'use client'
import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'

const links = [
    { href: '/', title: 'new' },
    { href: '/topstories', title: 'top' },
    { href: '/beststories', title: 'best' },
    { href: '/askstories', title: 'ask' },
    { href: '/showstories', title: 'story' },
    { href: '/jobstories', title: 'job' }
]
    .map(({ href, title }) => ({
        key: href, label: <Link href={href}>{title}</Link>
    }))

export default function Header() {
    return (
        <Menu items={links} mode="horizontal" className="flex justify-center" />
    )
}
