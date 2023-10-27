import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redax/contacts/operations';
import {
  ErrMessage,
  Lable,
  Btn,
} from 'components/ContactForm/ContactForm.styled';
import { ImCancelCircle } from 'react-icons/im';
import { Backdrop, CloseBtn, FormStyle } from './Modal.styled';

const nameRegex =
  "^[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]+(([' \\-][a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ ])?[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]*)*$";
const phoneRegex = '^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too Short!')
    .matches(nameRegex, 'Name is not valid')
    .required('Name is required')
    .trim(),
  number: Yup.string()
    .matches(phoneRegex, 'Phone number is not valid')
    .length(13, 'Phone number is not valid')
    .required('Phone number is required')
    .trim(),
});

export const Modal = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  return (
    <Backdrop>
      <Formik
        initialValues={{ name, number }}
        validationSchema={contactSchema}
        onSubmit={values => {
          dispatch(updateContact({ id, values }));
        }}
      >
        <FormStyle>
          <CloseBtn type="button" onClick={onClose}>
            <ImCancelCircle />
          </CloseBtn>
          <Lable>
            Name
            <Field name="name" type="text" />
            <ErrMessage name="name" component="div" />
          </Lable>
          <Lable>
            Number
            <Field name="number" type="tel" />
            <ErrMessage name="number" component="div" />
          </Lable>
          <Btn type="submit">Add change</Btn>
        </FormStyle>
      </Formik>
    </Backdrop>
  );
};
