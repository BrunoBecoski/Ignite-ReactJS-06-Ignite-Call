import Head from 'next/head'
import { Heading } from '@ignite-ui/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ignite Call</title>
      </Head>

      <Heading as="h1">Hello World</Heading>
    </>
  )
}
