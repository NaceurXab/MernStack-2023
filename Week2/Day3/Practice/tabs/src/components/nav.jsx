import React from 'react';

const Nav = (props) => {
    const { choices , navIndex , setNavIndex} = props;

    const tabStyle = (index) => {
        if (index === navIndex) {
            return "selectedTab";
        } else {
            return "nonSelectedTab";
        }
    }
    const selectedTab = (index) =>{
        setNavIndex(index)
    }
    return (
        <div>
            {
                choices.map((item, index) => (
                    <div className={`tab ${ tabStyle(index) }`} onClick={(e) => selectedTab(index) }>
                        { item.nav }
                    </div>
                ))
            }
        </div>
    )
}

export default Nav
