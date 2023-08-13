import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  page: string;
  sectionId: string;
};

function Link({ page, sectionId }: Props) {
  const param = useLocation();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const section: any = document.getElementById(sectionId);
    if (section) {
      const scrollTop = section.offsetTop - 100;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    } else if (param.pathname === '/list') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
