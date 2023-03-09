import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { useSession } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'

import { ProfileBox, FormAnnotation } from './styles'
import { Container, Header } from '../styles'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  console.log(session)

  async function handleUpdateProfile(data: UpdateProfileData) {}

  return (
    <Container>
      <Head>
        <title>Atualizar perfil | Ignite Call</title>
      </Head>

      <Header>
        <Heading as="strong">Defina sua disponibilidade</Heading>

        <Text>Por último, uma breve descrição e uma foto de perfil</Text>

        <MultiStep size={4} currentStep={4} />
      </Header>

      <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
        <label>
          <Text size="sm">Foto de perfil</Text>

          <Avatar />
        </label>

        <label>
          <Text size="sm">Sobre você</Text>

          <TextArea {...register('bio')} />

          <FormAnnotation size="sm">
            Fale um pouco sobre você. Isto será exibido em sua página pessoal.
          </FormAnnotation>
        </label>

        <Button type="submit" disabled={isSubmitting}>
          Finalizar
          <ArrowRight />
        </Button>
      </ProfileBox>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
