import { ComponentProps } from 'react'
import { styled } from '../../styles'
export const Button = styled('button', {
  all: 'unset',
  backgroundColor: '$gray600',
  color: 'White',
  borderRadius: '$md',
  cursor: 'pointer',
  fontFamily: '$default',
  variants: {
    size: {
      sm: {
        padding: '$2 $2',
        fontSize: '$sm'
      },
      md: {
        padding: '$2 $4',
        fontSize: '$md'
      },
      big: {
        padding: '$4 $6',
        fontSize: '$2xl'
      }
    },
    actions: {
      primary: {
        backgroundColor: '$blue600',
      },
      success: {
        backgroundColor: '$green600',
      },
      danger: {
        backgroundColor: '$red600',
      },
      warning: {
        backgroundColor: '$orange600',
      }
    }
  },
  defaultVariants: {
    size: 'md',
    actions: 'primary'
  }
})

export interface ButtonProps extends ComponentProps<typeof Button> {}

Button.displayName= 'Button'
