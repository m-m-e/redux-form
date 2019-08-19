import React from 'react';
import { Field, reduxForm } from 'redux-form'

let MyForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name: </label>
      <Field name="firstName" component="input" type="text"/>
      <button type="submit">Submit</button>
    </form>
  )
};

MyForm = reduxForm({
  form: 'contact'
})(MyForm)

export default MyForm;
