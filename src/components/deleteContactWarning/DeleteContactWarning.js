import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/contactsSlice';
import {
  DeleteModal,
  Text,
  ButtonOk,
  ButtonNo,
} from './DeleteContactWarning.styled';

export const DeleteContactWarning = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    dispatch(toggleModal(id));
  };

  const handleToggleModal = () => dispatch(toggleModal(id));

  return (
    <DeleteModal>
      <Text>A you sure?</Text>
      <ButtonOk type="button" onClick={handleDelete}>
        Ok
      </ButtonOk>
      <ButtonNo type="button" onClick={handleToggleModal}>
        No
      </ButtonNo>
    </DeleteModal>
  );
};
