import { styled, Box, Text } from '@ignite-ui/react'

export const Container = styled(Box, {
  margin: '$6 auto 0',
  padding: 0,
  display: 'grid',
  maxWidth: '100%',

  variants: {
    isTimePickerOpen: {
      true: {
        gridTemplateColumns: '1fr 280px',

        '@media(max-width: 768px)': {
          background: 'none',
          border: 'none',

          maxWidth: '320px',
          gridTemplateColumns: '1fr',

          '> div:first-child': {
            display: 'none',
          },
        },
      },
      false: {
        maxWidth: 540,
        gridTemplateColumns: '1fr',
      },
    },
  },
})

export const TimePicker = styled('div', {
  borderLeft: '1px solid $gray600',
  padding: '$6',
  overflowY: 'scroll',
  background: '$gray800',

  borderRadius: '0 $md $md 0',

  '&::-webkit-scrollbar': {
    width: '$2',
  },

  '&::-webkit-scrollbar-track': {
    borderRadius: '$md',
    background: '$gray600',
  },

  '&::-webkit-scrollbar-thumb': {
    borderRadius: '$md',
    background: '$gray400',
  },

  '&::-webkit-scrollbar-thumb:hover': {
    background: '$gray200',
  },

  '@media(max-width: 768px)': {
    width: '100%',
    height: 'fit-content',

    border: '1px solid $gray600',
    borderRadius: '$md',
  },
})

export const TimePickerHeader = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  color: '$gray200',

  button: {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    svg: {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      color: '$gray100',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$gray100',
    },
  },
})

export const TimePickerTitle = styled(Text, {
  fontWeight: '$medium',

  span: {
    color: '$gray200',
  },
})

export const TimePickerList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$2',

  marginTop: '$3',
})

export const TimePickerItem = styled('button', {
  border: 0,
  backgroundColor: '$gray600',
  paddingBlock: '$2',
  cursor: 'pointer',
  color: '$gray100',
  borderRadius: '$sm',
  fontSize: '$sm',
  lineHeight: '$base',
  width: '230px',
  maxWidth: '100%',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,

    border: '1px solid $gray600',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
