import React from 'react';
import { styled, css } from 'styled-components';

type Props = {
  children: string;
  color?: string;
  size: string;
  onClick?: () => void;
  className?: string;
};
const Button: React.FC<Props> = ({ children, color, size, onClick, className }) => {
  const classNames = [className, 'custom-btn'].filter(v => Boolean(v)).join(' ') || undefined;
  return (
    <StButton size={size} color={color} className={classNames} onClick={onClick}>
      {children}
    </StButton>
  );
};

export default React.memo(Button);

const StButton = styled.button<{ size: string; color?: string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: relative;
  transition: 0.3s ease-in-out;

  // //버튼 효과
  &::before {
    content: '';
    width: 100%;
    height: 0;
    position: absolute;
    z-index: -1;
    background-color: ${props => props.color || 'transparent'};
    left: 0;
    top: 0;
    transition: 0.4s ease-in-out;
    border-radius: 8px;
  }
  &:hover {
    color: #fff;
    z-index: 1;
  }
  &:hover::before {
    content: '';
    color: white;
    position: absolute;
    height: 100%;
  }
  &:disabled {
    background-color: #cdedff;
    border: 0;
    color: #fff;
    cursor: default;
    &:hover::before {
      width: 0%;
      height: 0;
    }
  }

  ${({ color }) =>
    color === 'yellow' &&
    css`
      background-color: var(--color_yellow);
      color: var(--color_black);
    `}
  ${({ color }) =>
    color === 'purple' &&
    css`
      background-color: var(--color_purple);
      color: var(--color_black);
    `}
    ${({ color }) =>
    color === 'red' &&
    css`
      background-color: var(--color_red);
      color: var(--color_black);
    `}
    ${({ color }) =>
    color === 'green' &&
    css`
      background-color: var(--color_green);
      color: var(--color_black);
    `}

    ${({ size }) =>
    size === 'small' &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
      padding: 0 0.4rem;
      border-radius: 10px;
    `}
    ${({ size }) =>
    size === 'medium' &&
    css`
      height: 2.25rem;
      font-size: 1rem;
      padding: 0 0.6rem;
      border-radius: 12px;
    `}
    ${({ size }) =>
    size === 'large' &&
    css`
      width: 100%;
      height: 3rem;
      font-weight: 800;
      font-size: 1.25rem;
      padding: 0 1rem;
      border-radius: 8px;
    `};
`;
