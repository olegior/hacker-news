import { getData } from '@/lib/helpers/api'
import Article from '@/components/Article'

type PropsType = {
  params: {
    id: number
  }
}

export async function generateMetadata({ params }: PropsType) {
  const data = await getData(params.id)
  return {
    title: `${data.title} | Hacker News`
  }
}

export default async function NewsPage({ params }: PropsType) {
  return (
      <Article id={params.id} />
  )
}
