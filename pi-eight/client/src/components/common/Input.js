import React from 'react'

const Input = (props) => {
    let type = props.type || 'text'
    
    return (
        <div> 
            <label htmlFor={props.name}>{props.placeholder}</label>
        <input
    type={type} 
    name={props.name}
    plaeholder={props.placeholder}
    value = {props.value}
    onChange = {props.onChange}
    required = {props.required}
    minLength = {props.min.Length}
min={props.min}></input>
</div>
    )
        }
                export default Input