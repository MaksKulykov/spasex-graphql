import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Missions from './missions';
import CompanyInfo from "./company";

export default function Pages() {
    return (
        <Router primary={false} component={Fragment}>
            <CompanyInfo path="/" />
        </Router>
    );
}
