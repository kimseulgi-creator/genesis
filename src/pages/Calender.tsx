import { useState, useEffect } from 'react';
import { styled, keyframes } from 'styled-components';
import { startOfMonth } from 'date-fns';
import XMLParser from 'react-xml-parser';
import BlankDays from '../componants/calender/BlankDays';
import CalenderHeader from '../componants/calender/CalenderHeader';
import Days from '../componants/calender/Days';
import Week from '../componants/calender/Week';
import Footer from '../componants/common/Footer';
import { range, daysInMonth, areDatesTheSame, month } from '../componants/calender/calenderUtility';

//type
import { Astro, Children, Moon } from '../componants/calender/calenderUtility';

const Calender = () => {
  //1일이 시작될 때  몇 칸이 띄여지는 지
  const [startFixedDay, setStartFixedDay] = useState(startOfMonth(new Date()).getDay());

  //현재 월
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  //현재 년도
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  //달력 month 확대 리스트 이벤트
  const [isMonthListOpen, setIsMonthListOpen] = useState<boolean>(false);

  //next 클릭
  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(prv => prv + 1);
      setStartFixedDay(startOfMonth(new Date(currentYear, currentMonth + 1)).getDay());
    } else {
      setCurrentMonth(0);
      setCurrentYear(prv => prv + 1);
      setStartFixedDay(startOfMonth(new Date(currentYear + 1, 0)).getDay());
    }
  };

  //prev 클릭
  const prevMonth = () => {
    if (currentMonth >= 0) {
      setCurrentMonth(prv => prv - 1);
      setStartFixedDay(startOfMonth(new Date(currentYear, currentMonth - 1)).getDay());
    } else {
      setCurrentMonth(11);
      setCurrentYear(prv => prv - 1);
      setStartFixedDay(startOfMonth(new Date(currentYear - 1, 11)).getDay());
    }
  };

  //api 관련 코드
  const [astroEvent, setAstroEvent] = useState<any>([]);
  const [moonEvent, setMoonEvent] = useState<string>('');

  //한 자리 숫자 앞에 '0' 추가
  const monthPlus1 = currentMonth + 1;
  const MonthPlus0 = monthPlus1 < 10 ? '0' + monthPlus1 : monthPlus1;
  //api 키
  const SERVICE_KEY = `${process.env.REACT_APP_SERVICE_KEY}`;

  //api호출
  const getApi = async () => {
    let url = `http://apis.data.go.kr/B090041/openapi/service/AstroEventInfoService/getAstroEventInfo?solYear=${currentYear}&solMonth=${MonthPlus0}&ServiceKey=${SERVICE_KEY}`;
    let response = await fetch(url);
    let data = await response.text();
    var xml = new XMLParser().parseFromString(data);
    setAstroEvent(xml.children[1].children[0].children);
  };

  //api호출
  useEffect(() => {
    getApi();
  }, [currentMonth]);

  //한 자리 숫자 앞에 '0' 추가
  const handleMoon = (day: number) => {
    const dayPlus0 = day < 10 ? '0' + day : day;
    const formatDay = `${currentYear}${MonthPlus0}${dayPlus0}`;
    setMoonEvent(formatDay);
  };

  const handleMonthClick = (month: number) => {
    setCurrentMonth(month);
  };
  return (
    <Container>
      <CausedByFlex>
        <h1 style={{ color: 'white' }}>Astronomical Calendar</h1>
        {/* 달력시작 */}
        <CalenderWrap>
          <CalenderHeader
            prevMonth={prevMonth}
            nextMonth={nextMonth}
            currentMonth={currentMonth}
            currentYear={currentYear}
            setIsMonthListOpen={setIsMonthListOpen}
          />
          <GridWrap>
            {/* 주 */}
            <Week />
            {/* 일 */}
            <BlankDays startFixedDay={startFixedDay} />

            {range(daysInMonth(currentYear, currentMonth)).map((day, index) => (
              <Days
                areDatesTheSame={areDatesTheSame}
                currentMonth={currentMonth}
                currentYear={currentYear}
                day={day}
                MonthPlus0={MonthPlus0}
                astroEvent={astroEvent}
                handleMoon={handleMoon}
                key={day}
              />
            ))}
          </GridWrap>
          {/* 년도 클릭 시 보여줄 리스트 */}
          <ShowMonthList $isMonthListOpen={isMonthListOpen}>
            {month.map((item, index) => (
              <div key={item + index} onClick={() => setIsMonthListOpen(pre => !pre)}>
                <MonthBlock key={index} onClick={() => handleMonthClick(index)}>
                  {item}
                </MonthBlock>
              </div>
            ))}
          </ShowMonthList>
        </CalenderWrap>
      </CausedByFlex>
      {/* 오른쪽에 올 이벤트 설명박스 */}
      <EventsWrap>
        <SubTitle>
          <h1>Monthly Event</h1>
        </SubTitle>

        <AstroContents>
          <InsightMark>
            <img
              src="https://user-images.githubusercontent.com/129598273/259465789-6291a220-081b-41a7-9f4e-d2f986d93d96.png"
              alt=""
            />
            Insight {`${currentYear}-${MonthPlus0}`}
          </InsightMark>
          {astroEvent[0]?.children[0].value}{' '}
        </AstroContents>
        <SubTitle>
          <h1>Day Event</h1>
        </SubTitle>

        {astroEvent.map((item: any, index: number) => {
          return item.children[3].value === moonEvent ? (
            <AstroContents key={index}>
              {' '}
              <EventMark>
                <img
                  src="https://user-images.githubusercontent.com/129598273/259467141-cf1a1a65-7100-49a9-bafd-2989e4a035ea.png"
                  alt=""
                />
                Events {`${moonEvent}`}
              </EventMark>
              {item.children[0].value}
            </AstroContents>
          ) : null;
        })}
      </EventsWrap>
      {/* <Footer /> */}
    </Container>
  );
};

