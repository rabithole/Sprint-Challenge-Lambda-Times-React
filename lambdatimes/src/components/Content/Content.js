import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: [],
      tab: ''
    };
  }
    
  componentDidMount() {
    // Once the component has mounted, get the data and reflect that data on the state.
    this.setState({ tabs: tabData })
    this.setState({ cards: cardData })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
   
    this.setState({
      tab: tab
    })
    this.setState({
      selected: tab
    })
    // return tab;
  };

  filterCards = (tab) => {
      if(this.state.selected === 'all') {
          return this.state.cards;
      } else {
        let cards = this.state.cards.filter(item => {
          return item.tab === this.state.selected
        })
        return cards;
      }
    }
    
  render() {
    return (
      <div className="content-container">
        {/* 
          Add 2 props to the Tabs component, 
          `selectedTab` that includes the currently selected tab
          and `selectTabHandler` that includes the function to change the selected tab
        */}
        <Tabs 
          tabs={this.state.tabs} 
          selectedTab={this.state.selected}
          changeSelected={this.changeSelected}

          />
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
