import Link from 'next/link';

export default function UserLink({ by }: { by: string }) {
    return (
        <Link href={`/user/${by}`}>{by}</Link>
    )
}
