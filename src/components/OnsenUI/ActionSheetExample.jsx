import React, {useState} from 'react';
import {Button, ActionSheet, ActionSheetButton} from "react-onsenui";

const ActionSheetExample = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    }
    return (
        <div>
            <Button onClick={handleClick}>Action Sheet Open</Button>
            <ActionSheet isOpen={open} title={"action sheet"}>
                <ActionSheetButton>Label 1</ActionSheetButton>
                <ActionSheetButton>Label 2</ActionSheetButton>
                <ActionSheetButton>Label 3</ActionSheetButton>
                <ActionSheetButton modifier={"destructive"}>Cancel</ActionSheetButton>
                <ActionSheetButton>Save</ActionSheetButton>
            </ActionSheet>
        </div>
    );
};

export default ActionSheetExample;
