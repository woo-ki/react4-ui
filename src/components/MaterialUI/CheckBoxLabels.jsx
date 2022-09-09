import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";
import {BookmarkBorder, Bookmark, Favorite, FavoriteBorder} from "@mui/icons-material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckBoxLabels = () => {
    return (
        <div>
            <FormControlLabel
                control={<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />}
                label={"좋아요"}
            />
            
            <Checkbox
                {...label}
                icon={<BookmarkBorder />}
                checkedIcon={<Bookmark />}
            />
        </div>
    );
};

export default CheckBoxLabels;
