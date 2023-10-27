import { Form } from 'formik';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* z-index: 10; */
  background-color: rgba(17, 17, 17, 0.4);
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const FormStyle = styled(Form)`
  background-color: white;
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* position: relative; */
  width: 400px;
  border-radius: 8px;
  border: 2px solid blue;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const CloseBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;
