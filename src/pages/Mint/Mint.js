import {
	Switch,
	Route,
} from "react-router-dom";

import Create from '../../components/Mint/Create/Create';
import Confirmation from "../../components/Mint/Confirmation/Confirmation";
import MintNow from '../../components/Mint/MintNow/MintNow';

import './Mint.scss';

export const Mint = () => {
    return (
        <div className="container">
            <div className="mint">
                <Switch>
                    <Route exact path='/mint/create' component={Create} />
                    <Route exact path='/mint/confirm' component={Confirmation} />
                    <Route exact path='/mint/mintNow' component={MintNow} />
                </Switch>
            </div>
        </div>
    )
}

export default Mint;