import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListHotelsPage from '../hotels/ListingHotelsPage'
import RegisterPage from '../users/RegisterPage'
import LoginPage from '../users/LoginPage'
import LogoutPage from '../users/LogoutPage'
import PrivateRoute from './PrivateRoute'
import CreateHotelPage from '../hotels/CreateHotelPage'
import HotelDetailsPage from '../hotels/HotelDetailsPage'

const Routes = () => (
    <Switch>
        <Route Path='./' exact component={ListHotelsPage} />
        <Route Path='./users/register' compnent={RegisterPage} />
        <Route Path='./users/login' component={LoginPage} />
        <PrivateRoute path='./users/logout' component={LogoutPage} />
        <PrivateRoute path='./hotels/create' component={CreateHotelsPage} />
        <PrivateRoute path='/hotels/details/:id' component={HotelDetailsPage} />
    </Switch>
)
export defalt Routes

</Switch >