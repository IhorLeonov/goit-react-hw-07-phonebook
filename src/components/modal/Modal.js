import { Overlay, ModalBox } from 'components/modal/Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contactsSlice';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleModal());

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        handleToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Overlay>
      <ModalBox>{children}</ModalBox>
    </Overlay>,
    modalRoot
  );
};
