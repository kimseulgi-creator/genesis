import React, { useEffect } from 'react';
import styled from 'styled-components';
import BackGroundImg from '../img/spaceBackground.png';
import { setUpKeyboardListener, update } from '../componants/Game/KeyCode';
import { render } from '../componants/Game/Render';
import { createEnemy } from '../componants/Game/Enemy';

const Game: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const keysDown: { [key: number]: boolean } = {};
  useEffect(() => {
    const main = () => {
      update();
      render();
      requestAnimationFrame(main);
    };

    createEnemy();
    main();
    setUpKeyboardListener();
  }, []);

  return (
    <StGameWrapper>
      <canvas ref={canvasRef}></canvas>
    </StGameWrapper>
  );
};

export default Game;

const StGameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${BackGroundImg});
  background-size: cover;
  background-position: center;
  z-index: 31;
`;
