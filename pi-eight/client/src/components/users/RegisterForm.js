import React from 'react'

const RegisterForm = (props) => (
    <form>
        <div>{props.error}</div>
        <label htmlFor='email'>E-mail</label>
        <input
          type='email' 
    name='email'
    placeholder='E-mail'
    value = {props.user.email}
    onChange = {props.onChange} />
    <br />
    <label htmlFor='password'>Password</label>
    <input
      type='password' 
    name= 'password'
    placeholder='Password'
    value = {props.user.password} 
    onChange = {props.onChange} />
<br />
<label htmlFor='confirmPassword'>Confirm Password</label>
<input
    type='password'
    name='confirmPassword'    
    placeholder='Confirm Password'
    value = {props.user.confirmPassword}
    onChange = {props.onChange} />
    <br />
    
    <label htmlFor='name'>Name</label>
    <input
    type='text'
    name='name'
    plaeholder='Name'
    value={props.user.name}
    onChange = {props.onChange} />
    <input type='submit' onClick={props.onSave} />
    </form>
)
export default RegisterForm
        