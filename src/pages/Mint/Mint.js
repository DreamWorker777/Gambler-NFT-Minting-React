import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import NavBar from '../../components/Navigation/nav';

import Create from '../../components/Mint/Create/Create';

export const Mint = () => {
    return (
        <Switch>
            <Route path='/' component={Create} />
        </Switch>
    )
}

export default Mint;