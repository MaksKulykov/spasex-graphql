import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import { colors } from '../globalStyles';

const Loader = () => {
    return (
        <TailSpin
            color = { colors.text }
            height = { 50 }
            width = { 50 }
        />
    );
};

export default Loader;
