import { enemyList } from './Enemy';
import { spaceShipX, spaceShipY } from './KeyCode';

import type { Bullet } from './Type';
let bulletList: Bullet[] = [];
let score = 0;
let gameClear = false;
const createBullet = () => {
  const newBullet: Bullet = {
    x: spaceShipX - 8, // 조정된 총알 위치
    y: spaceShipY,
    alive: true,
    update: function () {
      this.y -= 3; // 총알 이동 업데이트
    },
    // 점수 획득
    checkHit: function () {
      for (let i = 0; i < enemyList.length; i++) {
        if (this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x + 71) {
          score++;
          this.alive = false;
          enemyList.splice(i, 1);
        }
        if (score == 20) {
          gameClear = true;
        }
      }
    },
  };
  bulletList.push(newBullet); // 총알 리스트에 추가
};

export { bulletList, score, createBullet, gameClear };
