import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';
import gameoverImg from '../img/gameover.png';
const TestGame: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null = null;
  const keysDown: { [key: number]: boolean } = {};
  let bulletList: Bullet[] = [];
  let enemyList: Enemy[] = [];
  const wrraperWidth = window.innerWidth;
  const wrapperHeight = window.innerHeight;
  let gameOver = false; // true이면 게임이 끝남, false이면 게임이 안끝남..

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const wrraperWidth = window.innerWidth;
      const wrapperHeight = window.innerHeight;

      ctx = canvas.getContext('2d');
      canvas.width = wrraperWidth;
      canvas.height = wrapperHeight;
      let spaceShipX = canvas.width / 2 - 28;
      let spaceShipY = canvas.height - 60;

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
          ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(spaceshipImage, spaceShipX, spaceShipY);
          for (let i = 0; i < bulletList.length; i++) {
            ctx.drawImage(bulletImg, bulletList[i].x, bulletList[i].y);
          }
          for (let i = 0; i < enemyList.length; i++) {
            ctx.drawImage(enemyImg, enemyList[i].x, enemyList[i].y);
          }
        }
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
        if (spaceShipX >= canvas.width - 56) {
          spaceShipX = canvas.width - 56;
        }
        if (spaceShipY >= canvas.height - 60) {
          spaceShipY = canvas.height - 60;
        }
        //총알의 y좌표 업데이트 하는 함수 호출
        for (let i = 0; i < bulletList.length; i++) {
          bulletList[i].update();
        }
        for (let i = 0; i < enemyList.length; i++) {
          enemyList[i].update();
        }
      };

      const main = () => {
        if (!gameOver) {
          update();
          render();
          requestAnimationFrame(main);
        }
      };
      const createBullet = () => {
        const newBullet: Bullet = {
          x: spaceShipX - 8, // 조정된 총알 위치
          y: spaceShipY,
          update: function () {
            this.y -= 7; // 총알 이동 업데이트
          },
        };
        bulletList.push(newBullet); // 총알 리스트에 추가
      };

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
      createEnemy();
      main();
      setUpKeyboardListener();
    }
  }, []);

  return (
    <StGameWrapper>
      <canvas ref={canvasRef}></canvas>
    </StGameWrapper>
  );
};

export default TestGame;

const StGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: cover; /* Optional background size */
  background-position: center; /* Optional background position */
  z-index: 31;
`;

type Bullet = {
  x: number;
  y: number;
  update: () => void;
};

type Enemy = {
  x: number;
  y: number;
  update: () => void;
};
