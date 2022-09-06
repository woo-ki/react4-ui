import React from 'react';
import {Image, List} from "semantic-ui-react";

const ListExample = () => {
    return (
        <List celled>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                <List.Content>
                    <List.Header>Snickerdoodle</List.Header>
                    An excellent companion
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                <List.Content>
                    <List.Header>Poodle</List.Header>A poodle, it's pretty basic
                </List.Content>
            </List.Item>
            <List.Item>
                <Image avatar src='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                <List.Content>
                    <List.Header>Paulo</List.Header>
                    He's also a dog
                </List.Content>
            </List.Item>
        </List>
    );
};

export default ListExample;
