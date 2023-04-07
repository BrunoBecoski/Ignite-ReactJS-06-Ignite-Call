import { styled, Box, Text } from '@ignite-ui/react'

export const IntervalBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
})

export const IntervalsContainer = styled('div', {
  border: '1px solid $gray600',
  borderRadius: '$md',
  marginBottom: '$4',
})

export const IntervalInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(100%) brightness(40%)',
  },

  '@media(max-width: 768px)': {
    flexWrap: 'wrap',
  },
})

export const IntervalItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',

  '& + &': {
    borderTop: '1px solid $gray600',
  },

  '@media(max-width: 768px)': {
    flexWrap: 'wrap',
    gap: '$4',

    [`&:has(button[data-state=unchecked])`]: {
      [`& ${IntervalInputs}`]: {
        display: 'none',
      },
    },
  },
})

export const IntervalDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const FormError = styled(Text, {
  color: '#F75A68',
  marginBottom: '$4',
})
