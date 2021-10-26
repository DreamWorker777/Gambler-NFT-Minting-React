import {
	Switch,
	Route,
} from "react-router-dom";

import Create from '../../components/Mint/Create/Create';
import Confirmation from "../../components/Mint/Confirmation/Confirmation";
import MintNow from '../../components/Mint/MintNow/MintNow';
import Sorry from '../../components/Mint/Sorry/Sorry';
import Success from '../../components/Mint/Success/Success';

import './Mint.scss';

export const Mint = () => {
    return (
        <div className="container">
            <div className="mint">
                <Switch>
                    <Route exact path='/mint/create' component={Create} />
                    <Route exact path='/mint/confirm' component={Confirmation} />
                    <Route exact path='/mint/mintNow' component={MintNow} />
                    <Route exact path='/mint/sorry' component={Sorry} />
                    <Route exact path='/mint/success' component={Success} />
                </Switch>
            </div>
        </div>
    )
}

export default Mint;