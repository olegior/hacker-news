import NewsList from "@/components/NewsList";

type PropsType = {
    params: {
        route: string
    }
}

export async function generateMetadata({ params }: PropsType) {
    return {
        title: `${params.route} | Hacker News`
    }
}

export default function UserRoute({ params }: PropsType) {
    return (
        <NewsList route={params.route} />
    )
}
