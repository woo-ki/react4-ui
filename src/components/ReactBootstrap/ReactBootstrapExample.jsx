import React from 'react';
import AlertDismissible from "./AlertDismissible";
import GridExample from "./GridExample";
import ButtonExample from "./ButtonExample";
import CarouselExample from "./CarouselExample";
import MyModalWithGrid from "./MyModalWithGrid";

const ReactBootstrapExample = () => {
    return (
        <div>
            <MyModalWithGrid/>
            <CarouselExample/>
            <ButtonExample/>
            <GridExample/>
            <AlertDismissible/>
        </div>
    );
};

export default ReactBootstrapExample;
