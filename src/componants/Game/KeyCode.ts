import { bulletList, createBullet } from './Bullet';
import { wrapperHeight, wrraperWidth } from './Canvas';
import { enemyList } from './Enemy';

const keysDown: { [key: number]: boolean } = {};
let spaceShipX = wrraperWidth / 2 - 28;
let spaceShipY = wrapperHeight - 60;

const setUpKeyboardListener = () => {
  document.addEventListener('keydown', event => {
    keysDown[event.keyCode] = true;
  });
  document.addEventListener('keyup', event => {
    if (event.keyCode === 32) {
      createBullet();
    }
    delete keysDown[event.keyCode];
  });
};

const update = () => {
  if (39 in keysDown) {
    spaceShipX += 5;
  }
  if (37 in keysDown) {
    spaceShipX -= 5;
  }
  if (40 in keysDown) {
    spaceShipY += 5;
  }
  if (38 in keysDown) {
    spaceShipY -= 5;
  }
  if (spaceShipX <= 0) {
    spaceShipX = 0;
  }
  if (spaceShipY <= 0) {
    spaceShipY = 0;
  }
  if (spaceShipX >= wrraperWidth - 56) {
    spaceShipX = wrraperWidth - 56;
  }
  if (spaceShipY >= wrapperHeight - 60) {
    spaceShipY = wrapperHeight - 60;
  }
  //총알의 y좌표 업데이트 하는 함수 호출
  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].checkHit();
    }
  }
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
};

export { spaceShipX, spaceShipY, setUpKeyboardListener, update };
