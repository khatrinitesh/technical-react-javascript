import React from 'react';
import useForm from './useForm';

const FormComponent = () => {

    const {values,handleChange,resetForm} = useForm({
        username:'',
        email:''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('form submitted',values)
        resetForm();
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
            Username: 
            <input type="text" name='username' value={values.username} onChange={handleChange} />
        </label>
        <label>
            Email:
            <input type="text" name='email' value={values.email} onChange={handleChange} />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default FormComponent;
