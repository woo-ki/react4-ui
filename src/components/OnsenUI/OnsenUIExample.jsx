import React from 'react';
import ButtonExample from "./ButtonExample";
import {Page} from "react-onsenui";
import ActionSheetExample from "./ActionSheetExample";
import CheckBoxExample from "./CheckBoxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgressExample from "./ProgressExample";
// import TabExample from "./TabExample";
import AlertExample from "./AlertExample";

const OnsenUiExample = () => {
    return (
        <Page>
            <AlertExample/>
            {/*<TabExample/>*/}
            <ProgressExample/>
            <ListExample/>
            <FabExample/>
            <CheckBoxExample/>
            <ActionSheetExample/>
            <ButtonExample/>
        </Page>
    );
};

export default OnsenUiExample;
