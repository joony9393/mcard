import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  ButtonColor,
  ButtonColorMap,
  ButtonSize,
  buttonWeakMap,
  buttonSizMap,
} from '@styles/button'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const Button = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : ButtonColorMap[color],
  ({ size = 'small' }) => buttonSizMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          cursor: initial;
          opacity: 0.26;
        `
      : undefined,
)

export default Button
