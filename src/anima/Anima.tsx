import { Animation } from 'react-scroll-motion';
const num = 180;
export const Spin = (rotate: number) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: p => `rotate(${p * num * rotate}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: p => `rotate(${p * num * rotate}deg)`,
      },
    },
  } as Animation);

export const ShootingStar = (rotate: number) =>
  ({
    in: {
      style: {
        transform: p => `rotate(${p * num * rotate}deg) `,
      },
    },
    out: {
      style: {
        // transform: p => `rotate(${p * num * rotate}deg)`,
      },
    },
  } as Animation);
