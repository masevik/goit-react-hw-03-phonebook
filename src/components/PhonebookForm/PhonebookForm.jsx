import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { Component } from 'react';
import {
  Button,
  StyledForm,
  Input,
  Label,
  Error,
} from './PhonebookForm.styled';

const initialValues = { name: '', number: '+380' };

const phoneRegExp =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup.string().min(3).max(40).required('Name is a required field'),
  number: yup
    .string()
    .required()
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(13, 'Too short')
    .max(13, 'Too long'),
});

export class PhonebookForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };

  nameInputId = nanoid();
  telInputId = nanoid();

  onChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  render() {
    const { nameInputId, telInputId } = this;

    const HandleSubmit = (values, { resetForm }) => {
      console.log(values);
      const success = this.props.onSubmit(values);
      if (success) resetForm();
    };

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={HandleSubmit}
        validationSchema={schema}
      >
        <StyledForm>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input type="text" name="name" id={nameInputId} />
          <Error component="span" name="name" />
          <Label htmlFor={telInputId}>Number</Label>
          <Input type="tel" name="number" id={telInputId} />
          <Error component="span" name="number" />
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}
