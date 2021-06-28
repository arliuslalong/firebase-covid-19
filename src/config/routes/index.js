import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Indonesia from '../../components/Pages/dataIndonesia';
import Provinsi from '../../components/Pages/dataProvinsi';
import Internasional from '../../components/Pages/dataInternasional';

  const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route  exact path="/">
                <Indonesia />
            </Route>
            <Route path="/dataIndonesia">
                <Indonesia />
            </Route>
            <Route path="/dataProvinsi">
                <Provinsi/>
            </Route>
            <Route path="/dataInternasional">
                <Internasional/>
            </Route>
        </Switch>
        </Router>
    );
};

export default Routes;