import React from 'react';
import { styled, keyframes } from 'styled-components';
import { moon } from './calenderUtility';

type Props = {
  areDatesTheSame(first: Date, second: Date): boolean;
  handleMoon(first: number): void;
  currentMonth: number;
  currentYear: number;
  day: number;
  MonthPlus0: string | number;
  astroEvent: any;
};

const Days: React.FC<Props> = React.memo(
  ({ areDatesTheSame, handleMoon, currentMonth, currentYear, day, MonthPlus0, astroEvent }) => {
    const ran = Math.floor(Math.random() * 22229999);
    return (
      <WeekBody key={ran} onClick={() => handleMoon(day)}>
        {areDatesTheSame(new Date(), new Date(currentYear, currentMonth, day)) ? <TodayDiv>{day}</TodayDiv> : day}

        {astroEvent.map((item: any) => {
          const dayPlus0 = day < 10 ? '0' + day : day;
          return item.children[3].value === `${currentYear}${MonthPlus0}${dayPlus0}` ? (
            <AstroMoonEvent moonIng={moon[item.children[0].value] ? moon[item.children[0].value] : ''}>
              {day}
            </AstroMoonEvent>
          ) : null;
        })}
      </WeekBody>
    );
  },
);

export default Days;

const daysScale = keyframes`
	0%{
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;

    }
    50% {
    opacity: 0.5;

    }
    100%{
      transform: translateY(0);
      opacity: 1;

      visibility: visible;

    }
`;

const WeekBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  height: 50px;
  color: white;
  cursor: pointer;
  position: relative;
  animation: ${daysScale} 0.3s ease-in-out forwards;
`;

const TodayDiv = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color_purple);
  z-index: 1;
`;

const AstroMoonEvent = styled.div<{ moonIng: string }>`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffadad;
  background-image: url(${props => props.moonIng});
  background-position: center;
  background-size: cover;
`;
