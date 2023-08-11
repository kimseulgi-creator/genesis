import { wrapperHeight, wrraperWidth } from './Canvas';

import type { Enemy } from './Type';

let enemyList: Enemy[] = [];
let gameOver = false;
const createEnemy = () => {
  const interval = setInterval(() => {
    let max = wrraperWidth - 77;
    let randomNumber = Math.floor(Math.random() * (max + 1));
    const newEnemy: Enemy = {
      x: randomNumber, // 여기서 초기 위치 설정 필요
      y: 0,
      update: function () {
        this.x = randomNumber;
        this.y += 4; // 적군 이동 업데이트
        if (this.y >= wrapperHeight - 40) {
          gameOver = true;
          console.log('gameOver');
        }
      },
    };
    enemyList.push(newEnemy);
  }, 1000);
};
export { enemyList, createEnemy, gameOver };
