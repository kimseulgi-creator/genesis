export type Enemy = {
  x: number;
  y: number;
  update: () => void;
};

export type Bullet = {
  x: number;
  y: number;
  alive: boolean;
  update: () => void;
  checkHit: () => void;
};
