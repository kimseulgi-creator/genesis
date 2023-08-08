import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

type Props = {
  page: string;
  sectionId: string;
};

function Link({ page, sectionId }: Props) {
  const param = useLocation();
  console.log(param.pathname);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
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
