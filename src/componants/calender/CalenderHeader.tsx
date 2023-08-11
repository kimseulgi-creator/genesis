import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

export const month: string[] = ['jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'];

type Props = {
  prevMonth(): void;
  nextMonth(): void;
  currentMonth: number;
  currentYear: number;
  setIsMonthListOpen: Dispatch<SetStateAction<boolean>>;
};

const CalenderHeader: React.FC<Props> = ({ prevMonth, nextMonth, currentMonth, currentYear, setIsMonthListOpen }) => {
  return (
    <Header>
      <HeaderBtn onClick={prevMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 320 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </HeaderBtn>
      <MonthText onClick={() => setIsMonthListOpen(pre => !pre)}>
        {month[currentMonth]} {currentYear}
      </MonthText>

      <HeaderBtn onClick={nextMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </HeaderBtn>
    </Header>
  );
};

export default CalenderHeader;

const Header = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  height: 60px;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid #ffffff7a;
  background-color: #1d1c2b;
  color: white;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const HeaderBtn = styled.button`
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: white;
`;

const MonthText = styled.span`
  cursor: pointer;
`;
