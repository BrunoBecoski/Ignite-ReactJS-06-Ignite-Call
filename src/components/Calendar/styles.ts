import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
})

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',
  textTransform: 'capitalize',

  span: {
    color: '$gray200',
  },
})

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
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

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',

  'thead th': {
    color: '$gray200',
    fontWeight: '$medium',
    fontSize: '$sm',

    '@media(max-width: 768px)': {
      fontSize: '$xs',
    },
  },

  'tbody:before': {
    content: '',
    paddingBottom: '0.75rem',
    display: 'block',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
})

export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  background: '$gray600',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',

  position: 'relative',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,

    boxSizing: 'border-box',
    border: '1px solid $gray600',
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  '@media(max-width: 768px)': {
    fontSize: '$sm',
  },

  span: {
    width: '$1',
    height: '$1',
    borderRadius: '$full',
    background: '$gray100',

    position: 'absolute',
    top: '75%',
    left: '50%',
    transform: 'translateX(-50%)',

    '@media(max-width: 768px)': {
      width: '.15rem',
      height: '.15rem',
    },
  },
})
