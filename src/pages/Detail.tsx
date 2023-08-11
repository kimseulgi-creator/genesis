import React, { useState } from 'react';
import { styled } from 'styled-components';
import Modal from '../componants/Modal';

const Detail = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Stdiv>
      <Stbutton className="modalBtn" onClick={() => setOpenModal(true)}>
        Modal
      </Stbutton>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)} /> */}
    </Stdiv>
  );
};

export default Detail;

const Stdiv = styled.div`
  margin: 0;
  padding: 0;
`;

const Stbutton = styled.button`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  padding: 12px 24px;
`;
