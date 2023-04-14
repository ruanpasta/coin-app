import { styled } from '..'
import { utils } from '../utils'

export const HeroBannerContainer = styled('main', {
})

export const HeroBannerContent = styled('div', {
  minHeight: '40rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8.625rem',
  maxWidth: 'calc(100vw - ((100vw - 1232px) /2))',
  ...utils.px('lg'),
})

export const HeroBannerCallToAction = styled('section', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  maxWidth: '36.875rem',

  h1: {
    color: '$primary500',
    ...utils.fs('5xl'),
  },

  p: {
    marginTop: utils.sizes['lg'],
    color: '$textBase',
    ...utils.fs('xl'),
  },

  '& > button': {
    cursor: 'pointer',
    border: 0,
    borderRadius: 32,
    backgroundColor: '$primary500',
    color: '$white',
    maxWidth: '278px',

    textTransform: 'uppercase',

    fontWeight: 'bold',
    paddingLeft: '4.8rem',
    marginTop: utils.sizes['3xl'],
    ...utils.py('md'),
    ...utils.fs('lg'),

    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',

    '&:hover': {
      backgroundColor: '$primary400',
    },
  },
})

export const HeroBannerCTASessionButtons = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: utils.sizes['2xl'],

  '& > button': {
    cursor: 'pointer',
    border: 0,
    borderRadius: 4,
    backgroundColor: '$primary100',
    color: '$primary500',

    marginTop: '5rem',
    ...utils.py('0.5rem'),
    ...utils.px('lg'),
    ...utils.fs('xl'),

    '&:hover': {
      backgroundColor: '$primary200',
    },
  },
})

export const HeroBannerIllustrations = styled('aside', {
  width: '100%',
  display: 'flex',
  overflow: 'hidden'
})
