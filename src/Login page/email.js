import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: theme.spacing(2),
    },
  }));
  const LoginForm = () => {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
  
    const onSubmit = (data) => {
      console.log(data); 
    };
  
    return (
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
  
        <TextField
          label="Password"
          type="password"
          {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
  
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    );
  };
  
  export default LoginForm;
    