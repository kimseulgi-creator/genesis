import React, { useEffect, useState } from 'react';
import { setUpKeyboardListener, update } from '../componants/Game/KeyCode';
import { render } from '../componants/Game/Render';
import { createEnemy, gameOver } from '../componants/Game/Enemy';
import { wrapperHeight, wrraperWidth } from '../componants/Game/Canvas';
import gameover from '../img/gameover.png';
import stageclearimg from '../img/gameClear.png';
import { gameClear } from '../componants/Game/Bullet';
import Modal from '../componants/Modal';
import { useNavigate } from 'react-router-dom';
const Game: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const handleModalConfirm = (reload: boolean) => {
    if (reload) {
      navigate('/');
    } else {
      window.location.reload();
    }
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    const canvasScrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const canvasScrollbarHeigth = window.innerWidth - document.documentElement.clientHeight;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const clickHandler = (evnet: MouseEvent) => {
        if (gameOver || gameClear) {
          setOpenModal(true);
        }
      };
      canvas.addEventListener('click', clickHandler);
      if (ctx) {
        canvas.width = window.innerWidth - canvasScrollbarWidth;
        canvas.height = window.innerHeight - canvasScrollbarHeigth;
        setUpKeyboardListener();
        createEnemy();

        const main = () => {
          const gameOverImg = new Image();
          gameOverImg.src = gameover;
          const gameClearImg = new Image();
          gameClearImg.src = stageclearimg;
          if (!gameOver && !gameClear) {
            update();
            render(ctx);
            requestAnimationFrame(main);
          } else if (gameOver) {
            const imgWidth = 800;
            const imgHeight = 800;
            const imgX = wrraperWidth / 2 - imgWidth / 2; // 이미지의 중앙 x좌표
            const imgY = wrapperHeight / 2 - imgHeight / 2; // 이미지의 중앙 y좌표
            ctx?.drawImage(gameOverImg, imgX, imgY, imgWidth, imgHeight);
          } else {
            const imgWidth = 800;
            const imgHeight = 800;
            const imgX = wrraperWidth / 2 - imgWidth / 2; // 이미지의 중앙 x좌표
            const imgY = wrapperHeight / 2 - imgHeight / 2; // 이미지의 중앙 y좌표
            ctx?.drawImage(gameClearImg, imgX, imgY, imgWidth, imgHeight);
          }
        };
        main();
      }
    }
  }, []);

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        handleModalConfirm={handleModalConfirm}
        text={'이용해주셔서 감사합니다!'}
      />
    </>
  );
};

export default Game;
