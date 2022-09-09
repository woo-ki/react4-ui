import React from 'react';
import ButtonExample from "./ButtonExample";
import CenteredGrid from "./CenteredGrid";
import IconLabelButtons from "./IconLabelButtons";
import CheckBoxLabels from "./CheckBoxLabels";
import TemporaryDrawer from "./TemporaryDrawer";
import VirtualizedList from "./VirtualizedList";

const MaterialUiExample = () => {
    return (
        <div>
            <VirtualizedList/>
            <TemporaryDrawer/>
            <CheckBoxLabels/>
            <IconLabelButtons/>
            <CenteredGrid/>
            <ButtonExample/>
        </div>
    );
};

export default MaterialUiExample;
