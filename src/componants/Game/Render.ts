import BackGroundImg from '../../images/quiz/quiz_background2.png';
import spaceshiptImg from '../..//images/game/spaceBattleShip.png';
import bullet from '../../images/game/bullet.png';
import enemy from '../../images/game/meteor.png';
import { bulletList, score } from './Bullet';
import { enemyList } from './Enemy';
import { wrapperHeight, wrraperWidth } from './Canvas';
import { spaceShipX, spaceShipY } from './KeyCode';

const render = (ctx: CanvasRenderingContext2D) => {
  if (ctx) {
    const backgroundImage = new Image();
    backgroundImage.src = BackGroundImg;
    backgroundImage.onload = () => {
      ctx?.drawImage(backgroundImage, 0, 0, wrraperWidth, wrapperHeight);
    };

    const spaceshipImage = new Image();
    spaceshipImage.onload = () => {
      ctx?.drawImage(spaceshipImage, spaceShipX, spaceShipY);
    };
    spaceshipImage.src = spaceshiptImg;

    const bulletImg = new Image();
    bulletImg.onload = () => {
      for (let i = 0; i < bulletList.length; i++) {
        if (bulletList[i].alive) {
          ctx.drawImage(bulletImg, bulletList[i].x, bulletList[i].y);
        }
      }
    };
    bulletImg.src = bullet;

    const enemyImg = new Image();
    enemyImg.onload = () => {
      for (let i = 0; i < enemyList.length; i++) {
        ctx?.drawImage(enemyImg, enemyList[i].x, enemyList[i].y);
      }
    };
    enemyImg.src = enemy;
  }
  //score 점수
  ctx.fillText(`Score: ${score * 100}`, 50, 100);
  ctx.fillStyle = 'white';
  ctx.font = '40px Arial';
  // 목표 점수
  ctx.fillText(`목표 점수: 2000`, 50, 180);
  ctx.fillStyle = 'white';
  ctx.font = '40px Arial';
};

export { render };
