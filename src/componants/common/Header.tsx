import React, { useState } from 'react';
import Logo from '../../img/Logo.png';
import Link from './Link';
import { styled } from 'styled-components';
import Button from '../Button';
import { Outlet, useNavigate } from 'react-router-dom';
type Props = {};

const Header = ({}: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const navbarBackground = 'bg-primary-100 drop-shadow';
  const navigate = useNavigate();

  const MainhandleButtonClick = () => {
    navigate('/');
  };
  return (
    <>
      <nav>
        <StHeaderDiv>
          <StHeaderBarDiv>
            <StNavBarDiv>
              {/* Left Side */}
              <img alt="logo" src={Logo} onClick={MainhandleButtonClick} />
              {/* Right Side */}
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="봄" />
                  <Link page="여름" />
                  <Link page="가을" />
                  <Link page="겨울" />
                </div>
              </div>
            </StNavBarDiv>
            <StButtonDiv>
              <Button size="medium" color="purple">
                게임 해보기
              </Button>
              <Button size="medium" color="purple">
                행사 보기
              </Button>
            </StButtonDiv>
          </StHeaderBarDiv>
        </StHeaderDiv>
      </nav>
    </>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  top: 0;
  z-index: 30;
  width: 100%;
  padding: 1.5rem 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StHeaderBarDiv = styled.div`
  width: 83.333333%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StNavBarDiv = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StButtonDiv = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
