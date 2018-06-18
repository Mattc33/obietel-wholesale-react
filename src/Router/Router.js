import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import WholeSaleAdmin from '../Components/WholeSaleAdmin/WholeSaleAdmin';
import LandingPage from '../Components/LandingPage/LandingPage';

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Route path={'/'} component={LandingPage} exact></Route>
                {/* <Route path={'/home'} component={LandingPage}></Route> */}
                <Route path={'/admin'} component={WholeSaleAdmin}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Router;