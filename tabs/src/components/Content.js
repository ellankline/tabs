import React from 'react';
import '../App.css';

const Content = (props) => {
    const {allTabs, currentTabIdx}=props;


    return (
        <div className="Content">
            {allTabs[currentTabIdx].content}
        </div>
    );
};

export default Content;