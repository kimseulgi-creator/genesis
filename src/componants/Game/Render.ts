import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';
import { bulletList } from './Bullet';
import { enemyList } from './Enemy';

const wrraperWidth = window.innerWidth;
const wrapperHeight = window.innerHeight;
let spaceShipX = wrraperWidth / 2 - 28;
let spaceShipY = wrapperHeight - 60;
let ctx: CanvasRenderingContext2D | null = null;

const render = () => {
  if (ctx) {
    const backgroundImage = new Image();
    backgroundImage.src = BackGroundImg;
    const spaceshipImage = new Image();
    spaceshipImage.src = spaceshiptImg;
    const bulletImg = new Image();
    bulletImg.src = bullet;
    const enemyImg = new Image();
    enemyImg.src = enemy;
    ctx.drawImage(backgroundImage, 0, 0, wrraperWidth, wrapperHeight);
    ctx.drawImage(spaceshipImage, spaceShipX, spaceShipY);
    for (let i = 0; i < bulletList.length; i++) {
      ctx.drawImage(bulletImg, bulletList[i].x, bulletList[i].y);
    }
    for (let i = 0; i < enemyList.length; i++) {
      ctx.drawImage(enemyImg, enemyList[i].x, enemyList[i].y);
    }
  }
};

export { render };
