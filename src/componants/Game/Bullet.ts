import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';

import type { Coordinate } from './Type';

let bulletList: Coordinate[] = [];

const wrraperWidth = window.innerWidth;
const wrapperHeight = window.innerHeight;
let spaceShipX = wrraperWidth / 2 - 28;
let spaceShipY = wrapperHeight - 60;

const createBullet = () => {
  const newBullet: Coordinate = {
    x: spaceShipX - 8, // 조정된 총알 위치
    y: spaceShipY,
    update: function () {
      this.y -= 7; // 총알 이동 업데이트
    },
  };
  bulletList.push(newBullet); // 총알 리스트에 추가
  console.log('총알 리스트', bulletList);
};

export { bulletList, createBullet };
