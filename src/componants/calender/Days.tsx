import React from 'react';
import { styled, keyframes } from 'styled-components';
import { moon } from '../../pages/Calender';

// type Propseee = {
//   // index: number;
//   // areDatesTheSame(first: Date, second: Date): boolean;
//   // handleMoon(first: number): void;
//   // currentMonth: number;
//   currentYear: number;
//   day: number;
//   apiMonthPlus0: string | number;
//   astroEvent: any;
//   // isDaysOpen: boolean;
// };

// const EEEEeee: React.FC<Propseee> = React.memo(({ currentYear, day, apiMonthPlus0, astroEvent }) => {
//   return (
//     <>
//       {astroEvent.map((item: any) => {
//         console.log('EEEEeee');
//         const dayPlus0 = day < 10 ? '0' + day : day;
//         return item.children[3].value === `${currentYear}${apiMonthPlus0}${dayPlus0}` ? (
//           <AstroMoonEvent moonIng={moon[item.children[0].value] ? moon[item.children[0].value] : ''}>
//             {day}
//           </AstroMoonEvent>
//         ) : null;
//       })}
//     </>
//   );
// });

type Props = {
  index: number;
  areDatesTheSame(first: Date, second: Date): boolean;
  handleMoon(first: number): void;
  currentMonth: number;
  currentYear: number;
  day: number;
  apiMonthPlus0: string | number;
  astroEvent: any;
  isDaysOpen: boolean;
};

const Days: React.FC<Props> = ({
  index,
  areDatesTheSame,
  handleMoon,
  currentMonth,
  currentYear,
  day,
  apiMonthPlus0,
  astroEvent,
  isDaysOpen,
}) => {
  console.log(isDaysOpen);
  return (
    <WeekBody key={index} isDaysOpen={isDaysOpen} onClick={() => handleMoon(day)}>
      {areDatesTheSame(new Date(), new Date(currentYear, currentMonth, day)) ? <TodayDiv>{day}</TodayDiv> : day}

      {/* <EEEEeee currentYear={currentYear} day={day} apiMonthPlus0={apiMonthPlus0} astroEvent={astroEvent} /> */}
      {astroEvent.map((item: any) => {
        const dayPlus0 = day < 10 ? '0' + day : day;
        return item.children[3].value === `${currentYear}${apiMonthPlus0}${dayPlus0}` ? (
          <AstroMoonEvent moonIng={moon[item.children[0].value] ? moon[item.children[0].value] : ''}>
            {day}
          </AstroMoonEvent>
        ) : null;
      })}
    </WeekBody>
  );
};

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

const WeekBody = styled.div<{ isDaysOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  height: 50px;
  color: white;
  cursor: pointer;
  position: relative;
  /* animation: ${props => (props.isDaysOpen === true ? daysScale : daysScale)} 0.3s ease-in-out forwards; */

  animation: ${daysScale} 0.5s ease-in-out forwards;
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

const EventsWrap = styled.div`
  width: 500px;
  height: 400px;
  word-wrap: break-word;
  background-color: #adc6ff;
  position: relative;
  /* overflow: hidden;s */
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

const AstroOtherEvent = styled.div<{ moonIng: string }>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${props => props.moonIng});
  background-position: center;
  background-size: cover;
`;
