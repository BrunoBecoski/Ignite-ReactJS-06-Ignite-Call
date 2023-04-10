import { styled, Box, Text } from '@ignite-ui/react'

export const FormAnnotation = styled(Text, {
  color: '$gray200',
  textAlign: 'center',
})

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    [`${Text}`]: {
      fontSize: '$md',
    },

    [`${FormAnnotation}`]: {
      fontSize: '$sm',
    },
  },

  '@media(max-width: 768px)': {
    label: {
      [`${Text}`]: {
        fontSize: '$sm',
      },

      [`${FormAnnotation}`]: {
        fontSize: '$xs',
      },
    },
  },
})
