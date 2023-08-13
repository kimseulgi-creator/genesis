import { useEffect, useState, useCallback } from 'react';
import Link from './Link';
import { styled } from 'styled-components';
import { Outlet, useNavigate } from 'react-router-dom';
import { throttleHelper } from './headerThrottle';

const Header = () => {
  const flexBetween = 'flex items-center justify-between';
  const [isTopPage, setIsTopPage] = useState<boolean>(true);
  const navigate = useNavigate();

  const [isUp, setIsUp] = useState(false);
  // 현재 스크롤 위치값 저장할 변수
  const [pageY, setPageY] = useState(0);
  // 현재 스크롤이 최하단에 있는지 판단할 변수
  const [isBottom, setIsBottom] = useState(false);

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

  const handleScroll = useCallback(() => {
    const {
      scrollY,
      document: {
        documentElement: { scrollHeight, clientHeight },
      },
    } = window;

    const deltaY = scrollY - pageY;
    const isUp = scrollY !== 0 && deltaY >= 0;
    const isBottom = scrollHeight - scrollY - clientHeight === 0;

    setIsUp(isUp);
    setPageY(scrollY);
    setIsBottom(isBottom);
    if (isUp) {
      setIsTopPage(false);
    } else {
      setIsTopPage(true);
    }
  }, [pageY, setIsUp, setPageY, setIsBottom]);

  const throttleScroll = throttleHelper(handleScroll, 50);

  // 스크롤 이벤트 등록
  useEffect(() => {
    document.addEventListener('scroll', throttleScroll);
    return () => document.removeEventListener('scroll', throttleScroll);
  }, [throttleScroll]);

  return (
    <>
      <StHeaderDiv isTopPage={isTopPage} isUp={isUp}>
        <StHeaderBarDiv>
          <StNavBarDiv>
            {/* Left Side */}
            <h1 onClick={MainhandleButtonClick}>GENESIS</h1>
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
            {' '}
            <div onClick={GamehandleButtonClick}>
              슈팅 게임{' '}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e2e2e2" height="1em" viewBox="0 0 640 512">
                <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
              </svg>{' '}
            </div>
            <div onClick={QuizhandleButtonClick}>
              퀴즈 풀기{' '}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e2e2e2" height="1em" viewBox="0 0 512 512">
                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
              </svg>{' '}
            </div>
            <div onClick={CalenderhandleButtonClick}>
              천문 달력{' '}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#e2e2e2" height="1em" viewBox="0 0 448 512">
                <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
              </svg>{' '}
            </div>
          </StButtonDiv>
        </StHeaderBarDiv>
      </StHeaderDiv>
      <Outlet />
    </>
  );
};

export default Header;

const StHeaderDiv = styled.div<{ isTopPage: boolean; isUp: boolean }>`
  top: 0;
  z-index: 30;
  width: 100%;
  padding: 1.3rem 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  transform: ${props => (props.isUp ? 'translateY(-100%)' : 'translateY(0%)')};
  transition: transform 0.2s ease;
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

  & > h1 {
    font-weight: 900;
    font-size: 27px;
    color: white;
    cursor: pointer;
  }
`;

const StButtonDiv = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem; // 사이즈 조정
  color: #ccc;

  & > div {
    display: flex;
    align-items: center;
    margin-right: 5px;
    padding-right: 5px;
    border-right: 1px solid white;
    cursor: pointer;
    &:hover {
      color: #8b00ff;
    }
  }

  & > div:last-child {
    border: none;
  }

  & > div > svg {
    margin: 0 5px;
  }
`;
