import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormStyle, ErrMessage, Lable, Btn } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redax/auth/operations';

const emailRegex = '/^[^s@]+@[^s@]+.[^s@]+$/';

const contactSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, 'Email  is not valid')
    .required('Email  is required')
    .trim(),
  password: Yup.string()
    .length(8, 'Password  iis too Short!')
    .required('Password  is required')
    .trim(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.resetForm();
      }}
    >
      <FormStyle>
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
        <Btn type="submit">Login</Btn>
      </FormStyle>
    </Formik>
  );
};
