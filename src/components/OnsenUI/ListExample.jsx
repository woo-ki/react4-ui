import React from 'react';
import {List, ListHeader, ListItem, Button} from "react-onsenui";

const ListExample = () => {
    return (
        <>
            <List>
                <ListHeader>Thumbnails and titles</ListHeader>
                <ListItem>
                    <div className="left">
                        <img className="list-item__thumbnail" src="https://placekitten.com/g/40/40" alt={"고양이"}/>
                    </div>
                    <div className="center">
                        <span className="list-item__title">Cutest kitty</span>
                        <span className="list-item__subtitle">On the Internet</span>
                    </div>
                </ListItem>
            </List>
            <List
                dataSource={['Row 1', 'Row 2', 'Row 3']}
                renderHeader={() => <ListHeader>Thumbnails and titles</ListHeader>}
                renderRow={(row) => (
                    <ListItem>
                        {row}
                        <Button modifier="quiet">Remove</Button>
                    </ListItem>
                )}
                renderFooter={() => <div>Thumbnails and titles</div>}
            />
        </>
    );
};

export default ListExample;
