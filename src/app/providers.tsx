"use client"
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, theme } from 'antd'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect, useState } from 'react'

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {

    const [userTheme, setTheme] = useState<'darkAlgorithm' | 'defaultAlgorithm'>('defaultAlgorithm')

    useEffect(() => {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', ({ matches }) => {
                matches
                    ? setTheme('darkAlgorithm')
                    : setTheme('defaultAlgorithm')
            })
    }, [])

    return (
        <AntdRegistry>
            <ConfigProvider
                theme={{
                    algorithm: theme[userTheme]
                }}
            >
                <QueryClientProvider client={queryClient}>
                    {children}
                    <ReactQueryDevtools />
                </QueryClientProvider>
            </ConfigProvider>
        </AntdRegistry>
    )
}