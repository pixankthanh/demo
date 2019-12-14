
// import React from 'react';
// import { Formik } from 'formik';

// const FirstExample = () => (
//   <Formik 
//     initialValues={{ name: '' }}  
//     onSubmit={values => {
//       console.log('submitting', values);
//     }}>
//     {({ handleSubmit, handleChange, values }) => (
//     <form onSubmit={handleSubmit}>
//       <input onChange={handleChange}   
//              value={values.name}  
//              name="name"  
//              type="text" 
//              placeholder="Name">
//       </input>
//       <button>Submit</button>
//     </form>
//     )}
//   </Formik>
//  )

// export default FirstExample;
import React from 'react';
import { withFormik } from 'formik';

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        name="name"
      />
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ name: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Required';
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(MyForm);

 export default MyEnhancedForm;