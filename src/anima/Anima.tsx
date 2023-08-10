import { Animation } from 'react-scroll-motion';
const num = 360 / 12;
export const Spin = (rotate: number) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: p => `rotate(${p * 180 * rotate}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: p => `rotate(${p * 180 * rotate}deg)`,
      },
    },
  } as Animation);
