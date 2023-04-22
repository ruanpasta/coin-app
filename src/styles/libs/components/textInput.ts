import { styled } from "@/styles";
import { utils } from "@/styles/utils";

export const TextInputContainer = styled('div', {
  border: '1px solid $secondary300',
  borderRadius: 6,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '0.5rem',

  padding: utils.sizes.lg,

  '&:focus-within': {
    borderColor: '$primary300'
  }

})

export const TextInputElement = styled('input', {
  // Remove all default styles input
  all: 'unset',

  // Custom styles
  width: '100%',
  fontSize: utils.sizes.md,
  color: '$textBase'

})

export const TextInputIconWrapper = styled('div', {
  color: '$secondary300',

  button: {
    padding: 0
  }
})
