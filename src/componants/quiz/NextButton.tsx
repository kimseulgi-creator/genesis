import React from 'react';
import { styled } from 'styled-components';

type Props = {
  type?: 'submit';
  onClick?: () => void;
  className?: string;
};

const NextButton: React.FC<Props> = ({ onClick, type, className }) => {
  const classNames = [className, 'custom-btn'].filter(v => Boolean(v)).join(' ') || undefined;
  return (
    <StNextBtn type={type} onClick={onClick} className={classNames}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle id="nextBtn" cx="25" cy="25" r="25" fill="#6D55FF" />
        <path
          d="M30.2637 25.0382L20.5508 15.3254C20.1934 14.9553 19.9956 14.4596 20.0001 13.9451C20.0045 13.4307 20.2109 12.9385 20.5747 12.5747C20.9385 12.2109 21.4307 12.0045 21.9451 12.0001C22.4596 11.9956 22.9553 12.1934 23.3254 12.5508L34.4255 23.651C34.7934 24.0189 35 24.5179 35 25.0382C35 25.5585 34.7934 26.0575 34.4255 26.4255L23.3254 37.5256C22.9553 37.8831 22.4596 38.0808 21.9451 38.0764C21.4307 38.0719 20.9385 37.8655 20.5747 37.5017C20.2109 37.1379 20.0045 36.6458 20.0001 36.1313C19.9956 35.6168 20.1934 35.1212 20.5508 34.7511L30.2637 25.0382Z"
          fill="white"
        />
      </svg>
    </StNextBtn>
  );
};

export default NextButton;
const StNextBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  & #nextBtn:hover {
    transition: ease 1s;
    opacity: 40%;
  }
`;
