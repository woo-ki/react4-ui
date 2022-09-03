import React, {useState} from 'react';
import {AlertDialog, Button} from "react-onsenui";

const AlertExample = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => {setOpen(true)}}>알럿열기</Button>
            <AlertDialog id="my-alert-dialog" modifier="rowfooter" isOpen={open}>
                <div className="alert-dialog-title">Alert</div>
                <div className="alert-dialog-content">
                    This dialog was created from a template
                </div>
                <div className="alert-dialog-footer">
                    <Button onClick={() => {setOpen(false)}}>Cancel</Button>
                    <Button onClick={() => {setOpen(false)}}>OK</Button>
                </div>
            </AlertDialog>
        </div>
    );
};

export default AlertExample;
