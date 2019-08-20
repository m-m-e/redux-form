import React, { Component } from 'react';

class EditInvoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      invoices: []
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();  
  }
  render(){
    return (
      <form>
        <label htmlFor="category">Category: </label>
        <input name="category" type="text"/>
  
        <label htmlFor="amount">Amount: </label>
        <input name="amount" type="number"/>
  
        <label htmlFor="supplier">Supplier: </label>
        <input name="supplier" type="text"/>
  
        <button type="submit">Submit</button>
      </form>
    )
  }
};

// import { Field, reduxForm } from 'redux-form'

// let EditInvoice = props => {
//   const { handleSubmit } = props;

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="category">Category: </label>
//       <Field name="category" component="input" type="text"/>

//       <label htmlFor="amount">Amount: </label>
//       <Field name="amount" component="input" type="number"/>

//       <label htmlFor="supplier">Supplier: </label>
//       <Field name="supplier" component="input" type="text"/>

//       <button type="submit">Submit</button>
//     </form>
//   )
// };

// EditInvoice = reduxForm({
//   form: 'contact'
// })(EditInvoice)

export default EditInvoice;
