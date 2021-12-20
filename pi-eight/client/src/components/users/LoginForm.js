import React from 'react'
import Input from '../common/Input'

const LoginForm = (props) => (
    <form>
        <div>{props.error}</div>
        <Input
            name='email'
            type='email'
            placeholder='Email'   
            vallue={props.user.email} 
            onChange={props.onChange} />
        
        <Input
            name='password'
            type='password'
            placeholder='Password'
            vallue={props.user.password}
            onChange={props.onChange} />
        
        <input type='submit' onClick={props.onSave} />
        </form>    
)
 exports default LoginForm