import React from 'react';
import { Modal, ModalContents } from 'components/lib';
import { useParams, useHistory } from 'react-router-dom';

function SingleImgModal(props) {
  const { id } = useParams();
  let history = useHistory();
  const close = () => {
    history.goBack();
  };

  return (
    <Modal>
      <ModalContents aria-label="Single image modal" isOpen={true} onDismiss={close}>
        <p>Image id {id}</p>
      </ModalContents>
    </Modal>
  );
}

export default SingleImgModal;
