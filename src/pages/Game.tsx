import React, { useEffect } from 'react';
import GameOver from '../List_Game_Img/gameover.png';
import BackGroundImg from '../List_Game_Img/spaceBackground.png';
import spaceshiptImg from '../List_Game_Img/spaceBattleShip.png';
import bullet from '../List_Game_Img/bullet.png';
import enemy from '../List_Game_Img/meteor.png';
import { styled } from 'styled-components';

const Game = () => {
  let canvasRef = React.createRef<HTMLCanvasElement>();
  let ctx: CanvasRenderingContext2D | null = null;

  useEffect(() => {
    const canvas: any = canvasRef.current;
    // 우주선 좌표
    if (canvas) {
      ctx = canvas.getContext('2d');
      canvas.width = 400;
      canvas.height = 700;
      let spaceShipX = canvas.width / 2 - 28;
      let spaceShipY = canvas.height - 65;
      const render = () => {
        if (ctx) {
          const backgroundImage = new Image();
          backgroundImage.src = BackGroundImg;
          const spaceshipImage = new Image();
          spaceshipImage.src = spaceshiptImg;

          ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
          ctx.drawImage(spaceshipImage, spaceShipX, spaceShipY);
        }
      };
      const update = () => {
        // 오른쪽으로 이동
        if (39 in keysDown) {
          spaceShipX += 3;
        }
        // 왼쪽으로 이동
        if (37 in keysDown) {
          spaceShipX -= 3;
        }
        if (40 in keysDown) {
          spaceShipY += 3;
        }
        if (38 in keysDown) {
          spaceShipY -= 3;
        }
        // 경기장 안에서만 있게 하기
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
      };
      const main = () => {
        update();
        render();
        requestAnimationFrame(main);
      };

      main();
    }
  });
  let keysDown: any = {};
  const setupKeyboardListener = () => {
    document.addEventListener('keydown', function (event) {
      keysDown[event.keyCode] = true;
      console.log('키다운 객체 들어간 값은?', keysDown);
    });
    document.addEventListener('keyup', function (evnet) {
      delete keysDown[evnet.keyCode];
      console.log('버튼 클릭 후', keysDown);
    });
  };

  setupKeyboardListener();
  return (
    <GameWrapper>
      <canvas ref={canvasRef}></canvas>
    </GameWrapper>
  );
};

export default Game;

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: cover; /* Optional background size */
  background-position: center; /* Optional background position */
  z-index: 31;
`;
