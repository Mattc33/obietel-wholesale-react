import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import WholeSaleAdmin from '../Components/WholeSaleAdmin/WholeSaleAdmin';
import LandingPage from '../Components/LandingPage/LandingPage';
import Registration from '../Components/LandingPage/Registration/Registration'

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path={'/'} component={LandingPage} exact></Route>
                <Route path={'/admin'} component={WholeSaleAdmin}></Route>
                <Route path={'/registration'} component={Registration}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Router;