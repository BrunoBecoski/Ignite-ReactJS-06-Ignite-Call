import Head from 'next/head'
import Image from 'next/image'
import { Heading, Text } from '@ignite-ui/react'

import { ClaimUsernameForm } from './components/ClaimUsernameForm'

import { Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Ignite Call</title>
      </Head>

      <Hero>
        <Heading as="h1" size="4xl">
          Agendamento descomplicado
        </Heading>

        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamento no
          seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Hero>

      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
