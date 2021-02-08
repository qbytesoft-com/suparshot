import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@reach/dialog';
import '@reach/dialog/styles.css';

const ModalContext = React.createContext();
ModalContext.displayName = 'ModalContext';
const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

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
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  });
}

function ModalOpenButton({ children: child }) {
  const { setIsOpen } = useModalContext();
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  });
}

function ModalContents(props) {
  const { isOpen, setIsOpen } = useModalContext();
  return <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />;
}

function ModalContent(props) {
  return <DialogContent {...props} />;
}

function ModalOverLay({ children: child, ...props }) {
  return <DialogOverlay {...props}>{child}</DialogOverlay>;
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents, useModalContext, ModalOverLay, ModalContent };
