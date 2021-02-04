import React from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

const ModalContext = React.createContext();
ModalContext.displayName = 'ModalContext';

function Modal(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return <ModalContext.Provider value={{ isOpen, setIsOpen }} {...props} />;
}

function useModalContext() {
  return React.useContext(ModalContext);
}

function ModalDismissButton({ children: child }) {
  const { setIsOpen } = useModalContext();
  return React.cloneElement(child, {
    onClick: () => setIsOpen(false),
  });
}

function ModalOpenButton({ children: child }) {
  const { setIsOpen } = useModalContext();
  return React.cloneElement(child, {
    onClick: () => setIsOpen(true),
  });
}

function ModalContents(props) {
  const { isOpen, setIsOpen } = useModalContext();
  return <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />;
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents, useModalContext };
