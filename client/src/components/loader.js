import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <TailSpin
            color='#4169E1'
            height={50}
            width={50}
        />
    );
};

export default Loader;
