import { Animation } from 'react-scroll-motion';
const num = 360 / 12;
export const SpinCircle = (cycle: number) =>
  ({
    in: {
      style: {
        transform: p => `rotate(${p * num * cycle}deg)`,
      },
    },
    out: {
      style: {
        transform: p => `rotate(${p * num * cycle}deg)`,
      },
    },
  } as Animation);
