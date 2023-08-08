import React from 'react';
import { styled } from 'styled-components';

type Props = {
  page: string;
};

function Link({ page }: Props) {
  return <StLinkButton>{page}</StLinkButton>;
}

export default Link;

const StLinkButton = styled.button`
  color: #ccc;
  background-color: #ffffff;
  border: none;
  &:hover {
    color: #8b00ff;
  }
`;
