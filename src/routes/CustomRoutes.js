import React from 'react';
import { Route } from 'react-router-dom';
import {Payments} from '../components/Payments';

export default  [
    <Route exact path="/payments" component={Payments} />
];

