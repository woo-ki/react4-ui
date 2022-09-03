import React from 'react';
import {CameraOutlined, SearchOutlined} from "@ant-design/icons";
import {Button, Tooltip} from "antd";

const IconExample = () => {
    return (
        <div>
            <CameraOutlined/>
            <br/>
            <Tooltip title="search">
                <Button size={"large"} type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
                A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} loading={true}>
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
        </div>
    );
};

export default IconExample;
