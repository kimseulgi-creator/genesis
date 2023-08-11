import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';

type Props = {
  open: boolean;
  onClose: any;
  handleModalConfirm: any;
};

function Modal({ open, onClose, handleModalConfirm }: Props) {
  const trueConfirmClick = () => {
    onClose();
    handleModalConfirm(true);
    return false;
  };
  const falseConfirmClick = () => {
    onClose();
    handleModalConfirm(false);
    return false;
  };
  if (!open) return null;
  return (
    <StOverLaydiv onClick={onClose}>
      <StModalContainerDiv onClick={e => e.stopPropagation()}>
        <StModalDiv>
          <StCloseButton onClick={onClose} className="closeBtn">
            X
          </StCloseButton>
          <StContainerDiv>
            <StContainerText>이용해 주셔서 감사합니다</StContainerText>
            <StBtnContainerDiv>
              <Button size="large" color="green" onClick={trueConfirmClick}>
                메인페이지 가기
              </Button>
              <Button size="large" color="red" onClick={falseConfirmClick}>
                다시하기
              </Button>
            </StBtnContainerDiv>
          </StContainerDiv>
        </StModalDiv>
      </StModalContainerDiv>
    </StOverLaydiv>
  );
}

export default Modal;

const StOverLaydiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
`;

const StModalContainerDiv = styled.div`
  max-width: 600px;
  width: 100%;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.75);
`;
const StModalDiv = styled.div`
  width: 100%;
`;

const StCloseButton = styled.div`
  position: fixed;
  top: 8px;
  right: 8px;
`;

const StContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 3rem;
  padding: 1rem 2rem;
`;

const StContainerText = styled.p`
  font-weight: 800;
  font-size: 24px;
`;

const StBtnContainerDiv = styled.div`
  display: flex;
  padding: 1rem 1rem;
`;
