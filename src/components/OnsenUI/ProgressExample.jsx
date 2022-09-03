import React from 'react';
import {ProgressBar, ProgressCircular} from "react-onsenui";

const ProgressExample = () => {
    return (
        <div>
            <ProgressCircular indeterminate/>
            <ProgressCircular value={20} secondaryValue={50}/>
            <ProgressBar indeterminate />
        </div>
    );
};

export default ProgressExample;
