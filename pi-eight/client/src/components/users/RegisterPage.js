import React from 'react'
import FormHelpers from '../common/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'
import RegisterForm from './RegisterForm'

class registerPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            user: {
                email: 'test@test.com',
                password: '132236',
                confirmPassword: '33242342',
                name: 'Test'
            },
            error: ''
        
            }

            this.handleUseRegistration= this.handleUserRegistration.bind(this)

            UserStore.on(UserStore.eventTypes.USER_REGISTERED, this.handleUserRegistration)
        }
        componentWillUnmount() {
            UserStore.removeListner(UserStore.evenTypes.USER_REGISTERED, this.handleUserRegistration)
        }

        handleUserChange (ev) {
            FormHelpers.handleFormChange.bind(this)(ev,'user')
        }

        handleUserForm (ev) {
            ev.preventDefault()
            if (!this.validateUser()){
                return
            }
            UserActions.register(this.state.user)
        }

        handleUserRegisteration (data) {
            if(!data.success){
                let firstError = data.message
                
                if (data.errors) {
                    firstError = Object.keys(data.errors).map(k => data.errors[k])[0]
                }
                this.setState({
                error: firstError
                })
        } else {
            toastr.success(data.message)
            this.props.history.push('/users/login')
        }
    }
validateUser() {
    let user = this.state.user
    let formIsValid = true
    let error = ''

    if (user.password !== user.confirmPassword) {
        formIsValid = false
        error = 'Password and confirmation password do not match'
    }

    if (error) {
        this.setState({error})
    }

    return formIsValid

}
    render () {
        return (
            <div>
            <h1>Register User</h1>
            <RegistratoinForm user={this.state.user}
            onChange={this.handleUserChange.bind(this)}
            error={this.state.error}
            onSave={this.handleUserForm.bind(this)} />
            </div>

        )
    }
}

export default RegisterPage