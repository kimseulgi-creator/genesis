import { styled } from 'styled-components';
import { week } from './calenderUtility';

const Week = () => {
  return (
    <>
      {' '}
      {week.map((item, index) => (
        <WeekHead key={index}>{item}</WeekHead>
      ))}
    </>
  );
};

export default Week;

const WeekHead = styled.div`
  background-color: #1d1c2b;
  font-size: 13px;
  padding: 10px;
  text-align: center;
  color: white;
`;