export default Calender;

const Container = styled.div`
  width: 100vw;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: #161616;
  background-image: url('https://user-images.githubusercontent.com/129598273/259441426-68bfb679-e062-4b54-9775-848100bef156.jpg');
  background-position: center;
  background-size: cover;
`;

const CausedByFlex = styled.div`
  height: 95vh;
  position: relative;
  & > h1 {
    color: white;
    font-weight: 900;
    font-size: 20px;
    position: absolute;
    top: 160px;
    left: 60px;
  }
`;

const CalenderWrap = styled.div`
  width: 400px;
  margin: 0 50px;
  margin-top: 40%;
  word-wrap: break-word;
  background-color: #1d1c2b;
  border-bottom: 15px solid #1d1c2b;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: none;
`;

const EventsWrap = styled.div`
  width: 500px;
  height: 100%;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  word-wrap: break-word;
  position: relative;
  overflow: hidden;
  text-align: left;
`;

const slide = keyframes`
	0%{
    transform: translateX(-100px);
    opacity: 0;
    }
    100%{
    transform: translateX(0px);
    opacity: 1;
    }
`;

const AstroContents = styled.div`
  width: 90%;
  margin: 20px 0;
  padding: 20px 15px;
  border: 1px solid white;
  border-radius: 6px;
  font-size: 15px;
  line-height: 1.8rem;
  animation: ${slide} 0.5s ease-in-out forwards;
`;

const InsightMark = styled.div`
  & img {
    width: 20px;
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #eed4a5;
`;

const EventMark = styled.div`
  & img {
    width: 20px;
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  font-size: 17px;
  color: #aae0d6;
`;

const SubTitle = styled.div`
  position: relative;
  width: 100%;
  margin: 20px;

  & > h1 {
    color: white;
    position: absolute;
    left: 10px;
    font-weight: 900;
    font-size: 20px;
  }
`;

const monthScale = keyframes`
	0%{
    transform: scale(1.5);
    visibility: hidden;
    opacity: 0;
    }
    50% {
    opacity: 0.5;

    }
    100%{
      transform: scale(1);
      visibility: visible;
      opacity: 1;
    }
`;
const monthScaleReturn = keyframes`
    100%{
    visibility: hidden;
    }
`;

const ShowMonthList = styled.div<{ $isMonthListOpen: boolean }>`
  position: absolute;
  top: 0;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 13px;
  background-color: #1d1c2b;
  z-index: 2;
  border-radius: 10px;
  border-bottom: 15px solid #1d1c2b;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  visibility: hidden;
  animation: ${props => (props.$isMonthListOpen === true ? monthScale : monthScaleReturn)} 0.3s ease-in-out forwards;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MonthBlock = styled.span`
  cursor: pointer;
`;
