import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function TransparentScrollEventComponent() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const [scrollOpacity, setScrollOpacity] = useState(0); // 투명도 상태를 저장

  useEffect(() => {
    if (inView) {
      // 화면에 보이는 경우
      const interval = setInterval(() => {
        // 천천히 투명도를 1로 증가
        setScrollOpacity(prevOpacity => Math.min(prevOpacity + 0.01, 1));
      }, 10);

      return () => {
        clearInterval(interval);
      };
    } else {
      // 화면에서 사라지는 경우
      const interval = setInterval(() => {
        // 천천히 투명도를 0으로 감소
        setScrollOpacity(prevOpacity => Math.max(prevOpacity - 0.01, 0));
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{
        height: '100vh',
        background: 'red',
        marginTop: '100vh',
        opacity: scrollOpacity,
        transition: 'opacity 0.2s', // 투명도 변화에 애니메이션 적용
      }}>
      {/* 내용 */}
    </div>
  );
}

export default TransparentScrollEventComponent;
