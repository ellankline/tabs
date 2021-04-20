import React from 'react';
import '../App.css';

const Tabs = (props) => {
    const {allTabs, currentTabIdx, setCurrentTabIdx} = props;

    const selectTab = (index) => {
        setCurrentTabIdx(index)
    };

    return (
        <div>
            {
                allTabs.map((item, index) => (
                    <div 
                        className="Tab"
                        onClick={ (e) => selectTab(index) }
                        style={{
                            margin: "25px",
                            display: "inline",
                            border:"5px, black"
                        }}
                    >
                        {item.label}
                    </div>
                )
                )
            }
        </div>
    );
};

export default Tabs;