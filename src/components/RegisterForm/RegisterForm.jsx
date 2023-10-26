import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from 'redax/auth/operations';
import {
  FormStyle,
  ErrMessage,
  Lable,
  Btn,
} from 'components/ContactForm/ContactForm.styled';

const nameRegex =
  "^[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]+(([' \\-][a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ ])?[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]*)*$";
const emailRegex = '^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$';
const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too Short!')
    .matches(nameRegex, 'Name is not valid')
    .required('Name is required')
    .trim(),
  email: Yup.string()
    .matches(emailRegex, 'Email  is not valid')
    .required('Email  is required')
    .trim(),
  password: Yup.string()
    .min(6, 'Password  is too Short!')
    .required('Password  is required')
    .trim(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      <FormStyle>
        <Lable>
          Name
          <Field name="name" type="text" />
          <ErrMessage name="name" component="div" />
        </Lable>
        <Lable>
          Email
          <Field name="email" type="email" />
          <ErrMessage name="email" component="div" />
        </Lable>
        <Lable>
          Password
          <Field name="password" type="text" />
          <ErrMessage name="password" component="div" />
        </Lable>
        <Btn type="submit">Register</Btn>
      </FormStyle>
    </Formik>
  );
};
