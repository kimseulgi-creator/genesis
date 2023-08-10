import { styled } from 'styled-components';

type Props = {
  startFixedDay: number;
};

const BlankDays: React.FC<Props> = ({ startFixedDay }) => {
  return (
    <>
      {' '}
      {[...Array(startFixedDay).keys()].map((item, index) => (
        <WeekDay key={index}> {''}</WeekDay>
      ))}
    </>
  );
};

export default BlankDays;

const WeekDay = styled.div`
  font-size: 13px;
  height: 50px;
  color: white;
  cursor: pointer;
`;
