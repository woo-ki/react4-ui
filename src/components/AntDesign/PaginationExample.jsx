import React from 'react';
import {Pagination} from "antd";

const PaginationExample = () => {
    const onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
    };

    return (
        <>
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
            <br />
            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
        </>
    );
};

export default PaginationExample;
