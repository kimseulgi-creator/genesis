import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';
import { bulletList, createBullet } from './Bullet';
import { enemyList } from './Enemy';

const keysDown: { [key: number]: boolean } = {};

const wrraperWidth = window.innerWidth;
const wrapperHeight = window.innerHeight;
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
    spaceShipX += 3;
  }
  if (37 in keysDown) {
    spaceShipX -= 3;
  }
  if (40 in keysDown) {
    spaceShipY += 3;
  }
  if (38 in keysDown) {
    spaceShipY -= 3;
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
    bulletList[i].update();
  }
  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
};

export { setUpKeyboardListener, update };
