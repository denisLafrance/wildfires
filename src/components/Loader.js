import React from 'react';
import Spinner from '../spinner.gif';

const Loader = () => {
    return(
        <div className="loader">
            <img src={Spinner} alt="loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader;