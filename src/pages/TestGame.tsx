import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackGroundImg from '../img/spaceBackground.png';
import spaceshiptImg from '../img/spaceBattleShip.png';
import bullet from '../img/bullet.png';
import enemy from '../img/meteor.png';
import gameover from '../img/gameover.png';
import { useNavigate } from 'react-router-dom';
const TestGame: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  let ctx: CanvasRenderingContext2D | null = null;
  const keysDown: { [key: number]: boolean } = {};
  let bulletList: Bullet[] = [];
  let enemyList: Enemy[] = [];
  const wrraperWidth = window.innerWidth;
  const wrapperHeight = window.innerHeight;
  let gameOver = false; // true이면 게임이 끝남, false이면 게임이 안끝남..
  const navigate = useNavigate();

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
      let score = 0;
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
          ctx.fillText(`Score: ${score * 100}`, 50, 100);
          ctx.fillStyle = 'white';
          ctx.font = '60px Arial';
          for (let i = 0; i < bulletList.length; i++) {
            if (bulletList[i].alive) {
              ctx.drawImage(bulletImg, bulletList[i].x, bulletList[i].y);
            }
          }
          for (let i = 0; i < enemyList.length; i++) {
            ctx.drawImage(enemyImg, enemyList[i].x, enemyList[i].y);
          }
        }
      };

      const update = () => {
        if (39 in keysDown) {
          spaceShipX += 7;
        }
        if (37 in keysDown) {
          spaceShipX -= 7;
        }
        if (40 in keysDown) {
          spaceShipY += 7;
        }
        if (38 in keysDown) {
          spaceShipY -= 7;
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
          if (bulletList[i].alive) {
            bulletList[i].update();
            bulletList[i].checkHit();
          }
        }
        for (let i = 0; i < enemyList.length; i++) {
          enemyList[i].update();
        }
      };
      const handleClick = () => {
        if (gameOver) {
          // 게임 오버 상태일 때만 클릭 처리
          const hoemQuestion = window.confirm('홈으로 돌아가시겠습니까?');
          if (hoemQuestion) {
            navigate('/');
          } else {
            const reloadQuestion = window.confirm('새로하시겠습니까?');
            if (reloadQuestion) {
              return window.location.reload();
            }
          }
          // 여기에 클릭 이벤트에 대한 로직을 추가하세요.
        }
      };

      canvas.addEventListener('click', handleClick);

      const main = () => {
        const gameOverImg = new Image();
        gameOverImg.src = gameover;
        if (!gameOver) {
          update();
          render();
          requestAnimationFrame(main);
        } else {
          const imgWidth = 800;
          const imgHeight = 800;
          const imgX = wrraperWidth / 2 - imgWidth / 2; // 이미지의 중앙 x좌표
          const imgY = wrapperHeight / 2 - imgHeight / 2; // 이미지의 중앙 y좌표
          ctx?.drawImage(gameOverImg, imgX, imgY, imgWidth, imgHeight);
        }
      };
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
            }
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
  alive: boolean;
  update: () => void;
  checkHit: () => void;
};

type Enemy = {
  x: number;
  y: number;
  update: () => void;
};
