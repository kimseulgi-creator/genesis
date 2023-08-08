import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  page: string;
  sectionId: string;
};

function Link({ page, sectionId }: Props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/list');
    }
  };
  return <StLinkButton onClick={handleButtonClick}>{page}</StLinkButton>;
}

export default Link;

const StLinkButton = styled.button`
  color: #ccc;
  background-color: transparent;
  border: none;
  &:hover {
    color: #8b00ff;
  }
`;
