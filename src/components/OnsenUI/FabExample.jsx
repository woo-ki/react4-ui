import React from 'react';
import {Fab, Icon} from "react-onsenui";

const FabExample = () => {
    return (
        <Fab position={"bottom right"}>
            <Icon icon="md-zoom-in" size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
        </Fab>
    );
};

export default FabExample;
