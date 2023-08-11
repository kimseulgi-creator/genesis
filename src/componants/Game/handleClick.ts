import { useNavigate } from 'react-router-dom';
import { gameOver } from './Enemy';
import { gameClear } from './Bullet';

const handleClick = () => {
  if (!gameOver || !gameClear) {
    // 게임 오버 상태일 때만 클릭 처리
    if (gameOver) {
      const hoemQuestion = window.confirm('홈으로 돌아가시겠습니까?');
      if (hoemQuestion) {
        console.log(`${process.env.REACT_APP_MAIN_URL}`);
        return (window.location.href = `${process.env.REACT_APP_MAIN_URL}`);
      } else {
        const reloadQuestion = window.confirm('새로하시겠습니까?');
        if (reloadQuestion) {
          return window.location.reload();
        }
      }
    }
    if (gameClear) {
      const hoemQuestion = window.confirm('홈으로 돌아가시겠습니까?');
      if (hoemQuestion) {
        console.log(`${process.env.REACT_APP_MAIN_URL}`);
        return (window.location.href = `${process.env.REACT_APP_MAIN_URL}`);
      } else {
        const reloadQuestion = window.confirm('새로하시겠습니까?');
        if (reloadQuestion) {
          return window.location.reload();
        }
      }
    }
    // 여기에 클릭 이벤트에 대한 로직을 추가하세요.
  }
};

export { handleClick };
