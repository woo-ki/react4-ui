import React from 'react';
import {Button, Stack} from "@mui/material";
import {Delete, Send} from "@mui/icons-material"

const IconLabelButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<Delete />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<Send />}>
                Send
            </Button>
        </Stack>
    );
};

export default IconLabelButtons;