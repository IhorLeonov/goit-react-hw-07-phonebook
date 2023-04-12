import styled from 'styled-components';

export const DeleteModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 250px;
  height: 100px;

  border-radius: 5px;
  border: ${props => `1px solid ${props.theme.colors.bd}`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  background-color: rgba(219, 219, 219);
`;

export const Text = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

export const ButtonOk = styled.button`
  margin-right: 10px;
`;

export const ButtonNo = styled.button``;
