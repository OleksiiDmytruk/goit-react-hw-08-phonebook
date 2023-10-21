import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormStyle, ErrMessage, Lable, Btn } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectContacts } from 'redax/selectors';
import { addContact } from 'redax/operations';

const nameRegex =
  "^[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]+(([' \\-][a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ ])?[a-zA-Zа-щьюяґєіїА-ЩЬЮЯҐЄІЇ]*)*$";
const phoneRegex = '^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too Short!')
    .matches(nameRegex, 'Name is not valid')
    .required('Name is required')
    .trim(),
  phone: Yup.string()
    .matches(phoneRegex, 'Phone number is not valid')
    .length(13, 'Phone number is not valid')
    .required('Phone number is required')
    .trim(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isOnList = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const onAdd = contact => {
    if (isOnList(contact.name)) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(contact));
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAdd(values);
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
          Number
          <Field name="phone" type="tel" placeholder="+380 11111 1111" />
          <ErrMessage name="phone" component="div" />
        </Lable>
        <Btn type="submit">Add contact</Btn>
      </FormStyle>
    </Formik>
  );
};
