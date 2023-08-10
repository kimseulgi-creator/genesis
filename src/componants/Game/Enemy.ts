import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';

import type { Coordinate } from './Type';

let enemyList: Coordinate[] = [];

const wrraperWidth = window.innerWidth;
const wrapperHeight = window.innerHeight;
let spaceShipX = wrraperWidth / 2 - 28;
let spaceShipY = wrapperHeight - 60;

const createEnemy = () => {
  const interval = setInterval(() => {
    let max = wrraperWidth - 77;
    let randomNumber = Math.floor(Math.random() * (max + 1));
    const newEnemy: Coordinate = {
      x: randomNumber, // 여기서 초기 위치 설정 필요
      y: 0,
      update: function () {
        this.x = randomNumber;
        this.y += 7; // 적군 이동 업데이트
      },
    };
    enemyList.push(newEnemy);
    console.log('적군 리스트', enemyList);
  }, 30000);
};
export { enemyList, createEnemy };
