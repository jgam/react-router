import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

function Profiles() {
    return (
        <div>
            <h3>user list</h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/jgam" >jgam</Link>
                </li>
            </ul>
            <Route
                path="/profiles"
                exact
                render={() => <div>select the user plz </div>}
            />
            <Route path="/profiles/:username" component={Profile} />
            <WithRouterSample />
        </div>
    )
}

export default Profiles;
