import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import Missions from './missions';

export default function Pages() {
    return (
        <Router primary={false} component={Fragment}>
            <Missions path="/" />
        </Router>
    );
}
