import { styled, Box, Heading, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 572,
  margin: '$20 auto $4',
  paddingInline: '$4',

  '@media(max-width: 768px)': {
    margin: 0,
    padding: '$5',
  },
})

export const Header = styled('div', {
  paddingInline: '$6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormError = styled(Text, {
  color: '#F75A68',
})
