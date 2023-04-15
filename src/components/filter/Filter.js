import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        value={filterValue}
        onChange={handleChangeFilter}
      ></Input>
    </Label>
  );
};
