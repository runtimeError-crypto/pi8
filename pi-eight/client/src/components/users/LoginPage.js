import React from 'react'
import LoginForm from './LoginFor'
import Auth from './Auth'
import FormHelpers from '../common/FormHelpers'
import UserActions from '../../actions/UserActions'
import UserStore from '../../stores/UserStore'
import toastr from 'toastr'

class LoginPage extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            user: {
                email: 'test@test.com'
                password: '132236'
            },
            error: ''
        
            }

            this.handleUseLogin = this.handleUserLogin.bind(this)

            UserStore.on(UseStore.eventTypes.USER_LOGGED_IN, this.handleUserLogin)
        }

        componentWillUnmount() {
            UserStore.removeListner(UserStore.evenTypes.USER_LOGGED_IN, this.handleUserLogin)
        }

        handleUserForm (ev) {
            ev.preventDefault()
            UserActions.login(this.state.user)
        }

        handleUserLogin (data) {
            if(!data.success){
                error.data.message
            })
        } else {
            Auth.authenticateUser(data.token)
            Auth.saveUser(data.token)
            toastr.success(data.message)
            this.props.history.push('/')
        }
    }

    render () {
        return (
            <div>
            <h1>Login</h1>
            <LoginForm user={this.state.user}
            onChange={this.handleUserChange.bind(this)}
            error={this.state.error}
            onSave={this.handleUserForm.bind(this)} />
            </div>

        )
    }
}

export default LoginPage