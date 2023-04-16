import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
      <div>
        <Link href="/">home</Link>
        <Link href="/individual">individual</Link>
        <Link href="/future">futuer</Link>
      </div>
  )
}
