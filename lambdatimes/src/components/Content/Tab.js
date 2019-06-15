import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    const selectedTab = props => {
      console.log(props.tab)
        if(props.tab === props.tab){
          console.log(props.tab)
            // let class = props.active;
        }
    } 
  return (
    <div
      className={props.notActive}
      onClick={selectedTab}
    >               
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
