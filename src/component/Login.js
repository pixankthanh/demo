import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { withFormik, Form,Field } from 'formik'
import Typography from '@material-ui/core/Typography'
import * as Yup from 'yup'
import {useHistory  } from "react-router-dom";

const axios = require('axios').default;

class LoginForm extends Component {

    render() {
        return (
            <form  onSubmit={this.props.handleSubmit}>
                <Grid container justify='center' alignContent='center'>
                    <Grid item xs={6} md={4}>
                        <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                            <Typography variant="headline" gutterBottom>
                                Log in
                        </Typography>
                            <FormControl fullWidth margin='normal'>
                                <InputLabel>User Name</InputLabel>
                                <Field
                                    name='username'
                                    render={({ field }) => (
                                        <Input fullWidth {...field} />
                                    )} />
                                {this.props.touched.username && <FormHelperText>{this.props.errors.username}</FormHelperText>}
                            </FormControl>

                            <FormControl fullWidth margin='normal'>
                                <InputLabel>Password</InputLabel>

                                <Field
                                    name='password'
                                    render={({ field }) => (
                                        <Input fullWidth type='password' {...field} />
                                    )} />
                                {this.props.touched.password && <FormHelperText>{this.props.errors.password}</FormHelperText>}
                            </FormControl>


                            <FormControl fullWidth margin='normal'>
                            {/* <ButtonSubmit> Log in</ButtonSubmit> */}
                                <Button
                                    variant='extendedFab'
                                    color='primary'
                                    type='submit'
                                   
                                >Log In
                                </Button>                        
                                
                            </FormControl>
                        </Paper>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
const FormikForm = withFormik({
    mapPropsToValues() { // Init form field
        return {
            username: '',
            password: '',
        }
    },

    handleSubmit: (values, { props }) => {
        setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            //props.history.push('/todo');
            axios.post('http://localhost:3000/auth/login', {
                username: values.username,
                password: values.password
              })
              .then(function (response) {
                console.log(response);
                if(response.status===200 && response.data.access_token){
                    localStorage.setItem('access_token', response.data.access_token);
                    props.history.push('/todo');
                }
            })
            .catch(function (error) {
                alert('Wrong!!!!');
                console.log(error);
              });         
        }, 1000);
    },

    validationSchema: Yup.object().shape({ // Validate form field
        username: Yup.string()
            .required('Username is required')
            .min(5, 'Username must have min 5 characters')
            .max(10, 'Username have max 10 characters'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have min 8 characters')
            .max(10, 'Password have max 10 characters'),
    }),
})(LoginForm)

export default FormikForm
