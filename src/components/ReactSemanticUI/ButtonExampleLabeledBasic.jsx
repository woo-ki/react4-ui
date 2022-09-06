import React from 'react';
import {Button, Dropdown, Icon, Input, Label} from "semantic-ui-react";

const ButtonExampleLabeledBasic = () => {
    return (
        <div>
            <Dropdown text='File' icon={null}>
                <Dropdown.Menu>
                    <Dropdown.Item text='New' />
                    <Dropdown.Item text='Open...' description='ctrl + o' />
                    <Dropdown.Item text='Save as...' description='ctrl + s' />
                    <Dropdown.Item text='Rename' description='ctrl + r' />
                    <Dropdown.Item text='Make a copy' />
                    <Dropdown.Item icon='folder' text='Move to folder' />
                    <Dropdown.Item icon='trash' text='Move to trash' />
                    <Dropdown.Divider />
                    <Dropdown.Item text='Download As...' />
                    <Dropdown.Item text='Publish To Web' />
                    <Dropdown.Item text='E-mail Collaborators' />
                </Dropdown.Menu>
            </Dropdown>
            <Button basic color={"red"} content={"Red"}/>
            <Button as={"a"} basic color={"red"} content={"Red"}/>
            <Button icon={"like"} color={"red"}/>
            <Button color={"red"}>
                <Icon name={"like"}/>
            </Button>
            <br/>
            <Input action={{ icon: 'search', onClick: () => console.log("haha") }} placeholder='Search...' actionPosition={"left"} />
            <br/>
            <Button as='div' labelPosition='left'>
                <Label as='a' basic color='red' pointing='right'>
                    2,048
                </Label>
                <Button color='red'>
                    <Icon name='heart'/>
                    Like
                </Button>
            </Button>
            <Button as='div' labelPosition='right'>
                <Button basic color='blue'>
                    <Icon name='fork'/>
                    Fork
                </Button>
                <Label as='a' basic color='blue' pointing='left'>
                    2,048
                </Label>
            </Button>
            <Button basic>Standard</Button>
            <Button basic color='red'>
                Red
            </Button>
            <Button basic color='orange'>
                Orange
            </Button>
            <Button basic color='yellow'>
                Yellow
            </Button>
            <Button basic color='olive'>
                Olive
            </Button>
            <Button basic color='green'>
                Green
            </Button>
            <Button basic color='teal'>
                Teal
            </Button>
            <Button basic color='blue'>
                Blue
            </Button>
            <Button basic color='violet'>
                Violet
            </Button>
            <Button basic color='purple'>
                Purple
            </Button>
            <Button basic color='pink'>
                Pink
            </Button>
            <Button basic color='brown'>
                Brown
            </Button>
            <Button basic color='grey'>
                Grey
            </Button>
            <Button basic color='black'>
                Black
            </Button>
            <Button color='red'>Red</Button>
            <Button color='orange'>Orange</Button>
            <Button color='yellow'>Yellow</Button>
            <Button color='olive'>Olive</Button>
            <Button color='green'>Green</Button>
            <Button color='teal'>Teal</Button>
            <Button color='blue'>Blue</Button>
            <Button color='violet'>Violet</Button>
            <Button color='purple'>Purple</Button>
            <Button color='pink'>Pink</Button>
            <Button color='brown'>Brown</Button>
            <Button color='grey'>Grey</Button>
            <Button color='black'>Black</Button>
            <Button.Group>
                <Button>One</Button>
                <Button.Or/>
                <Button>Two</Button>
                <Button.Or/>
                <Button>Three</Button>
            </Button.Group>
            <Button color='facebook'>
                <Icon name='facebook'/> Facebook
            </Button>
            <Button color='twitter'>
                <Icon name='twitter'/> Twitter
            </Button>
            <Button color='google plus'>
                <Icon name='google plus'/> Google Plus
            </Button>
            <Button color='vk'>
                <Icon name='vk'/> VK
            </Button>
            <Button color='linkedin'>
                <Icon name='linkedin'/> LinkedIn
            </Button>
            <Button color='instagram'>
                <Icon name='instagram'/> Instagram
            </Button>
            <Button color='youtube'>
                <Icon name='youtube'/> YouTube
            </Button>
        </div>
    );
};

export default ButtonExampleLabeledBasic;
