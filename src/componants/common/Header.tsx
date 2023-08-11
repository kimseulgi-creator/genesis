import React, { useEffect, useState } from 'react';
import Logo from '../../img/Logo.png';
import Link from './Link';
import { styled } from 'styled-components';
import Button from '../Button';
import { Outlet, useNavigate } from 'react-router-dom';
import backgroundImg from '../../images/quiz/quiz_background2.png';
type isTopPage = {
  $isstoppation: boolean;
};

const Header = () => {
  const flexBetween = 'flex items-center justify-between';
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const navigate = useNavigate();
  const MainhandleButtonClick = () => {
    navigate('/');
  };
  const GamehandleButtonClick = () => {
    navigate('/game');
  };
  const QuizhandleButtonClick = () => {
    navigate('/quiz');
  };
  const CalenderhandleButtonClick = () => {
    navigate('/calender');
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
      }
      if (window.scrollY !== 0) setIsTopPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <StHeaderDiv $isstoppation={isTopPage}>
        <StHeaderBarDiv>
          <StNavBarDiv>
            {/* Left Side */}
            <img alt="logo" src={Logo} onClick={MainhandleButtonClick} />
            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link page="탄생좌" sectionId="constellation" />
                <Link page="봄" sectionId="spring" />
                <Link page="여름" sectionId="summer" />
                <Link page="가을" sectionId="autumn" />
                <Link page="겨울" sectionId="winter" />
              </div>
            </div>
          </StNavBarDiv>
          <StButtonDiv>
            <Button size="medium" color="purple" onClick={GamehandleButtonClick}>
              슈팅 게임
            </Button>
            <Button size="medium" color="purple" onClick={QuizhandleButtonClick}>
              퀴즈 풀기
            </Button>
            <Button size="medium" color="purple" onClick={CalenderhandleButtonClick}>
              행사 보기
            </Button>
          </StButtonDiv>
        </StHeaderBarDiv>
      </StHeaderDiv>
      <Outlet />
    </>
  );
};

export default Header;

const StHeaderDiv = styled.div<isTopPage>`
  top: 0;
  z-index: 30;
  width: 100%;
  padding: 1rem 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${backgroundImg});
  /* background-color: ${props => (props.$isstoppation ? '#000000' : 'transparent')}; */
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
