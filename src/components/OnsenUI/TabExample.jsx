import React, {useState} from 'react';
import {Tab, Tabbar, Page, Button, Toast} from "react-onsenui";

const TabExample = () => {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);
    return (

        <Tabbar
            onPreChange={({index}) => setIndex(index)}
            onPostChange={() => console.log('postChange')}
            onReactive={() => console.log('postChange')}
            position='bottom'
            index={index}
            renderTabs={(activeIndex, tabbar) => [
                {
                    content:
                        <Page title="Home" active={activeIndex === 0} tabbar={tabbar}>
                            <Button onClick={() => setOpen(true)}>Open</Button>
                            <Toast isOpen={open}>hi</Toast>
                        </Page>,
                    tab: <Tab label="Home" icon="md-home" />
                },
                {
                    content: <Page title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
                    tab: <Tab label="Settings" icon="md-settings" />
                }]
            }
        />
    );
};

export default TabExample;
