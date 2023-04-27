import { styled, Heading, Text } from '@ignite-ui/react'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  '@media(max-width: 768px)': {
    padding: '$5',
    margin: '0 auto',
    alignItems: 'baseline',

    gap: 0,
    flexWrap: 'wrap',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
  paddingInline: '$10',

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },

  '@media(max-width: 768px)': {
    padding: 0,

    [`> ${Heading}`]: {
      fontSize: '$5xl',
    },

    [`> ${Text}`]: {
      fontSize: '$lg',
    },
  },
})

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 768px)': {
    padding: 0,
    content:
      'url(/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-preview_mobile.e5798581.png&w=1080&q=100)',
  },
})
